<script setup>
import { RouterView } from "vue-router";
import { useStore } from "vuex";
import Header from "./components/Header/Header.vue";
import CartProducts from "./components/CartProducts/CartProducts.vue";
import CartFavorites from "./components/CartFavorites/CartFavorites.vue";

const { dispatch, state, commit } = useStore();
const cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
const favoriteProducts = JSON.parse(localStorage.getItem("favoritesProducts")) || [];

commit("setCart", cartProducts);
commit("setFavorites", favoriteProducts);
dispatch("fetchGenreList");
</script>

<template>
  <Header />
  <div class="content">
    <CartProducts v-if="state.isModal == 'cart'" />
    <CartFavorites v-if="state.isModal == 'favorites'" />
    <Suspense>
      <template #default>
        <RouterView />
      </template>
      <template #fallback> Loading...</template>
    </Suspense>
  </div>
</template>

<style lang="scss" scoped></style>
