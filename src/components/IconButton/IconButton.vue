<script setup>
const { amount } = defineProps({
  amount: Number,
});
</script>

<template>
  <button>
    <slot></slot>
    <span v-if="amount">{{ amount }}</span>
  </button>
</template>

<style src="./IconButton.scss" scoped />
