<template>
  <form>
    <input placeholder="Nome Completo" />
    <div class="input-group">
      <input placeholder="CPF" v-mask="'###.###.###-##'" />
      <input placeholder="Celular" v-mask="'(##) # ####-####'" />
    </div>
    <input placeholder="E-Mail" />
    <div class="input-group">
      <input placeholder="CEP" v-mask="'#####-###'" />
      <input placeholder="Endereço" class="bigger-divided" />
    </div>
    <div class="input-group">
      <input placeholder="Cidade" />
      <input placeholder="Estado" />
    </div>
  </form>
</template>

<style src="./Form.scss" scoped />
