<template>
  <div class="detail">
    <indexHeader :banner = banner />
  </div>
</template>

<script>
import indexHeader from '@/components/carousel'

export default {
  components: {
    indexHeader,
  },
  data(){
    return {
      banner: [
        {
          src: require('@/assets/prize_detail_1.jpg')
        },
        {
          src: require('@/assets/prize_detail_1.jpg')
        },
      ]
    }
  }
}
</script>