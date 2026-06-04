---
layout: section
---

<SectionTitle no="04" part="工程分析方法">
不是灵感<br/>是被矛盾逼出来的
</SectionTitle>

<!--
过渡（约 10 秒）：
有人会问：这些发明是拍脑袋想的吗？不是。它们是用工程方法，从矛盾里推出来的。
-->

---

# TRIZ ｜ 矛盾即创新的坐标

<Tag class="mt-1 mb-8">每一层创新，都是一个技术矛盾的解</Tag>

<div class="space-y-4">
  <Contradiction v-click tone="amber"   principle="No.1 分割" layer="物理层">
    <template #tension>AI 越<span class="hl">强</span>，越<span class="hl-amber">危险</span></template>
  </Contradiction>
  <Contradiction v-click tone="emerald" principle="No.24 中介物" layer="认知层">
    <template #tension>神经网络越<span class="hl">灵活</span>，越<span class="hl-amber">难解释</span></template>
  </Contradiction>
  <Contradiction v-click tone="sky"    principle="No.9+10 预先动作" layer="博弈层">
    <template #tension>安全越<span class="hl">强</span>，速度越<span class="hl-amber">慢</span></template>
  </Contradiction>
</div>

<!--
口播（约 55 秒）：
TRIZ 把"想点子"变成"找矛盾、查原则、出方案"。
AI 越强越危险——No.1 分割：物理层拆能量、拆能力。
神经网络灵活但黑箱——No.24 中介物：认知层用基底禁区做中介。
安全和效率冲突——No.9+10 预先动作：博弈层把安全前置成押金和定价。
编号核对过，全部正确。矛盾在哪里，创新就在哪里。
-->

---

# PACE / IPD ｜ 一条有阀门的流水线

<Tag class="mt-1 mb-12">宏观瀑布 · 微观敏捷</Tag>

<Pipeline v-click :steps="[
  { name: 'Concept', sub: '三层最小原型' },
  { name: 'Plan', sub: '架构 / 伙伴 / 监管' },
  { name: 'Develop', sub: '芯片+基底+市场' },
  { name: 'Validate', sub: '红队 / 第三方审计', tone: 'amber', mark: true },
  { name: 'Launch', sub: 'SaaS / 认证 / 保险' },
]" />

<OursPoint v-click class="mt-14 text-center text-xl">
我们卖的就是安全——<span class="hl-emerald">不能自卖自测</span>
</OursPoint>

<!--
口播（约 45 秒）：
PACE/IPD 给结构，Agile 给速度——宏观瀑布的阶段门，微观敏捷的冲刺。
特别强调高亮的 Validate 这一阀门：红队加第三方审计是必须的。
因为我们卖的产品本身就是"AI 安全"，绝不能自己卖油、自己测油。
-->

---
layout: center
---

# SWOT ｜ 我们站在哪

<SwotMatrix v-click class="mt-2"
  :s="[
    { t: '三层结构性不可能', d: '物理/认知/博弈互相独立，单层被绕过其余仍生效' },
    { t: '不赌「AI 无害」', d: '安全来自结构约束，而非对模型善意的假设' },
    { t: '半人马框架抢占辩题', d: '把命题从「关不关得住」改写为「怎么部署」' },
    { t: '可单边部署', d: '物理层装在自家机器人即生效，不依赖全球共识' },
  ]"
  :w="[
    { t: 'BCI / 速朽硬件偏远期', d: '部分机制依赖尚未成熟的硬件，落地有时间差' },
    { t: '体外令牌增加复杂度', d: '多一道授权环节，对易用性和工程成本是负担' },
    { t: '跨厂商标准统一难', d: '会签与令牌需要行业协议，协调成本高' },
  ]"
  :o="[
    { t: 'AI 安全合规市场高增长', d: '合规与审计需求快速扩张，安全即商机' },
    { t: '具身智能浪潮', d: '机器人走向物理世界，物理层安全成为刚需' },
    { t: 'EU AI Act 合规窗口', d: '法规落地催生抢先适配的先发优势' },
  ]"
  :t="[
    { t: '黑市算力', d: '绕开监管的算力供给削弱单边管控效果' },
    { t: '非合规开源模型', d: '可被自由改写的模型规避结构约束' },
    { t: '国家间不信任', d: '地缘博弈拖慢跨境标准与会签协作' },
  ]"
/>

<!--
口播（约 55 秒）：
看这张矩阵的两条轴：横轴内部对外部，纵轴有利对不利。
左上强项——三层结构性不可能，互相独立，一层被绕过其余仍然生效；我们不赌"AI 无害"，安全来自结构约束；半人马框架把辩题从"关不关得住"改写成"怎么部署"；而且能单边部署，不必等全球共识。
左下弱项我们也坦诚：BCI 和速朽硬件是远期，体外令牌增加复杂度，跨厂商标准统一难——这是工程师的诚实。
右上机会：AI 安全合规是高增长市场，具身智能浪潮让物理安全成为刚需，EU AI Act 打开合规窗口。
右下威胁：黑市算力、非合规开源模型、国家间不信任，都会削弱单边管控的效果——这正是我们要持续应对的。
-->
