<script setup>
import { Star, Heart, Cart } from "mdue";
import { onMounted, reactive, computed } from "vue";
import { formatPrice, convertDate } from "@/utils";
import { useStore } from "vuex";
import ImageFallback from "../ImageFallback/ImageFallback.vue";

const { movie } = defineProps({
  movie: Object,
});

const store = useStore();
const movieProduct = reactive({ ...movie, price: 10 });

const processProps = () => {
  movieProduct.image = import.meta.env.VITE_IMAGE_URL + movie.poster_path;
  movieProduct.rate = Math.floor(movie.vote_average);
  movieProduct.price = formatPrice(movieProduct.rate * 5);
  movieProduct.date = convertDate(movie.release_date);
  movieProduct.genre = store.getters.findGenreById(movie.genre_ids[0]);
};

const isFavorite = computed(() =>
  store.getters.findFavoriteById(movieProduct.id)
);

const addToCart = () => {
  store.dispatch("addToCart", movieProduct);
};

const handleFavorite = () => {
  if (isFavorite.value) {
    store.dispatch("removeFromFavorites", movieProduct);
    return;
  }

  store.dispatch("addToFavorites", movieProduct);
};

onMounted(() => {
  processProps();
});
</script>

<template>
  <article>
    <div class="image-container">
      <Heart
        :class="`${isFavorite && 'active'} favorite`"
        @click="handleFavorite"
      />
      <ImageFallback
        class="banner"
        :src="movieProduct.image"
        :alt="movieProduct.title"
      />
      <p class="date">{{ movieProduct.date }}</p>
    </div>
    <div class="details">
      <h3 class="title">{{ movieProduct.title }}</h3>
      <div class="category">
        <div class="star" @click="handleFavorite">
          <Star class="star-icon" />
          <span class="star-text">{{ movieProduct.rate }}</span>
        </div>

        <p>{{ movieProduct.genre && movieProduct.genre.name }}</p>
      </div>
      <p class="price">{{ movieProduct.price }}</p>
    </div>
    <button @click="addToCart" :disabled="Number(movieProduct.rate) == 0"><Cart class="cart-icon" /> Adicionar</button>
  </article>
</template>

<style src="./Card.scss" scoped />
