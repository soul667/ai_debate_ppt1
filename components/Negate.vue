<script setup lang="ts">
// Negate — "被否定的说法"。拆解卡片：左侧 rose ✗ 判决块 + "不成立" + 删除线正文。
</script>

<template>
  <div class="dx">
    <span class="dx-x" aria-hidden="true">✗</span>
    <span class="dx-body">
      <span class="dx-text"><slot /></span>
    </span>
  </div>
</template>

<style scoped>
.dx {
  display: inline-flex;
  align-items: stretch;
  font-style: normal;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(251, 113, 133, 0.22);
  background: rgba(255, 255, 255, 0.015);
}
.dx-x {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.6rem;
  font-style: normal;
  font-size: 1.85rem;
  font-weight: 700;
  color: #fb7185;
  background: rgba(251, 113, 133, 0.1);
  border-right: 1px solid rgba(251, 113, 133, 0.22);
}
.dx-body {
  display: flex;
  align-items: center;
  padding: 0.9rem 1.6rem;
  text-align: left;
}
.dx-text {
  font-style: normal;
  font-size: 1.42rem;
  color: #8b93a5;
  letter-spacing: 0.04em;
  text-decoration: line-through;
  text-decoration-color: rgba(251, 113, 133, 0.45);
  text-decoration-thickness: 2px;
}
</style>
