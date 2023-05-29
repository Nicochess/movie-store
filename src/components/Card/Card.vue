<script setup>
import { Star, Heart, Cart } from "mdue";
import { onMounted, reactive } from "vue";
import { formatPrice, convertDate } from "@/utils";

const { movie } = defineProps({
  movie: Object,
});

console.log(movie);

const movieProduct = reactive({ ...movie, price: 10 });

const processProps = () => {
  movieProduct.image = import.meta.env.VITE_IMAGE_URL + movie.poster_path;
  movieProduct.rate = Math.floor(movie.vote_average);
  movieProduct.price = formatPrice(movieProduct.rate * 5);
  movieProduct.date = convertDate(movie.release_date);
  //movieProduct.genre = genreById(movie.genre_ids[0]);
};

onMounted(() => {
  processProps();
});
</script>

<template>
  <article>
    <div class="image-container">
      <Heart class="favorite" />
      <img :src="movieProduct.image" />
      <p class="date">{{ movieProduct.date }}</p>
    </div>
    <div class="details">
      <h3 class="title">{{ movieProduct.title }}</h3>
      <div class="category">
        <div class="star">
          <Star class="star-icon" />
          <span class="star-text">{{ movieProduct.rate }}</span>
        </div>

        <p>Terror</p>
      </div>
      <p class="price">{{ movieProduct.price }}</p>
    </div>
    <button><Cart class="cart-icon" /> Adicionar</button>
  </article>
</template>

<style src="./Card.scss" scoped />
