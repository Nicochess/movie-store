<script setup>
import { useStore } from "vuex";
import Sidebar from "../Sidebar/Sidebar.vue";
import { useRouter } from "vue-router";
import { formatPrice } from "@/utils";
import { computed } from "vue";

const { movie } = defineProps({
  movie: Object,
});

const { getters, commit } = useStore();
const router = useRouter();

const goToCheckout = () => {
  commit("setModal", "");
  router.push("/checkout");
};

const renderList = computed(() => getters.renderCartList);
const totalCart = computed(() => formatPrice(getters.totalCart));
</script>

<template>
  <Sidebar :items="renderList" :title="'Meu Carrinho'" :isCart="true">
    <template #default>
      <div class="total">
        <p>Total:</p>
        <p>{{ totalCart }}</p>
      </div>
      <button
        @click="goToCheckout"
        :disabled="!renderList.length"
        class="checkout"
      >
        Finalizar
      </button>
    </template>
  </Sidebar>
</template>

<style src="./CartProducts.scss" scoped />
