<template>
  <div class="checkbox">
    <div class="checkbox__item">
      <input class="checkbox__input" type="checkbox"/>
      <label class="checkbox__label"><slot/></label>
    </div>
  </div>
</template> 
<script setup lang="ts">

</script>

<style scoped lang="scss">
  @use 'assets/styles/media';
 .checkbox{
  display: flex;
  align-items: flex-start;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);

  @include media.media-breakpoint-down(sm) {
    font-size: var(--font-size-ss);
  }

  &__item {
    width: 100%;
  }
 }
 .checkbox__input {
    @include media.media-breakpoint-down(sm) {
      margin-top: 2px;
    }
  }
</style>

