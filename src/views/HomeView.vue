<script setup>
import Card from "../components/Card/Card.vue";
</script>

<template>
  <div class="card-list">
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </div>
</template>

<style scoped>
.card-list {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(140px, 45%));
  gap: 20px 10px;
  padding: 0 10px 30px;
  margin: 0 auto;
  max-width: 1000px;
}

@media (min-width: 468px) {
  .card-list {
    grid-template-columns: repeat(auto-fit, minmax(190px, 21%));
    gap: 40px 30px;
  }
}
</style>
