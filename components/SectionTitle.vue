<script setup lang="ts">
// SectionTitle — PART 过渡页统一标题块。
// no: 章节序号（如 "01"），与 PART 标签并排显示，让听众知道讲到第几部分。
defineProps<{
  no?: string
  part?: string
  tone?: 'emerald' | 'amber' | 'violet'
  size?: string
}>()
</script>

<template>
  <div class="flex flex-col items-center text-center">
    <div class="flex items-center gap-4">
      <div v-if="no" class="sec-no">{{ no }}</div>
      <Tag size="lg">{{ part }}</Tag>
    </div>
    <div class="punch mt-6" :class="tone === 'amber' ? 'punch-amber' : tone === 'violet' ? 'punch-violet' : ''" :style="{ fontSize: size || '1.6rem' }">
      <slot />
    </div>
    <div v-if="$slots.sub" class="text-sub text-base mt-4 max-w-xl">
      <slot name="sub" />
    </div>
  </div>
</template>

<style scoped>
.sec-no {
  font-family: 'Inter Variable', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  line-height: 1;
  background: linear-gradient(180deg, #34d399, #38bdf8);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
</style>
