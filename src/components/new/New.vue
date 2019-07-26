<template>
  <div class="container">
    <ul>
      <li class="list" v-for="(list,index) in news" :key="index" @click="details(index)">
        <div class="header">
          <img :src="PERFIX_IMAGE+list.headimg" alt="">
          <div class="info">
            <p class="title">{{list.nickname}}</p>
            <p class="time">{{list.time}}</p>
          </div>
          <div class="price">
            <span>{{list.type}}</span>
          </div>
        </div>
        <div class="imgbox"
             v-show="JSON.parse(list.photo).length>0">
          <img alt=""
               v-if="JSON.parse(list.photo).length== 1"
               :src="PERFIX_IMAGE+JSON.parse(list.photo)[0]"
               :class="{releaseimgone:true}"/>
          <img alt=""
               v-else-if="JSON.parse(list.photo).length>= 2&&Math.round(JSON.parse(list.photo).length%2)==0"
               v-for="(value,imgIndex) in JSON.parse(list.photo)"
               :key="imgIndex"
               :src="PERFIX_IMAGE+value"
               :class="{releaseimgtwo:true}"/>
          <img alt=""
               v-else-if="JSON.parse(list.photo).length>= 2&&Math.round(JSON.parse(list.photo).length%2)!=0"
               v-for="(value,imgIndex) in JSON.parse(list.photo)"
               :key="imgIndex"
               :src="PERFIX_IMAGE+value"
               :class="{releaseimgthree:true}"/>
        </div>
        <div class="detail border-1px">
          <p class="desc">{{list.content}}</p>
        </div>
        <div class="footer">
          <div class="addr">{{list.sex}}</div>
          <div class="kind">{{list.username}}</div>
          <div class="star">{{list.id}}</div>
        </div>

      </li>
    </ul>
    <div class="more" @click="todetail">
      <span class="gomore">更多</span>
    </div>
    <div class="swiper-container" ref="swiperBottom" style="margin-bottom: 2rem">
      <div class="swiper-wrapper swiper">
        <div class="swiper-slide item" v-for="(item,index) in recoms" :key="index">
          <div class="title">{{item.title}}</div>
          <div class="info">
            <span class="fabu">发布数{{item.members}}</span>
            <span class="hot">昨日人气 +{{item.num}}</span>
          </div>
          <div class="desc">
            <span class="gonggao">公告</span>
            <span class="produ">{{item.produ}}</span>
          </div>
          <div class="imgbox border-1px">
            <img :src="img.img" alt="" v-for="(img,index) in item.images" :key="index">
          </div>
          <div class="addr">
            <p class="distance">距离你{{item.destance}}米</p>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>

  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {PERFIX_IMAGE} from '../../api/data'

  export default {
    data() {
      return {
        url: '',
        PERFIX_IMAGE: PERFIX_IMAGE
      }
    },
    props: {
      news: {
        type: Array
      },
      recoms: {
        type: Array
      }
    },
    created() {
      this.$nextTick(() => {
        let swiperBottom = this.$refs.swiperBottom;
        let mySwiper = new Swiper(swiperBottom, {
          autoplay: 2000,
          loop: true,
          observer: true,
          observeParents: true,
          pagination: {
            el: '.swiper-pagination'
          }
        })
      })

    },
    methods: {
      details(index) {
        let news = this.news[index]
        this.$store.dispatch('setNews', news)
        this.$router.push({
          path: '/details'
        })

      },
      todetail() {
        this.$router.push({
          // path: '/moviedetail'
          path: '/de'
        })
      },
    }
  }
  // background url('../../../static/cat.png') no-repeat;
  // background-size: contain;
  // background-position: center;

</script>

<style lang="stylus" scoped>
  @import '../../common/stylus/mixin.styl'
  .container
    padding 0.2rem
    .list
      width 100%
      display flex
      flex-direction column
      border-1px(#ccc)
      margin-bottom 0.2rem
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
        .releaseimgone {
          width: 65%;
          float: left;
          height: auto;
          object-fit: contain;
        }
        .releaseimgtwo {
          width: 47%;
          margin-right: 0.1066666667rem;
          margin-bottom: 0.1066666667rem;
          height: 4rem;
          object-fit: contain;
        }
        .releaseimgthree {
          width: 30%;
          margin-right: 0.1066666667rem;
          margin-bottom: 0.1066666667rem;
          height: 3rem;
          object-fit: contain;
        }
      .detail
        margin-top 0.2rem
        font-size 0.4rem
        font-weight 700
        padding-bottom 0.3rem
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
    .swiper
      width 10rem
      margin 0 auto
      .item
        height auto
        padding 0.4rem 1rem
        font-weight 700
        box-sizing border-box
        background-color #ccc
        .title
          font-size 0.4rem
          line-height .8rem
        .info
          font-size 0.4rem
          line-height .8rem
        .desc
          display flex
          margin-bottom 0.3rem
          .gonggao
            font-size 0.3rem
            border 1px solid #7dc5eb
            padding 0.1rem
            box-sizing border-box
            color #7dc5eb
          .produ
            padding 0.1rem
            font-size 0.3rem
            font-weight 500
        .imgbox
          width 100%
          display flex
          justify-content space-between
          padding-bottom 0.4rem
          border-1px(#ddd)
          img
            width 1.6rem
            height 1.6rem
        .addr
          padding-top 0.2em
          text-align left
          padding-left 1.2em
          color #000000
          background url('../../assets/images/add.png') no-repeat
          background-position 0 100%
          background-size 14px 14px
          font-size 0.4rem


</style>
