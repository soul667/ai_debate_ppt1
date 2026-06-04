$ErrorActionPreference = 'Stop'

$Root = Join-Path $PSScriptRoot 'dist'
$Port = 8080
$Prefix = "http://localhost:$Port/"

if (-not (Test-Path $Root)) {
  Write-Host "Cannot find dist folder: $Root" -ForegroundColor Red
  Write-Host "Please copy this file together with the dist folder." -ForegroundColor Yellow
  Read-Host "Press Enter to exit"
  exit 1
}

$listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Loopback, $Port)

try {
  $listener.Start()
} catch {
  Write-Host "Cannot start local server at $Prefix" -ForegroundColor Red
  Write-Host "Maybe port $Port is already in use. Close other preview windows and try again." -ForegroundColor Yellow
  Write-Host $_.Exception.Message -ForegroundColor DarkYellow
  Read-Host "Press Enter to exit"
  exit 1
}

Write-Host "Serving Slidev presentation from: $Root" -ForegroundColor Green
Write-Host "Open: $Prefix" -ForegroundColor Green
Write-Host "Press Ctrl+C to stop."

Start-Process $Prefix

$mimeTypes = @{
  '.html' = 'text/html; charset=utf-8'
  '.js' = 'text/javascript; charset=utf-8'
  '.mjs' = 'text/javascript; charset=utf-8'
  '.css' = 'text/css; charset=utf-8'
  '.json' = 'application/json; charset=utf-8'
  '.png' = 'image/png'
  '.jpg' = 'image/jpeg'
  '.jpeg' = 'image/jpeg'
  '.gif' = 'image/gif'
  '.svg' = 'image/svg+xml'
  '.ico' = 'image/x-icon'
  '.woff' = 'font/woff'
  '.woff2' = 'font/woff2'
  '.ttf' = 'font/ttf'
  '.mp4' = 'video/mp4'
  '.webm' = 'video/webm'
}

function Get-SafePath([string] $UrlPath) {
  $path = [Uri]::UnescapeDataString($UrlPath.Split('?')[0])
  if ($path -eq '/' -or $path -eq '') {
    $path = '/index.html'
  }

  $relative = $path.TrimStart('/').Replace('/', [System.IO.Path]::DirectorySeparatorChar)
  $fullPath = [System.IO.Path]::GetFullPath((Join-Path $Root $relative))
  $rootFullPath = [System.IO.Path]::GetFullPath($Root)

  if (-not $fullPath.StartsWith($rootFullPath, [System.StringComparison]::OrdinalIgnoreCase)) {
    return $null
  }

  if (Test-Path $fullPath -PathType Leaf) {
    return $fullPath
  }

  return Join-Path $Root 'index.html'
}

try {
  while ($true) {
    $client = $listener.AcceptTcpClient()
    $stream = $client.GetStream()
    $reader = [System.IO.StreamReader]::new($stream, [System.Text.Encoding]::ASCII, $false, 1024, $true)

    $requestLine = $reader.ReadLine()
    while ($reader.ReadLine()) { }

    if ([string]::IsNullOrWhiteSpace($requestLine)) {
      $client.Close()
      continue
    }

    $parts = $requestLine.Split(' ')
    $urlPath = if ($parts.Length -ge 2) { $parts[1] } else { '/' }
    $filePath = Get-SafePath $urlPath

    if ($null -eq $filePath -or -not (Test-Path $filePath -PathType Leaf)) {
      $bytes = [System.Text.Encoding]::UTF8.GetBytes('Not Found')
      $header = "HTTP/1.1 404 Not Found`r`nContent-Type: text/plain; charset=utf-8`r`nContent-Length: $($bytes.Length)`r`nConnection: close`r`n`r`n"
      $headerBytes = [System.Text.Encoding]::ASCII.GetBytes($header)
      $stream.Write($headerBytes, 0, $headerBytes.Length)
      $stream.Write($bytes, 0, $bytes.Length)
      $client.Close()
      continue
    }

    $extension = [System.IO.Path]::GetExtension($filePath).ToLowerInvariant()
    $contentType = if ($mimeTypes.ContainsKey($extension)) { $mimeTypes[$extension] } else { 'application/octet-stream' }

    $bytes = [System.IO.File]::ReadAllBytes($filePath)
    $header = "HTTP/1.1 200 OK`r`nContent-Type: $contentType`r`nContent-Length: $($bytes.Length)`r`nCache-Control: no-cache`r`nConnection: close`r`n`r`n"
    $headerBytes = [System.Text.Encoding]::ASCII.GetBytes($header)
    $stream.Write($headerBytes, 0, $headerBytes.Length)
    $stream.Write($bytes, 0, $bytes.Length)
    $client.Close()
  }
} finally {
  $listener.Stop()
}
