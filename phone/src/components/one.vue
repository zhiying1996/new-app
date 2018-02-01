<template>
  <div id="one" class="m_layout">
    <swiper class="box" :options="swiperOption">
      <swiper-slide  v-for="(r,index) in runs" :key="index"><img :src="r"></swiper-slide>
    </swiper>
    <div class="type">
      <ul>
        <li v-for="(i,index) in img">
          <img :src="i"><p>oppo Rlls</p>
        </li>
      </ul>
    </div>
    <div class="hot">
      <div class="hot-tit">
        <p>iphone热卖</p>
        <span>查看更多></span>
      </div>
      <ul class="hot-content">
        <li v-for=" h in hot"><img  :src="h"></li>
      </ul>
    </div>
    <div class="hot">
      <div class="hot-tit">
        <p>安卓热卖</p>
        <span>查看更多></span>
      </div>
      <ul class="hot-content">
        <li v-for="h in hot2"><img  :src="h"></li>
      </ul>
    </div>
    <div class="brand">
      <div class="hot-tit">
        <p>品牌热卖</p>
        <span>查看更多></span>
      </div>
      <ul class="brand-sel">
        <router-link :to="{name: 'shows',params: {cid: index}}" v-for="(b,index) in brd" :key="index"><li>{{b}}</li></router-link>
      </ul>
      <router-view :brand="brand"></router-view>
    </div>
    <div class="recommend">
      <div class="hot-tit">
        <p>个人推荐</p>
        <span>查看更多></span>
      </div>
      <swiper class="recommend-run" :options="recommend">
        <swiper-slide v-for="b in bot"><img  :src="b"><span>￥99新iphoneSE</span><span>64G</span><span>1488</span></swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
  import  axios from 'axios'
  export default {
    name:'One',
    data() {
      return {
        swiperOption: {
          autoplay: true,
          speed:1000,
          loop:true,
        },
        recommend:{
          slidesPerView: 3,
          loop:true,
        },
        img:[],
        runs:[],
        hot:[],
        hot2:[],
        bot:[],
        brd:["苹果","vivo","魅族","oppo","华为","小米"],
        brand:[]
      }
    },
    created(){
      let that=this;
      axios({
        method:"get",
        url:'static/tsconfig.json',
      }).then(function(res){
        that.runs=res.data.run;
        console.log(that.runs)
        that.img=res.data.img;
        that.hot=res.data.hot;
        that.hot2=res.data.hot2;
        that.bot=res.data.bot;
        that.brand=res.data.brand;
        console.log(that.brand);
        console.log(res);


      })
    }
  }
</script>

<style>
  #one{ width: 7.5rem;height:100%;}
  .box{width: 100%;  height: 2.75rem}
  .box img{width: 100%;height:2.75rem;}
  .type{width: 100%;height: 1.09rem;background: pink;}
  .type ul{width: 100%;height: 100%;display: flex;justify-content: space-around;}
  .type ul li{height:0.84rem;width:1.09rem;background: blue;margin-top: 0.2rem }
  .type ul li img{width:0.6rem;height: 0.6rem;border-radius: 50%;display: block;margin: auto; }
  .type ul li p{font-size: 0.16rem;color: gray;text-align: center}
  .hot{width: 7.5rem;height: 3.6rem;background: palevioletred;}
  .hot .hot-tit{height: 0.8rem;background:lightseagreen;line-height: 0.8rem;}
  .hot-tit p{font-size: 0.2rem;text-align: center;color: #333;display: inline-block;padding-left: 3rem}
  .hot-tit span{float:right;color: #fe6547;font-size: 0.18rem;}
  .hot-content{height: 2.8rem;background: palegreen;margin: 0 0.1rem 0 0.1rem;display:flex;justify-content:space-between;flex-wrap:wrap;}
  .hot-content img{ width: 3.6rem;height: 1.3rem;border-radius: 0.1rem;display: block;margin-bottom: 0.1rem;}
  .brand{width: 7.5rem;height: 4.4rem;background: greenyellow;}
  .brand .hot-tit{height: 0.8rem;background:lightseagreen;line-height: 0.8rem;}
  .brand ul{width: 7.5rem;height: 0.8rem;display: flex;justify-content: space-around}
  .brand ul li {height: 0.46rem;width:1.2rem;text-align: center;border-right: 1px solid #333;display: block;margin-top: 0.17rem}
  .recommend{width: 7.5rem;height: 3.8rem;background: orange;}
  .recommend .hot-tit{height: 0.8rem;background:lightseagreen;line-height: 0.8rem;}
  .recommend-run{width: 7.5rem;height: 3.03rem;}
  .recommend img{width:1.35rem;height: 1.75rem;display: block;margin: 0 auto;}
  .recommend span{display: block;text-align: center;}
  .recommend span:nth-of-type(3){color:#fe6547}
</style>
