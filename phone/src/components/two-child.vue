<template>
  <div>
  <div v-for="(h,index) in hots" v-show="index==$route.params.cid">
       <img :src="h.tit">
       <div class="box">
       <p>{{h.style}}</p>
       <div v-for=" i in h.img">
         <img :src="i.img">
       </div>
     </div>
  </div>
  </div>
</template>

<script>
export default {
  name:'two-child',
  data(){
    return{
    }
  },
  props:['hots']
}
</script>

<style>
  .right img{width: 5.5rem;height: 1.45rem;background: blue;display: block;margin:0 auto;}
  .box{width:6.2rem;height: 5.4rem;background: yellowgreen;}
  .box p{text-align: center;  line-height: 0.3rem;}
  .box div{width: 6.2rem;}
  .box img{width:1.8rem;height:1.15rem;display: block;float: left;margin:0.1rem}
</style>
