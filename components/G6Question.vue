<script setup lang="ts">
/** G6 书面问题块：先完整呈现对方论证链，再进入我方回答页 */
defineProps<{
  no: string
  title: string
}>()
</script>

<template>
  <div class="g6q">
    <div class="g6q-head">
      <span class="g6q-badge">G6 书面问题 {{ no }}</span>
      <span class="g6q-title">{{ title }}</span>
    </div>
    <div class="g6q-body text-sub text-sm leading-relaxed">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.g6q {
  max-width: 56rem;
  margin: 0 auto;
  text-align: left;
  border: 1px solid rgba(251, 113, 133, 0.22);
  border-radius: 16px;
  background: rgba(251, 113, 133, 0.06);
  padding: 1.1rem 1.35rem;
}
.g6q-head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.75rem;
  margin-bottom: 0.85rem;
}
.g6q-badge {
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  color: #fb7185;
  border: 1px solid rgba(251, 113, 133, 0.45);
  border-radius: 999px;
  padding: 0.15rem 0.65rem;
}
.g6q-title {
  font-size: 1.05rem;
  color: #eef1f6;
}
.g6q-body :deep(.g6q-step) {
  display: flex;
  gap: 0.65rem;
  margin-bottom: 0.55rem;
  align-items: flex-start;
}
.g6q-body :deep(.g6q-step:last-child) { margin-bottom: 0; }
.g6q-body :deep(.g6q-k) {
  flex-shrink: 0;
  min-width: 4.2rem;
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  color: #6b7689;
  padding-top: 0.15rem;
}
</style>