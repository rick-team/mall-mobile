<style socped>
#index {
  padding-bottom: 1.5rem;
}
.bottom_nav {
  position: fixed;
  width: 100%;
  height: 1.17rem;
  background: #d398f8;
  padding: 0 .2rem;
  box-sizing: border-box;
  z-index: 100;
  bottom: 0;
}
.left{
  float: left;
}
.right{
  float: right;
}
.bottom_nav .img {
  line-height: 1.17rem;
  margin-right: .1rem;
  width: .85rem;
}
.bottom_nav .img img {
  width: .85rem;
  display: inline-block;
  vertical-align: middle;
  border-radius: 50%;
}
.bottom_nav .use {
  padding-top: .2rem;
}
.bottom_nav .use p {
  font-size: .26rem;
  margin-bottom: .05rem;
}
.bottom_nav .use .a_ {
  width: 2.4rem;
  height: .48rem;
  background: #e81354;
  border-radius: .24rem;
  line-height: .48rem;
  font-size: .26rem;
  color: #fff;
  text-decoration: none;
  text-align: center;
  display: inline-block;
}
.bottom_nav .kupon{
  background: url(../assets/icon_kupon.png) left center no-repeat; 
}
.bottom_nav .diamond{
  background: url(../assets/icon_diamond.png) left center no-repeat;
}
.bottom_nav .kupon, .bottom_nav .diamond  {
  width: 1.5rem;
  line-height: 1.17rem;
  background-size: .64rem;
  font-size: .26rem;
  padding-left: .6rem;
  box-sizing: border-box;
  color: #000;
}
.qa_click {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 99999;
  width: 1.26rem;
}

.qa_click img {
  width: 100%;
}

body.modal-open {
  position: fixed;
  width: 100%;
}
</style>

<template>
  <div id="index" @click='closeQA'>
    <div class='qa_click' v-if='!qaShowBl' @click.stop="showQA"><img src='../assets/qa_click.png'></div>
    <indexHeader :banner='bannerphoto' />
    <winningMsg class='luckMsg' />
    <volume />
    <!-- <diamond />
    <lottery /> -->
    <contact color='#fff' />
    <qa v-if='qaShowBl' />
    <div class='bottom_nav'>
      <div class='img left'>
        <img :src='userInfo.imgUrl' />
      </div>
      <div class='use left'>
        <p>{{userInfo.nickName}}</p>
        <router-link class='a_' :to="{path:'/peopleCenter'}">{{ $t("record") }}</router-link>
      </div>
      <div class='diamond right'>
        <p>{{diamond.diamond}}</p>
      </div>
      <div class='kupon right'>
        <p>{{diamond.ticket}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import indexHeader from '@/components/carousel'
import winningMsg from '@/components/index/winningMsg'
import volume from '@/components/index/volume'
import diamond from '@/components/index/diamond'
import lottery from '@/components/index/lottery'
import qa from '@/components/index/q_a'
import contact from '@/components/contact'

import { mapActions } from 'vuex'

export default {
  name: 'index',
  data() {
      return {
        qaShowBl: false,
        diamond: {},
        userInfo: {},
        bannerphoto: []
      }
  },
  mounted(){
    this.$store.dispatch('getCarousel', {
      lang: this.$store.state.lang
    }).then((res) => {
      // this.bannerphoto = data
    })

    // this.$store.dispatch('getActivityDetail').then(({data}) => {
    //   console.log(data)
    // })

    // this.$store.dispatch('getUserInfo').then(({data}) => {
    //   this.diamond = data.diamond
    //   this.userInfo = data.userInfo
    //   console.log(data)
    // })

  },
  methods: {
    showQA() {
      this.qaShowBl = true;
      document.getElementsByTagName('body')[0].classList.add("modal-open");
    },
    closeQA() {
      this.qaShowBl = false;
      document.getElementsByTagName('body')[0].classList.remove("modal-open");
    }
  },
  components: {
		indexHeader,
		volume,
    winningMsg,
    diamond,
    lottery,
    qa,
    contact
  }
}
</script>

<style socped>
.luckMsg {
	width: 4.51rem;
	height: 1.22rem;
	background: url(../assets/bg_showresult.png) center center / 100% 100%;
	margin: 0.1rem auto .3rem;
}
</style>
