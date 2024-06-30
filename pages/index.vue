<script setup lang="ts">
definePageMeta({
  layout: false,
})
</script>

<template>
  <div>
    <NuxtLayout name="default">
      <template #header> Some header template content.</template>

      The rest of the page
    </NuxtLayout>
  </div>
</template>
