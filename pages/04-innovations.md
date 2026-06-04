---
layout: section
---

<SectionTitle no="02" part="三项产品创新">
精卫 · 相得 · 玄阈
<template #sub>三个产品，不是三个口号：表达、成长、决策</template>
</SectionTitle>

<!--
过渡（约 15 秒）：
这一部分按产品讲。每个产品都回答四个问题：输入是什么、系统怎么处理、输出是什么、真实场景在哪.
-->

---
layout: center
class: text-center
---

<Tag class="mb-6">产品矩阵</Tag>

<div class="product-matrix grid grid-cols-3 gap-5 max-w-5xl mx-auto text-left">
  <LayerCard v-click tone="emerald" sub="表达产品" title="精卫">
    神经表达接口<br/>
    <span class="hl-emerald">BCI 打字 / 语音重建</span>
    <div class="pm-foot">把「想说」变成可见表达</div>
  </LayerCard>
  <LayerCard v-click tone="sky" sub="成长产品" title="相得">
    独立导向伴侣<br/>
    <span class="hl-sky">让用户真的变强</span>
    <div class="pm-foot">把「陪伴」变成能力提升</div>
  </LayerCard>
  <LayerCard v-click tone="amber" sub="决策产品" title="玄阈">
    高风险动作门控<br/>
    <span class="hl-amber">建议 ≠ 执行许可</span>
    <div class="pm-foot">把「建议」锁进授权边界</div>
  </LayerCard>
</div>

<div v-click class="grid grid-cols-3 gap-4 max-w-5xl mx-auto mt-5 text-sm">
  <div class="card text-center py-4"><span class="hl-emerald">表达权</span><div class="text-sub text-xs mt-1">人有意图，系统才输出</div></div>
  <div class="card text-center py-4"><span class="hl-sky">成长权</span><div class="text-sub text-xs mt-1">人变强，产品才成功</div></div>
  <div class="card text-center py-4"><span class="hl-amber">决策权</span><div class="text-sub text-xs mt-1">AI 提建议，人给许可</div></div>
</div>

<Punch v-click tone="emerald" size="1.55rem" class="mt-6">
共同原则：AI 扩展能力，不接管主体性
</Punch>

<!--
口播（约 55 秒）：
总览先把三项产品放在同一个矩阵里：精卫管表达，相得管成长，玄阈管决策。它们不是三个平行脑洞，而是人机交互链路上的三个节点。
-->

---
layout: default
zoom: 0.86
---

# 三个产品：新在哪，怎么用

<Tag class="mt-1 mb-4">每个产品都对应一个具体问题：表达、成长、决策</Tag>

<div class="product-briefs mt-3">
  <div class="brief-head"><span>产品</span><span>创新点</span><span>怎么用</span><span>得到什么</span></div>

  <div v-click class="brief-row emerald">
    <div class="brief-product">
      <div class="brief-no">01</div>
      <div class="brief-name text-emerald">精卫</div>
      <div class="brief-sub">表达产品</div>
    </div>
    <div class="brief-main">
      <b>把“想说”直接变成话</b>
      <span>不是替人创作，而是翻译神经表达意图</span>
    </div>
    <div class="brief-use">戴上 BCI<br/>看字 / 想发音<br/>输出文字或语音</div>
    <div class="brief-result">失语者能说话<br/>普通人可静默输入</div>
  </div>

  <div v-click class="brief-row sky">
    <div class="brief-product">
      <div class="brief-no">02</div>
      <div class="brief-name text-sky">相得</div>
      <div class="brief-sub">成长产品</div>
    </div>
    <div class="brief-main">
      <b>让 AI 训练人，而不是替人想</b>
      <span>先追问、再提示，把答案变成能力训练</span>
    </div>
    <div class="brief-use">输入目标<br/>系统拆小任务<br/>每天反馈练习</div>
    <div class="brief-result">学习更独立<br/>照护更持续<br/>能力看得见</div>
  </div>

  <div v-click class="brief-row amber">
    <div class="brief-product">
      <div class="brief-no">03</div>
      <div class="brief-name text-amber">玄阈</div>
      <div class="brief-sub">决策产品</div>
    </div>
    <div class="brief-main">
      <b>给 AI 行动装一道“门”</b>
      <span>不是禁止 AI，而是按风险决定谁有最终许可</span>
    </div>
    <div class="brief-use">AI 先给建议<br/>系统分风险<br/>高风险必须授权</div>
    <div class="brief-result">能自动的自动<br/>不能越权的留给人</div>
  </div>
</div>

<Punch v-click tone="emerald" size="1.25rem" class="mt-4">
共同创新：AI 不替代人，而是把能力还给人
</Punch>

<style scoped>
.product-briefs {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}
.brief-head {
  display: grid;
  grid-template-columns: 0.95fr 1.75fr 1.15fr 1.1fr;
  gap: 0.65rem;
  color: #aeb9cc;
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  padding: 0 0.85rem;
}
.brief-row {
  display: grid;
  grid-template-columns: 0.95fr 1.75fr 1.15fr 1.1fr;
  gap: 0.65rem;
  align-items: stretch;
}
.brief-row > div {
  min-height: 4.6rem;
  border: 1px solid rgba(255,255,255,0.11);
  border-radius: 0.85rem;
  background: linear-gradient(135deg, rgba(255,255,255,0.07), rgba(255,255,255,0.025));
  padding: 0.72rem 0.85rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.brief-product {
  background: rgba(255,255,255,0.045) !important;
}
.brief-row.emerald .brief-main { border-color: rgba(52,211,153,0.48); box-shadow: inset 0 0 0 1px rgba(52,211,153,0.08); }
.brief-row.sky .brief-main { border-color: rgba(56,189,248,0.48); box-shadow: inset 0 0 0 1px rgba(56,189,248,0.08); }
.brief-row.amber .brief-main { border-color: rgba(251,191,36,0.48); box-shadow: inset 0 0 0 1px rgba(251,191,36,0.08); }
.brief-no {
  color: #6b7689;
  font-size: 0.72rem;
  letter-spacing: 0.16em;
  margin-bottom: 0.18rem;
}
.brief-name {
  font-size: 1.28rem;
  line-height: 1.1;
  font-weight: 700;
}
.brief-sub {
  color: #aeb9cc;
  font-size: 0.76rem;
  margin-top: 0.25rem;
}
.brief-main b {
  color: #fff;
  font-size: 1.08rem;
  line-height: 1.25;
  margin-bottom: 0.28rem;
}
.brief-main span,
.brief-use,
.brief-result {
  color: #aeb9cc;
  font-size: 0.78rem;
  line-height: 1.42;
}
</style>

<!--
口播（约 90 秒）：
这一页按“创新点、怎么用、得到什么”讲，不再按抽象输入输出讲。精卫的新意是把神经表达意图直接翻译成文字或语音，使用时是戴上 BCI 后看字、想发音或静默输入。相得的新意是让 AI 训练人而不是替人想，使用时输入目标，系统拆任务、追问、给练习。玄阈的新意是给 AI 行动加授权门，使用时 AI 先给建议，系统按风险分级，高风险必须由人确认或共签。
-->

---
layout: default
zoom: 0.86
---

# 精卫 ｜ 输入输出图

<Tag class="mt-1 mb-5">神经表达接口 · BCI Typing / Voice Restoration</Tag>

<div class="io-map product-flow mt-8">
  <div v-click class="io-node emerald">
    <div class="io-k">Input</div>
    <div class="io-title">表达意图</div>
    <div class="io-body">尝试说话<br/>想输入文字<br/>静默指令</div>
  </div>
  <div class="io-arrow">→</div>
  <div v-click class="io-node emerald">
    <div class="io-k">System</div>
    <div class="io-title">神经解码</div>
    <div class="io-body">ECoG / BCI<br/>字符流 / 音素<br/>个性化校准</div>
  </div>
  <div class="io-arrow">→</div>
  <div v-click class="io-node emerald">
    <div class="io-k">Output</div>
    <div class="io-title">可见表达</div>
    <div class="io-body">屏幕文字<br/>本人嗓音<br/>设备控制指令</div>
  </div>
</div>

<Punch v-click tone="emerald" size="1.45rem" class="mt-10">
不替人发言，只放大人的表达
</Punch>

<!--
口播（约 90 秒）：
精卫的产品定义是神经表达接口，不只等于语音重建。输入层可以是尝试发声、想打字、静默指令。系统层做神经解码和个体校准。输出层可以是屏幕文字、本人嗓音，甚至低风险的设备控制指令。边界是：只解码已发生的表达意图，不帮人续写，不替人编造下一句。
-->

---
layout: default
zoom: 0.88
---

# 精卫 ｜ 使用场景

<Tag class="mt-1 mb-5">从医疗康复，到正常人的新输入方式</Tag>

<div class="scene-grid grid grid-cols-2 gap-4">
  <div v-click class="scene-card">
    <div class="scene-title text-emerald">失语康复</div>
    <div class="scene-body">ALS、脑干卒中、闭锁综合征：人有意图，但失去声音通道。</div>
  </div>
  <div v-click class="scene-card">
    <div class="scene-title text-sky">脑机打字</div>
    <div class="scene-body">正常人用 BCI 进行静默输入：不出声、不动手，也能写字。</div>
  </div>
  <div v-click class="scene-card">
    <div class="scene-title text-amber">特殊工种</div>
    <div class="scene-body">手术、驾驶、工业现场：双手被占用时，意图可直接变成文字指令。</div>
  </div>
  <div v-click class="scene-card">
    <div class="scene-title text-emerald">隐私沟通</div>
    <div class="scene-body">会议、公共空间、嘈杂环境：不用开口，也能完成低噪声沟通。</div>
  </div>
</div>

<!--
口播（约 100 秒）：
这页负责把精卫从医疗场景扩出来。第一是失语康复，这是最有伦理力量的刚需。第二是脑机打字，这是未来正常人的输入方式。第三是特殊工种，人在手术台、驾驶舱、工厂现场，双手和声音都未必方便。第四是隐私沟通，不一定是科幻，很多环境中人不方便出声，但仍需要输入。四个场景共享同一边界：意图来自人，系统只做表达转换。
-->

---
layout: default
zoom: 0.86
---

# 相得 ｜ 输入输出图

<Tag class="mt-1 mb-5">独立导向伴侣 · 从 engagement 到 independence</Tag>

<div class="io-map product-flow mt-8">
  <div v-click class="io-node sky">
    <div class="io-k">Input</div>
    <div class="io-title">我想变强</div>
    <div class="io-body">学会一件事<br/>恢复一个能力<br/>胜任一份工作</div>
  </div>
  <div class="io-arrow">→</div>
  <div v-click class="io-node sky">
    <div class="io-k">System</div>
    <div class="io-title">陪伴 + 训练</div>
    <div class="io-body">拆任务<br/>先追问<br/>给训练</div>
  </div>
  <div class="io-arrow">→</div>
  <div v-click class="io-node sky">
    <div class="io-k">Output</div>
    <div class="io-title">独立能力</div>
    <div class="io-body">完成率 ↑<br/>求助 ↓<br/>迁移 ↑</div>
  </div>
</div>

<Punch v-click tone="sky" size="1.45rem" class="mt-10">
离不开你 = 产品失败
</Punch>

<!--
口播（约 90 秒）：
相得的输入不是一句 prompt，而是用户想变强的目标：学会一件事、恢复一个能力、胜任一份工作。系统层不是单纯聊天，而是像成长教练一样拆任务、先追问、给训练。输出也不是“回答得很好”，而是用户独立完成任务的能力提升。普通 AI 看使用时长，相得看用户能不能逐步离开它。
-->

---
layout: default
zoom: 0.88
---

# 相得 ｜ 使用场景

<Tag class="mt-1 mb-5">把「陪伴」变成可衡量的成长系统</Tag>

<div class="scene-grid grid grid-cols-2 gap-4">
  <div v-click class="scene-card">
    <div class="scene-title text-sky">职业教育</div>
    <div class="scene-body">从“给答案”变成“带学生独立完成任务”。</div>
  </div>
  <div v-click class="scene-card">
    <div class="scene-title text-emerald">养老照护</div>
    <div class="scene-body">提醒、陪练、监测，但目标是保持老人自主生活能力。</div>
  </div>
  <div v-click class="scene-card">
    <div class="scene-title text-amber">康复训练</div>
    <div class="scene-body">把动作里程碑和 human override 示教记录下来。</div>
  </div>
  <div v-click class="scene-card">
    <div class="scene-title text-sky">协作产线</div>
    <div class="scene-body">新员工上手，AI 不替工人做，而是训练工人会做。</div>
  </div>
</div>

<!--
口播（约 100 秒）：
相得可以讲四个场景。职业教育里，它不直接给答案，而是带学生逐步独立完成。养老照护里，它不是让老人完全依赖 AI，而是保持自主生活能力。康复训练里，它记录动作里程碑、人工示教和 override。协作产线里，它帮助新员工上手，而不是把人挤出流程。每个场景都能用独立完成率、求助次数、技能迁移来衡量。
-->

---
layout: default
zoom: 0.86
---

# 相得 ｜ AI 时代最缺什么？

<Tag class="mt-1 mb-5">产品判断 · 不是更强的模型，而是更稳的人</Tag>

<div class="grid grid-cols-[1fr_1.15fr] gap-6 items-stretch">

<div class="space-y-4">
  <div v-click class="text-center">
    <div class="text-xl text-sub mb-3">不是</div>
    <Negate>更强的 AI</Negate>
  </div>

  <div v-click class="card-rose py-4 px-5">
    <div class="text-rose text-lg mb-3">退化循环</div>
    <div class="grid grid-cols-2 gap-2 text-sm text-center">
      <div class="card py-2">AI 替你想</div>
      <div class="card py-2">你少思考</div>
      <div class="card py-2">能力退化</div>
      <div class="card py-2">更依赖 AI</div>
    </div>
    <div class="text-faint text-xs mt-3 leading-relaxed">
      危险不只是机器变强，也可能是人从判断和学习里退场。
    </div>
  </div>
</div>

<div class="space-y-4">
  <div v-click class="grid grid-cols-2 gap-3">
    <div class="card-rose text-center py-4">
      <div class="text-faint text-xs mb-1">普通 AI</div>
      <div class="text-lg text-ink">优化<span class="hl-rose">使用时长</span></div>
    </div>
    <div class="card-sky text-center py-4">
      <div class="text-faint text-xs mb-1">相得</div>
      <div class="text-lg text-sky">优化<span class="hl-sky">独立能力</span></div>
    </div>
  </div>

  <div v-click class="grid grid-cols-3 gap-3 text-center">
    <LayerCard tone="sky" sub="01" title="追问">
      不直接给答案
    </LayerCard>
    <LayerCard tone="emerald" sub="02" title="成长">
      不优化时长
    </LayerCard>
    <LayerCard tone="amber" sub="03" title="离开">
      不制造依赖
    </LayerCard>
  </div>

  <OursPoint v-click class="text-center">
    相得的使命：帮助用户<span class="hl-sky">完成成长</span>、保持<span class="hl-sky">独立判断</span>、训练自己的思考能力
  </OursPoint>
</div>

</div>

<Punch v-click tone="sky" size="1.55rem" class="mt-6">
未来不是 AI 替我们思考 · 而是 AI 让我们更会思考
</Punch>

<!--
口播（约 105 秒）：
讲完相得的场景，要把产品立场说清楚。AI 越强，人会不会把思考、学习和判断都外包出去？危险往往不是觉醒，而是退化循环：AI 替你想，你少思考，能力退化，更依赖 AI。
所以我们不做“更会哄人的 AI”。相得把产品目标从“让用户多用”翻成“让用户变强”：不直接给答案，先追问；不优化时长，看成长；不制造依赖，让用户能离开。
使命就是帮助用户完成成长、保持独立判断、训练自己的思考能力。未来不是 AI 替我们思考，而是 AI 让我们更会思考。
-->

---
layout: default
zoom: 0.86
---

# 玄阈 ｜ 输入输出图

<Tag class="mt-1 mb-5">决策门控 · 风险分级授权</Tag>

<div class="io-map product-flow mt-8">
  <div v-click class="io-node amber">
    <div class="io-k">Input</div>
    <div class="io-title">AI 建议</div>
    <div class="io-body">转账<br/>删库<br/>停机 / 机械动作</div>
  </div>
  <div class="io-arrow">→</div>
  <div v-click class="io-node amber">
    <div class="io-k">System</div>
    <div class="io-title">风险阈值</div>
    <div class="io-body">低：自动<br/>中：确认<br/>高：共签</div>
  </div>
  <div class="io-arrow">→</div>
  <div v-click class="io-node amber">
    <div class="io-k">Output</div>
    <div class="io-title">授权结果</div>
    <div class="io-body">执行<br/>等待<br/>拒绝 / 升级</div>
  </div>
</div>

<Punch v-click tone="amber" size="1.45rem" class="mt-10">
AI 给建议 · 人类给许可
</Punch>

<!--
口播（约 90 秒）：
玄阈的输入是 AI 给出的操作建议，不是普通文本回答。系统层做风险分级：低风险自动，中风险用户确认，高风险人工或多方共签。输出不是“答案”，而是授权结果：执行、等待、拒绝、升级。这样高能力分析不会自动变成高后果执行权。
-->

---
layout: default
zoom: 0.88
---

# 玄阈 ｜ 使用场景

<Tag class="mt-1 mb-5">让高风险 AI 能上线、可审计、可追责</Tag>

<div class="scene-grid grid grid-cols-2 gap-4">
  <div v-click class="scene-card">
    <div class="scene-title text-amber">金融风控</div>
    <div class="scene-body">AI 可建议冻结、转账、授信；高风险动作必须授权。</div>
  </div>
  <div v-click class="scene-card">
    <div class="scene-title text-sky">工业产线</div>
    <div class="scene-body">停机、提速、切换工艺，不允许模型直接越权执行。</div>
  </div>
  <div v-click class="scene-card">
    <div class="scene-title text-emerald">政务审批</div>
    <div class="scene-body">AI 可预审材料，但最终盖章和拒绝必须留痕授权。</div>
  </div>
  <div v-click class="scene-card">
    <div class="scene-title text-amber">具身机器人</div>
    <div class="scene-body">抓取、移动、接近人体等动作按风险分级放行。</div>
  </div>
</div>

<!--
口播（约 100 秒）：
玄阈的应用场景最适合高后果系统。金融里，AI 可以建议，但冻结账户、转大额资金、拒绝贷款要授权。工业里，停机、提速、切换工艺会影响安全和产能，不能让模型直接执行。政务审批里，AI 可以预审，但最终盖章要留痕。具身机器人里，接近人体、搬重物、执行危险动作都要按风险等级放行。
-->

---
layout: center
class: text-center
---

<Tag class="mb-6">收束</Tag>

<div class="summary-grid grid grid-cols-3 gap-4 max-w-5xl mx-auto text-left">
  <div v-click class="card-emerald py-5 px-5">
    <div class="sum-k">01</div>
    <div class="text-emerald text-xl mb-2">精卫 · 延声</div>
    <div class="text-sm text-sub leading-relaxed">输入锚定神经意图，输出只恢复人的表达。</div>
  </div>
  <div v-click class="card-sky py-5 px-5">
    <div class="sum-k">02</div>
    <div class="text-sky text-xl mb-2">相得 · 延途</div>
    <div class="text-sm text-sub leading-relaxed">输入锚定长期目标，输出是人的独立能力。</div>
  </div>
  <div v-click class="card-amber py-5 px-5">
    <div class="sum-k">03</div>
    <div class="text-amber text-xl mb-2">玄阈 · 延权</div>
    <div class="text-sm text-sub leading-relaxed">输入锚定 AI 建议，输出必须经过人类授权。</div>
  </div>
</div>

<Punch v-click tone="emerald" size="1.85rem" class="mt-7">
三个产品，一个原则：权不离人
</Punch>

<style>
.product-matrix > * { min-height: 12rem; display: flex; flex-direction: column; justify-content: center; }
.pm-foot { margin-top: 0.85rem; padding-top: 0.75rem; border-top: 1px solid rgba(255,255,255,0.1); color: #aeb9cc; font-size: 0.82rem; line-height: 1.45; }
.product-flow .io-node { min-height: 10.4rem; padding: 1.2rem 1.15rem; }
.product-flow + .io-arrow { min-height: 10.4rem; }
.scene-grid .scene-card { min-height: 9.4rem; padding: 1.25rem; display: flex; flex-direction: column; justify-content: center; }
.scene-grid .scene-title { font-size: 1.2rem; margin-bottom: 0.65rem; }
.scene-grid .scene-body { font-size: 0.95rem; line-height: 1.65; }
.summary-grid > * { min-height: 10.8rem; display: flex; flex-direction: column; justify-content: center; }
.sum-k { color: #6b7689; font-size: 0.75rem; letter-spacing: 0.18em; margin-bottom: 0.6rem; }
</style>

<!--
口播（约 40 秒）：
产品段收束：精卫把表达权还给人，相得把成长权留在人，玄阈把决策权锁在人。三个产品不是为了让 AI 成为新主体，而是让人获得更强能力。
-->
