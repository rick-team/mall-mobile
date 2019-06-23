
<style scoped>
.indexItem {
  position: relative;
  width: 3.28rem;
  height: 4.27rem;
  background: rgba(255, 255, 255, .1);
  border-radius: .12rem;
  box-sizing: border-box;
  padding-top: .2rem;
}
.period {
  position: absolute;
  top: .07rem;
  left: .07rem;
  background: #7435a7;
  /* width: 1.06rem; */
  height: .32rem;
  line-height: .32rem;
  border-radius: .05rem;
  font-size: .19rem;
  font-weight: bold;
  box-sizing: border-box;
  padding: 0.03rem 0.15rem;
}
.period span{
  color: #fff600;
}
.goodsImg {
  width: 3.1rem;
  margin: 0 auto;
}
.goodsImg img {
  width: 100%;
}
.scheduleContainer {
  margin: 0 auto;
  position: relative;
  width: 2.84rem;
  height: .44rem;
  background: #2e0c62;
  box-sizing: border-box;
}
.surface {
  position: absolute;
  z-index: 10;
  box-sizing: border-box;
  width: 3rem;
  height: .65rem;
  bottom: -.09rem;
  right: 0;
  background: url('../../assets/progressbar_topmask.png') center center / 100% 100%;
}
.surface .people {
  width: 1.05rem;
  padding-top: .1rem;
  color: #fff;
  float: left;
}
.surface .people span:last-child {
  font-size: .10rem;
}
.surface .people span:first-child {
  font-size: .30rem;
  font-weight: bold;
}
.surface .schedule {
  float: left;
  width: 1.95rem;
  height: .32rem;
  font-size: .18rem;
  line-height: .32rem;
  color: #fff;
  padding: 0.23rem 0 0;
}
.progressBar_line.onLucked {
  background: #fb26d8;
}
.progressBar_line.onLucking {
 background: #fb8426;
  
}
.progressBar {
  padding-left: .87rem;
  padding-right: .05rem;
  box-sizing: border-box;
  position: absolute;
  z-index: 9;
  bottom: 0;
  width: 100%;
  height: .4rem;
}
.progressBar_line {
  background: #259bf7;
  height: .4rem;
}
.dateTime {
  width: 1.52rem;
  margin: .1rem auto 0;
  background: rgba(255, 255, 255, .1);
  color: #fff;
  font-family: '???';
  box-sizing: border-box;
}
.dateTimeIocnBg {
  background: url('../../assets/clock.gif') .15rem center no-repeat;
  background-size: auto 80%;
  font-size: 0;
}
.dateTimeIocnBg span{
  padding: 0.04rem 0.15rem;
  box-sizing: border-box;  
  display: inline-block;
  line-height: .22rem;
  height: .22rem;
  font-size: .19rem;
}

</style>

<template>
  <div class="indexItem" @click="goDetail">
    <div class='period' v-html="actNum"></div>
    <div class='goodsImg'>
      <img :src='infor.thumb.url' />
    </div>
    <div class='scheduleContainer'>
      <div class='progressBar'>
        <div class='progressBar_line' :class='[infor.actStatus == 3?"onLucking":infor.actStatus == 4?"onLucked":""]' :style="{width: schedule + '%'}"></div>
      </div>
      <div class='surface clearfix'>
        <div class='people'>
          <span v-if='infor.actStatus!=2'>{{100}}</span><span v-else>{{infor.joinCount}}</span><br>
          <span>{{$t('participant')}}</span>
        </div>
        <div class='schedule onLucking' v-if='infor.actStatus == 3'>
          {{$t('lotteryonLucking')}}
        </div>
        <div class='schedule onLucked' v-else-if='infor.actStatus == 4'>
          {{$t('lotteryonLucked')}}
        </div>
        <div class='schedule' v-if='infor.actStatus == 2'>
          {{$t('lotterySchedule')}}{{ schedule }}%
        </div>
      </div>
    </div>
    <div class='dateTime' v-if='infor.actStatus != 4 && infor.actStatus != 3'>
      <div class='dateTimeIocnBg'>
        <span>{{time}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { clearInterval } from 'timers';
export default {
  name: 'indexItem',
  props:['infor'],
  data(){
    return {
      time: '00:00:00'
    }
  },
  computed:{
    actNum(){
      let noPhase = this.$t('noPhase').split('{$}')
      return noPhase[0] +'<span style="color: #fff600;">'+ this.infor.actNum +'</span>'+ noPhase[1]
    },
    schedule(){
      return ((this.infor.joinCount / this.infor.endCount).toFixed(2) * 100).toFixed(0)
    }
  },
  mounted(){
    const countTime = () => {
      let startTime = new Date().getTime();
      let endTime= this.infor.endTime;
  
      var leftTime = endTime-startTime

      if (leftTime>=0) {  
         let h = Math.floor(leftTime/1000/60/60%24);  
         let m = Math.floor(leftTime/1000/60%60);  
         let s = Math.floor(leftTime/1000%60);
          
         h = h < 10 ? `0${h}` : h
         m = m < 10 ? `0${m}` : m
         s = s < 10 ? `0${s}` : s
         
         this.time = `${h}:${m}:${s}`
         setTimeout(countTime,1000)
      }
    }
    countTime()
  },
  methods:{
    goDetail(){
      this.$router.push({
        path:'/detail', 
        query:{
          actId: this.infor.actId,
          actNum: this.infor.actNum
      }})
    }
  }
}
</script>

