<template>
  <section class="empty">
    <slot />
    Aqui está vazio :(
  </section>
</template>

<style lang="scss">
.empty {
  @include flexCenter;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  font-size: 16px;
  font-weight: 500;
  color: $slate-500;

  svg {
    font-size: 50px;
  }
}
</style>
