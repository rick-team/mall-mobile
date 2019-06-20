<template>
  <div id="indexList">
<<<<<<< HEAD
    <indexItem class='item' v-for='item in itemlist' :key='item.money' :infor='item' />
=======
    <indexItem class='item' v-for='(item, i) in itemlist' :key='i' :infor='item' />
>>>>>>> 6918e2e1284682df76f88cf708ec009bf6b972d7
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
