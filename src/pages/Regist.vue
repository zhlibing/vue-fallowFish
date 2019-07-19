<template>
  <div class="container">
    <div class="head">
      <div class="back" @click="goBack">
        <img src="../assets/images/返回.png" alt="">
      </div>
      <div class="title">注册</div>
    </div>
    <div class="loginform">
      <form action="#" class="form">
        <div class="inputbox border-1px">
          <label for="name" class="label">账户</label>
          <input type="text" id="name" placeholder="手机号/会员号/邮箱" name="username" v-model="username">
        </div>
        <div class="inputbox border-1px">
          <label for="password" class="label">密码</label>
          <input type="password" id="password" placeholder="请输入密码" name="password" v-model="password">
        </div>
        <div class="inputbox border-1px">
          <label for="passwordConfirm" class="label">确认密码</label>
          <input type="password" id="passwordConfirm" placeholder="请再次输入密码" name="passwordConfirm" v-model="passwordConfirm">
        </div>
        <div class="button">
          <div class="regist" @click="goregist">注册</div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import {doRegist, ERR_OK} from '../api/data'
  import Qs from 'qs'
  export default {
    data() {
      return {
        url: '../../../static/avatar.jpg',
        username: '',
        password: '',
        passwordConfirm: ''
      }
    },
    computed: {
      ...mapGetters([
        'login'
      ])
    },
    methods: {
      goBack() {
        this.$router.back(-1)
      },
      goregist() {
        if (this.username == '') {
          this.$toast('请输入用户名')
        } else if (this.password == '') {
          this.$toast('请输入密码')
        } else if (this.password.length <= 9) {
          this.$toast('密码不能低于9位哦！')
        } else if (this.password != this.passwordConfirm) {
          this.$toast('两次输入密码不同哦！')
        } else {
          const params = {
            'username' : this.username,
            'password' : this.password,
            'year' : '20',
            'sex' : '女',
            'imie' : 'testtest',
            'cversion' : '1.0test',
            'fromtype' : '0',
            'channel' : 'test22',
            'appid' : 'test33'
          };
          doRegist(Qs.stringify(params)).then((res) => {
            console.log(res, 'res')
            if(res.status === ERR_OK) {
              this.$router.push({
                path:'/Login'
              })
              this.$toast({
                message: '注册成功',
                duration: 500
              })
            }
          })
        }
      },
    }
  }
</script>


<style lang="stylus" scoped>
  @import '../common/stylus/mixin.styl'
  .container
    width 10rem
    height 100vh
    background-color #fff
    .head
      position relative
      background-color #f3f3f3
      width 100%
      height 1.6rem
      display flex
      justify-content center
      align-items center
      .back
        position absolute
        left .2rem
        top .4rem
        width 1rem
        height 1rem
        img
          width .8rem
          height .8rem
      .title
        font-size .4rem
        font-weight 700
    .loginform
      .form
        .inputbox
          border-1px(#f1f1f1)
          padding 0.333rem .333rem
          margin-bottom 0.5rem
          display flex
          align-items center
          .label
            width 2.5rem
            font-size 0.5rem
            font-weight 600
          input
            flex 1
            border none
            outline none
            background-color #fff
            font-size 0.4rem
            color #666666
        .button
          width 10rem
          padding 0.25rem .25rem
          box-sizing border-box
          .regist
            width 100%
            height 1.3rem
            background-color #ffda44
            outline none
            border-radius 8px
            font-size 0.45em
            color #ffffff
            display flex
            align-items center
            justify-content center
            letter-spacing .1rem
</style>
