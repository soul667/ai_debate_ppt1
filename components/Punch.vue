<script setup lang="ts">
/** Punch — 金句。钉钉进步体 + 渐变色表达力度，绝不斜体。 */
defineProps<{ tone?: 'emerald' | 'amber' | 'violet' | 'plain'; size?: string }>()
</script>

<template>
  <div class="g5-punch" :class="[`tone-${tone || 'emerald'}`]" :style="{ fontSize: size }">
    <slot />
  </div>
</template>

<style scoped>
.g5-punch {
  text-align: center;
  font-family: var(--g5-font);
  font-weight: 500;
  line-height: 1.38;
  letter-spacing: 0.01em;
}
.tone-emerald { background: linear-gradient(92deg, #34d399, #38bdf8); -webkit-background-clip: text; background-clip: text; color: transparent; filter: drop-shadow(0 0 24px rgba(52, 211, 153, 0.24)); }
.tone-amber { background: linear-gradient(92deg, #fbbf24, #34d399); -webkit-background-clip: text; background-clip: text; color: transparent; }
.tone-violet { background: linear-gradient(92deg, #a78bfa, #38bdf8); -webkit-background-clip: text; background-clip: text; color: transparent; }
.tone-plain { color: #fff; }
</style>
