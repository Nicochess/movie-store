<script setup>
import Card from "@/components/Card/Card.vue";
import { popularMovies } from "@/services/movieService.js";

const { results } = await popularMovies();
</script>

<template>
  <div class="card-list">
    <Card v-for="movie in results" :key="movie.id" :movie="movie" />
  </div>
</template>

<style scoped>
.card-list {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(44%, 200px));
  gap: 20px 10px;
  padding: 0 10px 30px;
  margin: 0 auto;
  max-width: 1000px;
}

@media (min-width: 468px) {
  .card-list {
    grid-template-columns: repeat(auto-fit, minmax(21%, 200px));
    gap: 40px 30px;
  }
}
</style>
