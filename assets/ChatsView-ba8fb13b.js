import{_ as h,o,c as i,a as t,t as m,p as v,f,r as l,b as C,F as g,g as V,h as w}from"./index-07994c65.js";const k="/messenger-frontend/assets/favicon-db74ab0b.ico";const y={props:["chat"],methods:{onClick(){this.$router.push({path:"/chat",query:{id:this.chat.id,name:this.chat.name,image:this.chat.image}})}}},I=e=>(v("data-v-43de38a5"),e=e(),f(),e),x=I(()=>t("div",{class:"img"},[t("img",{src:k,alt:"hello"})],-1));function $(e,s,d,u,c,a){return o(),i("div",{onClick:s[0]||(s[0]=(...n)=>a.onClick&&a.onClick(...n)),class:"main"},[x,t("div",null,[t("h3",null,m(d.chat.name),1)])])}const _=h(y,[["render",$],["__scopeId","data-v-43de38a5"]]);const b={data(){return{search:null,resources:[]}},components:[_],computed:{chats(){return this.search?this.resources.filter(e=>this.search.toLowerCase().split(" ").every(s=>e.name.toLowerCase().includes(s))):this.resources}},mounted(){const e=[{id:0,name:"ps",created_by:3,image:null},{id:1,name:"ok"}];this.resources=e},components:{ChatPreView:_}},B={class:"main"},P={class:"search"},S={class:"chats"};function L(e,s,d,u,c,a){const n=l("Input"),p=l("ChatPreView");return o(),i("div",B,[t("div",P,[C(n,{placeholder:"search",modelValue:c.search,"onUpdate:modelValue":s[0]||(s[0]=r=>c.search=r)},null,8,["modelValue"])]),t("div",S,[(o(!0),i(g,null,V(a.chats,r=>(o(),w(p,{chat:r},null,8,["chat"]))),256))])])}const N=h(b,[["render",L],["__scopeId","data-v-04319985"]]);export{N as default};
