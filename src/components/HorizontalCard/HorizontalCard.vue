<script setup>
import { Cart, Delete } from "mdue";
import ImageFallback from "../ImageFallback/ImageFallback.vue";
import { useStore } from "vuex";
import { computed } from "vue";

const { movie, isCart } = defineProps({
  movie: Object,
  isCart: Boolean,
});

const { dispatch, getters } = useStore();
const handleDelete = () => {
  if (isCart) {
    dispatch("removeFromCart", movie);
    return;
  }

  dispatch("removeFromFavorites", movie);
};

const amount = computed(() => getters.findAmountById(movie.id));
</script>

<template>
  <article :class="`${isCart ? 'cart' : 'favorite'} cart-grid cart-card`">
    <ImageFallback :src="movie.image" :alt="movie.title" />
    <h3 class="title">{{ movie.title }}</h3>
    <p v-if="isCart" class="amount">{{ amount.length }}</p>
    <p class="price">{{ movie.price }}</p>
    <Cart v-if="!isCart" class="icons" @click="dispatch('addToCart', movie)" />
    <Delete class="icons" @click="handleDelete" />
  </article>
</template>

<style src="./HorizontalCard.scss" scoped />
