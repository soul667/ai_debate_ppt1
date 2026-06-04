---
theme: seriph
title: AI 是我们的未来 — 不是人的对手，是人的另一只翅膀
layout: cover
background: /background.png
info: |
  ## Group 5 · EEE5069
  AI 是我们的未来：精卫 · 相得 · 烛龙 — 三类人本增强方案，证明 AI 可以成为人的能力外延。
class: text-center
drawings:
  persist: false
transition: fade
mdc: true
duration: 30
---

<div class="cover-overlay" />

<div class="h-full flex flex-col justify-center items-center relative z-10">

<div class="chip mb-6">Group 5</div>

<div class="mega leading-none">AI 是我们的未来</div>

<div class="punch text-3xl mt-5">不是人的对手，是人的另一只翅膀</div>

<div class="flex gap-3 mt-12">
  <div class="chip-badge border-emerald/40 text-emerald">古翱翔</div>
  <div class="chip-badge border-sky/40 text-sky">文言辞</div>
  <div class="chip-badge border-amber/40 text-amber">邹柏霖</div>
</div>

</div>

<style scoped>
.cover-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(6,7,13,0.74), rgba(6,7,13,0.55) 50%, rgba(6,7,13,0.85));
  z-index: 1;
}
.chip-badge {
  font-size: 0.9rem;
  padding: 0.5rem 1.1rem;
  border: 1px solid;
  border-radius: 999px;
  background: rgba(0,0,0,0.4);
  backdrop-filter: blur(6px);
}
</style>

<!--
开场（约 30 秒）：
各位老师、各位同学。Group 6 用科幻式的恐惧描述 AI——觉醒、反抗、毁灭人类，整场都在论证"笼子够不够结实"。
我们 Group 5 今天提出一个更根本的判断：真正定义未来的 AI，不是会觉醒的猛兽——是人的另一只翅膀。
我们用三类人本增强方案来证明它：精卫延声对应表达增强，相得延途对应成长增强，烛龙延感对应感知增强。命名来自《山海经》，但论证落在工程锚点和人的真实需求上。
-->

---
layout: default
---

# 目录 ｜ Contents

<div class="grid grid-cols-2 gap-x-8 gap-y-4 mt-20">

<div class="toc-item"><div class="toc-no">01</div><div><div class="toc-t">探究本质</div><div class="toc-s">AI 的数学本质：Token / Transformer / LLM · 风险根因</div></div></div>
<div class="toc-item"><div class="toc-no">02</div><div><div class="toc-t">人本增强方案</div><div class="toc-s">精卫 表达增强 / 相得 成长增强 / 烛龙 感知增强</div></div></div>
<div class="toc-item"><div class="toc-no">03</div><div><div class="toc-t">回答问题</div><div class="toc-s">用三类方案逐一拆解 G6 的三大恐惧</div></div></div>
<div class="toc-item"><div class="toc-no">04</div><div><div class="toc-t">工程方法</div><div class="toc-s">TRIZ · PACE/IPD · 专利披露 · 产品 SWOT · 商业化</div></div></div>

</div>

<style scoped>
.toc-item { display: flex; gap: 1rem; align-items: baseline; padding: 0.7rem 1rem; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); }
.toc-no { font-family: 'Inter Variable', sans-serif; font-size: 1.5rem; color: #34d399; min-width: 2rem; }
.toc-t { font-size: 1.2rem; color: #fff; }
.toc-s { font-size: 0.82rem; color: #aeb9cc; margin-top: 0.15rem; }
</style>

<!--
结构导览（约 20 秒）：
今天的汇报分四部分：先讲清 AI 到底是什么，再给出三类人本增强方案——精卫、相得、烛龙；接着用这三个方案逐一机制证伪 G6 的三大恐惧；最后是工程方法。
-->

---
src: ./pages/01-opening.md
---

---
src: ./pages/02-principles.md
---

---
src: ./pages/03-framing.md
---

---
src: ./pages/04-innovations.md
---

---
src: ./pages/05-rebuttal.md
---

---
src: ./pages/06b-patent-business.md
---

---
src: ./pages/07-closing.md
---
