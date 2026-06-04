---
layout: section
---

<SectionTitle no="04" part="工程分析方法">
不是灵感<br/>是被矛盾逼出来的
</SectionTitle>

<!--
过渡（约 10 秒）：
现在讲方法。我们的三个产品不是拍脑袋想出来的，而是从工程矛盾里推出来的。
-->

# TRIZ ｜ 三个矛盾，三个产品

<Tag class="mt-1 mb-8">不讲概念定义，直接看产品怎么从矛盾里长出来</Tag>

<div class="space-y-4">
  <Contradiction v-click tone="emerald" principle="No.24 中介物" layer="精卫 · 延声">
    <template #tension>越要让 AI <span class="hl">表达</span>，越怕它<span class="hl-amber">替人编造</span></template>
  </Contradiction>
  <Contradiction v-click tone="cyan" principle="No.13 反向" layer="相得 · 延途">
    <template #tension>AI 越<span class="hl">有用</span>，用户越可能<span class="hl-amber">依赖</span></template>
  </Contradiction>
  <Contradiction v-click tone="amber" principle="No.9 预先动作" layer="玄阈 · 延权">
    <template #tension>AI 越<span class="hl">能执行</span>，越可能<span class="hl-amber">越权</span></template>
  </Contradiction>
</div>

<!--
口播（约 85 秒）：
第一组矛盾：我们希望 AI 帮人表达，但越开放生成，越可能替人编造。所以精卫用 No.24 中介物，让神经意图本身成为中介，模型只做转译。
第二组矛盾：AI 越有用，用户越容易依赖。相得用 No.13 反向，把 KPI 反过来写：不是最大化使用时长，而是最大化人的独立。
第三组矛盾：AI 越能执行，越可能越权。玄阈用 No.9 预先动作，把风险分级、确认、授权预先写进执行链，而不是事后补救。
这页的重点不是证明 TRIZ 编号多么神圣，而是说明我们的推理路径：先找矛盾，再找原则，再出产品。
-->

---

# PACE / IPD ｜ 一条有阀门的流水线

<Tag class="mt-1 mb-12">宏观瀑布 · 微观敏捷</Tag>

<Pipeline v-click :steps="[
  { name: 'Concept', sub: '三产品原型' },
  { name: 'Plan', sub: '医院 / 教育 / 企业' },
  { name: 'Develop', sub: '电极 + KPI + 门控' },
  { name: 'Validate', sub: '红队 / 第三方审计', tone: 'amber', mark: true },
  { name: 'Launch', sub: '临床准入 / SaaS / 认证' },
]" />

<OursPoint v-click class="mt-14 text-center text-xl">
我们卖的是「可控」——<span class="hl-emerald">必须可被外人审计</span>
</OursPoint>

<!--
口播（约 45 秒）：
PACE/IPD 负责把产品从点子推进到上市。Concept 阶段做最小原型；Plan 阶段明确医院、教育、企业等合作场景；Develop 阶段分别推进电极解码、KPI 体系和门控系统；Validate 阶段必须有红队和第三方审计；Launch 阶段才进入临床准入、SaaS 或认证采购。
-->
