<script setup>
import { RouterView } from "vue-router";
import { useStore } from "vuex";
import Header from "./components/Header/Header.vue";
import CartProducts from "./components/CartProducts/CartProducts.vue";
import CartFavorites from "./components/CartFavorites/CartFavorites.vue";
import { TransitionGroup } from "vue";

const { dispatch, state, commit } = useStore();
const cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
const favoriteProducts =
  JSON.parse(localStorage.getItem("favoritesProducts")) || [];

commit("setCart", cartProducts);
commit("setFavorites", favoriteProducts);
dispatch("fetchGenreList");
</script>

<template>
  <Header />
  <div class="content">
    <TransitionGroup name="list">
      <CartProducts v-if="state.isModal == 'cart'" />
      <CartFavorites v-if="state.isModal == 'favorites'" />
    </TransitionGroup>
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.list-enter-active,
.list-leave-active {
  transition: 0.5s all ease;
}

.list-enter-from {
  transform: translateX(100%);
} 

.list-leave-to {
transform: translateX(100%);
}
</style>
