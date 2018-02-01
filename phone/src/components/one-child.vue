<template>
<!--  <div>
    <h2>{{$route.params.cid}}</h2><!--v-for="b in brand"
  </div>-->
    <div>
      <swiper class="hot-content" :options="swiper">
        <swiper-slide ><img  src="../assets/img/shu.jpg"></swiper-slide>
        <swiper-slide ><img  src="../assets/img/shu.jpg"></swiper-slide>
        <swiper-slide ><img  src="../assets/img/shu.jpg"></swiper-slide>
        <swiper-slide ><img  src="../assets/img/shu.jpg"></swiper-slide>
      </swiper>
    </div>
</template>

<script>
  export default {
    name:'one-child',
    data() {
      return {
        swiper: {
          slidesPerView: 3,
          slidesPerColumn: 2,
        }
      }
    },
    props:['brand']
  }

</script>

<style>
.hot-content img{margin-bottom: -1.9rem;}
</style>
