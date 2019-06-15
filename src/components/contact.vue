<style>
#contact p {
  font-size: .21rem;
  color: #fff;
  margin-bottom: .18rem;
}
#contact div {
  width: 3.23rem;
  flex: flex;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
}
#contact div img {
  width: .7rem;
  height: .7rem;
}
</style>
<template>
  <div id="contact">
    <p :style='{color: color}'>任何疑问，请联系客服：</p>
    <div>
      <img src='../assets/ic_bottom_fb.png' />
      <img src='../assets/ic_bottom_ins.png' />
      <img src='../assets/ic_bottom_whatsapp.png' />
    </div>
  </div>
</template>

<script>
export default {
  name: 'contact',
  data() {
    return {
      
    }
  },
  props:['color']
}
</script>

