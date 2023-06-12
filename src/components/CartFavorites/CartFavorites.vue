<script setup>
import { useStore } from "vuex";
import Sidebar from "../Sidebar/Sidebar.vue";

const { state } = useStore();
</script>

<template>
  <Sidebar :items="state.Favorites.products" :title="'Meus Favoritos'" />
</template>
