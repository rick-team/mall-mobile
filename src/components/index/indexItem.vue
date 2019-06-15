
<style>
#indexItem {
  position: relative;
  width: 3.28rem;
  height: 4.17rem;
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
  width: 1.06rem;
  height: .32rem;
  line-height: .32rem;
  border-radius: .05rem;
  font-size: .19rem;
  font-weight: bold;
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
.surface .people span:first-child {
  font-size: .10rem;
}
.surface .people span:last-child {
  font-size: .30rem;
  font-weight: bold;
}
.surface .schedule {
  padding-top: .19rem;
  float: left;
  width: 1.95rem;
  height: .32rem;
  font-size: .18rem;
  line-height: .32rem;
  color: #fff;
}
.progressBar {
  background: #259bf7;
  height: .4rem;
  width: 100%;
  padding-left: .85rem;
  box-sizing: border-box;
  position: absolute;
  z-index: 9;
  bottom: 0;
}
.dateTime {
  width: 1.52rem;
  height: .22rem;
  margin: .1rem auto 0;
  background: rgba(255, 255, 255, .1);
  line-height: .22rem;
  color: #fff;
  font-size: .19rem;
  font-family: '黑体';
}
.dateTimeIocnBg {
  background: url('../../assets/clock.gif') .15rem center no-repeat;
  background-size: auto 80%;
}
</style>

<template>
  <div id="indexItem">
    <div class='period'>
      第<span>{{infor.period}}</span>期
    </div>
    <div class='goodsImg'>
      <img :src='infor.imgSrc' />
    </div>
    <div class='scheduleContainer'>
      <div class='progressBar' :style="{width: infor.schedule + '%'}"></div>
      <div class='surface clearfix'>
        <div class='people'>
          <span>参与人数</span><br>
          <span>{{infor.people}}</span>
        </div>
        <div class='schedule'>
          开奖进度{{infor.schedule}}
        </div>
      </div>
    </div>
    <div class='dateTime'>
      <div class='dateTimeIocnBg'>
        {{infor.dateTime}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'indexItem',
  data() {
    return {

    }
  },
  props:['infor']
}
</script>

