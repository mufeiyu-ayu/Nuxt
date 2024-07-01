<script setup lang=ts>
const useColor = () => useState<string>('color', () => 'pink')
const color = useColor()
console.log(color,'color');
</script>
<template>
  <div>
    <h1>Home page</h1>
    <div>color:{{color}}</div>
     <button @click="color='red'">change</button>
    <NuxtLink to="/about">About page</NuxtLink>
  </div>
</template>
