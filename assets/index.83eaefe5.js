import{o as e,c as s,a as o,b as t,d as r}from"./vendor.e5744eb4.js";const n={data:()=>({count:123}),created(){this.onOpen()},methods:{onOpen(){console.log("this is my first web preject")}}},d={class:"test"},c=o("p",{class:"title"},"12",-1),a={controls:"",width:"250"},i=t(" Sorry, your browser doesn't support embedded videos. ");n.render=function(t,r,n,p,u,l){return e(),s("div",d,[c,o("video",a,[o("source",{src:t.v1,type:"video/mp4"},null,8,["src"]),i])])};r({setup:o=>(o,t)=>(e(),s(n))}).mount("#app");
