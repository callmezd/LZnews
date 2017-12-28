
import Vue from "vue"

import VueRouter from "vue-router"
Vue.use(VueRouter)

// 单文件组件
import Head from "./head.vue";
import Layout from "./layout.vue";
import Foot from "./foot.vue";


import News from "./news.vue";
import Video from "./video.vue";
import Radio from "./radio.vue";
import Find from "./find.vue";
import Mine from "./mine.vue";
import Mylzs from "./mylzs.vue";
import Act from "./act.vue";
import Login from "./login.vue";
import Topinfo from "./topinfo.vue";
import Register from "./register.vue"
import My from "./my.vue"

import Newsdetail from "./newsdetail.vue";
var routes = [
    

    {   
        path: "/",
        component: Layout,
        children: [
            { path: "head", name: "head", component: Head },
            { path: "foot", name: "foot", component: Foot },
        ]
    },
    {
        path: "/index",
        component: Layout,
        children: [
            {
                path: "news", name: "news", component: News,
            },
            {
                path: "video", name: "video", component: Video
            },
            {
                path: "radio", name: "radio", component: Radio
            },
            {
                path: "find", name: "find", component: Find
            },
            {
                path: "mine", name: "mine", component: Mine, 
            },
        ]
    },
    {
        path:"/Newsdetail",name:"Newsdetail",component:Newsdetail,
    },
    {
        path:"/login", name:"login",component:Login,children:[]
    },{
        path:"/register", name:"register",component:Register,children:[]
    },
    {
        path:"/my", name:"my",component:My,children:[]
    },
    {
        path: "/act", name: "act", component: Act 
    }
    ,
    {
        path:"*",redirect:"/index/home"
    },
]
const router = new VueRouter({
    mode: "hash",
    routes
});


export default router;