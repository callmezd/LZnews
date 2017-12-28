<template>
  <div class="my">

        <v-top></v-top>
        
        <p>{{username}},你好</p>
        <div class="inp inp3">
              <button @click="logout">退出</button>
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
           username:localStorage.username,
        }
    },
    methods:{
        ...mapActions({
        }),
        logout(){
            console.log(this);
            localStorage.username="";
            localStorage.img=""
            localStorage.mhref="/login";
            router.push("/index/mine");
            
        },
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
