<script setup lang="ts">
// ModelEvo — AI 模型家族演进结构图。
// 四行数据流：LLM / VLM / VLA / World Model，每行展示「输入 → 核心 → 输出」。
// 纯结构图，配色走设计系统，适配纯黑底。
const rows = [
  {
    k: 'LLM', cn: '大语言模型', tone: 'sky',
    chain: [{ t: '文本 tokens', kind: 'in' }, { t: 'Transformer', kind: 'core' }, { t: '文本', kind: 'out' }],
  },
  {
    k: 'VLM', cn: '视觉语言模型', tone: 'emerald',
    chain: [{ t: '图像 ＋ 文本', kind: 'in' }, { t: 'LLM backbone', kind: 'core' }, { t: '文本', kind: 'out' }],
  },
  {
    k: 'VLA', cn: '视觉-语言-动作', tone: 'amber',
    chain: [{ t: '图像＋指令', kind: 'in' }, { t: 'VLM backbone', kind: 'core' }, { t: '动作 tokens', kind: 'act' }, { t: 'Action Expert', kind: 'core' }, { t: '具体指令', kind: 'act' }],
  },
  {
    k: 'World Model', cn: '世界模型', tone: 'violet',
    chain: [{ t: '状态＋动作', kind: 'in' }, { t: 'Dynamics 预测器', kind: 'core' }, { t: '预测下一状态', kind: 'pred' }],
  },
]
</script>

<template>
  <div class="evo">
    <div v-for="(r,i) in rows" :key="i" class="row" :class="`t-${r.tone}`">
      <div class="badge">
        <div class="bk">{{ r.k }}</div>
        <div class="bcn">{{ r.cn }}</div>
      </div>
      <div class="chain">
        <template v-for="(n,j) in r.chain" :key="j">
          <div class="node" :class="`n-${n.kind}`">{{ n.t }}</div>
          <div v-if="j < r.chain.length - 1" class="arr">→</div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.evo { display: flex; flex-direction: column; gap: 0.7rem; }
.row { display: grid; grid-template-columns: 9rem 1fr; align-items: center; gap: 1rem; padding: 0.7rem 1rem; border-radius: 14px; border-left: 3px solid; background: rgba(255,255,255,0.025); }
.badge { text-align: left; }
.bk { font-family: 'Inter Variable'; font-size: 1.15rem; color: #fff; }
.bcn { font-size: 0.72rem; color: #aeb9cc; }
.chain { display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; }
.node { font-size: 0.85rem; padding: 0.35rem 0.8rem; border-radius: 9px; border: 1px solid rgba(255,255,255,0.12); background: rgba(255,255,255,0.04); color: #cdd3df; }
.arr { color: #5b6478; }
.n-add { border-color: rgba(56,189,248,0.45); color: #7dd3fc; }
.n-act { border-color: rgba(251,191,36,0.5); color: #fcd34d; background: rgba(251,191,36,0.08); }
.n-pred { border-color: rgba(167,139,250,0.5); color: #c4b5fd; background: rgba(167,139,250,0.08); }
.n-core { border-color: rgba(52,211,153,0.45); color: #6ee7b7; background: rgba(52,211,153,0.06); }
.t-sky { border-left-color: #38bdf8; }
.t-emerald { border-left-color: #34d399; }
.t-amber { border-left-color: #fbbf24; }
.t-violet { border-left-color: #a78bfa; }
</style>
