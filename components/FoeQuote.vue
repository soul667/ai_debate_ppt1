<script setup lang="ts">
// FoeQuote — G6 质疑条。中性深底，样式来自 uno g6 shortcut（不用红条红底）。
defineProps<{ label?: string }>()
</script>

<template>
  <div class="g6">
    <span v-if="label" class="g6-label">{{ label }}</span>
    <span><slot /></span>
  </div>
</template>
