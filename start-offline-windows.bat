@echo off
setlocal
cd /d "%~dp0"

if not exist "dist\index.html" (
  echo Cannot find dist\index.html
  echo Please keep this launcher in the same folder as the dist folder.
  pause
  exit /b 1
)

powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0offline-server.ps1"

endlocal
