<template>
  <div class="find">
    <v-head></v-head>

    <li v-for="(item,i) in findlist" :key="i" @click="gonews(item.Data.Href)">
      <router-link :to="{name:'Newsdetail'}" > 
        <img :src="item.Data.Photo" alt="">
      </router-link>
    </li>
  </div>
</template>

<script>
import Head from "./head.vue";
import store from "../vuex/store";
import {mapState,mapActions } from "vuex";
export default {
    data(){
      return{
      }
    },
    methods:{
      ...mapActions({
        getfind:"getfind"
        ,gonews:"gonews"
        
      })
    },
    
    components:{
      'v-head':Head,
    },
    computed:{
          ...mapState([
            "findlist"
          ])
    },
    mounted(){
      this.getfind('/find');
    }
}
</script>

<style>

</style>
