<template>
  <div class="container">
    <div class="head" style="margin-bottom:1.5rem">
      <Head></Head>
    </div>
    <IndexBanner></IndexBanner>
    <IndexGoods :iconList="iconList"></IndexGoods>
    <IndexTypes :typeList="typeList"></IndexTypes>
    <SmallBanner :smBanner="smBanner"></SmallBanner>
    <IndexNav :news="news" :nears="nears" :recoms="recoms"></IndexNav>
    <NavButtom></NavButtom>

  </div>
</template>

<script>
  import {getIconlist, getTypelist, getSmBanner, getIndexNav, ERR_OK} from '@/api/data'
  import IndexGoods from '@/components/indexgoods/IndexGoods'
  import IndexTypes from '@/components/indexTypes/IndexTypes'
  import NavButtom from '@/components/navbuttom/NavButtom'
  import SmallBanner from '@/components/smallbanner/SmallBanner'
  import IndexNav from '@/components/indexnav/IndexNav'
  import IndexBanner from '@/components/indexbanner/IndexBanner'
  import Head from '@/components/head/Head'
  import {news} from '../api/data'

  export default {
    name: 'App',
    components: {
      Head,
      IndexBanner,
      IndexGoods,
      IndexTypes,
      SmallBanner,
      IndexNav,
      NavButtom
    },
    data() {
      return {
        iconList: [],
        typeList: [],
        smBanner: [],
        news: [],
        nears: [],
        recoms: [],
        scroll: 0
      }
    },
    created() {
      getIconlist().then(res => {
        if (res.status === ERR_OK) {
          this.iconList = res.data.iconlist
        }
      }),
        getTypelist().then(res => {
          if (res.status === ERR_OK) {
            this.typeList = res.data.typelist
          }
        }),
        getSmBanner().then(res => {
          if (res.status === ERR_OK) {
            this.smBanner = res.data.banner
          }
        }),
        getIndexNav().then(res => {
          if (res.status === ERR_OK) {
            this.news = news
            this.nears = res.data.nears
            this.recoms = res.data.recoms
          }
        })
    },
    //在页面离开时记录滚动位置
    beforeRouteLeave(to, from, next) {
      next()
      console.log('beforeRouteLeave', '>>>>index.vue')
    },
    //进入该页面时，用之前保存的滚动位置赋值
    beforeRouteEnter(to, from, next) {
      next(vm => {
        document.body.scrollTop = vm.scrollTop
      })
      console.log('beforeRouteEnter', '>>>>index.vue')
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
      console.log('mounted', '>>>>index.vue')
    },
    activated() {
      if (this.scroll > 0) {
        window.scrollTo(0, this.scroll);
        this.scroll = 0;
        window.addEventListener('scroll', this.handleScroll);
      }
      console.log('activated', '>>>>index.vue')
    },
    deactivated() {
      window.removeEventListener('scroll', this.handleScroll);
      console.log('deactivated', '>>>>index.vue')
    },
    methods: {
      handleScroll() {
        this.scroll = document.documentElement && document.documentElement.scrollTop
        console.log(this.scroll)
      },
    }
  }
</script>
<style lang="stylus" scoped>
  .container
    width 10rem
    height 100%
</style>
