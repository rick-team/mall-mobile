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
      list:[]
    }
  },
  components: {
    indexTitle,
    indexList
  },
  created(){
    this.$store.dispatch('getActivityList', {
      lang: this.$store.state.lang,
      actType: 1
    }).then(res => {
      this.list = res.activityList
      console.log(res)
    })
  }
}
</script>

<style>
#volume {
  margin-bottom: .2rem;
}
</style>
