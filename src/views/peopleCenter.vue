<style scoped>
.bg {
  position: absolute;
  top: 2.3rem;
  width: 100%;
  background: #d5d5d5;
  height: 11rem;
	z-index: 0;
	min-height: calc(100vh - 2.3rem);
}
.content {
	width: 95%;
	padding-top: .56rem;
	margin:0 auto;
}
.top {
	height: .85rem;
}
.top .img {
	margin-right: .1rem;
	height: 100%;
	height: .85rem;
  width: .85rem;
}
.top .img img {
	height: 100%;
  border-radius: 50%;
}
.use {
	text-align: left;
	font-size: .26rem;
	color: #fff;
}
.use .name {
	margin-bottom: .1rem;
}
.use .kupon{
  background: url(../assets/icon_kupon.png) left center no-repeat; 
}
.use .diamond{
	background: url(../assets/icon_diamond.png) left center no-repeat;
	margin-right: .3rem;
}
.use .kupon, .use .diamond  {
  width: 1.3rem;
  line-height: .48rem;
  background-size: .48rem;
  font-size: .26rem;
  padding-left: .5rem;
  box-sizing: border-box;
  height: .48rem;
  color: #fff;
}
.a_ {
  width: 2.4rem;
  height: .48rem;
  background: #ec1049;
  border-radius: .24rem;
  line-height: .48rem;
  font-size: .26rem;
  color: #fff;
  text-align: center;
}
.listContainer {
  position: absolute;
  z-index: 11;
  width: 95%;
  top: 2rem;
}
.listContainer .box {
  padding-top: .34rem;
	background: #fff;
  border-radius: .16rem;
	padding-bottom: .1rem;
	margin-bottom: .3rem;
}
.listContainer .nav {
	margin-bottom: .25rem;
}
.listContainer .nav p {
	width: 50%;
	font-size: .24rem;
	opacity: .7;
	box-sizing: border-box;
}
.listContainer .nav p:first-child{
	padding-left: .6rem;
}
.listContainer .nav p:last-child{
	padding-right: .6rem;
}
.listContainer .nav p.on{
	opacity: 1;
}
.listContainer .nav p.on span {
	position: relative;
}
.listContainer .nav p.on span:after{
	content: '';
	display: block;
	height: .05rem;
	background: #6822a6;
	position: absolute;
	left: 0;
	right: 0;
	bottom: -.1rem;
	margin: 0 auto;
}
.listContainer .list{
  padding-bottom: .9rem;
}
.listContainer .list li {
	width: 6.16rem;
	height: .92rem;
	margin: 0 auto;
	background: url(../assets/bg_ticket_2.jpg);
	background-size: 100% 100%;
	margin-bottom: .13rem;
}
.listContainer .list li.onBg {
	background: url(../assets/bg_ticket_1.jpg);
	background-size: 100% 100%;
}
.listContainer .list li.onBg .right{
	line-height: 1;
  padding: .2rem 0;
  box-sizing: border-box;
}
.listContainer .list li.onBg .right p {
  font-size: .16rem;
  margin-bottom: .05rem;
  font-size: .16rem;
}
.listContainer .list li.onBg .right span{
  font-size: .30rem;
  color: #ff0d0d;
}

.listContainer .list li.onBg .left p:last-child .btn {
  background-color: #ff0d0d;
  color: #fff;
}
.listContainer .list li.lottery .left p:last-child .btn {
  background-color: #fc3f86
}
.listContainer .list li.hasLottery .left p:last-child .btn {
  background-color: #fc823f
}
.listContainer .list li .left{
  width: 3.9rem;
  height: .92rem;
  padding: .14rem .22rem;
  font-size: .19rem;
  text-align: left;
  box-sizing: border-box;
  line-height: 1.1;
}
.listContainer .list li .left p:first-child{
	height: .45rem;
}
.listContainer .list li .left p:last-child .time{
	margin-right: .1rem;
	vertical-align: middle;
}
.listContainer .list li .left p:last-child .btn {
	height: .22rem;
	width: 1.3rem;
	background: #30a8d4;
	display: inline-block;
	text-align: center;
	color: #fff;
	font-size: .19rem;
	line-height: .22rem;
	vertical-align: middle;
	box-sizing: border-box;
	vertical-align: middle;
}
.listContainer .list li .right {
	width: 2.2rem;
	height: .92rem;
	text-align: center;
	line-height: .92rem;
	font-size: .24rem;
}
.rechargeContainer {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, .7);
	z-index: 100;
}
.recharge {
	position: fixed;
	top:0;
	bottom: 0;
	left: 0;
	right: 0;
	width: 6.74rem;
	height: 5.53rem;
	margin: auto;
	background: #fff;
	border-radius: .05rem;
	padding: .3rem;
	box-sizing: border-box;
}
.p_top {
	text-align: left;
	margin-bottom: .47rem;
	font-size: .25rem;
	color: #000;
}
.pay{
	margin-bottom: .54rem;
}
.pay img {
	margin-right: 1.03rem;
	width: 1.62rem;
	height: .76rem;
}
.pay img:last-child {
	margin-right: 0;
}
.p_center {
	text-align: left;
	margin-bottom: .2rem;
	font-size: .25rem;
	color: #000;
}
.inputDiv {
	width: 100%;
	height: .79rem;
	margin-bottom: .1rem;
}
.inputDiv input {
	width: 100%;
	height: 100%;
	border-radius: .05rem;
	background: #cecece;
	outline: none;
	border: none;
	font-size: .3rem;
	padding-left: .2rem;
}
.p_bottom {
	font-size: .18rem;
	color: #8e8e8e;
	margin-bottom: .1rem;
}
.btnDiv {
	width: 3.18rem;
	height: .79rem;
	background: #ff365c;
	line-height: .79rem;
	border-radius: .4rem;
	font-size: .4rem;
	color: #fff;
	margin: 0 auto;
}


.left {
	float: left;
}
.right {
	float: right;
}
body.modal-open {
  position: fixed;
  width: 100%;
}
#copy {
  position: absolute;
  z-index: -999;
  bottom: 0;
}
.people_bottom {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #fff;
  padding-top: .2rem;
}
</style>
<template>
  <div id="peopleCenter">
    <div :style='{height: bgHeight}' class='bg'>
		</div>
    <div class='content'>
			<div class='top'>
				<div class='img left'>
					<img :src='"http://headicon.raymangaapp.com" + userInfo.imgUrl' />
				</div>
				<div class='use'>
					<div class='name'>{{userInfo.nickName}}</div>
					<div>
						<div class='kupon left'>
							<p>{{diamond.diamond}}</p>
						</div>
						<div class='diamond left'>
							<p>{{diamond.ticket}}</p>
						</div>
						<p class='a_ left' @click.stop='rechargeShowFn'>{{$t("topUp")}}</p>
					</div>
				</div>
			</div>
			<div class='listContainer'>
				<div class='box'>
					<div class='nav clearfix'>
						<p class='left' @click='listShow=false' :class='{on:!listShow}'><span>{{$t("myAward")}}</span></p>
						<p class='left' @click='listShow=true' :class='{on:listShow}'><span>{{$t("allAward")}}</span></p>
					</div>
					<div class='list_lucky list' v-if='!listShow'>
						<van-list @load="lcukOnLoad" v-model="luck.loading" :finished="luck.finished" loading-text="loading">
              <ul>
                <li class='onBg' @click="goDetail(item.activityDto.actId,item.activityDto.actNum)" v-for="(item, i) in luckList" :key='i'>
                  <div class='left'>
                    <p>{{ actNum(item.activityDto.actId) }} {{item.activityDto.actName}}</p>
                    <p><span class=time>{{item.activityDto.endTime | time}}</span><span class='btn' @click.stop='getLuckCode(item.exchangeCode)'>{{$t("luckBtnText")}}</span></p>
                  </div>
                  <div class='right'><p>{{$t("luckCode")}}</p><span>{{item.exchangeCode}}</span></div>
                </li>
              </ul>
						</van-list>
					</div>
					<div class='list_all list' v-if='listShow'>
						<van-list @load="allOnLoad" v-model="all.loading" :finished="all.finished" loading-text="loading">
              <ul>
                <li @click="goDetail(item.activityDto.actId,item.activityDto.actNum)" v-for='(item, i) in allList' :key='i' :class="[item.exchangeCode==null?item.activityDto.actStatus==1?'':item.activityDto.actStatus==2?'lottery':'hasLottery' : 'onBg']">
                  <div class='left'>
                    <p>{{ actNum(item.activityDto.actNum) }} {{item.activityDto.actName}}</p>
                    <p><span class=time>{{item.activityDto.endTime | time}}</span><span v-if='item.exchangeCode == null'><span v-if='item.activityDto.actStatus==2' class='btn'>{{$t("ongoing")}}</span><span class='btn' v-if='item.activityDto.actStatus==3'>{{$t("inTheLottery")}}</span><span class='btn' v-else>{{$t("hasTheLottery")}}</span></span><span class='btn' @click.stop='getLuckCode(item.exchangeCode)' v-else>{{$t("luckBtnText")}}</span></p>
                  </div>
                  <div class='right' v-if='item.exchangeCode == null'>{{$t("inInvolved")}}{{item.joinCount}}{{$t("inow")}}</div>
                  <div class='right' v-else><p>{{$t("luckCode")}}</p><span>{{item.exchangeCode}}</span></div>
                </li>
              </ul>
						</van-list>
					</div>
				</div>
				<contact class='people_bottom' color='#000' />
			</div>

			<div v-if='rechargeShow' @click="rechargeCloseFn" class='rechargeContainer'>
				<div class='recharge' @click.stop=''>
					<p class='p_top'>{{$t("topUpType")}}</p>
					<div class='pay'>
						<img src='../assets/button_gpay.png' />
						<img src='../assets/button_lazada.png' />
					</div>
					<p class='p_center'>{{$t("inputCode")}}</p>
					<div class='inputDiv'>
						<input type='text' v-model="giftCode" />
					</div>
					<p class='p_bottom'>{{$t("serviceTips")}}</p>
					<div class='btnDiv' @click='exchangeGiftCode'>{{$t("exchange")}}</div>
				</div>
			</div>
		</div>
    <input id='copy' type='text' />

    <div></div>
  </div>
</template>

<script>
import contact from '@/components/contact'
import { setTimeout } from 'timers';

export default {
  name: 'peopleCenter',
  data() {
    return {
			list: 3,
			rechargeShow:false,
      listShow:true,
      giftCode:'',
      diamond: {},
      userInfo: {},
      luckList:[],
      allList:[],
      luck:{
        loading: false,
        finished: false,
        tab: 1
      },
      all: {
        loading: false,
        finished: false,
        tab: 1
      }
    }
	},
	
  methods:{
    lcukOnLoad() {
      this.luck.loading = true;
      console.log(11);
      setTimeout(() => {
        // 加载状态结束
        this.$store.dispatch('getMyJoinRecord',{
          token: this.$store.state.token,
          page: this.luck.tab
        }).then((data) => {
          if(data.code == 1) {
            this.luckList = this.luckList.concat(data.joinRecordList);
            if(data.joinRecordList.length == 0){
              this.luck.finished = false;
            }else {
              this.luck.tab++;
            }
            this.luck.loading = false;
          }
          console.log(data);
        })
        // 数据全部加载完成
      }, 500);
    },
    allOnLoad() {
      this.all.loading = true;
      setTimeout(() => {
        // 加载状态结束
        this.$store.dispatch('getMyAwardRecord',{
          token: this.$store.state.token,
          page: this.all.tab
        }).then((data) => {
          if(data.code == 1) {
            this.allList = this.allList.concat(data.joinRecordList);
            if(data.joinRecordList.length == 0){
              this.all.finished = false;
            }else {
              this.all.tab++;
            }
            this.all.loading = false;
          }
          console.log(data);
        })
        // 数据全部加载完成
      }, 500);
    },
		actNum(num){
      let noPhase = this.$t('noPhase').split('{$}')
      return noPhase[0] +''+ num +''+ noPhase[1]
    },
    rechargeShowFn() {
      this.rechargeShow = true;
      document.getElementsByTagName('body')[0].classList.add("modal-open");
    },
    rechargeCloseFn() {
      this.rechargeShow = false;
      document.getElementsByTagName('body')[0].classList.remove("modal-open");
    },
    exchangeGiftCode() {
      this.$store.dispatch('exchangeGiftCode',{
        token: this.$store.state.token,
        giftCode: this.giftCode
      }).then((data) => {
        //this.userInfo = data.userInfo
        //this.diamond = data.userBalance
        console.log(data)
      })
	  },
	  goDetail(actId,actNum){
      console.log(actId)
      console.log(actNum)
      this.$router.push({
        path:'/detail', 
        query:{
          actId: actId,
          actNum: actNum
      }})
    },
    getLuckCode(code) {
      var copycode=document.getElementById("copy");
      copycode.value = code;
      copycode.select(); // 选择对象
      document.execCommand("Copy"); // 执行浏览器复制命令
      this.$Toast(this.$t('copy'));
    }
  },
  components: {
    contact,
  },
  computed: {
    bgHeight() {
      let length = !this.listShow? this.luckList.length : this.allList.length;
      let str = (length * 105 + 400) / 100 +'rem';
      return str
    }
  },
  created () {
    this.$store.dispatch('getUserInfo',{
	    token: this.$store.state.token
	  }).then((data) => {
      if(data.code == 1) {
        this.userInfo = data.userInfo
        this.diamond = data.userBalance
        console.log(data)
      }
    })

    this.$store.dispatch('getMyJoinRecord',{
      token: this.$store.state.token,
      page: this.luck.tab
	  }).then((data) => {
      if(data.code == 1) {
        this.luckList = data.joinRecordList;
      }
      this.luck.tab++;
      console.log(this.luckList);
    })

    this.$store.dispatch('getMyAwardRecord',{
	    token: this.$store.state.token,
      page: this.all.tab
	  }).then((data) => {
      if(data.code == 1) {
        this.allList = data.joinRecordList;
      }
      this.all.tab++;
      console.log(this.allList)
    })
  }
}
</script>

