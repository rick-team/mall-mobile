<template>
  <div id="win">
    <swiper class="winlist" :options="swiperOption" ref="winlist">
      <swiper-slide v-for="(item,index) in msgList" :key="index" >
        <p>恭喜： 用户{{item.name}} 获得 {{item.article}} 价值 {{item.money}}</p>
        <p>注大家好运连连，把把都中</p>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { swiper , swiperSlide } from 'vue-awesome-swiper'
require('swiper/dist/css/swiper.css')
import img1 from '../assets/img/banner_1.jpg'
import img2 from '../assets/img/banner_2.jpg'
export default {
  name: 'indexHeader',
  data() {
    return {
      swiperOption: {
    　　direction: 'vertical',
        mousewheel: true,
        autoplay: {
          delay:2000  //这里需要注意，如果想每2秒去自动切换，直接autoplay:2000是失效的，
        },
        loop: true
      },
      msgList:[
        {
          name:'XS000D00',
          article:'HUA WEI MATE 20 RPO',
          money:'3000'
        },
        {
          name:'XS000D0011',
          article:'HUA WEI MATE 20 RPO222',
          money:'4000'
        },
        {
          name:'XS000D0022',
          article:'XIAO MI 8 MATE 30 RPO',
          money:'5000'
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
.winlist {
  width: 4.51rem;
  height: 1.22rem;
}
</style>
