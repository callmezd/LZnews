<template>
  <div class="login">
      <v-top></v-top>
      <div class="inp inp1">
        <i class="iconfont" v-html="logicon[0]"></i>
          <input type="text" placeholder="手机号码" v-model="username">
      </div>
      <div class="inp inp2">
        <i class="iconfont" v-html="logicon[2]"></i>
          <input type="password" placeholder="密码" v-model="password">
      </div>

      <div class="inp inp3">
          <button @click="login">提交</button>
      </div>

      <div class="info">
          <span>
              <router-link :to="{name:'register'}">
                  快速注册
              </router-link>
            </span>
          <span>|</span>
          <span>忘记密码</span>
      </div>
  </div>
</template>

<script>
import top from "./topinfo.vue";
import { mapState, mapActions } from "vuex";
import axios from "axios";
import { Indicator } from 'mint-ui';
import router from "./router.js"
axios.defaults.baseURL = "http://localhost:9000";

export default {
    data(){
        return{
         username:"",
         password:""
        }
    },
    methods:{
        ...mapActions({
                 cguser:"cguser",
                cgmurl:"cgmurl"
                ,cgmhref:"cgmhref"
        }),
        go(){
            console.log(this.username)
        },
        login(){
            var postdata={
                username:this.username,
                password:this.password
            }
            var timer="";
        axios.post("/login",{
            params:postdata
        }).then(res=>{
            if(res.data[0]){
                Indicator.open({
                        text: '登录成功，正在跳转',
                        spinnerType: 'fading-circle'
                        });
                localStorage.username = res.data[0].username;
                localStorage.img = res.data[0].imgid;
                localStorage.mhref="/my";
                this.cguser(localStorage.username);
                timer=setInterval(()=>{
                    Indicator.close();
                    router.push("/index/mine");
                    clearInterval(timer);
                },1500)        
               
            }else{
                Indicator.open({
                        text: '登录失败,请检查你的用户名或密码',
                        spinnerType: 'fading-circle'
                        });

                timer=setInterval(()=>{
                    Indicator.close();
                    router.push("/login");
                    clearInterval(timer);
                },1500)        
            }
            })
        }
        
    },
    components:{
         'v-top':top,
    },
     computed: {
            ...mapState([
            "logicon",
            "murl"
            ])
     }
}
</script>

<style>

</style>
