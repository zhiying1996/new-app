// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueSwiper from 'vue-awesome-swiper'
import From from './components/From.vue'
import One from './components/one.vue'
import Two from './components/two.vue'
import Twochild from './components/two-child.vue'
import Onechild from './components/one-child.vue'
import Three from './components/three.vue'
import Four from './components/four.vue'
import Five from './components/five.vue'
import Axios from 'axios'
import 'swiper/dist/css/swiper.css'
import  './assets/css/base.css'
import {show} from './assets/js/adaptive.js'
{show};

Vue.prototype.$ajax = Axios
Vue.use(VueSwiper)
Vue.use(VueRouter)
Vue.config.productionTip = false
let router=new VueRouter({
  routes:[
    {path:'/from',component:From,
      children:[
        {path:'one',component:One,
          children:[
            {path:'one-child/:cid',component:Onechild,name:'shows'},
             {path:'/',redirect:'one-child/0'}]
        },
        {path:'two',component:Two,
           children:[
          {path:'two-child/:cid',component:Twochild,name:'adress'},
          {path:'/',redirect:'two-child/0'}]
        },
        {path:'three',component:Three},
        {path:'four',component:Four},
        {path:'five',component:Five},
        {path:'/',redirect:'one'},
      ]},
    {path:'/',redirect:'/from'}
  ]
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
})
