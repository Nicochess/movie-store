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
const amount = computed(() => getters.findAmountById(movie.id));
</script>

<template>
  <article class="cart-grid cart-card">
    <ImageFallback :src="movie.image" :alt="movie.title" />
    <h3 class="title">{{ movie.title }}</h3>
    <p class="amount">{{ amount.length }}</p>
    <Cart v-if="isCart" @click="dispatch('addToCart', movie)" />
    <p class="price">{{ movie.price }}</p>
    <Delete
      class="icons"
      v-if="!isCart"
      @click="dispatch('removeFromCart', movie)"
    />
  </article>
</template>

<style src="./HorizontalCard.scss" scoped />
