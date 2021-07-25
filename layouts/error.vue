<template>
  <div>
    <h1 v-if="error.statusCode === 404">ページが見つかりません</h1>
    <h1 v-else>予期せぬエラーです</h1>
    <NuxtLink to="/">Top</NuxtLink>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error'
  }
</script>