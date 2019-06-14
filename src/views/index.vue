<template>
  <div id="index">
      <indexHeader />
			<winningMsg class='luckMsg' />
			<volume />
  </div>
</template>

<script>
import indexHeader from '@/components/indexHeader'
import winningMsg from '@/components/winningMsg'
import volume from '@/components/volume'
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
		winningMsg
  }
}
</script>

<style socped>
#index {
	width: 100%;
	/* background: url('@/assets/img/bg_1.jpg') center top / 100% auto; */
}
.luckMsg {
	width: 4.51rem;
	height: 1.22rem;
	/* background: url(@/assets/img/bg_showresult.png) center center / 100% 100%; */
	margin: 0.1rem auto .3rem;
}
</style>
