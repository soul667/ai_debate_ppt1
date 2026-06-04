---
layout: section
---

<SectionTitle no="01" part="探究本质">
AI 到底是什么？
<template #sub>在判断它危不危险之前，先看清它的数学本质</template>
</SectionTitle>

<!--
过渡（约 12 秒）：
任何关于 AI 危险性的判断，都必须建立在"它到底是什么"之上。
所以在反驳之前，我们先花三页，把 AI 的三块基石讲清楚：神经网络、反向传播、大语言模型。
-->

---

# ANN ｜ 人工神经网络

<Tag class="mt-1 mb-4">Artificial Neural Network · 一个分层的函数</Tag>

<div class="grid grid-cols-2 gap-8 items-center">

<div>
<NeuralNet />
</div>

<div class="space-y-3">
  <div v-click class="card-sky py-3 px">输入层接收数据 → 隐藏层逐层变换 → 输出层给出结果</div>
  <div v-click class="card-emerald py-3">每条连线是一个 <span class="hl">权重</span>，训练就是不断调整这些数字</div>
  <div v-click class="card-amber py-3">本质：一个把输入映射到输出的 <span class="hl-amber">复杂函数 f(x)</span></div>
</div>

</div>

<Punch v-click tone="emerald" size="1.7rem" class="mt-15">
它能逼近任何模式，但没有生物本能
</Punch>

<!--
口播（约 70 秒）：
人工神经网络，名字里有"神经"，容易让人联想到大脑、联想到生命。但请看它的结构：
左边输入层接收数据，中间隐藏层一层层做变换，右边输出层给出结果。
每一条连线，就是一个权重——一个可以调整的数字。所谓"训练"，就是不断调整这几百万、几十亿个数字。
所以神经网络的数学本质，是一个函数 f(x)：你给它输入，它给你输出。
它可以逼近极其复杂的模式——这就是它强大的原因。但它没有饥饿、没有恐惧、没有求生欲，因为它只是函数。
-->

---

# Backpropagation ｜ 它是怎么"学"的

<Tag class="mt-1 mb-4">反向传播 · 五步循环</Tag>

<div class="grid grid-cols-5 gap-3">
  <div v-click class="card-sky text-center py-3"><div class="text-2xl text-sky mb-1">1</div>输入数据</div>
  <div v-click class="card-sky text-center py-3"><div class="text-2xl text-sky mb-1">2</div>前向计算<br/><span class="text-sub text-xs">得到预测</span></div>
  <div v-click class="card-amber text-center py-3"><div class="text-2xl text-amber mb-1">3</div>对比答案<br/><span class="text-sub text-xs">算出误差</span></div>
  <div v-click class="card-emerald text-center py-3"><div class="text-2xl text-emerald mb-1">4</div>反向求梯度<br/><span class="text-sub text-xs">误差怪谁</span></div>
  <div v-click class="card-emerald text-center py-3"><div class="text-2xl text-emerald mb-1">5</div>微调权重<br/><span class="text-sub text-xs">下次更准</span></div>
</div>

<div v-click class="grid grid-cols-2 gap-4 mt-5 max-w-2xl mx-auto">
<div class="f-box">

<div class="f-cap">① 衡量错了多少（损失）</div>

$$ L = \tfrac{1}{2}(y - \hat{y})^2 $$

</div>
<div class="f-box">

<div class="f-cap">② 顺梯度下山（更新权重）</div>

$$ w \leftarrow w - \eta\,\frac{\partial L}{\partial w} $$

</div>
</div>

<OursPoint v-click class="mt-5 text-center">
整个过程只优化一件事：<span class="hl-emerald">让误差变小</span>
</OursPoint>

<Punch v-click tone="emerald" size="1.5rem" class="mt-4">
它优化的是参数，不是求生欲
</Punch>

<style scoped>
.f-box { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 0.4rem 1rem 0.6rem; text-align: center; }
.f-cap { font-size: 0.76rem; color: #aeb9cc; margin-bottom: 0.1rem; }
.f-box :deep(.katex) { font-size: 1.25rem; }
</style>

<!--
口播（约 75 秒）：
那它是怎么"学会"的？靠的是反向传播，一个五步循环：
第一步，喂进数据；第二步，网络前向计算给出一个预测；第三步，拿预测和正确答案对比，算出误差；
第四步，反向追问——这个误差该怪哪些权重；第五步，微调那些权重，让下次更准。
几百万次重复，网络就"学会"了。
但请注意：整个过程，它优化的唯一目标是"让误差变小"。
它不知道什么是"我"，不知道什么是"关机"，不知道什么是"死亡"。
反向传播优化的是参数，不是求生本能。所有"AI 怕被关机"的故事，都是把一个优化算法，误读成了一个有自我的主体。
-->

---

# Token ｜ AI 眼里的世界，是碎片

<Tag class="mt-1 mb-8">分词 · 把文字切成可计算的最小单位</Tag>

<div class="flex items-center justify-center gap-3 mb-12 text-lg flex-wrap">
  <span class="text-sub">"人工智能"</span>
  <span class="text-faint">→</span>
  <span class="tok">人工</span><span class="tok">智能</span>
  <span class="text-faint">→</span>
  <span class="tok-id">8161</span><span class="tok-id">3792</span>
</div>

<div class="grid grid-cols-3 gap-4">
  <div v-click class="card-sky"><div class="text-sky text-lg mb-1">是什么</div><div class="text-sub text-sm">把句子拆成词/字片段，再编成数字 ID</div></div>
  <div v-click class="card-emerald"><div class="text-emerald text-lg mb-1">为什么</div><div class="text-sub text-sm">神经网络只会算数字，不认识"字"</div></div>
  <div v-click class="card-amber"><div class="text-amber text-lg mb-1">意味着</div><div class="text-sub text-sm">AI 处理的是符号统计，不是"理解含义"</div></div>
</div>

<Punch v-click tone="emerald" size="1.6rem" class="mt-20">
对 AI 来说，语言只是一串数字
</Punch>

<style scoped>
.tok { background: rgba(56,189,248,0.14); border: 1px solid rgba(56,189,248,0.4); border-radius: 8px; padding: 0.2rem 0.6rem; margin: 0 0.15rem; color: #7dd3fc; }
.tok-id { background: rgba(251,191,36,0.12); border: 1px solid rgba(251,191,36,0.35); border-radius: 8px; padding: 0.2rem 0.6rem; margin: 0 0.15rem; color: #fcd34d; font-family: 'Inter Variable'; }
</style>

<!--
口播（约 55 秒）：
先讲三个最基础的概念，第一个是 token。
AI 不像人那样"读"句子。它先把文字切成一个个片段——叫 token，比如"人工智能"切成"人工""智能"，再把每个片段编成一个数字 ID。
为什么？因为神经网络只会做数学运算，它不认识"字"，只认识数字。
这说明一件事：AI 处理的是符号的统计规律，不是我们以为的"理解含义"。对它来说，语言只是一串数字。
-->

---

# Transformer ｜ 让 AI 学会"看上下文"

<Tag class="mt-1 mb-6">注意力机制 · 2017 年至今所有大模型的底座</Tag>

<div class="grid grid-cols-2 gap-8 items-center">

<div class="space-y-3">
  <div v-click class="card-violet"><div class="text-violet text-lg mb-1">核心：注意力 Attention</div><div class="text-sub text-sm">每个词都"看一眼"句子里其他所有词，决定谁重要</div></div>
  <div v-click class="card-sky"><div class="text-sky text-lg mb-1">并行</div><div class="text-sub text-sm">整句一起算，不像旧模型逐字读，所以能训练超大规模</div></div>
  <div v-click class="card-emerald"><div class="text-emerald text-lg mb-1">结果</div><div class="text-sub text-sm">"它"指代谁、语气如何 —— 上下文被捕捉</div></div>
</div>

<div v-click class="ctx-demo">
  <div class="text-sub text-sm mb-3">"奖杯放不进箱子，因为<span class="hl-amber">它</span>太大了"</div>
  <div class="text-xs text-faint mb-2">「它」对其他词的注意力权重（示意）</div>
  <div class="bar"><span>奖杯</span><div class="track"><div class="fill" style="width:78%"></div></div></div>
  <div class="bar"><span>箱子</span><div class="track"><div class="fill" style="width:22%"></div></div></div>
  <div class="bar"><span>太大</span><div class="track"><div class="fill" style="width:55%"></div></div></div>
</div>

</div>

<Punch v-click tone="emerald" size="1.6rem" class="mt-6">
它学的是"词与词的关系"，不是"世界的真相"
</Punch>

<style scoped>
.ctx-demo { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 14px; padding: 1.2rem; }
.bar { display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.5rem; font-size: 0.85rem; }
.bar > span { width: 2.5rem; color: #aeb9cc; }
.track { flex: 1; height: 8px; background: rgba(255,255,255,0.06); border-radius: 4px; overflow: hidden; }
.fill { height: 100%; background: linear-gradient(90deg, #34d399, #38bdf8); }
</style>

<!--
口播（约 65 秒）：
第二个概念：Transformer。2017 年 Google 提出，是今天所有大模型的底座。
它的核心叫"注意力机制"——句子里每个词，都会"看一眼"其他所有词，自己决定谁更重要。
比如"奖杯放不进箱子，因为它太大了"，靠注意力，模型把"它"对齐到"奖杯"——是奖杯太大，不是箱子。
而且它是整句并行计算，不像老模型一个字一个字读，所以才能堆到几千亿参数。
但请注意：它学的是"词和词之间的统计关系"，不是"世界的真相"。它知道"猫"和"饿"经常一起出现，不代表它懂什么是饿。
-->

---

# LLM ｜ 大语言模型在做什么

<Tag class="mt-1 mb-5">Large Language Model</Tag>

<div class="grid grid-cols-2 gap-7 items-center">

<div>
<div class="text-sub text-sm mb-3">输入一句话，模型预测「下一个词」的概率：</div>
<div class="pred-box">
  <div class="pred-prompt">今天天气真<span class="cursor">▎</span></div>
  <div class="pred-bar"><span class="w">好</span><div class="track"><div class="fill" style="width:71%"></div></div><span class="p">71%</span></div>
  <div class="pred-bar"><span class="w">热</span><div class="track"><div class="fill" style="width:18%"></div></div><span class="p">18%</span></div>
  <div class="pred-bar"><span class="w">冷</span><div class="track"><div class="fill" style="width:7%"></div></div><span class="p">7%</span></div>
  <div class="pred-bar dim-row"><span class="w">炸</span><div class="track"><div class="fill" style="width:1%"></div></div><span class="p">0.4%</span></div>
</div>
<div class="text-faint text-xs mt-3 text-center">选中「好」→ 追加 → 再预测下一个 → 循环</div>
</div>

<div class="space-y-3">
  <div v-click class="card-sky py-3"><span class="hl-sky">本质</span> 一个词一个词地<span class="hl">接龙</span>，每步只算概率</div>
  <div v-click class="g6 py-3"><span class="g6-label">表现</span>它会说「我想活下去」</div>
  <div v-click class="ours py-3"><span class="text-emerald mr-2">真相</span>因为训练语料里到处是这句话</div>
  <div v-click class="card-amber py-3"><span class="hl-amber">所以</span>这是文学事件，不是生物事件</div>
</div>

</div>

<Punch v-click tone="emerald" size="1.7rem" class="mt-10">
模拟意图，不等于拥有意图
</Punch>

<style scoped>
.pred-box { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 14px; padding: 1.2rem 1.4rem; }
.pred-prompt { font-size: 1.3rem; color: #fff; margin-bottom: 1rem; }
.cursor { color: #34d399; }
.pred-bar { display: flex; align-items: center; gap: 0.7rem; margin-bottom: 0.55rem; font-size: 0.9rem; }
.pred-bar .w { width: 1.6rem; color: #eef1f6; }
.pred-bar .p { width: 2.8rem; text-align: right; color: #aeb9cc; font-family: 'Inter Variable'; font-size: 0.8rem; }
.track { flex: 1; height: 10px; background: rgba(255,255,255,0.06); border-radius: 5px; overflow: hidden; }
.fill { height: 100%; background: linear-gradient(90deg, #34d399, #38bdf8); border-radius: 5px; }
.dim-row .w, .dim-row .p { color: #6b7689; }
.dim-row .fill { background: #6b7689; }
</style>

<!--
口播（约 75 秒）：
有了 token 和 Transformer，第三个概念就好懂了——大语言模型，就是把这两样堆到极致。
它做的事本质只有一件：预测下一个词。看右边这个例子，输入"今天天气真"，
模型算出下一个词的概率分布："好"71%、"热"18%、"冷"7%、"炸"几乎为零。它选中"好"，追加上去，再预测下一个，循环往复。一个词一个词地接龙。
所以当它写出"我想活下去"，不是它真想活，而是人类语料里到处是这句话，这个词的概率就高。
它在做统计模仿——这是文学事件，不是生物事件。
模拟出 agent 的行为，不等于拥有 agent 的意志。这是我们后面所有反驳的逻辑起点。
-->

---

# 模型家族 ｜ 从语言到行动

<Tag class="mt-1 mb-10">同一套原理，长出不同的"感官"和"手脚"</Tag>

<div class="grid grid-cols-2 gap-4">
  <div v-click class="card-sky">
    <div class="flex items-baseline gap-2 mb-1"><span class="text-sky text-xl">LLM</span><span class="text-faint text-xs">大语言模型</span></div>
    <div class="text-sub text-sm">只懂文字。输入文本 → 输出文本。今天的 ChatGPT 主体</div>
  </div>
  <div v-click class="card-emerald">
    <div class="flex items-baseline gap-2 mb-1"><span class="text-emerald text-xl">VLM</span><span class="text-faint text-xs">视觉语言模型</span></div>
    <div class="text-sub text-sm">加了"眼睛"。能看图说话、读图表、理解画面</div>
  </div>
  <div v-click class="card-amber">
    <div class="flex items-baseline gap-2 mb-1"><span class="text-amber text-xl">VLA</span><span class="text-faint text-xs">视觉-语言-动作</span></div>
    <div class="text-sub text-sm">加了"手脚"。看见 + 理解 + <span class="hl-amber">直接驱动机器人动作</span></div>
  </div>
  <div v-click class="card-violet">
    <div class="flex items-baseline gap-2 mb-1"><span class="text-violet text-xl">World Model</span><span class="text-faint text-xs">世界模型</span></div>
    <div class="text-sub text-sm">学"物理规律"，能在脑中模拟、预测世界下一步</div>
  </div>
</div>

<Punch v-click tone="amber" size="1.6rem" class="mt-16">
越靠近「行动」，越需要把信号和行动 <span class="hl">决定在人</span>
</Punch>

<!--
口播（约 80 秒）：
最后科普一下 AI 的"模型家族"，因为它们风险等级完全不同。
LLM 只懂文字，输入文本输出文本，就是今天的 ChatGPT 主体。
VLM，视觉语言模型，给 AI 加了眼睛——能看图、读图表、理解画面。
VLA，视觉-语言-动作模型，更进一步，加了手脚——它看见、理解之后，能直接驱动机器人去动作。
World Model，世界模型，学的是物理规律，能在"脑子里"模拟世界下一步会怎样。
关键判断来了：越靠近"行动"的模型，风险就越落到物理世界。一个只会聊天的 LLM 顶多说错话；一个 VLA 驱动的机器人，是真能动手的。
这正是为什么后面三项交互创新都必须把信号和行动锚在人——危险不在它会想，而在它能不能脱离"人锚"去动。
-->

---

# 它们是怎么"长"出来的

<Tag class="mt-1 mb-6">同一套 Transformer 底座，逐步加上感官与手脚</Tag>

<ModelEvo v-click />

<!--
口播（约 90 秒）：
这些模型不是凭空出现的，它们是从同一套 Transformer 底座，一步步"长"出来的。看这张演进图：
最底层 LLM，输入文本 token，过 Transformer，输出文本。
往上一步是 VLM：把图像和文本一起作为输入，喂给同一个语言模型主干。代表作 LLaVA、GPT-4V、通义千问 VL。这样 AI 就"长出了眼睛"。
再往上是 VLA，视觉-语言-动作：它在 VLM 主干后接一个动作专家（Action Expert）——主干先吐出动作 token，动作专家再把它解码成机器人能执行的具体指令，比如七个自由度的关节运动。代表作 Google 的 RT-2、斯坦福的 OpenVLA、Physical Intelligence 的 π0。这样 AI 就"长出了手脚"。
另一条路是 World Model，世界模型：它不直接输出动作，而是学习世界的动态，预测"给定当前状态和动作，下一步世界会变成什么样"。代表作 LeCun 的 JEPA、DreamerV3、谷歌 Genie。
最后，把世界模型和动作结合，就是先在脑子里"做梦"模拟，再规划出最优动作——这就是 Dreamer 和 LeCun 设想的自主智能架构。
记住这个方向：越往上，AI 越接近"在物理世界里行动"，风险也就越实。
-->

---

# Demo · VLA 在做什么

<Tag class="mt-1 mb-4">Generalist · GEN-1 通用机器人 AI 模型</Tag>

<div class="vid-wrap">
  <video :src="'/videos/gen1.mp4'" controls preload="metadata" class="vid"></video>
</div>

<div class="text-sub text-sm text-center mt-3">
看到 → 理解指令 → 直接驱动机械臂动作<br/>
<span class="text-faint">这就是 VLA 模型——把"动作"放进了输出端</span>
</div>

<style scoped>
.vid-wrap { display: flex; justify-content: center; }
.vid { width: 620px; max-width: 100%; border-radius: 14px; box-shadow: 0 0 40px rgba(56,189,248,0.15); background: #000; }
</style>

<!--
口播（约 60 秒）：
讲了这么多原理，看个真实的 demo。
这是 Generalist 公司的 GEN-1，一个通用机器人 AI 模型。请大家注意——它是怎么把"看到的画面"和"我要它做什么的指令"融合起来，最后变成机械臂的物理动作的。
这就是 VLA 在跑。它的输出端不再是文字，而是机器人关节的运动指令。
这种东西强大、有用，但也意味着——AI 现在真的能在物理世界里"动手"了。后面我们提出的精卫、相得、玄阈，每一个都在回答同一个问题：能力变强以后，人的位置还在不在。
-->

---

# Demo · 类人级灵巧操作

<Tag class="mt-1 mb-4">Genesis AI · GENE-26.5 灵巧手</Tag>

<div class="vid-wrap">
  <video :src="'/videos/gene.mp4'" controls preload="metadata" class="vid"></video>
</div>

<div class="text-sub text-sm text-center mt-3">
做饭 · 单手打蛋 · 实验室操作 · 弹钢琴<br/>
<span class="text-faint">具身智能正在抹平"AI 能想"和"AI 能做"之间的差距</span>
</div>

<style scoped>
.vid-wrap { display: flex; justify-content: center; }
.vid { width: 620px; max-width: 100%; border-radius: 14px; box-shadow: 0 0 40px rgba(167,139,250,0.18); background: #000; }
</style>

<!--
口播（约 60 秒）：
再看一个更近的——Genesis AI 的 GENE-26.5。
请注意它的手——做饭、单手打蛋、做实验、弹钢琴。这种灵巧度，几年前还属于科幻。
这两个 demo 告诉我们：那一天不是"会不会来"，而是"已经来了"。所以我们今天讨论 AI 安全，不能再停留在"它能不能聊得很危险"，必须直面它"能不能动得很危险"。
而我们的回答是：把 AI 重新定义为"人的延展"——它的每一次行动，都必须以人的真实信号为标准才能启动。
-->
