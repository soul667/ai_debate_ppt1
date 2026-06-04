<script setup lang="ts">
/**
 * Pipeline — 横向阶段流水线，带连接线与节点编号。
 * 用于 PACE/IPD 五阶段：是一条有方向的流程，不是五个并排卡片。
 */
defineProps<{
  steps: { name: string; sub?: string; tone?: string; mark?: boolean }[]
}>()
</script>

<template>
  <div class="pipe">
    <div v-for="(s,i) in steps" :key="i" class="node" :class="[`t-${s.tone||'cyan'}`, { marked: s.mark }]">
      <div class="bub">{{ i + 1 }}</div>
      <div class="nm">{{ s.name }}</div>
      <div v-if="s.sub" class="sb">{{ s.sub }}</div>
      <div v-if="i < steps.length - 1" class="conn" />
    </div>
  </div>
</template>

<style scoped>
.pipe { display: flex; align-items: flex-start; gap: 0; }
.node { position: relative; flex: 1; text-align: center; padding: 0 0.4rem; }
.bub { width: 2.6rem; height: 2.6rem; margin: 0 auto 0.6rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; color: #06070b; background: #22d3ee; position: relative; z-index: 2; }
.nm { font-size: 1rem; color: #fff; margin-bottom: 0.2rem; }
.sb { font-size: 0.72rem; color: #aeb9cc; line-height: 1.35; }
.conn { position: absolute; top: 1.3rem; left: 60%; width: 80%; height: 2px; background: linear-gradient(90deg, rgba(34,211,238,0.6), rgba(34,211,238,0.15)); z-index: 1; }
.t-cyan .bub { background: #22d3ee; }
.t-amber .bub { background: #fbbf24; box-shadow: 0 0 22px rgba(251,191,36,0.6); }
.marked .nm { color: #fcd34d; }
.marked .bub { transform: scale(1.15); }
</style>
