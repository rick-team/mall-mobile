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
}
.top .img img {
	height: 100%;
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
  color: #fff;
}
.a_ {
  width: 2.4rem;
  height: .48rem;
  background: #e81354;
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
	width: 1.5rem;
	height: .05rem;
	background: #6822a6;
	position: absolute;
	left: 0;
	right: 0;
	bottom: -.1rem;
	margin: 0 auto;
}
.listContainer .list li {
	width: 6.16rem;
	height: .92rem;
	margin: 0 auto;
	background: url(../assets/bg_ticket_2.jpg);
	background-size: 100% 100%;
	margin-bottom: .13rem;
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
  padding: 0.03rem 0.15rem;
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
</style>
<template>
  <div id="peopleCenter">
    <div :style='{height: bgHeight}' class='bg'>
		</div>
    <div class='content'>
			<div class='top'>
				<div class='img left'>
					<img src='../assets/usericon_default.png' />
				</div>
				<div class='use'>
					<div class='name'>Abudula ajaz hartanto</div>
					<div>
						<div class='kupon left'>
							<p>{{99200}}</p>
						</div>
						<div class='diamond left'>
							<p>{{99000}}</p>
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
						<ul>
							<li>
								<div class='left'>
									<p>{{$t("no")}}3{{$t("phase")}} 整个雅加达北区我最帅摩托 送3个头盔4个轮胎5个刹车</p>
									<p><span class=time>{{'2019-5-11 09:56:45'}}</span><span class='btn'>进行中</span></p>
								</div>
								<div class='right'>{{$t("inInvolved")}}3{{$t("inow")}}</div>
							</li>
							<li>
								<div class='left'>
									<p>第6期 HUAWEI MATE30 PRO PROCHE车</p>
									<p><span class=time>{{'2019-5-11 09:56:45'}}</span><span class='btn'>进行中</span></p>
								</div>
								<div class='right'>参与{{}}次</div>
							</li>
							<li>
								<div class='left'>
									<p>第3期 整个雅加达北区我最帅摩托 送3个头盔4个轮胎5个刹车</p>
									<p><span class=time>{{'2019-5-11 09:56:45'}}</span><span class='btn'>进行中</span></p>
								</div>
								<div class='right'>参与{{}}次</div>
							</li>
						</ul>
					</div>
					<div class='list_all list' v-if='listShow'>
						<ul>
							<li>
								<div class='left'>
									<p>第3333333期 整个雅加达北区我最帅摩托 送3个头盔4个轮胎5个刹车</p>
									<p><span class=time>{{'2019-5-11 09:56:45'}}</span><span class='btn'>进行中</span></p>
								</div>
								<div class='right'>参与{{}}次</div>
							</li>
							<li>
								<div class='left'>
									<p>第6期 HUAWEI MATE30 PRO PROCHE车</p>
									<p><span class=time>{{'2019-5-11 09:56:45'}}</span><span class='btn'>进行中</span></p>
								</div>
								<div class='right'>参与{{}}次</div>
							</li>
							<li>
								<div class='left'>
									<p>第3期 整个雅加达北区我最帅摩托 送3个头盔4个轮胎5个刹车</p>
									<p><span class=time>{{'2019-5-11 09:56:45'}}</span><span class='btn'>进行中</span></p>
								</div>
								<div class='right'>参与{{}}次</div>
							</li>
						</ul>
					</div>
				</div>
				<contact color='#000' />
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
						<input type='text' />
					</div>
					<p class='p_bottom'>{{$t("serviceTips")}}</p>
					<div class='btnDiv'>{{$t("exchange")}}</div>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
import contact from '@/components/contact'

export default {
  name: 'peopleCenter',
  data() {
    return {
			list: 3,
			rechargeShow:false,
			listShow:true
    }
  },
  methods:{
    rechargeShowFn() {
      this.rechargeShow = true;
      document.getElementsByTagName('body')[0].classList.add("modal-open");
    },
    rechargeCloseFn() {
      this.rechargeShow = false;
      document.getElementsByTagName('body')[0].classList.remove("modal-open");
    }
  },
	components: {
		contact,
	},
	computed: {
		bgHeight() {
			return (3 * 92 + 300) / 100 +'rem'
		}
	}
}
</script>

