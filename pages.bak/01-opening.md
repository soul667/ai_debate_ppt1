---
layout: center
class: text-center
---

<Tag class="mb-8">我们的立场</Tag>

<div class="text-2xl leading-relaxed">
我们 <strong>不否认</strong> 风险<br/>
我们反对的，是那个 <span class="hl-amber">等式</span>
</div>

<div v-click class="mt-10">
<Negate>高级化 = 必然觉醒 = 必然灭绝</Negate>
</div>

<Punch v-click tone="emerald" size="2rem" class="mt-10">
危险不在 AI 的天性<br/>
在我们怎么部署它
</Punch>

<!--
口播（约 55 秒）：
先说清楚：我们不否认 AI 有风险。我们反对的，是屏幕上这个被划掉的等式——"越高级，就必然觉醒，就必然灭绝"。
这个等式里每一个等号，都是逻辑跳跃。
真正的危险从来不在 AI 的天性里，而在我们怎么设计它的目标、权限、激励和监管。
能力是中性的，部署才有善恶。
-->

---
layout: center
class: text-center
---

<Tag class="mb-10">风险不是一个属性，是一个乘积</Tag>

<div class="formula text-4l mt-4">
AI Risk <span class="op">=</span>
<span class="v-cap">Capability</span> <span class="op">×</span>
<span class="v-aut">Autonomy</span> <span class="op">×</span>
<span class="v-perm">Permission</span> <span class="op">×</span>
<span class="v-inc">Incentive</span> <span class="op">×</span>
<span class="v-gap">Governance&nbsp;Gap</span>
</div>

<div v-click class="grid grid-cols-5 gap-3 mt-12 text-sm">
  <div class="card text-center py-3"><span class="hl-emerald">能力</span><div class="text-sub text-xs mt-1">中性</div></div>
  <div class="card text-center py-3"><span class="hl-sky">自主性</span><div class="text-sub text-xs mt-1">设计选择</div></div>
  <div class="card text-center py-3"><span class="hl-amber">权限</span><div class="text-sub text-xs mt-1">工程问题</div></div>
  <div class="card text-center py-3"><span class="hl-violet">激励</span><div class="text-sub text-xs mt-1">商业问题</div></div>
  <div class="card text-center py-3"><span class="hl">监管缺口</span><div class="text-sub text-xs mt-1">制度问题</div></div>
</div>

<Punch v-click tone="emerald" size="1.7rem" class="mt-10">
任何一项归零，整个乘积归零
</Punch>

<!--
口播（约 65 秒）：
我们把 AI 风险写成一个公式：风险，等于能力、自主性、权限、激励、监管缺口的乘积。
为什么是乘法不是加法？因为乘积里只要有一项是零，整个结果就是零。
能力是中性的；自主性是我们的设计选择；权限是工程问题；激励是商业问题；监管缺口是制度问题。
后面这四项，每一项我们都能动手干预、都能往零去压。
所以 AI 风险不是 AI 的固有属性，而是这五个变量共同决定的结果——这正是我们三层方案要逐一拆解的对象。
-->

---
layout: center
class: text-center
---

<Tag class="mb-10">我们的核心主张</Tag>

<Punch tone="emerald" size="3rem">危险的不是 AI<br/>是我们怎么部署</Punch>

<div v-click class="mt-14 text-xl text-sub">
把部署做对，危险在<span class="hl-emerald">结构上</span>就无法诞生
</div>

<!--
口播（约 40 秒）：
所以我们今天的核心主张就一句话：危险的不是 AI 本身，是我们怎么部署它。
我们不纠缠"笼子结不结实"这种被动防守，而是从正面给出方案——把部署做对，让危险在结构上根本无法诞生。
接下来，我们先把自己的方案讲透；到最后，再用它逐一回应对方的每一个质疑。
-->

---
layout: center
class: text-center
---

<Tag class="mb-10">三层不可能性</Tag>

<div class="three-lock grid grid-cols-3 gap-8 max-w-5xl mx-auto">
  <LayerCard v-click tone="amber"   icon="🔩" title="物理层">
    <span class="hl-amber text-2xl">离开人就废</span>
  </LayerCard>
  <LayerCard v-click tone="emerald" icon="🧠" title="认知层">
    <span class="punch text-2xl">改不了自己</span>
  </LayerCard>
  <LayerCard v-click tone="sky"    icon="⚖️" title="博弈层">
    <span class="punch-violet text-2xl">串谋必暴露</span>
  </LayerCard>
</div>

<div v-click class="text-sub text-xl mt-12">
锁身体　·　锁自我　·　锁激励<span class="text-emerald-300"></span>
</div>

<style scoped>
.three-lock :deep(.card-amber),
.three-lock :deep(.card-emerald),
.three-lock :deep(.card-sky) {
  min-height: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2.4rem 1.6rem;
  gap: 0.6rem;
}
.three-lock :deep(.text-4xl) { font-size: 3.4rem; }
.three-lock :deep(.text-2xl) { font-size: 1.9rem; }
</style>

<!--
路标（约 25 秒）：
我们的方案是三层不可能性，外加一个把人永久锁进回路的"半人马"框架。
物理层让它动不了；认知层让它改不了自己、离开人就废；博弈层让串谋暴露、作弊亏本。
不是更结实的笼子——是三道结构性的不可能。
记住三个词：锁身体、锁自我、锁激励。
-->
