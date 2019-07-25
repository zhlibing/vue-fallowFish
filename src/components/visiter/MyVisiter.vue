<template>
  <div class="container">
    <div class="head">
      <div class="back" @click="goBack">
        <img src="../../assets/images/返回.png" alt="">
      </div>
      <div class="title">我的访客</div>
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
          <div class="head2">
            <p class="tit">{{item.username}}</p>
            <span class="level">{{item.level}}</span>
          </div>
          <div class="text">
            <p>{{item.lives}}</p>
          </div>
          <div class="hot">
            <span>人气{{'100人喜欢'}}·发布{{'80篇'}}</span>
          </div>
        </div>
      </div>
    </load-more>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import LoadMore from 'vue-loadmore-simple'
  import {timeout} from '../../untils/utime'
  import {doFindvisiter, ERR_OK, PERFIX_IMAGE} from '../../api/data'
  import Qs from 'qs'
  import Vue from 'vue'

  Vue.use(LoadMore)
  export default {
    data() {
      return {
        show: true,
        url: '../../../static/avatar.jpg',
        list: [],
        page: 1,
        pageSize: 15,
        totalCount: -1, //默认给-1
        loadFinished: false,
        scroll: 0,
        PERFIX_IMAGE: PERFIX_IMAGE
      }
    },
    methods: {
      goBack() {
        this.$router.back(-1)
      },
      // 加载刷新数据
      async loadRefresh() {
        this.page = 1
        this.totalCount = 9999
        this.loadFinished = false
        await this._fetchList(this.page, 'refresh')
      },
      // 加载更多数据
      async loadMore() {
        const page = this.page + 1
        await this._fetchList(page, 'loadmore')
      },
      // 模拟一个异步获取列表操作
      async _fetchList(page, type) {
        try {
          await timeout(1000)
          const params = {
            'pagenumber': page,
            'username': window.localStorage.getItem('username'),
          }
          doFindvisiter(Qs.stringify(params)).then((res) => {
            console.log(res, '>>>>res' + page + type)
            if (res.status === ERR_OK) {
              if (res.data != null && res.data.length > 0) {
                if (type == 'refresh') {
                  this.list = res.data
                } else if (type == 'loadmore') {
                  this.list.push(...res.data)
                  res.data.length < this.pageSize ? this.loadFinished = true : this.page++ // 判断是否已达最后一页
                }
              } else {
                if (this.list != null && this.list.length > 0) {
                  this.totalCount = 9999
                  this.loadFinished = true
                } else {
                  this.totalCount = 0
                  this.loadFinished = false
                }
              }
            } else {
              if (this.list != null && this.list.length > 0) {
                this.totalCount = 9999
                this.loadFinished = true
              } else {
                this.totalCount = 0
                this.loadFinished = false
              }
            }
          }).catch((err) => {
            console.error(err, '>>>>error')
            if (this.list != null && this.list.length > 0) {
              this.totalCount = 9999
              this.loadFinished = true
            } else {
              this.totalCount = 0
              this.loadFinished = false
            }
          });
        } catch (e) {
          console.error(err, '>>>>error')
          if (this.list != null && this.list.length > 0) {
            this.totalCount = 9999
            this.loadFinished = true
          } else {
            this.totalCount = 0
            this.loadFinished = false
          }
          return false
        }
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
      this.loadRefresh()
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
      z-index 2
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
    .content
      flex 1
      overflow hidden
      box-sizing border-box
      margin 0rem .511rem
      padding-top 1.5rem
      z-index 1
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
          .head2
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
              background: url('../../assets/images/标签.png') no-repeat;
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
