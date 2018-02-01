<template>
  <div id="two" class="m_layout">
    <div class="tit">分类</div>
    <div class="content">
        <div class="list">
            <router-link :to="{name: 'adress',params: {cid: index}}" v-for="(t,index) in keys" :key="index"><span>{{t}}</span></router-link>
        </div>
        <div class="right">
            <router-view :hots="hots"></router-view>
        </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios"
  export default {
    name:'Two',
    data(){
      return{
        keys:['手机','平板','电脑','电器','手表'],
        hots:[]
      }
    },
    created(){
      let that=this;
      axios({
        method:"get",
        url:'static/two.json',
      }).then(function(res){
        that.hots=res.data;
        console.log(that.hots);
      },err=>{
        console.log(err);
      })
    }
  }
</script>

<style>
  #two{width:7.5rem;height:7.5rem;background: red;}
  .tit{width: 7.5rem;height: 0.64rem;text-align: center;line-height: 0.64rem;font-size: 0.4rem;border-bottom: 1px solid gray}
  .content{width: 7.5rem;  height: 6.86rem;}
  .list{ width:1.3rem ;height:6.86rem;border-left: 1px solid gray;float: left;}
  .list span{display: block;width:1.3rem;height: 0.75rem;text-align: center;line-height: 0.75rem;font-size: 0.35rem}
  .right{ width: 6.2rem;height: 6.86rem;background:pink;margin-left: 1.3rem;padding-top: 0.1rem}
</style>
