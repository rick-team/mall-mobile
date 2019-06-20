<template>
  <div id="volume">
    <indexTitle :name='$t("roll")' />
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
<<<<<<< HEAD
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
=======
      list:[]
>>>>>>> 6918e2e1284682df76f88cf708ec009bf6b972d7
    }
  },
  components: {
    indexTitle,
    indexList
<<<<<<< HEAD
=======
  },
  created(){
    this.$store.dispatch('getActivityList', {
      lang: this.$store.state.lang,
      actType: 1
    }).then(res => {
      this.list = res.activityList
      console.log(res)
    })
>>>>>>> 6918e2e1284682df76f88cf708ec009bf6b972d7
  }
}
</script>

<style>
#volume {
  margin-bottom: .2rem;
}
</style>
