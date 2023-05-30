<script setup>
import { TransitionGroup, computed, ref } from "vue";
import { useStore } from "vuex";
import HorizontalCard from "@/components/HorizontalCard/HorizontalCard.vue";
import Modal from "@/components/Modal/Modal.vue";
import EmptyResult from "@/components/EmptyResult/EmptyResult.vue";
import { formatPrice } from "@/utils";
import { CartOff } from "mdue";

const { commit, getters } = useStore();
const isModalOpen = ref(false);

const handleModal = () => {
  isModalOpen.value = !isModalOpen.value;
  commit("setCart", []);
};

const userInfo = ref({
  name: "",
  cpf: "",
  phone: "",
  mailAddress: "",
  zipCode: "",
  address: "",
  city: "",
  state: "",
});

const cartList = computed(() => getters.renderCartList);
const totalCart = computed(() => formatPrice(getters.totalCart));
</script>

<template>
  <form class="container" @submit.prevent="handleModal">
    <h2>Finalizar Compra</h2>

    <section class="form">
      <input placeholder="Nome Completo" v-model="userInfo.name" required />
      <div class="input-group">
        <input
          placeholder="CPF"
          v-model="userInfo.cpf"
          v-mask="'###.###.###-##'"
          required
        />
        <div class="input-group" />
        <input
          placeholder="Celular"
          v-model="userInfo.phone"
          v-mask="'(##) # ####-####'"
          required
        />
      </div>
      <input placeholder="E-Mail" v-model="userInfo.mailAddress" required />
      <div class="input-group">
        <input
          placeholder="CEP"
          v-model="userInfo.zipCode"
          v-mask="'#####-###'"
          required
        />
        <input
          placeholder="Endereço"
          v-model="userInfo.address"
          class="bigger-divided"
          required
        />
      </div>
      <div class="input-group">
        <input placeholder="Cidade" v-model="userInfo.city" required />
        <input placeholder="Estado" v-model="userInfo.state" required />
      </div>
    </section>
    <div class="cart">
      <div class="cart-title">
        <p>Imagem</p>
        <p>Nome</p>
        <p>Qtd</p>
        <p>Preço</p>
      </div>
      <div class="cart-content">
        <TransitionGroup name="card">
          <HorizontalCard
            v-for="movie in cartList"
            :key="movie.id"
            :movie="movie"
            :isCart="true"
          />
        </TransitionGroup>
        <EmptyResult v-if="!cartList.length">
          <CartOff />
        </EmptyResult>
      </div>
      <div class="total">
        <p>Total:</p>
        <p>{{ totalCart }}</p>
      </div>
      <button :disabled="!cartList.length" type="submit">
        Finalizar Compra
      </button>
    </div>
  </form>
  <Modal v-if="isModalOpen" :name="userInfo.name.split(' ')[0]" />
</template>

<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 3px;
  background-color: transparent;
}

.card-enter-active,
.card-leave-active {
  transition: 0.6s all ease;
}

.card-enter-from {
  transform: translatex(-100%);
}

.card-leave-to {
  transform: translateX(100%);
}

.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 15px 20px;
  margin: 0 auto;
  max-width: 480px;
}

.form {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 10px;

  input {
    width: 100%;
  }
}

.cart-title {
  display: grid;
  width: 100%;
  align-items: center;
  padding: 0 10px;
  margin-bottom: 5px;
  gap: 10px;
  grid-template-columns: 1fr 1fr 20px 1fr 20px;
  font-size: 14px;
  font-weight: 600;
}

.cart-content {
  display: flex;
  flex-direction: column;
  padding: 5px;
  gap: 10px;
  height: 300px;
  overflow-y: scroll;
  overflow-x: hidden;
}

.total {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  font-size: 18px;
  color: $slate-800;
  font-weight: 600;
}

button {
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  background-color: $slate-100;
  color: $slate-800;
  padding: 10px;
  border: 1px solid $slate-400;
  border-radius: 5px;
  box-shadow: $box-shadow;
}

@media (min-width: 480px) {
  .input-group {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;

    input {
      width: 50%;
    }

    .bigger-divided {
      width: 75%;
    }
  }
}

@media (min-width: 1024px) {
  .container {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    max-width: 1000px;
  }

  .form {
    max-width: 460px;
  }

  h2,
  .cart {
    width: 100%;
  }

  .cart {
    max-width: 450px;
  }
}
</style>
