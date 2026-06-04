<script setup lang="ts">
// Fishbone — 横向鱼骨图（因果图）。
// 用对称网格：上排 N 个、下排 N 个分支均匀分布；每个分支是
// 「卡片 + 居中竖线」的垂直单元，竖线从卡片中心垂直接到主骨，保证对齐。
interface Bone { k: string; en: string; desc: string; tone: string }
const props = defineProps<{ head?: string; bones?: Bone[] }>()
const all = props.bones ?? []
const half = Math.ceil(all.length / 2)
const top = all.slice(0, half)
const bot = all.slice(half)
</script>

<template>
  <div class="fb">
    <div class="rail">
      <div class="branch" v-for="(b,i) in top" :key="'t'+i" :class="`t-${b.tone}`">
        <div class="bone-card">
          <div class="bk">{{ b.k }}<span class="ben">{{ b.en }}</span></div>
          <div class="bd">{{ b.desc }}</div>
        </div>
        <div class="stem stem-down" />
      </div>
    </div>

    <div class="spine-wrap">
      <div class="spine" />
      <div class="head">{{ head }}</div>
    </div>

    <div class="rail">
      <div class="branch" v-for="(b,i) in bot" :key="'b'+i" :class="`t-${b.tone}`">
        <div class="stem stem-up" />
        <div class="bone-card">
          <div class="bk">{{ b.k }}<span class="ben">{{ b.en }}</span></div>
          <div class="bd">{{ b.desc }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fb { width: 100%; padding: 0 1rem; }

/* 上下排都用等分网格，列数自适应分支数；每列内部居中 → 竖线与卡片自然对齐 */
.rail {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  gap: 1.5rem;
  padding: 0 5rem;
}
.rail:last-child { padding: 0 5rem 0 7rem; }

.branch { display: flex; flex-direction: column; align-items: center; }

.bone-card {
  width: 100%; max-width: 11rem;
  background: linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03));
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 12px;
  padding: 0.65rem 0.85rem;
  backdrop-filter: blur(6px);
}
.bk { font-size: 1rem; color: #fff; display: flex; align-items: baseline; gap: 0.4rem; line-height: 1.2; }
.ben { font-size: 0.64rem; letter-spacing: 0.06em; text-transform: uppercase; color: #aeb9cc; }
.bd { font-size: 0.74rem; color: #aeb9cc; margin-top: 0.2rem; line-height: 1.4; }

/* 竖线居中（branch 是 align-items:center，stem 自然落在卡片水平中点） */
.stem { width: 2px; height: 1.6rem; }
.stem-down { background: linear-gradient(180deg, currentColor, transparent); }
.stem-up { background: linear-gradient(0deg, currentColor, transparent); }

.spine-wrap { display: flex; align-items: center; margin: 0.15rem 0; }
.spine { flex: 1; height: 3px; border-radius: 3px; background: linear-gradient(90deg, rgba(255,255,255,0.12), rgba(52,211,153,0.65)); }
.head {
  flex-shrink: 0; margin-left: -1px;
  background: linear-gradient(92deg, #34d399, #38bdf8);
  color: #06070b; font-size: 1.05rem; font-weight: 600;
  padding: 0.7rem 1.3rem 0.7rem 1.9rem; border-radius: 4px;
  clip-path: polygon(14% 0, 100% 0, 100% 100%, 14% 100%, 0 50%);
}

.t-emerald { color: #34d399; } .t-emerald .bone-card { border-color: rgba(52,211,153,0.4); }
.t-sky { color: #38bdf8; } .t-sky .bone-card { border-color: rgba(56,189,248,0.4); }
.t-amber { color: #fbbf24; } .t-amber .bone-card { border-color: rgba(251,191,36,0.4); }
.t-violet { color: #a78bfa; } .t-violet .bone-card { border-color: rgba(167,139,250,0.4); }
.t-rose { color: #fb7185; } .t-rose .bone-card { border-color: rgba(251,113,133,0.4); }
.bk { color: #fff; }
.t-emerald .bk { color: #6ee7b7; } .t-sky .bk { color: #7dd3fc; }
.t-amber .bk { color: #fcd34d; } .t-violet .bk { color: #c4b5fd; } .t-rose .bk { color: #fda4af; }
</style>
