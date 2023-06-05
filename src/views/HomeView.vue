<script setup>
import Card from "@/components/Card/Card.vue";
import { popularMovies, queryMovies } from "@/services/movieService.js";
import { watch, ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import EmptyResult from "@/components/EmptyResult/EmptyResult.vue";
import { SearchWeb, Loading } from "mdue";
import { scrollToTop } from "@/utils";

const store = useStore();
const movies = ref([]);
const search = computed(() => store.state.search);
const pageCount = ref(1);
const isLoading = ref(false);

const getPopularMovies = async (nextPage) => {
  const { results, page } = await popularMovies(nextPage);
  movies.value = results;
  pageCount.value = page + 1;
};

const getMoviesBySearch = async (query) => {
  if (!query) {
    getPopularMovies();
    return;
  }

  const { results } = await queryMovies(query);
  movies.value = results;
};

watch(search, (newValue) => {
  scrollToTop();
  pageCount.value = 2;
  getMoviesBySearch(newValue);
});

const handleScroll = async () => {
  if (isLoading.value) return;
  if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 300) {
    isLoading.value = true;

    if (!search.value.length) {
      const { results, page } = await popularMovies(pageCount.value);
      movies.value = [...movies.value, ...results];
      pageCount.value = page + 1;
      isLoading.value = false;
      return;
    }

    const { results, page } = await queryMovies(search.value, pageCount.value);
    pageCount.value = page + 1;
    movies.value = [...movies.value, ...results];

    isLoading.value = false;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  getPopularMovies();
});

</script>

<template>
  <div class="card-list" ref="scrollComponent">
    <Card v-for="movie in movies" :key="movie.id" :movie="movie" v-if="store.state.genreList.length" />
    <EmptyResult v-if="!movies.length && !store.state.isLoading">
      <SearchWeb />
    </EmptyResult>
  </div>
  <Loading class="loading" v-if="store.state.isLoading" />
</template>

<style scoped>
.card-list {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(44%, 230px));
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
