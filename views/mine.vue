<template>
  <div class="mine">
      <div class="top">
          <div class="usericon" >
            <img :src="img" alt="">
          </div>
          <router-link :to="murl">
            <p>{{userinfo}}</p>
            
          </router-link>
      </div>
    <div class="info">
      <div class="tq">天气</div>
      <div class="shu"></div>
      <div class="xz">新作</div>
    </div>

    <div class="myinfo my1">
      <router-link :click="changeurl('http://news.jstv.com/wap/mall/index.shtml')" :to="{name:'act'}">
            <div>
              <p>我的荔枝树</p>
          </div>
      </router-link>
   
      <div>
        <p>我的收藏</p>
      </div>
      <div>
        <p>我的兑换</p>
      </div>
   </div>

    <div class="myinfo my2">
      <div>
        <p>用户反馈</p>
      </div>
      <div>
        <p>关于我们</p>
      </div>
      <div>
        <p>设置</p>
      </div>
   </div>

  </div>

</template>

<script>
// import bus from "./bus";
import store from "../vuex/store";
import { mapState, mapActions } from "vuex";
export default {
  data(){
    return{
    }
  },
  methods: {
    ...mapActions(
      {
      changeurl:"changeurl",
      go:"go"
      ,cgurl:"cgurl"
      }
    )
    ,
  },
  computed: {
    ...mapState([
      "lztreeUrl",
      "userinfo",
      "img",
      "murl"
      ,
    ])
  },
  mounted(){
      this.go()
  }
};
</script>

<style>

</style>
