<script setup>
import { Cart, Delete } from "mdue";
</script>

<template>
  <div class="cart-grid">
    <h4>Imagem</h4>
    <h4>Nome</h4>
    <h4>Qtd</h4>
    <h4>Preço</h4>
  </div>
  <article class="cart-grid cart-card">
    <img
      src="https://static.stealthelook.com.br/wp-content/uploads/2022/03/qual-a-serie-o-filme-e-o-livro-mais-lido-do-mundo-avatar-20220321164246.jpg"
    />
    <h3 class="title">Nome do Filme</h3>
    <p class="amount">1</p>
    <p class="price">R$ 10,00</p>
    <Delete class="icons" />
  </article>
</template>

<style src="./HorizontalCard.scss" scoped />
