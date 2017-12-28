
<template>
    <div>
    <footer>
        <div v-for="(foot,i) in footList" :key="i">
            <router-link  :to="{name:foot.name}">
                <i class="iconfont" v-html="foot.icon"></i>
                <span>{{foot.txt}}</span>
            </router-link>
        </div>
    </footer>
  </div>
</template>

<script>
import store from "../vuex/store";
import {mapState,mapActions } from "vuex";
export default {
    data(){
        return {
        }
    },
      computed:{
          ...mapState([
            "footList"
        ])
    },
}
</script>

<style>

</style>
