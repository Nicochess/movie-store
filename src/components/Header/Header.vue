<script setup>
import { Heart, Cart } from "mdue";
import IconButton from "../IconButton/IconButton.vue";
</script>

<template>
  <header>
    <div class="image-container">
      <img src="@/assets/storeIcon.png" />
    </div>
    <input placeholder="Busque por um clássico" />
    <div class="actions">
      <IconButton :amount="1">
        <Heart />
      </IconButton>
      <IconButton>
        <Cart />
      </IconButton>
    </div>
  </header>
</template>

<style src="./Header.scss" scoped />
