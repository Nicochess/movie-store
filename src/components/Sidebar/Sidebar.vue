<script setup>
import { useStore } from "vuex";
import HorizontalCard from "../HorizontalCard/HorizontalCard.vue";
import EmptyResult from "../EmptyResult/EmptyResult.vue";
import { CartOff, HeartBroken } from "mdue";
import { TransitionGroup, ref } from "vue";

const { items, title, isCart } = defineProps({
  items: Array,
  title: String,
  isCart: Boolean,
});

const { dispatch } = useStore();

const handleDeleteAll = () => {
  if (isCart) {
    dispatch("commitCart", []);
    return;
  }

  dispatch("commitFavorites", []);
};

const transitionEnded = ref(false)
const handleTransition = () => {
  transitionEnded.value = !transitionEnded.value
}
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar-title">
      <h3>{{ title }}</h3>
      <span @click="handleDeleteAll">Esvaziar</span>
    </div>
    <div class="sidebar-content">
      <TransitionGroup name="card" @afterLeave="handleTransition" @beforeLeave="handleTransition">
        <HorizontalCard v-for="item in items" :key="item.id" :movie="item" :isCart="isCart" />
      </TransitionGroup>
      <EmptyResult v-if="!items.length && !transitionEnded">
        <CartOff v-if="isCart" />
        <HeartBroken v-else />
      </EmptyResult>
    </div>
    <slot />
  </aside>
</template>

<style src="./Sidebar.scss" scoped />
