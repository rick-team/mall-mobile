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

      <div class="detail-open-button">
        <div class="next"></div>
        <div class="prev"></div>
      </div>

      <div class="detail-check-wrap__plan">
        <div class="detail-check-wrap__title">
          恭喜您中奖啦!
        </div>
        <div class="detail-check-wrap__code">
          <p>奖品兑换码</p>
          <span>JDK385772</span>
          <div>点击复制到剪贴板</div>
        </div>
      </div>

      <div class="detail-end-wrap__plan" style="display:none;">
        <div class="user-name">
          <div class="cover"></div>
          <div class="name">XDE***F EEF </div>
        </div>
        <ul class="user-info">
          <li>
            <label>时间:</label>
            <span>2019-5-26 20:23:45</span>
          </li>
          <li>
            <label>共参与:</label>
            <span>3次</span>
          </li>
          <li>
            <label>幸运码:</label>
            <span class="code">102562256</span>
          </li>
        </ul>
      </div>

      <div class="detail-open-wrap__plan" style="display:none;">
        <div class="detail-open-wrap__progress">
          <i style="width: 50%"></i>
        </div>
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
          本活动每次消耗10钻石,可多次参加 <br>
          <!-- 本次活动目标已达成 <br>
          激动人心的时刻就要到来啦! -->
        </p>

        <div class="detail-open-wrap__handle">
          <div class="detail-open-wrap__button_minus"></div>
          <input type="number" value="1">
          <div class="detail-open-wrap__button_plus"></div>
          <button class="detail-open-wrap-submit">立即参加</button>
        </div>
        <div class="detail-open-timeout">
          距离结束剩余 <i></i> <span>01：05：55</span>
        </div>
      </div>
    </div>

    <div class="detail-expect">
      <div class="detail-expect-head">
        您  已参与了 <span>0</span> 次本期活动 
      </div>
      <div class="detail-expect-body">
        <div class="detail-expect-time">
          <span>参与时间</span>
          <p>2019-5-11 09:56:45</p>
          <p>2019-5-11 09:56:45</p>
        </div>
        <div class="detail-expect-code">
          <span>幸运码</span>
          <p>102689566</p>
          <p>102689566</p>
        </div>
      </div> 
    </div>

    <div class="detail-open-list">
      <div class="detail-open-list-title">参与记录</div>
      <dl v-for="item in 8">
        <dt></dt>
        <dd>
          <div class="name">
            XDEKKDE DEFEF EEF 
          </div>
          <p>参与了 <span>2</span> 次  2019-5-11 09:56:45</p>
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