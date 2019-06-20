<template>
  <div id="indexTitle">
    <div class='title'>
        <span>{{name}}</span>{{$t('area')}}
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
<<<<<<< HEAD
.title {
    width: 2.41rem;
=======
#indexTitle {
  text-align: center;
}
.title {
    display: inline-block;
    min-width: 2.41rem;
>>>>>>> 6918e2e1284682df76f88cf708ec009bf6b972d7
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
<<<<<<< HEAD
    padding: 0.05rem 0.15rem;
=======
    padding: 0.05rem 0.3rem;
>>>>>>> 6918e2e1284682df76f88cf708ec009bf6b972d7
    box-sizing: border-box; 
}
.title span {
    color: #fff600;
}
</style>
