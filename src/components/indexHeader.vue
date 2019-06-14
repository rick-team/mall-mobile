<template>
  <div id="index">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(items,index) in bannerphoto" :key="index">
        <img style='width:100%' :src="items.src" alt="">
      </swiper-slide>
       <div class="swiper-pagination" id="pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper , swiperSlide } from 'vue-awesome-swiper'
import img1 from '@/assets/img/banner_1.jpg'
import img2 from '@/assets/img/banner_2.jpg'
require('swiper/dist/css/swiper.css')
export default {
  name: 'indexHeader',
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
    　　　delay: 2000,
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
      bannerphoto: [
        {
          src:img1
        },
        {
          src:img2
        },
        {
          src:img1
        },
        {
          src:img2
        }
      ]
    }
  },
  methods: {
    
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
