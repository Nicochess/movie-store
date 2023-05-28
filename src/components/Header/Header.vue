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
      <IconButton :amount="9">
        <Heart class="heart"/>
      </IconButton>
      <IconButton :amount="3">
        <Cart class="cart" />
      </IconButton>
    </div>
  </header>
</template>

<style src="./Header.scss" scoped />
