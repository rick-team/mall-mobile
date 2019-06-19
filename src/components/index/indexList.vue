<template>
  <div id="indexList">
    <indexItem class='item' v-for='(item, i) in itemlist' :key='i' :infor='item' />
  </div>
</template>

<script>
import indexItem from '@/components/index/indexItem'
export default {
  name: 'indexList',
  data() {
    return {
      
    }
  },
  props:{
    itemlist: {
      Type: Array,
      default: () => []
    }
  },
  components: {
    indexItem
  }
}
</script>

<style>
#indexList {
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.item {
  margin-bottom: .1rem;
}
</style>
