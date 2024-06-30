<script lang="ts" setup="">
// ·useSeoMeta 可组合项可让您将网站的 SEO 元标记定义为具有完整 TypeScript 支持的平面对象。
useSeoMeta({
  title: 'My Amazing Site',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
const title = ref('Hello World')
</script>

<template>
  <Head>
      <!-- <Title>{{ title }}</Title> -->
      <!-- <Meta name="description" :content="title" /> -->
     
    </Head>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<style lang="scss" scoped>

</style>
