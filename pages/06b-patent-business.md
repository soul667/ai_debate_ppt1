---
layout: default
zoom: 0.9
---

# Fishbone ｜ 玄阈为什么难落地？

<Tag class="mt-1 mb-5">Root Cause Analysis · 只分析一个产品：决策门控</Tag>

<Fishbone v-click head="玄阈落地风险" :bones="[
  { k: 'Policy', en: '策略', desc: '阈值怎么定', tone: 'sky' },
  { k: 'Human', en: '人', desc: '谁来授权', tone: 'emerald' },
  { k: 'System', en: '系统', desc: '能否绕过', tone: 'amber' },
  { k: 'Audit', en: '审计', desc: '日志可信', tone: 'violet' },
  { k: 'Cost', en: '成本', desc: '接入代价', tone: 'sky' },
  { k: 'Liability', en: '责任', desc: '出错归谁', tone: 'rose' },
]" />

<Punch v-click tone="amber" size="1.35rem" class="mt-5">
玄阈不是技术插件，而是一套权限制度
</Punch>

<!--
口播（约 85 秒）：
鱼骨图只分析玄阈，因为玄阈最适合用原因分析：它不是一个模型能力问题，而是落地时会被制度、流程和责任卡住。
第一根骨头是 Policy：风险阈值怎么定？删库、转账、停机、机器人接近人体，阈值不可能一样。
第二是 Human：谁来授权？普通用户、主管、合规官、双人共签，必须区分。
第三是 System：门控能不能被绕过？如果业务系统可以从旁路调用 API，玄阈就失效。
第四是 Audit：日志是否可信，能不能证明谁在什么时候批准了什么。
第五是 Cost：接入企业系统的成本高，部署阻力大。
第六是 Liability：出错以后责任归模型、平台、授权人还是企业？这必须提前写进流程。
所以玄阈不是技术插件，而是一套权限制度。
-->

---
layout: default
zoom: 0.86
---

# SWOT ｜ 相得能不能成为产品？

<Tag class="mt-1 mb-3">Product SWOT · 只分析一个产品：独立导向伴侣</Tag>

<SwotMatrix
  v-click
  class="mt-1"
  :s="['价值观清晰', 'KPI 可量化', '场景刚需']"
  :w="['成长慢', '指标难定', '短期不爽']"
  :o="['教育转型', '养老照护', '企业培训']"
  :t="['陪聊替代', '平台滥用', '用户流失']"
/>

<!--
口播（约 90 秒）：
SWOT 只分析相得，因为相得最像一个真实产品：它有用户、有 KPI、有商业竞争。
Strengths：它的价值观清晰，目标不是让人更依赖；KPI 可量化，比如独立完成率、求助次数下降、技能迁移；场景也刚需，教育、照护、培训都需要。
Weaknesses：成长很慢，不像聊天机器人即时爽；指标难定义，什么叫“独立”需要场景化；短期体验可能不如“直接给答案”的 AI 爽。
Opportunities：教育正在从给答案转向能力训练；养老照护需要保持老人自主生活；企业培训需要新人快速上手。
Threats：市面上更便宜的陪聊产品会替代它；平台可能把“独立 KPI”包装成营销词但实际最大化留存；用户真的成长后会减少使用，这反而挑战传统商业模式。
这也是相得最有意思的地方：它必须接受“用户离开”也是成功。
-->

---
layout: default
zoom: 0.88
---

# 商业化路径 ｜ Innovation = Invention + Commercialization

<Tag class="mt-1 mb-5">三个产品分别怎么卖？</Tag>

<div class="grid grid-cols-3 gap-3 text-sm">
  <div class="biz-card">
    <div class="biz-name hl-emerald">精卫</div>
    <div><span>客户</span>医院 · BCI 用户</div>
    <div><span>收入</span>设备 + 订阅</div>
    <div><span>壁垒</span>解码专利</div>
  </div>
  <div class="biz-card">
    <div class="biz-name hl-sky">相得</div>
    <div><span>客户</span>教育 · 照护 · 产线</div>
    <div><span>收入</span>训练方案 + 进步报告</div>
    <div><span>壁垒</span>审计流程</div>
  </div>
  <div class="biz-card">
    <div class="biz-name hl-amber">玄阈</div>
    <div><span>客户</span>金融 · 工业 · 政务</div>
    <div><span>收入</span>门控 + 合规</div>
    <div><span>壁垒</span>授权专利</div>
  </div>
</div>

<div v-click class="grid grid-cols-3 gap-3 mt-6 text-xs text-sub">
  <div class="card text-center py-2">流程创新 · Validate 前置</div>
  <div class="card text-center py-2">模式创新 · 安全可计价</div>
  <div class="card text-center py-2">定位创新 · 人在环合规</div>
</div>

<style scoped>
.biz-card { background: rgba(255,255,255,0.035); border: 1px solid rgba(255,255,255,0.12); border-radius: 14px; padding: 0.95rem; color: #aeb9cc; line-height: 1.5; }
.biz-name { font-size: 1.1rem; margin-bottom: 0.55rem; }
.biz-card div:not(.biz-name) { margin-bottom: 0.45rem; }
.biz-card span { display: inline-block; width: 2.6rem; color: #6b7689; font-size: 0.72rem; }
</style>

<!--
口播（约 85 秒）：
商业化按三个产品说。精卫面向医院康复、ALS 社群和未来正常人的 BCI 打字，收入来自硬件、电极、个性化模型和声纹/词表维护。
相得面向教育、养老照护、职业训练和协作产线，收入来自训练方案、进步报告、课程/照护包和机器人示教服务。
玄阈面向金融、工业、政务、医院和机器人高后果系统，收入来自门控 SaaS、策略配置、合规日志和共签流程。
最后三条是课程里的 commercialization：Validate 前置，安全可计价，人在环合规窗口。
-->
