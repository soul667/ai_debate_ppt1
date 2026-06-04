# Group 5 · AI Debate 演示（Slidev 前端）

这不是 PowerPoint（`.pptx`），而是 **[Slidev](https://sli.dev/)** 项目：用 Markdown + Vue 3 在浏览器里放映，可 `build` 成静态站或导出 PDF。

## 项目结构

```
ai_debate_ppt/
├── slides.md              # 入口：封面、目录、用 src: 串联各页
├── pages/                 # 每一文件 = 多页幻灯（--- 分隔）
│   ├── 01-opening.md
│   ├── 02-principles.md
│   ├── 04-innovations.md  # 含 without AIGC / 具身衔接
│   ├── 06-tools.md        # TRIZ / PACE / 立场 SWOT
│   ├── 06b-patent-business.md  # 专利披露 + 产品 SWOT + 商业化
│   └── 07-closing.md
├── components/            # Vue 组件，幻灯里直接写 <Tag /> <LayerCard /> 等
├── public/                  # 静态资源：/background.png、/videos/*.mp4
├── style.css                # 全局字体、layout 背景
├── uno.config.ts            # 设计系统 shortcuts（card、hl-*、chip）
└── package.json             # slidev dev / build / export
```

## 改稿约定

1. **新幻灯**：优先在 `pages/` 里加 `---` 新页，或在 `slides.md` 里 `src: ./pages/xxx.md` 引入。
2. **复用 UI**：用 `components/`（如 `SwotMatrix`、`Pipeline`、`LayerCard`），样式用 `uno.config.ts` 的 `card-emerald`、`hl-sky` 等。
3. **口播**：写在 HTML 注释 `<!-- 口播 -->` 里，放映时不显示。
4. **动效**：`v-click` 分步出现（Slidev 内置）。

## 本地运行

```bash
cd ai_debate_ppt
bun install
bun run dev      # http://localhost:3030
bun run build    # 输出到 dist/
bun run export   # 需 playwright，导出 PDF
```

## 课程交付对照

- 原理 / 鱼骨 / 三创新 / 答 G6：见 `pages/01`–`05`
- without AIGC、具身路线：`pages/04-innovations.md`
- TRIZ / PACE：`pages/06-tools.md`
- Patent disclosure、产品 SWOT、商业化：`pages/06b-patent-business.md`

备份稿在 `pages.bak/`；长文演讲见 `SPEECH-DRAFT-v2.md`、`SPEAKER-NOTES.md`。