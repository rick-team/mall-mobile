<template>
  <div id="indexTitle">
    <div class='title'>
        <span>{{name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props:['name'],
  name: 'indexTitle'
}
</script>

<style socped>
#indexTitle {
  text-align: center;
}
.title {
    display: inline-block;
    min-width: 2.41rem;
    height: .7rem;
    background: #472093;
    border: .05rem solid #864cba;
    box-sizing: border-box;
    text-align: center;
    line-height: .6rem;
    font-size: .35rem;
    color: #fff;
    font-family: '黑体';
    font-weight: bold;
    margin: 0 auto .15rem;
    border-radius: .34rem;
    padding: 0.05rem 0.3rem;
    box-sizing: border-box; 
}
.title span {
    color: #fff600;
}
</style>
