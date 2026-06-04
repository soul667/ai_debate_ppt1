<script setup lang="ts">
// FoeHead — 回答 G6 页的统一页首。居中：左侧 rose 编号徽章 + "G6 质疑" 小标 + 引号包裹的质疑句。
defineProps<{ no?: string }>()
</script>

<template>
  <div class="fh">
    <div class="fh-badge">G6&nbsp;{{ no }}</div>
    <div class="fh-quote">「<slot />」</div>
  </div>
</template>

<style scoped>
.fh {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 0.9rem 1.6rem;
  border-radius: 14px;
  background: rgba(251, 113, 133, 0.07);
  border: 1px solid rgba(251, 113, 133, 0.22);
  max-width: 46rem;
  margin: 0 auto;
}
.fh-badge {
  flex-shrink: 0;
  font-family: 'Inter Variable', sans-serif;
  font-size: 0.85rem;
  letter-spacing: 0.06em;
  color: #fb7185;
  border: 1px solid rgba(251, 113, 133, 0.5);
  border-radius: 999px;
  padding: 0.25rem 0.8rem;
}
.fh-quote {
  font-size: 1.3rem;
  color: #f0d5d9;
}
</style>
