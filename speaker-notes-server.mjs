import { createServer } from 'node:http'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(fileURLToPath(import.meta.url))
const port = Number(process.env.PORT ?? 3031)

function readText(file) {
  return readFileSync(join(root, file), 'utf8')
}

function splitSlides(markdown) {
  return markdown
    .split(/^---\s*$/m)
    .map(slide => slide.trim())
    .filter(Boolean)
}

function resolveSlides(entryFile) {
  return splitSlides(readText(entryFile)).flatMap(slide => {
    const importMatch = slide.match(/^src:\s*(.+)$/m)

    if (!importMatch) return [slide]

    const importedFile = importMatch[1].trim().replace(/^\.\//, '')
    return splitSlides(readText(importedFile))
  })
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function noteText(slide) {
  return Array.from(slide.matchAll(/<!--([\s\S]*?)-->/g), match => match[1].trim())
    .join('\n\n')
    .replace(/^口播（/m, '口播（')
}

const notes = resolveSlides('slides.md').map((slide, index) => ({
  page: index + 1,
  text: noteText(slide) || '这一页没有口播备注。',
}))

function html() {
  const pageNav = notes.map(note => `<a href="#page-${note.page}">${note.page}</a>`).join('')
  const noteCards = notes.map(note => `
    <section class="note" id="page-${note.page}" data-page="${note.page}">
      <div class="note-head">第 ${note.page} 页</div>
      <pre>${escapeHtml(note.text)}</pre>
    </section>
  `).join('')

  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>口播分页查看器</title>
  <style>
    :root { color-scheme: dark; font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; background: #07080d; color: #eef1f6; }
    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body { margin: 0; background: radial-gradient(900px 620px at 20% -10%, rgba(52,211,153,.11), transparent 60%), radial-gradient(800px 560px at 100% 110%, rgba(56,189,248,.09), transparent 60%), #07080d; }
    header { position: sticky; top: 0; z-index: 2; padding: 1rem 1.2rem; border-bottom: 1px solid rgba(255,255,255,.1); background: rgba(7,8,13,.9); backdrop-filter: blur(14px); }
    .head-row { display: flex; align-items: center; justify-content: space-between; gap: 1rem; }
    h1 { margin: 0; font-size: 1.05rem; font-weight: 600; }
    .status { color: #aeb9cc; font-size: .92rem; }
    .page-count { color: #34d399; font-size: 1.25rem; font-weight: 700; }
    nav { display: flex; gap: .45rem; overflow-x: auto; padding-top: .8rem; scrollbar-width: thin; }
    nav a { flex: 0 0 auto; min-width: 2.25rem; text-align: center; color: #aeb9cc; text-decoration: none; border: 1px solid rgba(255,255,255,.13); border-radius: 999px; padding: .35rem .55rem; background: rgba(255,255,255,.035); }
    nav a:hover { color: #34d399; border-color: rgba(52,211,153,.45); background: rgba(52,211,153,.1); }
    main { max-width: 980px; margin: 0 auto; padding: 1rem; }
    .note { scroll-margin-top: 7.5rem; margin-bottom: 1rem; border: 1px solid rgba(255,255,255,.12); border-radius: 18px; background: linear-gradient(135deg, rgba(255,255,255,.075), rgba(255,255,255,.025)); box-shadow: 0 22px 80px rgba(0,0,0,.28); overflow: hidden; }
    .note-head { padding: .9rem 1rem; color: #34d399; border-bottom: 1px solid rgba(255,255,255,.1); letter-spacing: .08em; }
    pre { margin: 0; padding: 1.15rem; white-space: pre-wrap; font-family: inherit; font-size: clamp(1.1rem, 3.4vw, 2rem); line-height: 1.65; color: #eef1f6; }
    .empty { padding: 2rem; color: #aeb9cc; }
  </style>
</head>
<body>
  <header>
    <div class="head-row">
      <div>
        <h1>口播分页查看器</h1>
        <div class="status">独立于 3030：可滚动查看全部页面，或点击页码跳转</div>
      </div>
      <div>共 <span class="page-count">${notes.length}</span> 页</div>
    </div>
    <nav aria-label="页面跳转">${pageNav}</nav>
  </header>
  <main>${noteCards || '<div class="empty">没有读取到口播备注。</div>'}</main>
</body>
</html>`
}

const server = createServer((request, response) => {
  const url = new URL(request.url || '/', `http://${request.headers.host}`)

  if (url.pathname === '/sync') {
    response.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-store',
    })
    response.end()
    return
  }

  response.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8',
    'Cache-Control': 'no-store',
  })
  response.end(html())
})

server.listen(port, '0.0.0.0', () => {
  console.log(`Speaker notes viewer: http://localhost:${port}`)
})
