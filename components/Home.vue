<script setup lang="ts">
const title = ref('defualt')
const getDataHandle =async()=>{
  const res = await $fetch('/api/test')
  title.value = res.data
}
</script>

<template>
  <div class="main">this is a home component111</div>
  <div>
    <button @click="getDataHandle"> 点击获取数据</button>
  </div>
  <div>
      <button @click="$router.push('/')"> 路由跳转</button>
  </div>
  <div>name-{{title  }}</div>
</template>
