
import router  from "./router";

import Vue from "vue";

import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwesomeSwiper)  // 全局使用

import vueResource from "vue-resource";
Vue.use(vueResource);


import MintUI from "mint-ui";
import store from "../vuex/store.js" 
import 'mint-ui/lib/style.css'
Vue.use(MintUI);   //  全局使用
import vuex from "vuex";
Vue.use(vuex);

import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


const app = new Vue({
    el:"#app",
    data:{
        transitionName:"slide-right"
    },
    router,
    store,

})