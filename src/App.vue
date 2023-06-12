<script setup>
import { RouterView } from "vue-router";
import { useStore } from "vuex";
import Header from "./components/Header/Header.vue";
import CartProducts from "./components/CartProducts/CartProducts.vue";
import CartFavorites from "./components/CartFavorites/CartFavorites.vue";
import { TransitionGroup, Transition } from "vue";
import Toast from "./components/Toast/Toast.vue";

const { dispatch, state, commit } = useStore();
const products = JSON.parse(localStorage.getItem("cartProducts")) || [];
const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

commit("setCart", products);
commit("setFavorites", favorites);
dispatch("fetchGenreList");
</script>

<template>
  <Header />
  <div class="content">
    <TransitionGroup name="list">
      <CartProducts v-if="state.isModal == 'cart'" />
      <CartFavorites v-if="state.isModal == 'favorites'" />
    </TransitionGroup>
    <Transition name="up">
      <Toast v-if="state.Toast.message" :message="state.Toast.message" />
    </Transition>
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.list-enter-active,
.list-leave-active {
  transition: 0.3s all ease;
}

.list-enter-from {
  transform: translateX(100%);
}

.list-leave-to {
  transform: translateX(100%);
}

.up-enter-active,
.up-leave-active {
  transition: 0.2s all ease;
}

.up-enter-from {
  transform: translateY(100%);
}

.up-leave-to {
  transform: translateY(150%);
}
</style>
