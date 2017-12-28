<template>
  <div class="radio">
    <v-head>
    </v-head>
      <div class="top">
      </div>

    <div class="r">
      <b>
        栏目推荐 
      </b>
        <span>
          更多
        </span>
    </div>

    <ul class="ul1">
       <li  v-for="(item,i) in radiol.Column" :key="i" @click="gonews(item.Href)">
          <router-link :to="{name:'Newsdetail'}" > 
           <dt>
              <img :src="item.Photo" alt="">
           </dt>
           <dd>
             <p>{{item.Title}}</p>
           </dd>
      </router-link>
        
      </li>

    </ul>
    <div class="r">
      <b>
        直播平台 
      </b>
        <span>
          更多
        </span>
    </div>
  <ul class="ul2">
       <li  v-for="(item,i) in radiol.Live" :key="i" @click="gonews(item.Href)">
          <router-link :to="{name:'Newsdetail'}" >

           <dt>
              <img :src="item.Photo" alt="">
           </dt>
           <dd>
             <p>{{item.Title}}</p>
           </dd>
            </router-link> 
      
      </li>
    </ul>
    
  </div>
</template>

<script>
import Head from "./head.vue";
import {mapState,mapActions} from "vuex";
// import { mapState, mapActions } from "vuex";

export default {
    data(){
      return{
      }
    },
    methods:{
      ...mapActions(["getradiol","gonews"])
    },
    components:{
      'v-head':Head,
    },
    computed:{
      ...mapState(["radiol"])
    }
    ,
    mounted(){
      this.getradiol("/audio");
    }
    
}
</script>

<style>

</style>
