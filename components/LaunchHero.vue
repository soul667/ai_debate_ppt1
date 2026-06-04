<script setup lang="ts">
defineProps<{
  kicker?: string
  title: string
  subtitle?: string
  align?: 'center' | 'left'
}>()
</script>

<template>
  <div class="launch-hero" :class="align === 'left' ? 'is-left' : 'is-center'">
    <div v-if="kicker" class="launch-kicker">{{ kicker }}</div>
    <h1 class="launch-title">{{ title }}</h1>
    <p v-if="subtitle" class="launch-sub">{{ subtitle }}</p>
  </div>
</template>

<style scoped>
.launch-hero.is-center { text-align: center; max-width: 52rem; margin: 0 auto; }
.launch-hero.is-left { text-align: left; max-width: 56rem; margin: 0 auto; }
.launch-kicker {
  font-size: 0.78rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: #6b7689;
  margin-bottom: 1.1rem;
}
.launch-title {
  font-family: 'Inter Variable', sans-serif;
  font-size: clamp(2rem, 4.2vw, 3.15rem);
  font-weight: 600;
  line-height: 1.12;
  letter-spacing: -0.03em;
  color: #fff;
  margin: 0;
  padding: 0;
}
.launch-title::before { display: none !important; }
.launch-sub {
  margin-top: 1.25rem;
  font-size: clamp(1.05rem, 2vw, 1.45rem);
  line-height: 1.45;
  font-weight: 400;
  background: linear-gradient(92deg, #34d399, #7dd3fc);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
</style>