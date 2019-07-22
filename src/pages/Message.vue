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
      <ul class="ul">
        <li class="li" v-for="(item, index) in list" :key="index">{{ item }}</li>
      </ul>
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
      .ul
        .li
          background #fff;
          height 80px;
          line-height 80px;
          text-align center;
          color #d8c
          border-bottom 1px solid #d8c;


</style>
