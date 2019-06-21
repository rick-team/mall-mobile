<template>
  <div class="detail">
    <router-link class="back" to="/">back</router-link>
    <indexHeader :banner = banner />

    <div class="detail-info">
      <div class="detail-price">
        <span>Rp</span>
        {{prize.price | fmoney}}
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
          <p v-if="activity.actStatus == 2">{{$t("ongoing")}}</p>
          <p v-if="activity.actStatus == 3">{{$t("inTheLottery")}}</p>
          <p v-if="activity.actStatus == 4">{{$t("hasTheLottery")}}</p>
        </div>
      </div>

      <div class="detail-open-button">
        <div class="next" @click="next"></div>
        <div class="prev" @click="prev"></div>
      </div>

      <div v-if="activity.actStatus == 4">
      <div class="detail-check-wrap__plan" v-if="awardRecord.exchangeCode">
        <div class="detail-check-wrap__title">
          <p>{{$t("openAwardMsg")}}</p>
        </div>
        <div class="detail-check-wrap__code" @click="getLuckCode(awardRecord.exchangeCode)">
          <p>{{$t("changeCode")}}</p>
          <span>{{awardRecord.exchangeCode}}</span>
          <div>{{$t("tapCopy")}}</div>
        </div>
      </div>
      <div class="detail-end-wrap__plan" v-else>
        <div class="user-name">
          <div class="cover"><img :src="awardRecord.userInfo.imgUrl" alt=""></div>
          <div class="name">{{awardRecord.userInfo.nickName}} </div>
        </div>
        <ul class="user-info">
          <li>
            <label>{{$t("time")}}:</label>
            <span>{{awardRecord.joinTime | time}}</span>
          </li>
          <li>
            <label>{{$t("involved")}}:</label>
            <span>{{awardRecord.joinCount}}次</span>
          </li>
          <li>
            <label>{{$t("luckyCode")}}:</label>
            <span class="code">{{awardRecord.luckyCode}}</span>
          </li>
        </ul>
      </div></div>

      <div class="detail-open-wrap__plan" v-if="activity.actStatus == 2 || activity.actStatus == 3">
        <div class="detail-open-wrap__progress">
          <i :style="'width: '+progress+'%'"></i>
        </div>
        <ul class="detail-open-wrap__parms">
          <li>
            <span>{{ start }}</span>
            <p>{{$t("alreadyNum")}}</p>
          </li>
          <li>
            <span>{{activity.endCount}}</span>
            <p>{{$t("expectNum")}}</p>
          </li>
          <li>
            <span>{{ end }}</span>
            <p>{{$t("remainingNum")}}</p>
          </li>
        </ul>
        <p class="detail-open-wrap__tips"  v-if="activity.actStatus == 2">
          {{$t("activityTipsBefore")}} {{activityDetail.joinPrice}} {{$t("activityTipsAfter")}}
          <!-- {{$t("openActivityTips")}} -->
          <!-- 本次活动目标已达成 <br>
          激动人心的时刻就要到来啦! -->
        </p>
        <p class="detail-open-wrap__tips"  v-if="activity.actStatus == 3">
          {{$t("openActivitySuccess")}} <br/>
          {{$t("openActivityTips")}}
        </p>
        
        <div class="detail-open-wrap__handle" v-if="activity.actStatus == 2">
          <div class="detail-open-wrap__button_minus" @click="minus"></div>
          <input type="number" :value="joinCount">
          <div class="detail-open-wrap__button_plus" @click="plus"></div>
          <button class="detail-open-wrap-submit" @click="submit">{{$t("submit")}}</button>
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
        <dt>
          <img :src="item.userInfo.imgUrl" alt="">
        </dt>
        <dd>
          <div class="name">
            {{item.userInfo.nickName}}
          </div>
          <p>{{$t("inInvolved")}} <span>{{item.joinCount}}</span> {{$t("inow")}} {{item.joinTime|time}}</p>
        </dd>
      </dl>
    </div>
    <input id='copy' type='text' style="position:fixed; top: -2000px;"/>
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
      joinCount: 1,
      awardRecord: null,
      activityDetail: {},
      time: '00:00:00'
    }
  },
  computed:{
    start(){
      return this.activity.joinCount || 0 
    },
    end(){
      return this.activity.endCount - (this.activity.joinCount || 0)
    },
    progress(){
      return this.start / this.activity.endCount * 100
    }
  },
  created(){
    
    this.$store.dispatch('getActivityDetail',{
      ...this.$route.query
    }).then(({activityDetail}) => {
      console.log(activityDetail)
      if(activityDetail){
        this.activityDetail = activityDetail
        this.prize = activityDetail.activity.prize
        this.activity = activityDetail.activity
        this.banner = activityDetail.detailImg
        this.timeOut(activityDetail.activity.endTime)
        this.awardRecord = activityDetail.awardRecord
      } else {
        this.prev()
        console.log(activityDetail)
      }
    })
  },
  methods: {
    next(){
      const actId = this.$route.query.actId
      let actNum = parseInt(this.$route.query.actNum)
      console.log(actNum)
      actNum++
      // actNum += actNum
      this.$router.push({
        path:'/detail', 
        query:{
          actId: actId,
          actNum: actNum
      }})
      location.reload()
    },
    prev(){
      const actId = this.$route.query.actId
      let actNum = parseInt(this.$route.query.actNum)
      console.log(actNum)
      actNum--
      console.log(actNum)
      if(actNum < 1){
        return
      }
      // actNum += actNum
      this.$router.push({
        path:'/detail', 
        query:{
          actId: actId,
          actNum: actNum
      }})
      location.reload()
    },
    getLuckCode(code) {
      var copycode=document.getElementById("copy");
      copycode.value = code
      copycode.select(); // 选择对象
      document.execCommand("Copy"); // 执行浏览器复制命令
      this.$Toast('OK !');
    },
    submit(){
      const actId = this.$route.query.actId
      const token = this.$store.state.token
      this.$store.dispatch('joinActivity', {
        actId: actId,
        token: token,
        joinCount: this.joinCount
      }).then(({code}) => {
        if(code == 1){
          this.$Toast('OK !');
        }
      })
    },
    endTime(){
      clearInterval(this.timeid)
      this.timeid = null
    },
    minus(){
      if(this.joinCount > 1){
        this.joinCount --
      }
    },
    plus(){
      this.joinCount ++
    },
    timeOut(endTime){

      const kaijan = () => {
        this.$store.dispatch('getActivityDetail',{
          ...this.$route.query
        }).then(({activityDetail}) => {
          console.log(activityDetail)
          if(activityDetail){
            this.activityDetail = activityDetail
            this.prize = activityDetail.activity.prize
            this.activity = activityDetail.activity
            this.banner = activityDetail.detailImg
            this.timeOut(activityDetail.activity.endTime)
            this.awardRecord = activityDetail.awardRecord
          } else {
            this.prev()
            console.log(activityDetail)
          }
        })
      }
    

      const countTime = () => {
      let startTime = new Date().getTime();
  
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
        } else {
          this.activity.actStatus = 3
          // if(this.activity.actStatus === 2){
          //   kaijan()
          // }
          // location.reload()
        }
      }
      countTime()
    }
  }
}
</script>