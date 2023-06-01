<script setup>
const { message } = defineProps({
  message: String
})
</script>

<template>
  <div class="toast">
    <span class="message">{{ message }}</span>
  </div>
</template>

<style src="./Toast.scss" scoped />