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
    <div class="wrapper2">
      <!-- 复杂场景 -->
      <Scroll
        v-if="true"
        ref="scroll"
        :update-data="[list]"
        :refresh-data="[]"
        class="content"
        @pullingDown="loadRefresh"
        @pullingUp="loadMore">
        <ul>
          <li v-for="(item, index) in list" :key="index">{{ item }}</li>
        </ul>
      </Scroll>
    </div>
    <NavButtom></NavButtom>
  </div>
</template>

<script>
  import NavButtom from '@/components/navbuttom/NavButtom'
  import Scroll from 'vue-slim-better-scroll'
  import {timeout} from '../untils/utime'

  export default {
    components: {
      NavButtom,
      Scroll
    },
    data() {
      return {
        list: [],
      }
    },
    created() {
      // 不会引起DOM变化的数据在此定义
      this.page = 1
      this.pageSize = 10
    },
    mounted() {
      this.loadRefresh()
    },
    methods: {
      toast() {
        this.$toast('此功能还在完善')
      },
      // 加载刷新数据
      async loadRefresh() {
        const data = await this._fetchList()
        // 初始化数据
        this.list = data
        this.page = 1
      },
      // 加载更多数据
      async loadMore() {
        const page = this.page + 1
        const data = await this._fetchList(page)
        this.list.push(...data)
        data.length < this.pageSize ? this.$refs.scroll.update(true) : this.page++ // 判断是否已达最后一页?如果已是最后一页，可调用this.$refs.scroll.update(true)关闭上拉
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
            return Array.from({length: pageSize / 2}, (value, index) => `最后一页,第${page}页的数据${index}`)
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
    .wrapper2
      width 100%
      height 10rem
      display flex
      align-items center
      color #000000
      .content {
        flex: 1
        background-color: #007aff;
        overflow: hidden;
        box-sizing: border-box;
        ul {
          li {
            background: #fff;
            height: 44px;
            line-height: 44px;
            text-align: center;
            color: $baseColor;
            border-bottom: 1px solid #eee;
          }
        }
      }


</style>
