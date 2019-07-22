<template>
  <div class="container">
    <div class="wrapper border-1px" @click="toast">
      <div class="img">
        <img src="../assets/images/通知.png" alt="" class="avatar">
      </div>
      <div class="text">
        <p class="name">通知</p>
        <div class="desc">
          <p class="detail">闲鱼奇葩说，U CAN U BIBI</p>
          <span class="time">| 18小时前</span>
        </div>
      </div>
    </div>
    <load-more
      class="content"
      :pageIndex="page"
      :pageSize="pageSize"
      :totalCount="totalCount"
      :openRefresh="true"
      :loadFinished="loadFinished"
      @refresh="loadRefresh"
      @loadmore="loadMore">
      <div class="list border-1px" v-for="(item,index) in list" :key="index">
        <img :src='url' alt="" class="image">
        <div class="info">
          <div class="head">
            <p class="tit">{{'老汪'}}</p>
            <span class="level">{{'11级'}}</span>
          </div>
          <div class="text">
            <p class="desc">{{'我是老外你是？？我是老外你是？？我是老外你是？？我是老外你是？？我是老外你是？？我是老外你是？？我是老外你是？？我是老外你是？？'}}</p>
          </div>
          <div class="hot">
            <span>人气{{'100人喜欢'}}·发布{{'80篇'}}</span>
          </div>
        </div>
      </div>
    </load-more>
    <NavButtom></NavButtom>
  </div>
</template>

<script>
  import NavButtom from '@/components/navbuttom/NavButtom'
  import LoadMore from 'vue-loadmore-simple'
  import {timeout} from '../untils/utime'
  import Vue from 'vue'

  Vue.use(LoadMore)
  export default {
    components: {
      NavButtom,
    },
    data() {
      return {
        url: '../../../static/avatar.jpg',
        list: [],
        page: 1,
        pageSize: 10,
        totalCount: -1, //默认给-1
        loadFinished: false,
        scroll: 0
      }
    },
    created() {
      // 不会引起DOM变化的数据在此定义
    },
    mounted() {
      this.loadRefresh()
      window.addEventListener('scroll', this.handleScroll)
    },
    activated() {
      if (this.scroll >= 0) {
        window.scrollTo(0, this.scroll);
        this.scroll = 0;
        window.addEventListener('scroll', this.handleScroll);
      }
      console.log('activated', '>>>>message.vue')
    },
    deactivated() {
      window.removeEventListener('scroll', this.handleScroll);
      console.log('deactivated', '>>>>message.vue')
    },
    methods: {
      handleScroll() {
        this.scroll = document.documentElement && document.documentElement.scrollTop
        console.log(this.scroll)
      },
      toast() {
        this.$toast('此功能还在完善')
      },
      // 加载刷新数据
      async loadRefresh() {
        const data = await this._fetchList()
        // 初始化数据
        this.list = data
        this.page = 1
        if (data.length > 0) {
          this.totalCount = 9999
        } else {
          this.totalCount = 0
        }
        this.loadFinished = false
      },
      // 加载更多数据
      async loadMore() {
        const page = this.page + 1
        const data = await this._fetchList(page)
        this.list.push(...data)
        data.length < this.pageSize ? this.loadFinished = true : this.page++ // 判断是否已达最后一页
      },
      // 模拟一个异步获取列表操作
      async _fetchList(page = 1, pageSize = this.pageSize) {
        try {
          await timeout(1000)
          if (page < 3) {
            // 模拟数据返回
            return Array.from({length: pageSize}, (value, index) => `第${page}页的数据${index}`)
          } else {
            // 模拟已到达最后一页时的数据返回
            return Array.from({length: pageSize / 2}, (value, index) => `最后一页的数据${index}`)
          }
        } catch (e) {
          return false
        }
      },
    }
  }
</script>


<style lang="stylus" scoped>
  @import '../common/stylus/mixin.styl'
  .container
    width 10rem
    height 100%
    margin-bottom 2.5rem
    background-color #fff
    .wrapper
      width 100%
      height 2.5rem
      display flex
      align-items center
      color #000000
      padding 0 .4rem
      border-1px(#f7f7f7)
      .img
        width 2rem
        height 2rem
        background-color pink
        border-radius 50%
        display flex
        justify-content center
        align-items center
        img
          width 1.4rem
      .text
        margin-left .3rem
        .name
          font-size 0.4rem
          font-weight 600
          margin-bottom 0.3rem
        .desc
          display flex
          font-size 0.3rem
          color #888888
          .time
            margin-left 0.3rem
    .content
      flex 1
      overflow hidden
      box-sizing border-box
      margin .333rem .511rem
      .list
        box-sizing border-box
        padding-bottom .3rem
        padding-top .3rem
        border-1px(#ccc)
        display flex
        .image
          width 1.6rem
          height 1.6rem
          border-radius 50%
        .info
          flex 1
          margin-left 0.3rem
          .head
            display flex
            margin-bottom 0.13rem
            .tit
              font-size .4rem
              font-weight 600
              flex 1
            .level
              font-size 0.3rem
              width 1.2rem
              height 0.66rem
              line-height 0.66rem
              background: url('../assets/images/标签.png') no-repeat;
              background-size cover
              background-position 110% 77%
              padding-left 0.3rem
              box-sizing border-box
              color #fff
          .text
            font-size 0.4rem
            font-weight 450
            margin-bottom 0.2rem
            line-height 0.6rem
          .hot
            margin-top 0.3rem
            font-size 0.33rem
            color #666666


</style>
