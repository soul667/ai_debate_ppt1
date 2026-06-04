<script setup lang="ts">
defineProps<{
  steps: string[]
  tone?: 'emerald' | 'sky' | 'amber'
}>()
</script>

<template>
  <div class="lflow" :class="`tone-${tone || 'emerald'}`">
    <template v-for="(s, i) in steps" :key="i">
      <div class="lflow-step">{{ s }}</div>
      <div v-if="i < steps.length - 1" class="lflow-arrow">→</div>
    </template>
  </div>
</template>

<style scoped>
.lflow {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.65rem 0.35rem;
  margin: 1.5rem auto 0;
  max-width: 46rem;
}
.lflow-step {
  padding: 0.75rem 1.15rem;
  border-radius: 999px;
  font-family: 'Inter Variable', sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.06);
}
.tone-emerald .lflow-step { box-shadow: 0 0 28px rgba(52, 211, 153, 0.12); }
.tone-sky .lflow-step { box-shadow: 0 0 28px rgba(56, 189, 248, 0.12); }
.tone-amber .lflow-step { box-shadow: 0 0 28px rgba(251, 191, 36, 0.12); }
.lflow-arrow {
  font-size: 1.1rem;
  color: #6b7689;
  padding: 0 0.15rem;
}
</style>