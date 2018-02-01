<template>
    <div id="two" class="m_layout">
     <div class="tit"></div>
     <div class="by">
       <p id="pp"><span>我的订单</span><span>查看全部订单></span></p>
       <div class="phot">
         <img  src="../assets/img/shu.jpg">
         <img  src="../assets/img/shu.jpg">
         <img  src="../assets/img/shu.jpg">
         <img  src="../assets/img/shu.jpg">
       </div>
     </div>
     <div class="two">
       <p><i src="../assets/img/shu.jpg"></i>手机回收<span>></span></p>
       <p><i src="../assets/img/shu.jpg"></i>手机回收<span>></span></p>
     </div>
     <div class="three">
       <p><i></i>手机回收<span>></span></p>
       <p><i></i>手机回收<span>></span></p>
       <p><i></i>手机回收<span>></span></p>
     </div>
      <div class="two">
        <p><i></i>手机回收<span>></span></p>
        <p><i></i>手机回收<span>></span></p>
      </div>
      <div class="two">
        <p><i></i>手机回收<span>></span></p>
        <p><i></i>手机回收<span>></span></p>
      </div>
    </div>
</template>

<script>
export  default {
  name:'Five'
}
</script>

<style>
  #two{width: 7.5rem;height: 100%;background: deeppink;}
  .tit{width: 7.5rem;height: 2.1rem;background:#fd8555; }
  .by{width: 7.5rem;height: 1.53rem;margin-bottom: 0.15rem}
  .by p{width: 7.5rem;height: 0.6rem;}
  .by span:nth-of-type(1){display:block;float: left;height: 0.6rem;line-height: 0.6rem;text-align: center;width: auto;}
  .by span:nth-of-type(2){display:block;float: right;height: 0.6rem;line-height: 0.6rem;text-align: center;width: auto;}
  .phot{width: 7.5rem;height:0.93rem;display: flex;justify-content: space-around;}
  .phot img{display: block;width:1.5rem;height: 100%; }
  .two{width:7.5rem;height: auto;background: blue;margin-bottom: 0.15rem;}
  .two p{width: 100%;  height: 0.7rem;line-height: 0.65rem;clear: both;}
  .two i{display: block;width: 0.35rem; height: 0.35rem;float: left;margin: 0.2rem;}
  .two image{width: 0.35rem; height: 0.35rem;}
  .two span{display: block;float: right;margin-right: 0.2rem;}

  .three{width:7.5rem;height: auto;background:yellowgreen;margin-bottom: 0.15rem;}
  .three p{width: 100%;  height: 0.7rem;line-height: 0.65rem;clear: both;}
  .three i{display: block;width: 0.35rem; height: 0.35rem;float: left;margin: 0.2rem;}
  .three image{width: 0.35rem; height: 0.35rem;}
  .three span{display: block;float: right;margin-right: 0.2rem; }
</style>
