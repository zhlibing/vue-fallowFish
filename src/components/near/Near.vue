<template>
  <div class="container">
    <ul>
      <li class="list" v-for="(list,index) in nears" :key="index">
        <div class="header">
          <img :src="list.avatar" alt="">
          <div class="info">
            <p class="title">{{list.name}}</p>
            <p class="time">{{list.time}}</p>
          </div>
          <div class="price">
            <span>{{list.price}}</span>
          </div>
        </div>
        <div class="imgbox">
          <img :src="list.img" alt="">
        </div>
        <div class="detail border-1px">
          <p class="desc">{{list.desc}}</p>
        </div>
        <div class="footer">
          <div class="addr">{{list.add}}</div>
          <div class="kind">{{list.kind}}</div>
          <div class="star">{{list.star}}</div>
        </div>
      </li>
    </ul>
    <div class="more" @click="todetail">
      <span class="gomore">更多</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      nears: {
        type: Array
      }
    },
    methods: {
      todetail() {
        this.$router.push({
          path: '/morenear'
        })
      },
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../common/stylus/mixin.styl'
  .container
    padding 0.2rem
    margin-bottom 1.5rem
    .list
      width 100%
      display flex
      flex-direction column
      margin-bottom 0.4rem
      border-1px(#ccc)
      .header
        height 1.02rem
        display flex
        img
          height 1rem
          width 1rem
          border-radius 50%
        .info
          font-size 0.4rem
          flex 1
          margin-left 0.4rem
          display flex
          flex-direction column
          justify-content space-around
          font-weight 500
          .time
            background: url('../../assets/images/arrow.png') no-repeat;
            background-position 0 87%
            background-size 14px 14px
            padding-left 0.44rem
            font-size 0.2rem
            color #999999
        .price
          display flex
          justify-content center
          align-items center
          font-size 0.4rem
          color red
          font-weight 700
          width 1.5rem
          margin-right 0.3rem
      .imgbox
        margin-top 0.1rem
        img
          width 6rem
          height 6rem
      .detail
        margin-top 0.2rem
        font-size 0.4rem
        font-weight 700
        padding-bottom 0.3rem
        line-height 0.6rem
        border-1px(#f3f3f3)
      .footer
        padding .2rem 0
        display flex
        font-size 0.3rem
        color #7dc5eb
        font-weight 700
        .kind
          flex 1
          margin-left 0.3rem
        .star
          color #888888
    .more
      width 100%
      text-align right
      margin-bottom 0.5rem
      .gomore
        font-size 0.45rem
        font-weight 700
        background url('../../../static/更多.png') right no-repeat
        background-size 0.5rem 0.5rem
        width 3rem
        height .53rem
        padding-left 0.6rem
        padding-right 0.7rem
        box-sizing border-box
</style>
