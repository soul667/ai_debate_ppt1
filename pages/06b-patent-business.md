---
layout: default
zoom: 0.92
---

# Fishbone ｜ 烛龙产品风险从哪来？

<Tag class="mt-1 mb-5">Root Cause Analysis · 从「能不能卖」反推产品开发重点</Tag>

<Fishbone v-click head="烛龙如何落地？" :bones="[
  { k: 'Sensor', en: '传感器', desc: '磁场 / Wi-Fi / 应力标定', tone: 'sky' },
  { k: 'Human', en: '用户', desc: '触觉训练 / 学习曲线', tone: 'emerald' },
  { k: 'Safety', en: '安全', desc: '误导盲 / 误报警', tone: 'amber' },
  { k: 'Regulation', en: '监管', desc: '医疗器械 / 数据合规', tone: 'violet' },
  { k: 'Cost', en: '成本', desc: '壳体 BOM / 标定服务', tone: 'sky' },
  { k: 'Channel', en: '渠道', desc: '医院 / 应急 / 市政采购', tone: 'emerald' },
]" />

<Punch v-click tone="emerald" size="1.35rem" class="mt-5">
  鱼骨图服务产品开发：哪里最可能失败，哪里就是工程管理重点
</Punch>

<!--
口播（约 70 秒）：
这里把鱼骨图放回课程工具真正该放的位置：产品分析。我们不再用鱼骨去证明辩题，而是分析烛龙 Sensory Shell 为什么可能卖不出去、落不了地。
六根骨头分别是传感器、用户、安全、监管、成本和渠道。比如传感器需要现场标定，用户需要触觉训练，安全上不能误导盲，监管上涉及医疗器械和位置数据。
所以这张图告诉项目经理：开发重点不是多讲 AI 很好，而是把标定、训练、安全认证、渠道采购做成可管理的阶段门。
-->

---
layout: default
zoom: 0.84
---

# SWOT ｜ 产品：烛龙 Sensory Shell

<Tag class="mt-1 mb-3">Product Development SWOT · 残障辅助 + 搜救导航版</Tag>

<SwotMatrix v-click class="mt-1"
  :s="[
    { t: '非 AIGC 交付', d: '输出触觉模式与导航轨迹' },
    { t: '准入路径可借鉴', d: '感官替代已有医疗器械先例' },
    { t: '人机问责清晰', d: '决策权在人，符合人在环要求' },
  ]"
  :w="[
    { t: '训练周期', d: '触觉-空间映射需要用户学习' },
    { t: '现场标定', d: 'Wi-Fi/磁场/应力环境差异大' },
    { t: '早期成本', d: '壳体与传感器 BOM 偏高' },
  ]"
  :o="[
    { t: '老龄化 + 视障', d: '居家与公共导航需求增长' },
    { t: '应急采购', d: '消防、地震、矿山机器人捆绑' },
    { t: '建筑巡检', d: '管网与结构应力预警 SaaS' },
  ]"
  :t="[
    { t: '廉价视觉方案', d: 'GPS+摄像头方案抢市场' },
    { t: '隐私监管', d: '位置/健康数据合规成本' },
    { t: '安全舆论', d: '一次导盲失误会被放大' },
  ]"
/>

<!--
口播（约 65 秒）：
这一页是产品 SWOT，不再是论题 SWOT。我们选择烛龙 Sensory Shell，因为它最接近医疗器械、应急采购和具身导航三个商业场景。
Strengths 是非 AIGC 交付、已有准入路径、人机问责清晰；Weaknesses 是训练周期、现场标定、早期成本；Opportunities 是老龄化、应急采购和建筑巡检；Threats 是廉价视觉方案、隐私监管和安全舆论。
这就是一个产品经理会看的 SWOT：它不回答“AI 好不好”，它回答“这个产品怎么落地”。
-->

---
layout: default
---

# Innovation = Invention + Commercialization

<Tag class="mt-1 mb-5">三创新的商业模式 · 低成本规模化路径</Tag>

<div class="grid grid-cols-3 gap-3 text-sm">
  <div class="biz-card">
    <div class="biz-name hl-emerald">精卫</div>
    <div><span>客户</span>神经重症医院、康复中心、ALS 社群</div>
    <div><span>收入</span>设备租赁 + 声纹库维护订阅</div>
    <div><span>壁垒</span>1:1 解码专利 + 临床数据合规</div>
  </div>
  <div class="biz-card">
    <div class="biz-name hl-sky">相得</div>
    <div><span>客户</span>职业教育、养老照护、协作产线</div>
    <div><span>收入</span>KPI 审计 SaaS + 机器人示教工时包</div>
    <div><span>壁垒</span>KPI 哈希 + 异质共签流程专利</div>
  </div>
  <div class="biz-card">
    <div class="biz-name hl-amber">烛龙</div>
    <div><span>客户</span>应急局、市政管网、视障协会</div>
    <div><span>收入</span>壳体硬件 + 标定服务 + 搜救 bundle</div>
    <div><span>壁垒</span>物理场→触觉编码 + 认证路径</div>
  </div>
</div>

<div v-click class="grid grid-cols-3 gap-3 mt-6 text-xs text-sub">
  <div class="card text-center py-2">流程创新 · 第三方红队写进 Validate 阶段</div>
  <div class="card text-center py-2">模式创新 · 安全审计单独计价</div>
  <div class="card text-center py-2">定位创新 · 非生成式合规标签</div>
</div>

<style scoped>
.biz-card { background: rgba(255,255,255,0.035); border: 1px solid rgba(255,255,255,0.12); border-radius: 14px; padding: 0.95rem; color: #aeb9cc; line-height: 1.5; }
.biz-name { font-size: 1.1rem; margin-bottom: 0.55rem; }
.biz-card div:not(.biz-name) { margin-bottom: 0.45rem; }
.biz-card span { display: inline-block; width: 2.6rem; color: #6b7689; font-size: 0.72rem; }
</style>

<!--
口播（约 75 秒）：
PDF 里说 Innovation = Invention + Commercialization，所以我们必须讲商业化。
精卫面向神经重症医院和 ALS 社群，收入是设备租赁加声纹库维护订阅；相得面向职业教育、养老照护和协作产线，收入是 KPI 审计 SaaS 加机器人示教工时包；烛龙面向应急局、市政管网和视障协会，收入是壳体硬件、场景标定服务和搜救机器人 bundle。
最后三条是 business side 的加分点：流程创新，把第三方红队写进 Validate；模式创新，把安全审计单独计价；定位创新，用非生成式合规标签抢监管窗口。
-->
