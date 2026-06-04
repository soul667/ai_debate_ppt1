---
layout: center
class: text-center
---

<Tag class="mb-8">团队</Tag>

<div class="team-wrap">
  <div class="member-strip">
    <div class="member-chip mc-emerald">古翱翔</div>
    <div class="member-chip mc-sky">文言辞</div>
    <div class="member-chip mc-amber">邹柏霖</div>
  </div>

  <div class="grid grid-cols-2 gap-4 mt-5">
    <div class="team-card">
      <div class="team-title">原理组</div>
      <div class="team-sub">ANN / Backprop / LLM</div>
    </div>
    <div class="team-card">
      <div class="team-title">框架组</div>
      <div class="team-sub">逻辑跳跃 / G6 三问 / 比翼框架</div>
    </div>
  </div>

  <div class="grid grid-cols-3 gap-4 mt-4">
    <div class="team-card tc-emerald">
      <div class="team-title text-emerald">精卫</div>
      <div class="team-sub">延声<br/>神经语音 / 表达权</div>
    </div>
    <div class="team-card tc-sky">
      <div class="team-title text-sky">相得</div>
      <div class="team-sub">延途<br/>独立 KPI</div>
    </div>
    <div class="team-card tc-amber">
      <div class="team-title text-amber">玄阈</div>
      <div class="team-sub">延权<br/>风险分级授权</div>
    </div>
  </div>
</div>

<style scoped>
.team-wrap { max-width: 58rem; margin: 0 auto; }
.member-strip { display: flex; justify-content: center; gap: 0.75rem; }
.member-chip { font-size: 0.95rem; padding: 0.45rem 1.2rem; border-radius: 999px; border: 1px solid; background: rgba(255,255,255,0.04); backdrop-filter: blur(8px); }
.mc-emerald { color: #6ee7b7; border-color: rgba(52,211,153,0.42); }
.mc-sky { color: #7dd3fc; border-color: rgba(56,189,248,0.42); }
.mc-amber { color: #fcd34d; border-color: rgba(251,191,36,0.42); }
.team-card { min-height: 6.1rem; border: 1px solid rgba(255,255,255,0.12); border-radius: 18px; background: linear-gradient(135deg, rgba(255,255,255,0.07), rgba(255,255,255,0.025)); backdrop-filter: blur(8px); padding: 1.15rem; text-align: left; display: flex; flex-direction: column; justify-content: center; }
.tc-emerald { border-color: rgba(52,211,153,0.35); background: linear-gradient(135deg, rgba(52,211,153,0.12), rgba(255,255,255,0.025)); }
.tc-sky { border-color: rgba(56,189,248,0.35); background: linear-gradient(135deg, rgba(56,189,248,0.12), rgba(255,255,255,0.025)); }
.tc-amber { border-color: rgba(251,191,36,0.35); background: linear-gradient(135deg, rgba(251,191,36,0.12), rgba(255,255,255,0.025)); }
.team-title { font-size: 1.35rem; color: #eef1f6; margin-bottom: 0.45rem; }
.team-sub { color: #aeb9cc; font-size: 0.88rem; line-height: 1.5; }
</style>

<!--
口播（约 35 秒）：
最后是团队分工。三位成员分别承担技术原理、论证框架和三个创新模块的内容整合。
第一行是基础工作：原理组负责 ANN、Backprop 和 LLM 机制，框架组负责逻辑跳跃、G6 三问和比翼框架。
第二行对应三个创新：精卫延声、相得延途、玄阈延权；最后由项目经理统一整体逻辑、时间控制和答辩衔接。
-->

---
layout: center
class: text-center
---

<div v-click class="text-2xl leading-relaxed">
AI 不是没有风险，但 <Punch tone="emerald" size="2.4rem" class="inline-block">风险不是宿命</Punch>
</div>

<div v-click class="text-xl mt-10">
G6 在 <span class="hl-amber">恐惧</span> 未来，我们在 <span class="hl-emerald">设计</span> 未来
</div>

<div v-click class="grid grid-cols-3 gap-3 mt-10 max-w-3xl mx-auto">
  <div class="lock-chip lc-emerald">精卫</div>
  <div class="lock-chip lc-sky">相得</div>
  <div class="lock-chip lc-amber">玄阈</div>
</div>

<div v-click class="mt-12">
  <Punch tone="emerald" size="2.6rem">AI 不是人的对手 — 是人的另一只翅膀</Punch>
  <div class="en-tail">AI is not a rival to humanity — it is humanity's other wing.</div>
</div>

<style scoped>
.lock-chip {
  font-size: 1.15rem;
  padding: 0.9rem 0.5rem;
  border-radius: 14px;
  border: 1px solid;
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(8px);
  text-align: center;
}
.lc-amber   { border-color: rgba(251,191,36,0.45);  color: #fcd34d; box-shadow: inset 0 0 26px rgba(251,191,36,0.1); }
.lc-emerald { border-color: rgba(52,211,153,0.45);  color: #6ee7b7; box-shadow: inset 0 0 26px rgba(52,211,153,0.1); }
.lc-sky     { border-color: rgba(56,189,248,0.45);  color: #7dd3fc; box-shadow: inset 0 0 26px rgba(56,189,248,0.1); }
.lc-violet  { border-color: rgba(167,139,250,0.45); color: #c4b5fd; box-shadow: inset 0 0 26px rgba(167,139,250,0.1); }
.en-tail {
  margin-top: 1.1rem;
  font-family: 'Inter Variable', sans-serif;
  font-weight: 400;
  font-size: 1.05rem;
  letter-spacing: 0.02em;
  color: #aeb9cc;
}
</style>

<!--
口播（约 55 秒）：
最后，请允许我收束今天的主线。
AI 不是没有风险，但风险不是宿命。
Group 6 在恐惧未来，Group 5 在设计未来。
精卫延声、相得延途、玄阈延权——三个延展型创新，证明 AI 不是会觉醒的猛兽，是替人多做一件他做不到的事的工具。
G6 一直在问"笼子关得住 AI 吗"——我们的答案，从第一页到最后一页，始终是同一句：
AI 不是人的对手，是人的另一只翅膀。
把这只翅膀长好，AI 就是我们的未来——可控、可用、可审计的真实基础设施。
谢谢。
-->
