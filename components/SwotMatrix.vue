<script setup lang="ts">
/**
 * SwotMatrix — 2×2 SWOT 矩阵。
 * 用 CSS grid 把"轴标签 + 四象限"一起排进同一个网格，
 * 轴标签占首行/首列，象限占其余格子，避免绝对定位重叠错位。
 * 每个条目支持两种写法：
 *   - 纯字符串 'xxx'
 *   - 对象 { t: '标题', d: '一句描述' }
 */
type Item = string | { t: string; d?: string }
defineProps<{
  s?: Item[]
  w?: Item[]
  o?: Item[]
  t?: Item[]
}>()
const lead = (x: Item) => (typeof x === 'string' ? x : x.t)
const desc = (x: Item) => (typeof x === 'string' ? '' : x.d || '')
</script>

<template>
  <div class="swot">
    <div class="corner" />
    <div class="col-head pos">有利 · Favorable</div>
    <div class="col-head neg">不利 · Adverse</div>

    <div class="row-head">内部<br/>Internal</div>
    <div class="cell c-s">
      <div class="cap"><span class="k">S</span> Strengths</div>
      <ul><li v-for="(x,i) in s" :key="i"><span class="lead">{{ lead(x) }}</span><span v-if="desc(x)" class="desc">{{ desc(x) }}</span></li></ul>
    </div>
    <div class="cell c-w">
      <div class="cap"><span class="k k-amber">W</span> Weaknesses</div>
      <ul><li v-for="(x,i) in w" :key="i"><span class="lead">{{ lead(x) }}</span><span v-if="desc(x)" class="desc">{{ desc(x) }}</span></li></ul>
    </div>

    <div class="row-head">外部<br/>External</div>
    <div class="cell c-o">
      <div class="cap"><span class="k k-cyan">O</span> Opportunities</div>
      <ul><li v-for="(x,i) in o" :key="i"><span class="lead">{{ lead(x) }}</span><span v-if="desc(x)" class="desc">{{ desc(x) }}</span></li></ul>
    </div>
    <div class="cell c-t">
      <div class="cap"><span class="k k-violet">T</span> Threats</div>
      <ul><li v-for="(x,i) in t" :key="i"><span class="lead">{{ lead(x) }}</span><span v-if="desc(x)" class="desc">{{ desc(x) }}</span></li></ul>
    </div>
  </div>
</template>

<style scoped>
.swot {
  display: grid;
  grid-template-columns: 3.2rem 1fr 1fr;
  grid-template-rows: 1.35rem auto auto;
  gap: 0.48rem;
  align-items: stretch;
}
.corner { }
.col-head { display: flex; align-items: center; justify-content: center; font-size: 0.78rem; letter-spacing: 0.08em; }
.col-head.pos { color: #6ee7b7; }
.col-head.neg { color: #fcd34d; }
.row-head {
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  font-size: 0.78rem; letter-spacing: 0.06em; color: #9aa3b5; text-align: center; line-height: 1.3;
}
.cell {
  background: #0d111b;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 14px;
  padding: 0.72rem 0.9rem;
  min-height: 7rem;
}
.c-s { background: linear-gradient(135deg, rgba(52,211,153,0.10), #0d111b 72%); border-color: rgba(52,211,153,0.28); }
.c-w { background: linear-gradient(135deg, rgba(251,191,36,0.10), #0d111b 72%); border-color: rgba(251,191,36,0.28); }
.c-o { background: linear-gradient(135deg, rgba(56,189,248,0.10), #0d111b 72%); border-color: rgba(56,189,248,0.28); }
.c-t { background: linear-gradient(135deg, rgba(167,139,250,0.10), #0d111b 72%); border-color: rgba(167,139,250,0.28); }
.cap { display: flex; align-items: baseline; gap: 0.5rem; font-size: 0.88rem; color: #cdd3df; margin-bottom: 0.45rem; }
.k { font-size: 1.65rem; font-weight: 600; line-height: 1; color: #6ee7b7; }
.k-amber { color: #fcd34d; }
.k-cyan { color: #7dd3fc; }
.k-violet { color: #c4b5fd; }
ul { margin: 0; padding: 0; list-style: none; }
li { font-size: 0.8rem; color: #c2c8d4; line-height: 1.38; padding-left: 0.82rem; position: relative; margin-bottom: 0.34rem; }
li:last-child { margin-bottom: 0; }
li::before { content: ""; position: absolute; left: 0.1rem; top: 0.6em; width: 4px; height: 4px; border-radius: 50%; background: #5b6478; }
.lead { color: #eef1f6; }
.desc { display: block; font-size: 0.66rem; color: #9aa3b5; line-height: 1.28; margin-top: 0.06rem; }
</style>
