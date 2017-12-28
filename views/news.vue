<template>
   <section class="section">
       <div class="news">
           <!-- <v-head></v-haed> -->
           <v-head></v-head>
           <div class="news-box">
               <div class="news-div">
                   <div class="common allnews" v-show="show">

                       <div class="news-nav">
                           <div @click="changeIndex1(i)" class="nav" v-for="(n,i) in newslist" :key="i" :class="swiperIndex==i?'active':''">{{n}}</div>
                       </div>

                       <div class="news-swiper">

                            <div class="swiper-container " id="swipe">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide mt-2 slide1" >
                                        <mt-swipe :auto="4000" class="nbanner":stopPropagation=true>
                                            <mt-swipe-item >
                                            <img src="../../assets/img/news/banner1.png" alt="">


                                            </mt-swipe-item>
                                            <mt-swipe-item>
                                            <img src="../../assets/img/news/banner2.jpg" alt="">
                                                
                                            </mt-swipe-item>
                                           <mt-swipe-item>
                                            <img src="../../assets/img/news/banner3.jpg" alt="">
                                               
                                           </mt-swipe-item>
                                        </mt-swipe> 
                                        <ul>
                                            <li @click="gonews(item.Data.Href)"  v-for="(item,i) in hlist.HeadPics" :key="i">
                                              <router-link  :to="{name:'Newsdetail'}">
                                                   
                                                    <div class="lwrap">
                                                        <img :src="item.Data.OtherPhoto" alt="">
                                                        <div class="info">
                                                               <p class="title">{{item.Data.Title}}</p>
                                                             <span>{{item.Data.Source}}</span>
                                                         </div>
                                                    </div>
                                              </router-link>
                                                    
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="swiper-slide mt-2 slide1">
                                          <ul>
                                        <li @click="gonews(item.Data.Href)" v-for="(item,i) in hdlist.List" :key="i">
                                              <router-link  :to="{name:'Newsdetail'}">
                                            
                                                    <div class="lwrap">
                                                        <img :src="item.Data.OtherPhoto" alt="">
                                                        <div class="info">
                                                               <p class="title">{{item.Data.Title}}</p>
                                                             <span>{{item.Data.Source}}</span>
                                                         </div>
                                                    </div>

                                              </router-link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="swiper-slide mt-2 slide1">
                                          <ul>
                                        <li @click="gonews(item.Data.Href)"  v-for="(item,i) in comlist.List" :key="i">
                                              <router-link  :to="{name:'Newsdetail'}">
                                                  
                                                    <div class="lwrap">
                                                        <img :src="item.Data.OtherPhoto" alt="">
                                                        <div class="info">
                                                               <p class="title">{{item.Data.Title}}</p>
                                                             <span>{{item.Data.Source}}</span>
                                                         </div>
                                                    </div>
                                              </router-link>
                                            </li>

                                        </ul>

                                    </div>
                                    <div class="swiper-slide mt-2 slide1">
                                        
                                        <ul>
                                        <li @click="gonews(item.Data.Href)"  v-for="(item,i) in llist.List" :key="i">
                                              <router-link  :to="{name:'Newsdetail'}">
                                                
                                                    <div class="lwrap">
                                                        <img :src="item.Data.OtherPhoto" alt="">
                                                        <div class="info">
                                                               <p class="title">{{item.Data.Title}}</p>
                                                             <span>{{item.Data.Source}}</span>
                                                         </div>
                                                    </div>
                                              </router-link>
                                            </li>

                                        </ul>
                                            
                                    </div>


                                    <div class="swiper-slide mt-2 slide1">
                                         <ul>
                                        <li @click="gonews(item.Data.Href)"  v-for="(item,i) in edulist.List" :key="i">
                                              <router-link  :to="{name:'Newsdetail'}">
                                                    <div class="lwrap">
                                                        <img :src="item.Data.OtherPhoto" alt="">
                                                        <div class="info">
                                                               <p class="title">{{item.Data.Title}}</p>
                                                             <span>{{item.Data.Source}}</span>
                                                         </div>
                                                    </div>
                                              </router-link>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                       </div>
                       
                   </div>
               </div>
           </div>
       </div>
   </section>
</template>

<script>
import "../utils/swiper-3.3.1.min.js";
import { Indicator } from 'mint-ui';
import axios from "axios";
import Head from "./head.vue";



import {mapState,mapActions} from "vuex";
export default {
    data(){
        return {
            activeIndex:0,
            mySwiper:"",
            
        }
    },

    methods:{
        ...mapActions({
            changeNavIdx:"changeNavIdx",
            cgswiperIdx:"cgswiperIdx",
            changeIndex:"changeIndex",
            gethnews:"gethnews",
            getlnews:"getlnews",
            getlzcom:"getlzcom",
            getedu:"getedu",
            getrdline:"getrdline",
            gonews:"gonews",

        }),

        changeIndex1(idx){
            this.changeIndex(idx);
            this.mySwiper.slideTo(idx);
        },
    },
    components:{
        "v-head":Head
    },
    computed:{  
        ...mapState([
            "navIndex",
            "show",
            "newslist",
            "swiperIndex",
            "hlist"
            ,"llist"
            ,"comlist"
            ,"edulist"
            ,"hdlist"
            ,"todetail"
            
        ])
    },
    mounted(){
        var that = this;
        this.$nextTick(()=>{
            this.mySwiper = new Swiper("#swipe",{
                loop:false,
                autoplay: false,
                direction:"horizontal",
                pagination: '.swiper-pagination',
                resistanceRatio:0,
                calculateHeight:true,
                initialSlide:0,
                autoHeight:true,
                onSlideChangeEnd(swiper){
                    that.cgswiperIdx(swiper.activeIndex);
                },
                onInit(){
                    
                    that.gethnews("/topnews");
                    that.getrdline("/lz_read");
                    that.getlnews("/lz_healthy");
                    that.getlzcom("/lz_comm");
                    that.getedu("/lz_edu");
                }
            });
        });
    }
}
</script>

<style>

</style>
