<script setup>
import Header from "./components/Header/Header.vue";
import { RouterView } from "vue-router";
import Sidebar from "./components/Sidebar/Sidebar.vue";
</script>

<template>
  <Header />
  <div class="content">
    <Sidebar />
    <RouterView />
  </div>
</template>

<style lang="scss" scoped></style>
