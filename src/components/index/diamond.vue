<template>
  <div id="diamond">
    <indexTitle :name='$t("masonry")' />
    <indexList :itemlist='list' />
  </div>
</template>

<script>
import indexTitle from '@/components/index/indexTitle'
import indexList from '@/components/index/indexList'

import goodsImg from '@/assets/prizeimage_small_1.png'
export default {
  name: 'diamond',
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
      lang:this.$store.state.lang,
      actType: 2
    }).then((data) => {
      this.list = data.activityList;
    })
  }
}
</script>

<style>

#diamond {
  margin-bottom: .2rem;
}
</style>
