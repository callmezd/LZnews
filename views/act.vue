<template>
  <div class="act">
       <div class="goback" @click="goback">
       </div>
       <iframe :src=ifmsrc frameborder="0"></iframe>
  </div>

</template>

<script>
import bus from "./bus";
import store from "../vuex/store";
import router  from "./router";

import { mapState, mapActions } from "vuex";
export default {
    methods: {
      goback(){
        router.push('/index/mine')
      }
  },
  computed: {
    ...mapState(["ifmsrc"])
  }
};
</script>

<style>

</style>
