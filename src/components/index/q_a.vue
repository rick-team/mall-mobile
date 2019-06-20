<style scoped>
#qa {
  background-position: 0 50%;
  padding-top: .37rem;
  position: absolute;
  top:0;
  left: 0;
  z-index: 101;
  width: 100%;
<<<<<<< HEAD
=======
  height: 100vh;
  overflow: auto;
>>>>>>> 6918e2e1284682df76f88cf708ec009bf6b972d7
}
.qa_bg {
  position: absolute;
  top: 1.51rem;
  width: 100%;
  background: #d5d5d5;
<<<<<<< HEAD
  height: 11rem;
=======
  height: 14.5rem;
>>>>>>> 6918e2e1284682df76f88cf708ec009bf6b972d7
  z-index: 0;
  min-height: calc(100vh - 1.51rem);
}
.content {
  margin: 0 auto;
  width: 95%;
}
#qa .content .top {
  color: #fff;
  font-size: .4rem;
  text-align: left;
  margin-bottom: .33rem;
}
.qa_list {
  background: #fff;
  border-radius: .16rem;
  padding-top: .34rem;
  position: absolute;
  z-index: 11;
  width: 95%;
  top: 1.05rem;
  padding-bottom: 2rem;
}
.q {
  height: .35rem;
  background: url(../../assets/q.jpg) no-repeat .3rem 0;
  background-size: auto 100%;
  padding-left: .7rem;
  text-align: left;
  line-height: .35rem;
  font-size: .2rem;
  color: #000;
  margin-bottom: .24rem;
}
.a {
  background: url(../../assets/a.jpg) no-repeat .3rem 0;
  background-size: auto .35rem;
  padding-left: .7rem;
  text-align: left;
  font-size: .2rem;
  line-height: .35rem;
  color: #000;
  margin-bottom: .24rem;
}
.a p{
  background: #fff7d0;
  padding: .05rem .1rem;
  border-radius: .05rem;
  width: 5.79rem;
  box-sizing: border-box;
}

</style>
<template>
  <div id="qa">
    <div class='qa_bg'></div>
    <div class='content'>
      <p class='top'>Q&A</p>
      <div class='qa_list'>
        <ul>
          <li>
            <div class='q'>
<<<<<<< HEAD
              怎么充值?
            </div>
            <div class='a'>
              <p>你可以使用Gpay充值,也可以去lazada官方raymanga店购买兑换码,也可以通过app内各种活动和联系客服获得礼品兑换</p>
=======
              {{$t('qa_q_1')}}
            </div>
            <div class='a'>
              <p>{{$t('qa_a_1_1')}}</p>
              <p>{{$t('qa_a_1_2')}}</p>
              <p>{{$t('qa_a_1_3')}}</p>
>>>>>>> 6918e2e1284682df76f88cf708ec009bf6b972d7
            </div>
          </li>
          <li>
            <div class='q'>
<<<<<<< HEAD
              夺宝活动流程是怎么样的?
            </div>
            <div class='a'>
              <p>1.参加活动;<br /> 2.等待活动开奖;<br /> 3.公布中奖号码;<br /> 4.如果你中奖了,您将在参与记录里看到奖品兑换码,请联系客服,也可以去lazada官方raymanga店购买兑换码,也可以通过app内各种活动和联系客服获得礼品兑换</p>
=======
              {{$t('qa_q_2')}}
            </div>
            <div class='a'>
              <p>{{$t('qa_a_2_1')}}</p>
              <p>{{$t('qa_a_2_2')}}</p>
>>>>>>> 6918e2e1284682df76f88cf708ec009bf6b972d7
            </div>
          </li>
          <li>
            <div class='q'>
<<<<<<< HEAD
              每个活动要多久才能开奖?
            </div>
            <div class='a'>
              <p>参与次数达到目标次数时,或者活动到达结束时间时,就会自动进入开奖状态.敬请关注活动动态,祝您好运</p>
=======
              {{$t('qa_q_3')}}
            </div>
            <div class='a'>
              <p>{{$t('qa_a_3_1')}}</p>
              <p>{{$t('qa_a_3_2')}}</p>
            </div>
          </li>
          <li>
            <div class='q'>
              {{$t('qa_q_4')}}
            </div>
            <div class='a'>
              <p>{{$t('qa_a_4_1')}}</p>
            </div>
          </li>
          <li>
            <div class='q'>
              {{$t('qa_q_5')}}
            </div>
            <div class='a'>
              <p>{{$t('qa_a_5_1')}}</p>
            </div>
          </li>
          <li>
            <div class='q'>
              {{$t('qa_q_6')}}
            </div>
            <div class='a'>
              <p>{{$t('qa_a_6_1')}}</p>
              <p>{{$t('qa_a_6_2')}}</p>
>>>>>>> 6918e2e1284682df76f88cf708ec009bf6b972d7
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'qa',
  data() {
    return {
      
    }
  }
}
</script>

