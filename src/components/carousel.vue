<template>
  <div id="carousel">
    <swiper :options="swiperOption" ref="swiperOption" v-if='banner.length>0'>
      <swiper-slide v-for="(items,index) in banner" :key="index">
        <img style='width:100%' @click="jump(item.actId)" :src="items.url || items.img.url " alt="">
      </swiper-slide>
       <div class="swiper-pagination" id="pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper , swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'indexHeader',
  props: {
    banner: Array,
    bl: false
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          bulletClass: 'my-bullet',
          bulletActiveClass: 'my-bullet-active'
        },
        paginationClickable: true,
        observer:true,//修改swiper自己或子元素时，自动初始化swiper 
        observeParents:true,//修改swiper的父元素时，自动初始化swiper 
        loop:true,
        autoplay: {
          delay: 1500,
          disableOnInteraction: false
        },
        coverflow: {
          rotate: 30,
          stretch: 10,
          depth: 60,
          modifier: 2,
          slideShadows : true
        }
      },
    }
  },
  methdos: {
    jump(id) {
      if(this.bl) {
         this.$router.push({
          path:'/detail', 
          query:{
            actId: id
        }})
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style socped>
.my-bullet{
  border-radius: .05rem;
  width: .10rem;
  height: .10rem;
  margin: 0 .06rem;
  display: inline-block;
  background: rgba(0,0,0,0.20);
}
.my-bullet-active{
  background: #fff;
}
</style>
