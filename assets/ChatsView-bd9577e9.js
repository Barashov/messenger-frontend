import{_ as h,o,c as i,a as t,t as m,p as v,f,r as d,b as C,F as V,g,h as w}from"./index-357fee0d.js";const k="/messenger-frontend/assets/favicon-db74ab0b.ico";const y={props:["chat"],methods:{onClick(){console.log(this.chat.id)}}},I=e=>(v("data-v-3028ca9d"),e=e(),f(),e),x=I(()=>t("div",{class:"img"},[t("img",{src:k,alt:"hello"})],-1));function b(e,s,l,u,c,a){return o(),i("div",{onClick:s[0]||(s[0]=(...n)=>a.onClick&&a.onClick(...n)),class:"main"},[x,t("div",null,[t("h3",null,m(l.chat.name),1)])])}const _=h(y,[["render",b],["__scopeId","data-v-3028ca9d"]]);const $={data(){return{search:null,resources:[]}},components:[_],computed:{chats(){return this.search?this.resources.filter(e=>this.search.toLowerCase().split(" ").every(s=>e.name.toLowerCase().includes(s))):this.resources}},mounted(){const e=[{id:0,name:"ps",created_by:3,image:null},{id:1,name:"ok"}];this.resources=e},components:{ChatPreView:_}},B={class:"main"},P={class:"search"},S={class:"chats"};function L(e,s,l,u,c,a){const n=d("Input"),p=d("ChatPreView");return o(),i("div",B,[t("div",P,[C(n,{placeholder:"search",modelValue:c.search,"onUpdate:modelValue":s[0]||(s[0]=r=>c.search=r)},null,8,["modelValue"])]),t("div",S,[(o(!0),i(V,null,g(a.chats,r=>(o(),w(p,{chat:r},null,8,["chat"]))),256))])])}const N=h($,[["render",L],["__scopeId","data-v-04319985"]]);export{N as default};