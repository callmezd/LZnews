

export default {
    golzs(state,data){
        state.lztreeUrl = data[0].Data.Url;
    },
    changeurl(state,ifmsrc){
        state.ifmsrc = ifmsrc;
    },
    cgswiperIdx(state,i){
        state.swiperIndex=i;
    },

    changeIndex(state,i){
        state.swiperInde=i;
    },
    
    getnlist(state,json){
        state.newslist = json[0].Data;
    },
    gethnews(state,json){
        state.hlist = json[0].Data;
    },
    getlnews(state,json){
        state.llist = json[0].Data;
    },
    getlzcom(state,json){
        state.comlist = json[0].Data;
    },
    getedu(state,json){
        state.edulist = json[0].Data;
    },
    getrdline(state,json){
        state.hdlist = json[0].Data;
    },

    getradiol(state,json){
        state.radiol = json[0].Data;
    },

    gonews(state,url){
        state.todetail = url;
    },
    getfind(state,json){
        state.findlist=json[0].Data.List;
    },
    go(state){
        state.userinfo="点击登录"||localStorage.username;
        state.murl=localStorage.mhref;
        state.img=localStorage.img||"";
    },
}