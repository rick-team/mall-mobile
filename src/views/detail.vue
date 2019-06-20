<template>
  <div class="detail">
    <indexHeader :banner = banner />

    <div class="detail-info">
      <div class="detail-price">
        <span>Rp</span>
<<<<<<< HEAD
        6.899.539
      </div>
      <div class="detail-description">
        整个雅加达地区我最帅摩托整车包邮附送3个头盔4个轮胎8个刹车3个灯泡外带全车5000保险
      </div>
      <div class="detail-parms">
        <p>■ 延用出口摩托车车架</p>
        <p>■ 卓越的整车防水性能</p>
        <p>■ 1200W大功率电机</p>
        <p>■ EMC防电磁干扰</p>
        <p>■ AT Field</p>
=======
        {{prize.price}}
      </div>
      <div class="detail-description">
        {{prize.name}}
      </div>
      <div class="detail-parms">
        <p>{{prize.detail}}</p>
>>>>>>> 6918e2e1284682df76f88cf708ec009bf6b972d7
      </div>
    </div>

    <div class="detail-open-wrap">
      <div class="detail-open-wrap__title">
        <div>
<<<<<<< HEAD
          {{$t("no")}}<span>3</span>{{$t("phase")}}
          <p>{{$t("ongoing")}}</p>
          <!-- <p>{{$t("inTheLottery")}}</p>
          <p>{{$t("hasTheLottery")}}</p> -->
=======
          {{$t("no")}}<span>{{activity.actNum}}</span>{{$t("phase")}}
          <p v-if="activity.actStatus == 1">{{$t("ongoing")}}</p>
          <p v-if="activity.actStatus == 2">{{$t("inTheLottery")}}</p>
          <p v-if="activity.actStatus == 3">{{$t("hasTheLottery")}}</p>
>>>>>>> 6918e2e1284682df76f88cf708ec009bf6b972d7
        </div>
      </div>

      <div class="detail-open-button">
        <div class="next"></div>
        <div class="prev"></div>
      </div>

<<<<<<< HEAD
      <div class="detail-check-wrap__plan">
=======
      <div class="detail-check-wrap__plan" v-if="activity.actStatus == 4">
>>>>>>> 6918e2e1284682df76f88cf708ec009bf6b972d7
        <div class="detail-check-wrap__title">
          <p>{{$t("openAwardMsg")}}</p>
        </div>
        <div class="detail-check-wrap__code">
          <p>{{$t("changeCode")}}</p>
          <span>JDK385772</span>
          <div>{{$t("tapCopy")}}</div>
        </div>
      </div>

<<<<<<< HEAD
      <div class="detail-end-wrap__plan" style="display:none;">
=======
      <div class="detail-end-wrap__plan" v-if="activity.actStatus == 3">
>>>>>>> 6918e2e1284682df76f88cf708ec009bf6b972d7
        <div class="user-name">
          <div class="cover"></div>
          <div class="name">XDE***F EEF </div>
        </div>
        <ul class="user-info">
          <li>
            <label>{{$t("time")}}:</label>
            <span>2019-5-26 20:23:45</span>
          </li>
          <li>
            <label>{{$t("involved")}}:</label>
            <span>3次</span>
          </li>
          <li>
            <label>{{$t("luckyCode")}}:</label>
            <span class="code">102562256</span>
          </li>
        </ul>
      </div>

<<<<<<< HEAD
      <div class="detail-open-wrap__plan" style="display:none;">
=======
      <div class="detail-open-wrap__plan" v-if="activity.actStatus == 2">
>>>>>>> 6918e2e1284682df76f88cf708ec009bf6b972d7
        <div class="detail-open-wrap__progress">
          <i style="width: 50%"></i>
        </div>
        <ul class="detail-open-wrap__parms">
          <li>
            <span>523</span>
            <p>{{$t("alreadyNum")}}</p>
          </li>
          <li>
            <span>1000</span>
            <p>{{$t("expectNum")}}</p>
          </li>
          <li>
            <span>477</span>
            <p>{{$t("remainingNum")}}</p>
          </li>
        </ul>
        <p class="detail-open-wrap__tips">
<<<<<<< HEAD
          {{$t("activityTips")}}
=======
          <!-- {{$t("activityTipsBefore")}} {{1}} {{$t("activityTipsAfter")}} -->
>>>>>>> 6918e2e1284682df76f88cf708ec009bf6b972d7
          <!-- {{$t("openActivityTips")}} -->
          <!-- 本次活动目标已达成 <br>
          激动人心的时刻就要到来啦! -->
        </p>
<<<<<<< HEAD
        
        <div class="detail-open-wrap__handle">
=======
        <p class="detail-open-wrap__tips"  v-if="activity.actStatus == 2">
          {{$t("openActivitySuccess")}} <br/>
          {{$t("openActivityTips")}}
        </p>
        
        <div class="detail-open-wrap__handle" v-if="activity.actStatus == 1">
>>>>>>> 6918e2e1284682df76f88cf708ec009bf6b972d7
          <div class="detail-open-wrap__button_minus"></div>
          <input type="number" value="1">
          <div class="detail-open-wrap__button_plus"></div>
          <button class="detail-open-wrap-submit">{{$t("submit")}}</button>
        </div>
        <div class="detail-open-timeout">
<<<<<<< HEAD
          {{$t("timeEnd")}} <i></i> <span>01：05：55</span>
=======
          {{$t("timeEnd")}} <i></i> <span>{{time}}</span>
>>>>>>> 6918e2e1284682df76f88cf708ec009bf6b972d7
        </div>
      </div>
    </div>

    <div class="detail-expect">
      <div class="detail-expect-head">
<<<<<<< HEAD
        {{$t("youParticipate")}} <span>0</span> {{$t("theActivity")}} 
      </div>
      <div class="detail-expect-body">
=======
        {{$t("youParticipate")}} <span>{{ activityDetail.myJoinRecord || '0' }}</span> {{$t("theActivity")}} 
      </div>
      <div class="detail-expect-body" v-if="activityDetail.myJoinRecord">
>>>>>>> 6918e2e1284682df76f88cf708ec009bf6b972d7
        <div class="detail-expect-time">
          <span>{{$t("involvedTime")}}</span>
          <p>2019-5-11 09:56:45</p>
          <p>2019-5-11 09:56:45</p>
        </div>
        <div class="detail-expect-code">
          <span>{{$t("luckyCode")}}</span>
          <p>102689566</p>
          <p>102689566</p>
        </div>
      </div> 
    </div>

    <div class="detail-open-list">
      <div class="detail-open-list-title">{{$t("record")}}</div>
<<<<<<< HEAD
      <dl v-for="item in 8">
        <dt></dt>
        <dd>
          <div class="name">
            XDEKKDE DEFEF EEF 
          </div>
          <p>{{$t("inInvolved")}} <span>2</span> {{$t("inow")}}  2019-5-11 09:56:45</p>
=======
      <dl v-for="(item, i) in activityDetail.joinRecord" :key='i'>
        <dt></dt>
        <dd>
          <div class="name">
            {{item.userInfo.nickName}}
          </div>
          <p>{{$t("inInvolved")}} <span>{{item.joinCount}}</span> {{$t("inow")}} {{item.joinTime|time}}</p>
>>>>>>> 6918e2e1284682df76f88cf708ec009bf6b972d7
        </dd>
      </dl>
    </div>
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
<<<<<<< HEAD
      banner: [
        {
          img: require('@/assets/prize_detail_1.jpg')
        },
        {
          img: require('@/assets/prize_detail_1.jpg')
        },
      ]
=======
      banner: [],
      prize: {},
      activity: {},
      activityDetail: {},
      time: '00:00:00'
    }
  },
  created(){
    console.log(this.$route)
    this.$store.dispatch('getActivityDetail',{
      ...this.$route.query
    }).then(({activityDetail}) => {
      this.activityDetail = activityDetail
      this.prize = activityDetail.activity.prize
      this.activity = activityDetail.activity
      this.banner = activityDetail.detailImg
      this.timeOut(activityDetail.activity.endTime)
      console.log(activityDetail)
    })
  },
  methods: {
    endTime(){
      clearInterval(this.timeid)
      this.timeid = null
    },
    timeOut(endTime){
      function checkTime(i){
          if (i <= 10) {
              i = "0" + i;
          }
          return i;
      }
      let startTime = Math.round(new Date() / 1000);//开始时间
      
      this.timeid = setInterval(() => {
          let ts = endTime - startTime;//计算剩余的毫秒数
          let hh = parseInt(ts / 60 / 60 % 24, 10);//计算剩余的小时数
          let mm = parseInt(ts / 60 % 60, 10);//计算剩余的分钟数
          let ss = parseInt(ts % 60, 10);//计算剩余的秒数
          hh = checkTime(hh);
          mm = checkTime(mm);
          ss = checkTime(ss);
          
          if(ts>0){
            this.time = hh + ":" + mm + ":" + ss
            startTime ++;
          }else if(ts < 0){
            this.endTime()
            this.time = '00:00:00'
          }
      },1000);
>>>>>>> 6918e2e1284682df76f88cf708ec009bf6b972d7
    }
  }
}
</script>