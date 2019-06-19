<template>
  <div class="detail">
    <indexHeader :banner = banner />

    <div class="detail-info">
      <div class="detail-price">
        <span>Rp</span>
        {{prize.price}}
      </div>
      <div class="detail-description">
        {{prize.name}}
      </div>
      <div class="detail-parms">
        <p>{{prize.detail}}</p>
      </div>
    </div>

    <div class="detail-open-wrap">
      <div class="detail-open-wrap__title">
        <div>
          {{$t("no")}}<span>{{activity.actNum}}</span>{{$t("phase")}}
          <p v-if="activity.actStatus == 1">{{$t("ongoing")}}</p>
          <p v-if="activity.actStatus == 2">{{$t("inTheLottery")}}</p>
          <p v-if="activity.actStatus == 3">{{$t("hasTheLottery")}}</p>
        </div>
      </div>

      <div class="detail-open-button">
        <div class="next"></div>
        <div class="prev"></div>
      </div>

      <div class="detail-check-wrap__plan" v-if="activity.actStatus == 4">
        <div class="detail-check-wrap__title">
          <p>{{$t("openAwardMsg")}}</p>
        </div>
        <div class="detail-check-wrap__code">
          <p>{{$t("changeCode")}}</p>
          <span>JDK385772</span>
          <div>{{$t("tapCopy")}}</div>
        </div>
      </div>

      <div class="detail-end-wrap__plan" v-if="activity.actStatus == 3">
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

      <div class="detail-open-wrap__plan" v-if="activity.actStatus == 2">
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
          <!-- {{$t("activityTipsBefore")}} {{1}} {{$t("activityTipsAfter")}} -->
          <!-- {{$t("openActivityTips")}} -->
          <!-- 本次活动目标已达成 <br>
          激动人心的时刻就要到来啦! -->
        </p>
        <p class="detail-open-wrap__tips"  v-if="activity.actStatus == 2">
          {{$t("openActivitySuccess")}} <br/>
          {{$t("openActivityTips")}}
        </p>
        
        <div class="detail-open-wrap__handle" v-if="activity.actStatus == 1">
          <div class="detail-open-wrap__button_minus"></div>
          <input type="number" value="1">
          <div class="detail-open-wrap__button_plus"></div>
          <button class="detail-open-wrap-submit">{{$t("submit")}}</button>
        </div>
        <div class="detail-open-timeout">
          {{$t("timeEnd")}} <i></i> <span>{{time}}</span>
        </div>
      </div>
    </div>

    <div class="detail-expect">
      <div class="detail-expect-head">
        {{$t("youParticipate")}} <span>{{ activityDetail.myJoinRecord || '0' }}</span> {{$t("theActivity")}} 
      </div>
      <div class="detail-expect-body" v-if="activityDetail.myJoinRecord">
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
      <dl v-for="(item, i) in activityDetail.joinRecord" :key='i'>
        <dt></dt>
        <dd>
          <div class="name">
            {{item.userInfo.nickName}}
          </div>
          <p>{{$t("inInvolved")}} <span>{{item.joinCount}}</span> {{$t("inow")}} {{item.joinTime|time}}</p>
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
    }
  }
}
</script>