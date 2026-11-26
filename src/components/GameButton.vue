<script setup lang="ts">
defineEmits<{ (e: 'click'): void }>()
</script>

<template>
  <button type="button" @click="$emit('click')">Click!</button>
</template>

<style scoped>
button {
  font-size: 1.5rem;
  font-weight: 700;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 999px;
  color: #fff;
  background: var(--accent);
  cursor: pointer;
  box-shadow: var(--shadow);
  transition: transform 0.1s ease, filter 0.1s ease;
}

button:hover {
  filter: brightness(1.05);
}

button:active {
  transform: scale(0.97);
}
</style>
