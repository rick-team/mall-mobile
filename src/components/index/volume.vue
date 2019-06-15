<template>
  <div id="volume">
    <indexTitle name='卷' />
    <indexList :itemlist='list' />
  </div>
</template>

<script>
import indexTitle from '@/components/index/indexTitle'
import indexList from '@/components/index/indexList'

import goodsImg from '@/assets/prizeimage_small_1.png'
export default {
  name: 'volume',
  data() {
    return {
      list:[{
        period:'3',
        imgSrc:goodsImg,
        content:'看漫画专用',
        money:'126.000',
        people:'20800',
        schedule:'95.67',
        dateTime:'00:05:55'
      },{
        period:'32',
        imgSrc:goodsImg,
        content:'看电影专用',
        money:'1996.000',
        people:'500',
        schedule:'50',
        dateTime:'05:05:55'
      },{
        period:'2',
        imgSrc:goodsImg,
        content:'看漫画专用',
        money:'123.000',
        people:'10',
        schedule:'10.67',
        dateTime:'10:05:55'
      },{
        period:'8',
        imgSrc:goodsImg,
        content:'看音乐专用',
        money:'121.000',
        people:'300',
        schedule:'100',
        dateTime:'00:05:55'
      }]
    }
  },
  components: {
    indexTitle,
    indexList
  }
}
</script>

<style>
#volume {
  margin-bottom: .2rem;
}
</style>
