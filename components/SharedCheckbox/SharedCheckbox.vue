<template>
  <div class="checkbox">
    <input class="checkbox__input" type="checkbox">
    <label for="checkbox" class="checkbox__label">
      <slot/>
    </label>
  </div>
</template> 
<script setup lang="ts">

</script>

<style scoped lang="scss">
  @use 'assets/styles/media';
 .checkbox{
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);

  @include media.media-breakpoint-down(sm) {
    font-size: var(--font-size-ss);
  }
 }
 .checkbox__input {
    @include media.media-breakpoint-down(sm) {
      margin-top: 2px;
    }
  }
</style>

