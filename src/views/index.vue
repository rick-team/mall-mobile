<template>
  <div>
      <indexHeader :banner = banner />
			<winningMsg class='luckMsg' />
			<volume />
      <diamond />
      <lottery />
  </div>
</template>

<script>
import indexHeader from '@/components/carousel'
import winningMsg from '@/components/index/winningMsg'
import volume from '@/components/index/volume'
import diamond from '@/components/index/diamond'
import lottery from '@/components/index/lottery'
export default {
  name: 'index',
  data() {
      return {
        banner: [
          {
            src: require('@/assets/banner_1.jpg')
          },
          {
            src: require('@/assets/banner_2.jpg')
          },
          {
            src: require('@/assets/banner_1.jpg')
          }
        ]
      }
  },
  components: {
		indexHeader,
		volume,
    winningMsg,
    diamond,
    lottery
  }
}
</script>

<style socped>
.luckMsg {
	width: 4.51rem;
	height: 1.22rem;
	background: url(../assets/bg_showresult.png) center center / 100% 100%;
	margin: 0.1rem auto .3rem;
}
</style>
