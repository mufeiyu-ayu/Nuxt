<script lang="ts" setup="">

</script>

<template>
  <slot v-if="$slots.header">
    this is a app-header content
  </slot>
  <div>
    <slot>this is a header component</slot>
  </div>
  <slot v-if="$slots.footer">
    this is a app-footer content
  </slot>
</template>

<style lang="scss" scoped>

</style>