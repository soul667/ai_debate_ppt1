<script setup lang="ts">
// LayerCard — 卡片。样式全部来自 uno.config.ts 的 card-* shortcuts。
const props = defineProps<{
  tone?: 'emerald' | 'sky' | 'amber' | 'violet'
  icon?: string
  title?: string
  sub?: string
}>()
const titleColor = {
  emerald: 'text-emerald', sky: 'text-sky', amber: 'text-amber', violet: 'text-violet',
}[props.tone || 'emerald']
</script>

<template>
  <div :class="`card-${tone || 'emerald'}`" class="h-full">
    <div v-if="icon" class="text-4xl mb-2 leading-none">{{ icon }}</div>
    <div v-if="sub" class="chip mb-1">{{ sub }}</div>
    <div v-if="title" class="text-2xl mb-2" :class="titleColor">{{ title }}</div>
    <div class="text-[0.95rem] text-sub leading-relaxed"><slot /></div>
  </div>
</template>
