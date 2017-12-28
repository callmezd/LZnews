<template>
  <div class="topinfo" @click="goback">

  </div>
</template>

<script>
import {mapState,mapActions} from "vuex";
import router from "./router.js"


export default {
  methods:{
    goback(){
      router.go(-1);
    }
  }  
}
</script>

<style>

</style>
