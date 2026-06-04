import { defineConfig } from 'unocss'

// Group 5 · AI 辩论 · 设计系统唯一真相源
// 所有页面/组件共用这里的语义化 shortcuts；改样式只改这里，全局生效。
// 二级文字一律用冷白偏蓝（slate），不用发脏的纯灰。
export default defineConfig({
  theme: {
    colors: {
      ink: '#eef1f6',        // 主文字（接近白，略暖）
      sub: '#aeb9cc',        // 二级文字：冷白偏蓝，替代灰
      faint: '#6b7689',      // 三级/弱化
      emerald: '#34d399',
      sky: '#38bdf8',
      amber: '#fbbf24',
      violet: '#a78bfa',
      panel: '#0d111b',
    },
  },
  shortcuts: {
    // 文字层级
    'text-ink': 'text-[#eef1f6]',
    'text-sub': 'text-[#aeb9cc]',
    'text-faint': 'text-[#6b7689]',

    // 眉头标签
    'chip': 'text-[0.72rem] tracking-[0.18em] uppercase text-[#aeb9cc]',
    // 两栏小标题（机制 / 隐喻·落地）
    'col-h': 'text-[0.95rem] text-[#aeb9cc] mb-2',
    // 眉头大标签：白字 + 渐变圆角框（比 chip 醒目，用于页面顶部标题眉）
    'eyebrow': 'inline-block text-[1.05rem] tracking-wider text-white px-5 py-1.5 rounded-full border border-white/16 bg-gradient-to-r from-[rgba(52,211,153,0.2)] to-[rgba(56,189,248,0.16)] backdrop-blur-md',

    // 卡片：半透明毛玻璃 + 斜向渐变填充 + 彩色描边光晕，五种色调
    // 用显式 rgba（不依赖自定义色的 /透明度 变体，UnoCSS 对 theme 覆盖色不生成该变体）
    'card': 'bg-gradient-to-br from-white/8 to-white/3 border border-white/12 rounded-2xl p-5 backdrop-blur-md',
    'card-emerald': 'border border-[rgba(52,211,153,0.4)] rounded-2xl p-5 backdrop-blur-md bg-gradient-to-br from-[rgba(52,211,153,0.16)] to-[rgba(52,211,153,0.03)]',
    'card-sky': 'border border-[rgba(56,189,248,0.4)] rounded-2xl p-5 backdrop-blur-md bg-gradient-to-br from-[rgba(56,189,248,0.16)] to-[rgba(56,189,248,0.03)]',
    'card-amber': 'border border-[rgba(251,191,36,0.4)] rounded-2xl p-5 backdrop-blur-md bg-gradient-to-br from-[rgba(251,191,36,0.16)] to-[rgba(251,191,36,0.03)]',
    'card-violet': 'border border-[rgba(167,139,250,0.4)] rounded-2xl p-5 backdrop-blur-md bg-gradient-to-br from-[rgba(167,139,250,0.16)] to-[rgba(167,139,250,0.03)]',
    'card-rose': 'border border-[rgba(251,113,133,0.4)] rounded-2xl p-5 backdrop-blur-md bg-gradient-to-br from-[rgba(251,113,133,0.14)] to-[rgba(251,113,133,0.03)]',

    // 高亮（替代加粗/斜体）
    'hl': 'text-white',
    'hl-emerald': 'text-emerald',
    'hl-sky': 'text-sky',
    'hl-amber': 'text-amber',
    'hl-violet': 'text-violet',
    'hl-rose': 'text-[#fb7185]',
    'text-rose': 'text-[#fb7185]',

    // 中性"对手质疑"条（不用红条红底）
    'g6': 'bg-white/4 border border-white/10 rounded-xl px-5 py-3 text-[#c2c8d4]',
    'g6-label': 'text-[0.72rem] tracking-[0.1em] uppercase text-[#aeb9cc] border border-white/15 rounded-md px-2 py-0.5 mr-3',

    // 我方落点条
    'ours': 'border-l-3 border-emerald bg-emerald/10 rounded-r-xl px-5 py-3',
  },
})
