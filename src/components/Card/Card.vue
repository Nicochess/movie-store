<script setup>
import { Star, Heart, Cart } from "mdue";
</script>

<template>
  <article>
    <div class="image-container">
      <Heart class="favorite" />
      <img
        src="https://www.themoviedb.org/t/p/w220_and_h330_face/diS4zWXohKIp9VuN9sJDRrqe5en.jpg"
      />
      <p class="date">20/10/2001</p>
    </div>
    <div class="details">
      <h3 class="title">Title de Filme</h3>
      <div class="category">
        <div class="star">
          <Star class="star-icon" />
          <span class="star-text">7</span>
        </div>

        <p>Terror</p>
      </div>
      <p class="price">R$ 15,00</p>
    </div>
    <button><Cart class="cart-icon"/> Adicionar</button>
  </article>
</template>

<style src="./Card.scss" scoped />
