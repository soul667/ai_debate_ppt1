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

<Tag class="mt-1 mb-8">每一个创新，都是一个技术矛盾的解</Tag>

<div class="space-y-4">
  <Contradiction v-click tone="emerald"   principle="No.24 中介物" layer="精卫 · 延声">
    <template #tension>AI 越要<span class="hl">替人发声</span>，越易<span class="hl-amber">幻觉造假</span></template>
  </Contradiction>
  <Contradiction v-click tone="cyan" principle="No.13 反向" layer="相得 · 延途">
    <template #tension>AI 越<span class="hl">陪你深</span>，你越<span class="hl-amber">不能离开它</span></template>
  </Contradiction>
  <Contradiction v-click tone="amber"    principle="No.40 复合材料" layer="烛龙 · 延感">
    <template #tension>感官越<span class="hl">单一</span>，世界的<span class="hl-amber">真相越漏</span></template>
  </Contradiction>
</div>

<!--
口播（约 60 秒）：
TRIZ 把"想点子"变成"找矛盾、查原则、出方案"。
精卫的矛盾——AI 越要替人发声，越容易幻觉造假——No.24 中介物：让神经信号本身做中介，1:1 约束模型，造假的物理通路被切断。
相得的矛盾——AI 越陪你深，你越不能离开它——No.13 反向：把 KPI 反着写，最大化的不是依赖，而是你的独立。
烛龙的矛盾——感官越单一，世界的真相漏得越多——No.40 复合材料：把电磁世界与人体感官焊成一种新复合"感官"。
矛盾在哪里，创新就在哪里。
-->

---

# PACE / IPD ｜ 一条有阀门的流水线

<Tag class="mt-1 mb-12">宏观瀑布 · 微观敏捷</Tag>

<Pipeline v-click :steps="[
  { name: 'Concept', sub: '三创新最小原型' },
  { name: 'Plan', sub: '医院 / 教育 / 残障合作' },
  { name: 'Develop', sub: '电极 + 对齐 + 感官壳' },
  { name: 'Validate', sub: '红队 / 第三方审计', tone: 'amber', mark: true },
  { name: 'Launch', sub: '临床准入 / SaaS / 认证' },
]" />

<OursPoint v-click class="mt-14 text-center text-xl">
我们卖的就是「述而不作」——<span class="hl-emerald">必须可被外人审计</span>
</OursPoint>

<!--
口播（约 45 秒）：
PACE/IPD 给结构，Agile 给速度——宏观瀑布的阶段门，微观敏捷的冲刺。
特别强调高亮的 Validate 这一阀门：红队加第三方审计是必须的。
因为我们卖的承诺本身就是"述而不作"——AI 不会擅自加字、不会替代你、不会与你对立。这种承诺绝不能自卖自测，必须可被外人审计。
-->
