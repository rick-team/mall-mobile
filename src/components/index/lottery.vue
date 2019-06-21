<template>
  <div id="lottery">
    <indexTitle :name='$t("openAward")' />
    <indexList :itemlist='list' />
  </div>
</template>

<script>
import indexTitle from '@/components/index/indexTitle'
import indexList from '@/components/index/indexList'

import goodsImg from '@/assets/prizeimage_small_1.png'
export default {
  name: 'lottery',
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
      actType: 3
    }).then((data) => {
      this.list = data.activityList;
      console.log(data);
    })
  }
}
</script>

<style>
#lottery {
  margin-bottom: .3rem;
}
</style>
