<script setup>
import { useStore } from "vuex";
import Sidebar from "../Sidebar/Sidebar.vue";

const { state } = useStore();
</script>

<template>
  <Sidebar :items="state.favoriteProducts" :title="'Meus Favoritos'"/>
</template>

<style src="./CartFavorites.scss" scoped />
