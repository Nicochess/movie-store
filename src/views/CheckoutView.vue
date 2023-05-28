<script setup>
import Form from "../components/Form/Form.vue";
import HorizontalCard from "@/components/HorizontalCard/HorizontalCard.vue";
import Modal from "../components/Modal/Modal.vue";

</script>

<template>
  <div class="container">
    <h2>Finalizar Compra</h2>
    <Form class="form"/>
    <div class="cart">
      <HorizontalCard />
      <div class="total">
        <p>Total:</p>
        <p>R$ 20,00</p>
      </div>
      <button>Finalizar Compra</button>
    </div>
  </div>
  <Modal />
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 15px 20px;
  margin: 0 auto;
  max-width: 480px;
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
