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
  beforeCreate() {
    this.$store.dispatch('getActivityList',{
      lang:1,
      actType: 1
    }).then((data) => {
      this.list = data.activityList;
    })
  }
}
</script>

<style>
#volume {
  margin-bottom: .2rem;
}
</style>
