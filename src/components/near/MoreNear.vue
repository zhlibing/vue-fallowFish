<template>
  <div class="container">
    <div class="head">
      <div class="back" @click="goBack">
        <img src="../../assets/images/返回.png" alt="">
      </div>
      <div class="title">附近的人</div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    data() {
      return {
        show: true
      }
    },
    methods: {
      goBack() {
        this.$router.back(-1)
      },
    },
    computed: {
      ...mapGetters([
        'news',
        'login'
      ])
    },
    mounted() {
      document.documentElement.scrollTop = document.body.scrollTop = 0
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../common/stylus/mixin.styl'
  .container
    width 10rem
    background-color #f7f7f7
    .head
      position fixed
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
</style>
