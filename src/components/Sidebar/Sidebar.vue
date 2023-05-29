<script setup>
import HorizontalCard from "../HorizontalCard/HorizontalCard.vue";

const { items } = defineProps({
  items: Array,
  title: String,
});
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar-title">
      <h3>{{ title }}</h3>
      <span>Esvaziar</span>
    </div>
    <div class="sidebar-content">
      <HorizontalCard v-for="item in items" :key="item.id" :movie="item" />
    </div>
    <slot />
  </aside>
</template>

<style src="./Sidebar.scss" scoped />
