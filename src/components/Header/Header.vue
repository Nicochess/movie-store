<script setup>
import { Heart, Cart } from "mdue";
import { RouterLink } from "vue-router";
import IconButton from "../IconButton/IconButton.vue";
import { useStore } from "vuex";
import { computed } from "vue";

const { state, commit } = useStore();

const cartItems = computed(() => state.cartProducts.length);
const favoriteItems = computed(() => state.favoriteProducts.length);
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
    <RouterLink to="/" class="image-container">
      <img src="@/assets/storeIcon.png" />
    </RouterLink>

    <input placeholder="Busque por um clássico" v-model="search" />
    <div class="actions">
      <IconButton :amount="favoriteItems" @click="handleModal('favorites')">
        <Heart class="heart" />
      </IconButton>
      <IconButton :amount="cartItems" @click="handleModal('cart')">
        <Cart class="cart" />
      </IconButton>
    </div>
  </header>
</template>

<style src="./Header.scss" scoped />
