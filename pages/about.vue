<script lang="ts" setup="">
const router = useRouter()
const count = useCounter()
const color = useColor()
const handleClick=()=>{
  router.push('/')
}
</script>

<template>
  <div>about</div>
  <h1>Count:{{count}}</h1>
  <h1>Color:{{color}}</h1>
  <button @click="count++">+</button><br/>
  <button @click="count--">-</button><br/>
  <button @click="color='blue'">changeColor</button><br/>
  <button @click="handleClick">to index</button>
</template>

<style scoped>

</style>