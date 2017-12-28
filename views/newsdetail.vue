<template>
  <div class="act">
       <div class="goback" @click="goback">
       </div>
       <iframe :src=todetail frameborder="0"></iframe>
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
        router.go(-1)
      },
      ...mapActions({
      })
  },
  computed: {
    ...mapState(["todetail","ift"])
  }
};
</script>

<style>

</style>
