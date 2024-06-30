<script setup lang="ts">
useSeoMeta({
  title:"auth",
  description:"auth",
})
definePageMeta({
  middleware: 'auth',
  title:"auth",
  validate:async(route)=>{
    console.log(route,'validate-route');
    return true
  }
})
</script>

<template>
  <h1>Welcome to your dashboard</h1>
</template>
