<script lang="ts" setup="">
definePageMeta({
  name: "hello",
})
const router = useRouter()
console.log(router, 'router');
const handleRoute = () => {
  router.push("/dash")
}
</script>

<template>
  <div class="main">
    this is a hello page
  </div>
  <img src="~/public/ayu.jpeg" alt="">
  <div class="animate__animated animate__fadeInDownBig"> hello content</div>
  <h1 class="animate__animated animate__bounce">An animated element</h1>
  <div class="text-[#b0b0b0] text-[33px]">tailwind css</div>
  <button @click="handleRoute"> 跳转路由</button>
</template>

<style lang="scss" scoped>
.context {
  color: $text-color;
  background-color: $bg-color;
  font-size: $font-size;
}
</style>
