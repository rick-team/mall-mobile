<template>
  <div id="index">
      <indexHeader />
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

      }
  },
  methdos: {

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
#index {
	width: 100%;
	background: url(../assets/bg_1.jpg) center top / 100% auto;
}
.luckMsg {
	width: 4.51rem;
	height: 1.22rem;
	background: url(../assets/bg_showresult.png) center center / 100% 100%;
	margin: 0.1rem auto .3rem;
}
</style>
