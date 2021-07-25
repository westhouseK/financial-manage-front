<template>
  <div>
    <el-card class="box-card login"> 
      <div slot="header" class="clearfix">
        <span>Login</span>
      </div>
      <el-form @submit.prevent ref="form" :model="user" label-width="10%">
        <el-form-item for="name" label="Name">
          <el-input placeholder="Please input name" v-model="user.name"></el-input>
        </el-form-item>
        <el-form-item for="password" label="Password">
          <el-input placeholder="Please input password" v-model="user.password" show-password></el-input>
        </el-form-item>
        <el-button type="primary" @click="loginUser('aaa')">ログイン</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          name: '',
          password: ''
        },
        validate: {
          result: ''
        }
      }
    },
    methods: {
      // TODO: Mockによる実装をバックエンドでする
      loginUser() {
        console.log('loginを実行')

        // FIXME: ログイン状態が維持できない
        if (this.isInvalid(this.user.name, this.user.password)) {
          this.open('Name or Password is miss')
          console.log('loginに失敗')
          return
        }

        console.log('loginに成功')
        this.$auth.setUser(this.user)
        // TODO: バックエンドに認証する
        // this.$auth.loginWith('local',{
        //   data: this.user
        // })
      },
      // Messageをセットして画面に表示する
      open(message) {
        this.$message.error({
          showClose: true,
          message: message
        });
      },
      isInvalid(name, password) {
        // wip
        const User = [
          {name: 'a', password: 'a'},
          {name: 'くま', password: '12345678'},
          {name: 'うさ', password: '12345678'}
        ]
        return !User.find(ele => ele.name === name && ele.password === password)
      }
    }
  }
</script>

<style scoped>
  .box-card {
    width: 40%;
    margin: 0 auto;
  }

  .el-button {
    display: block;
    margin: 0 auto;
  }
</style>