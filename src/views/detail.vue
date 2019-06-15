<template>
  <div class="detail">
    <indexHeader :banner = banner />
    <div class="detail-info">
      <div class="detail-price">
        <span>Rp</span>
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
      </div>
    </div>
    <div class="detail-open-wrap">
      <div class="detail-open-wrap__title">
        <div>
          第<span>3</span>期
          <p>进行中</p>
        </div>
      </div>
      <div class="detail-open-wrap__plan">
        <div class="detail-open-wrap__progress"></div>
        <ul class="detail-open-wrap__parms">
          <li>
            <span>523</span>
            <p>已参与次数</p>
          </li>
          <li>
            <span>1000</span>
            <p>目标次数</p>
          </li>
          <li>
            <span>477</span>
            <p>剩余次数</p>
          </li>
        </ul>
        <p class="detail-open-wrap__tips">
          本活动每次消耗10钻石,可多次参加
        </p>
        <div class="detail-open-wrap__handle">
          <div class="detail-open-wrap__handle___remove"></div>
          <input type="number" value="1">
          <div class="detail-open-wrap__handle___add"></div>
          <button class="detail-open-wrap-submit">立即参加</button>
        </div>
      </div>
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
      banner: [
        {
          src: require('@/assets/prize_detail_1.jpg')
        },
        {
          src: require('@/assets/prize_detail_1.jpg')
        },
      ]
    }
  }
}
</script>