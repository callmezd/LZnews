<template>
  <div class="register">
      <v-top></v-top>
      <div class="inp inp1">
        <i class="iconfont" v-html="logicon[0]"></i>
          <input type="text" placeholder="手机号码" v-model="username">
      </div>
      <div class="inp inp2">
        <i class="iconfont" v-html="logicon[1]"></i>
          <input type="text" placeholder="验证码" >
          <button class="r_btn">获取验证码</button>
      </div>
      <div class="inp inp2">
        <i class="iconfont" v-html="logicon[2]"></i>
          <input type="password" placeholder="密码" v-model="password">
      </div>
      <div class="inp inp3">
          <button @click="sub">提交</button>
      </div>
      <div class="info">
      </div>
  </div>
</template>

<script>
import top from "./topinfo.vue";
import axios from "axios";
import { mapState, mapActions } from "vuex";
import { Indicator } from 'mint-ui';
import router from "./router.js"
export default {
    data(){
        return{
            username:"",
            password:""
        }
    },
    methods:{
        sub(){
            var timer=""
            var postdata={
                username:this.username,
                password:this.password
            }
        axios.post("/user",{
            params:postdata
        }).then(res=>{
            if(res.data==1){
                Indicator.open({
                        text: '注册成功',
                        spinnerType: 'fading-circle'
                        });
                 timer=setInterval(()=>{
                    Indicator.close();
                    router.push("/login");
                    clearInterval(timer)
                },1500)
            }else{
                Indicator.open({
                        text: '用户名已存在，换一个吧',
                        spinnerType: 'fading-circle'
                        });
                setInterval(()=>{
                    Indicator.close();
                    router.push("/register")                    
                },1500)
            }
            }).then(json=>{
            })
        }
    },
    components:{
         'v-top':top,
    },
     computed: {
            ...mapState([
            "logicon",
            ])
     }
}
</script>

<style>

</style>
