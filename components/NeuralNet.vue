<script setup lang="ts">
// NeuralNet — 前馈神经网络示意。适配纯黑底：发光节点 + 渐变连线。
// 中文层标用 HTML 块（卡片式 chip）放在 SVG 下方，而非 SVG 原生 text。
const W = 480, H = 220, padX = 60
const cols = [3, 5, 5, 2]
const maxN = Math.max(...cols)
const vGap = (H - 40) / (maxN - 1)
const pts = cols.map((count, n) => {
  const offset = (H - (count - 1) * vGap) / 2
  return Array.from({ length: count }, (_, i) => ({
    x: padX + (n * (W - padX * 2)) / (cols.length - 1),
    y: offset + i * vGap,
  }))
})
const edges: { x1: number; y1: number; x2: number; y2: number }[] = []
for (let n = 0; n < pts.length - 1; n++)
  for (const a of pts[n]) for (const b of pts[n + 1]) edges.push({ x1: a.x, y1: a.y, x2: b.x, y2: b.y })
const tones = ['#38bdf8', '#34d399', '#34d399', '#fbbf24']
const cn = [
  { name: '输入层', tone: 'sky', x: 0 },
  { name: '隐藏层', tone: 'emerald', x: 1 },
  { name: '隐藏层', tone: 'emerald', x: 2 },
  { name: '输出层', tone: 'amber', x: 3 },
]
</script>

<template>
  <div class="nn">
    <svg :viewBox="`0 0 ${W} ${H}`" class="w-full">
      <defs>
        <linearGradient id="edge" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.7" />
          <stop offset="50%" stop-color="#34d399" stop-opacity="0.6" />
          <stop offset="100%" stop-color="#fbbf24" stop-opacity="0.7" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="4" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        <radialGradient id="bg" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stop-color="#34d399" stop-opacity="0.07" />
          <stop offset="100%" stop-color="#34d399" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect :x="0" :y="0" :width="W" :height="H" fill="url(#bg)" />
      <line v-for="(e,i) in edges" :key="i" :x1="e.x1" :y1="e.y1" :x2="e.x2" :y2="e.y2"
        stroke="url(#edge)" stroke-width="1.2" stroke-opacity="0.55" />
      <template v-for="(col,n) in pts" :key="n">
        <circle v-for="(p,i) in col" :key="'g'+i" :cx="p.x" :cy="p.y" r="13"
          :fill="tones[n]" fill-opacity="0.22" filter="url(#glow)" />
        <circle v-for="(p,i) in col" :key="i" :cx="p.x" :cy="p.y" r="9"
          :fill="tones[n]" fill-opacity="0.95" />
        <circle v-for="(p,i) in col" :key="'r'+i" :cx="p.x" :cy="p.y" r="9"
          fill="none" :stroke="tones[n]" stroke-width="2" stroke-opacity="0.9" />
      </template>
    </svg>
    <div class="labels">
      <div v-for="(l,i) in cn" :key="i" class="lab" :class="`l-${l.tone}`">{{ l.name }}</div>
    </div>
  </div>
</template>

<style scoped>
.nn { width: 100%; max-width: 40rem; margin: 0 auto; }
.labels { display: flex; justify-content: space-between; padding: 0 2.5rem; margin-top: 0.4rem; }
.lab {
  font-size: 0.8rem; padding: 0.2rem 0.8rem; border-radius: 999px;
  border: 1px solid; background: rgba(255,255,255,0.04);
}
.l-sky { color: #7dd3fc; border-color: rgba(56,189,248,0.4); }
.l-emerald { color: #6ee7b7; border-color: rgba(52,211,153,0.4); }
.l-amber { color: #fcd34d; border-color: rgba(251,191,36,0.4); }
</style>
