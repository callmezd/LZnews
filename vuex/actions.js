
// Action 提交的是 mutation，而不是直接变更状态。
// Action 可以包含任意异步操作。
// action 是专门被 组件调用  mapActions 接收 action  action commit提交actiontype 发送mutation 修改state


import axios from "axios";
import "../utils/swiper-3.3.1.min.js";
axios.defaults.baseURL = "http://localhost:9000";


export default {

    changeurl({commit},newurl){
        commit("changeurl",newurl);
    },
    getnlist({commit},url){
        axios.get(url)
            .then(res=>{
                return res.data;
            })
            .then(json=>{
                commit("getnlist",json)
            })
            .then(()=>{
            })
    },
    getradiol({commit},url){
        axios.get(url)
            .then(res=>{
                return res.data;
            })
            .then(json=>{
                commit("getradiol",json)
            })
            .then(()=>{
            })
    },
    cgswiperIdx({commit},i){
        commit("cgswiperIdx",i);
    },
    changeIndex({commit},i){
        commit("changeIndex",i);
    },

    gethnews({commit},url){
        axios.get(url)
        .then(res=>{
            return res.data;
        })
        .then(json=>{
            commit("gethnews",json)
        })
        .then(()=>{

        })
    },
    getlnews({commit},url){
        axios.get(url)
        .then(res=>{
            return res.data;
        })
        .then(json=>{
            commit("getlnews",json)
        })
        .then(()=>{

        })
    },
    
    getlzcom({commit},url){
        axios.get(url)
        .then(res=>{
            return res.data;
        })
        .then(json=>{
            commit("getlzcom",json)
        })
        .then(()=>{

        })
    },
    getedu({commit},url){
        axios.get(url)
        .then(res=>{
            return res.data;
        })
        .then(json=>{
            commit("getedu",json)
        })
        .then(()=>{

        })
    },
    getrdline({commit},url){
        axios.get(url)
        .then(res=>{
            return res.data;
        })
        .then(json=>{
            commit("getrdline",json)
        })
        .then(()=>{

        })
    },


    gonews({commit},url){
        console.log(1)
        
        commit('gonews',url)
    },

    //find
    getfind({commit},url){
        axios.get(url)
        .then(res=>{
            return res.data;
        })
        .then(json=>{
            commit("getfind",json)
        })
        .then(()=>{

        })
    },
    //go
    go({commit}){
        commit("go")
    },


    cgmhref({commit}){
        commit("cgmhref")
    },
    cgmhref2({commit}){
        commit("cgmhref2")
    },








    //改回来
    logout({commit}){
        commit("logout")
    },
    getBanner({commit},url){
    axios.get(url)
        .then(res=>{
            return res.data;
        })
        .then(json=>{
            commit("getBanner",json)
        })
        .then(()=>{
            
        })
    },
    getMovie({commit},url){
        axios.get(url)
        .then(res=>{
            return res.data;
        })
        .then(json=>{
            commit("getMovie",json)  
        })
        .then(()=>{
            commit("close",true);
        })
    },
    changeMovie({commit},url){
        axios.get(url)
        .then(res=>{
            return res.data;
        })
        .then(json=>{
            commit("changeMovie",json)   
        })
    }
}