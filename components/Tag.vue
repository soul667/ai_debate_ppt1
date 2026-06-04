<script setup lang="ts">
// Tag — 眉头标签。统一用渐变圆角框样式（白字 + emerald→sky 渐变 + 毛玻璃）。
// size: 'sm'（默认）页面顶部小眉头；'lg' PART 大标题。
defineProps<{ size?: 'sm' | 'lg' }>()
</script>

<template>
  <div class="tag-badge" :class="size === 'lg' ? 'tb-lg' : 'tb-sm'"><slot /></div>
</template>

<style scoped>
.tag-badge {
  display: inline-block;
  color: #ffffff;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.16);
  background: linear-gradient(92deg, rgba(52,211,153,0.2), rgba(56,189,248,0.16));
  backdrop-filter: blur(8px);
  box-shadow: 0 0 22px rgba(52,211,153,0.14);
}
.tb-sm { font-size: 0.78rem; letter-spacing: 0.08em; padding: 0.32rem 1rem; }
.tb-lg { font-size: 1.7rem; letter-spacing: 0.04em; padding: 0.55rem 1.8rem; }
</style>
