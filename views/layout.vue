<template>
  <div>
      <!-- <v-head></v-head>    -->

      <router-view></router-view>
      <v-foot></v-foot>
  </div>
</template>

<script>
import Foot from "./foot.vue";
import Head from "./head.vue";
export default {
    data(){
      return{
        
      }
    },
    components:{
      'v-foot':Foot,
      'v-head':Head,
    }
}
</script>


<style>

</style>
