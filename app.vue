<script lang="ts" setup="">
// ·useSeoMeta 可组合项可让您将网站的 SEO 元标记定义为具有完整 TypeScript 支持的平面对象。

</script>

<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<style>
.layout-enter-active,
.layout-leave-active {
  transition: opacity 2s ease;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
}
</style>
