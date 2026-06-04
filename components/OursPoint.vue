<script setup lang="ts">
// OursPoint — 我方落点条。样式来自 uno ours shortcut。
defineProps<{ label?: string }>()
</script>

<template>
  <div class="ours">
    <span v-if="label" class="text-emerald mr-2">{{ label }}</span>
    <slot />
  </div>
</template>
