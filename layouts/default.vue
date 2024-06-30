<script lang="ts" setup="">

import AppHeader from "~/components/app-header.vue";
import AppFooter from "~/components/app-footer.vue";
</script>

<template>
  <div>
    <app-header>
      <slot name="header">
        this is a default header slot
      </slot>
    </app-header>
    <slot/>
    <AppFooter/>
  </div>
</template>

