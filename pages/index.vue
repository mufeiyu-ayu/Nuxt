<script lang="ts" setup>
const count = useCounter()
const color = useColor()
const router = useRouter()
const utilsCou = utilsCount()
const handleClick = () => {
  console.log(utilsCou, 'utilsCou')
  router.push('/about')
}
const total = increment(3)
const year: number = '2022'
const title: string = `${year} 2023 Nuxt3`
</script>

<template>
  <div>
    <h1>index page</h1>
    {{year}}
  </div>
  <div>
    <span>{{total}}</span>
    <button @click="handleClick">to about</button>
  </div>
  <div>
    <Happy />
  </div>
</template>

<style scoped></style>
