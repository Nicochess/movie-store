<script setup>
import { Heart, Cart } from "mdue";
import { RouterLink } from "vue-router";
import IconButton from "../IconButton/IconButton.vue";
import { useStore } from "vuex";
import { computed } from "vue";
import { scrollToTop } from "@/utils";

const { state, commit } = useStore();

const cartItems = computed(() => state.Cart.products.length);
const favorites = computed(() => state.Favorites.products.length);
const search = computed({
  get: () => state.search,
  set: (value) => commit("setSearch", value),
});
const handleModal = (payload) => {
  if (payload === state.isModal) {
    commit("setModal", "");
    return;
  }
  commit("setModal", payload);
};
</script>

<template>
  <header>
    <RouterLink to="/" class="image-container" @click="scrollToTop">
      <img src="@/assets/storeIcon.png" />
    </RouterLink>

    <input placeholder="Busque por um clássico" type="search" v-model="search" />
    <div class="actions">
      <IconButton :amount="favorites" @click="handleModal('favorites')"
        :style="state.isModal == 'favorites' && { 'background-color': '#DDD' }">
        <Heart class="heart" />
      </IconButton>
      <IconButton :amount="cartItems" @click="handleModal('cart')"
        :style="state.isModal == 'cart' && { 'background-color': '#DDD' }">
        <Cart class="cart" />
      </IconButton>
    </div>
  </header>
</template>

<style src="./Header.scss" scoped />
