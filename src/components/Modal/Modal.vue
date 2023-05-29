<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="overlay">
    <div class="modal">
      <h5>Obrigado Nicolas!</h5>
      <p>Compra finalizada com sucesso!</p>
      <RouterLink to="/" class="back">Voltar para loja</RouterLink>
    </div>
  </div>
</template>

<style src="./Modal.scss" scoped />
