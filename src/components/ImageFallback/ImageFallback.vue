<script setup>
import { ref } from "vue";
import Fallback from "@/assets/fallback.png";

const props = defineProps({
  src: String,
  alt: String,
});

const data = ref(props);
const error = ref(false);

const handleFallback = () => {
  error.value = true;
  data.value = {
    src: Fallback,
    alt: "Default Image",
  };
};
</script>

<template>
  <img
    :src="data.src"
    :alt="data.alt"
    @error="handleFallback"
    :class="error && 'fallback'"
  />
</template>

<style scoped>
.fallback {
  object-fit: contain !important;
}
</style>
