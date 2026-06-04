<script setup lang="ts">
/**
 * Contradiction — TRIZ「矛盾 → 原则 → 解」的转化行。
 * 左侧张力（A越…越…）、中间 TRIZ 原则徽章、右侧落到哪一层。带箭头流向。
 */
defineProps<{
  tension: string
  principle: string
  layer: string
  tone?: 'amber' | 'emerald' | 'cyan'
}>()
</script>

<template>
  <div class="row" :class="`t-${tone||'emerald'}`">
    <div class="tension"><slot name="tension">{{ tension }}</slot></div>
    <div class="arrow">→</div>
    <div class="principle">{{ principle }}</div>
    <div class="arrow">→</div>
    <div class="layer">{{ layer }}</div>
  </div>
</template>

<style scoped>
.row { display: grid; grid-template-columns: 1fr auto auto auto auto; align-items: center; gap: 1rem; padding: 0.9rem 1.2rem; border-radius: 12px; background: rgba(255,255,255,0.03); border-left: 3px solid; }
.tension { font-size: 1.05rem; color: #e9ecf2; }
.arrow { color: #4b5563; font-size: 1.1rem; }
.principle { font-family: 'Space Grotesk Variable', sans-serif; font-size: 1rem; padding: 0.25rem 0.8rem; border-radius: 999px; white-space: nowrap; }
.layer { font-size: 0.82rem; color: #aeb9cc; white-space: nowrap; }
.t-amber { border-color: #fbbf24; }
.t-amber .principle { background: rgba(251,191,36,0.16); color: #fcd34d; }
.t-emerald { border-color: #34d399; }
.t-emerald .principle { background: rgba(52,211,153,0.16); color: #6ee7b7; }
.t-cyan { border-color: #22d3ee; }
.t-cyan .principle { background: rgba(34,211,238,0.16); color: #67e8f9; }
</style>
