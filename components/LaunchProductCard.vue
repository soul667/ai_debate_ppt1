<script setup lang="ts">
defineProps<{
  index: string
  name: string
  type: string
  tone?: 'emerald' | 'sky' | 'amber'
  tagline?: string
}>()
</script>

<template>
  <div class="lpc" :class="`tone-${tone || 'emerald'}`">
    <div class="lpc-index">{{ index }}</div>
    <div class="lpc-name">{{ name }}</div>
    <div class="lpc-type">{{ type }}</div>
    <div v-if="tagline" class="lpc-tag">{{ tagline }}</div>
    <div class="lpc-body"><slot /></div>
  </div>
</template>

<style scoped>
.lpc {
  position: relative;
  border-radius: 24px;
  padding: 1.65rem 1.35rem 1.45rem;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: linear-gradient(165deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.02));
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
  text-align: left;
  min-height: 11.5rem;
  overflow: hidden;
}
.lpc::after {
  content: '';
  position: absolute;
  inset: -40% -20% auto auto;
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  filter: blur(48px);
  opacity: 0.35;
  pointer-events: none;
}
.tone-emerald::after { background: #34d399; }
.tone-sky::after { background: #38bdf8; }
.tone-amber::after { background: #fbbf24; }
.lpc-index {
  font-family: 'Inter Variable', sans-serif;
  font-size: 0.72rem;
  letter-spacing: 0.22em;
  color: #6b7689;
  margin-bottom: 0.65rem;
}
.lpc-name {
  font-family: 'Inter Variable', sans-serif;
  font-size: 1.55rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: #fff;
  line-height: 1.15;
}
.lpc-type {
  margin-top: 0.35rem;
  font-size: 0.82rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #aeb9cc;
}
.lpc-tag {
  margin-top: 0.85rem;
  font-size: 0.95rem;
  line-height: 1.45;
  color: #c2c8d4;
}
.lpc-body {
  margin-top: 0.75rem;
  font-size: 0.88rem;
  color: #aeb9cc;
  line-height: 1.5;
}
</style>