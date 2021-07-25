<template>
  <el-container>
    <el-header class="header">
      <div class="title">家計簿アプリ</div>
      <div>
        <div v-if="$auth.loggedIn">{{ $store.state.auth.user.name }}さん、こんにちは</div>
        <nuxt-link to="/test"><el-button size="midium" type="primary" icon="el-icon-document" circle style="margin-right: 10px"></el-button></nuxt-link>
        <el-button size="midium" type="primary" icon="el-icon-user" circle></el-button>
      </div>
    </el-header>
    <el-main><Nuxt /></el-main>
  </el-container>
</template>

<script>
  export default {
    name: 'default' // エラーが出るため
  }
</script>

<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
  }
  .title {
    font-size: 2em;
  }

</style>