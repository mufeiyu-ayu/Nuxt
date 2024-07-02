<script lang="ts" setup>
const count = useCounter()
const color = useColor()
const router = useRouter()
const utilsCou = utilsCount()
const handleClick = () => {
  console.log(utilsCou, 'utilsCou')
  router.push('/about')
}
</script>

<template>
  <div>
    <h1>Counter: {{ count }}</h1>
    <h1>Color:{{ color }}</h1>
    <button @click="count++">+</button><br />
    <button @click="count--">-</button><br />
    <button @click="color = 'red'">changeColor</button><br />
  </div>
  <div>
    <button @click="handleClick">to about</button>
  </div>
  <div>
    <Happy />
  </div>
</template>

<style scoped></style>
