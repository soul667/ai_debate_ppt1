<script setup lang="ts">
/** 我方回答分层：标号 + 标题 + 正文 */
const props = defineProps<{
  step: string
  title: string
  tone?: 'emerald' | 'sky' | 'amber' | 'neutral'
}>()
const border = {
  emerald: 'border-emerald/35 bg-emerald/5',
  sky: 'border-sky/35 bg-sky/5',
  amber: 'border-amber/35 bg-amber/5',
  neutral: 'border-white/12 bg-white/3',
}[props.tone || 'neutral']
</script>

<template>
  <div class="ab" :class="border">
    <div class="ab-cap"><span class="ab-step">{{ step }}</span>{{ title }}</div>
    <div class="ab-text text-sub"><slot /></div>
  </div>
</template>

<style scoped>
.ab {
  border-radius: 14px;
  border-width: 1px;
  border-style: solid;
  padding: 0.62rem 0.9rem;
  margin-bottom: 0.45rem;
}
.ab:last-child { margin-bottom: 0; }
.ab-cap {
  font-size: 0.82rem;
  color: #eef1f6;
  margin-bottom: 0.22rem;
}
.ab-text { font-size: 0.76rem; line-height: 1.34; }
.ab-step {
  display: inline-block;
  font-family: 'Inter Variable', sans-serif;
  font-size: 0.75rem;
  color: #34d399;
  border: 1px solid rgba(52, 211, 153, 0.4);
  border-radius: 6px;
  padding: 0.05rem 0.45rem;
  margin-right: 0.5rem;
}
</style>
