<script setup>
import Header from "./components/Header/Header.vue";
import { RouterView } from "vue-router";
import Sidebar from "./components/Sidebar/Sidebar.vue";
import { useStore } from "vuex";

const { dispatch } = useStore();
dispatch("fetchGenreList");
</script>

<template>
  <Header />
  <div class="content">
    <Sidebar />
    <Suspense>
      <template #default>
        <RouterView />
      </template>
      <template #fallback> Loading...</template>
    </Suspense>
  </div>
</template>

<style lang="scss" scoped></style>
