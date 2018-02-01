<template>
  <div class="m_layout">
     <router-view></router-view>
          <div id="bottom">
            <router-link to="/from/one/one-child/0"><span>首页</span></router-link>
            <router-link to="/from/two/two-child/0"><span>分类</span></router-link>
            <router-link to="/from/three"><span>晒单</span></router-link>
            <router-link to="/from/four"><span>购物车</span></router-link>
            <router-link to="/from/five"><span>个人</span></router-link>
          </div>
  </div>
</template>

<script>
export default {
  name:'From'
}
</script>

<style>
#bottom{
  width: 7.5rem;
  height:0.7rem;
  background: yellow;
  position:fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  z-index: 1000;
}
  #bottom span{
    width:0.94rem;
    height: 1.15rem;
    text-align:center;
    line-height: 0.8rem;
  }
</style>
