<style scoped>
#qa {
  background-position: 0 50%;
  padding-top: .37rem;
  position: absolute;
  top:0;
  left: 0;
  z-index: 101;
  width: 100%;
  height: 100vh;
  overflow: auto;
}
.qa_bg {
  position: absolute;
  top: 1.51rem;
  width: 100%;
  background: #d5d5d5;
  height: 14.5rem;
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
              {{$t('qa_q_1')}}
            </div>
            <div class='a'>
              <p>{{$t('qa_a_1_1')}}</p>
              <p>{{$t('qa_a_1_2')}}</p>
              <p>{{$t('qa_a_1_3')}}</p>
            </div>
          </li>
          <li>
            <div class='q'>
              {{$t('qa_q_2')}}
            </div>
            <div class='a'>
              <p>{{$t('qa_a_2_1')}}</p>
              <p>{{$t('qa_a_2_2')}}</p>
            </div>
          </li>
          <li>
            <div class='q'>
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

