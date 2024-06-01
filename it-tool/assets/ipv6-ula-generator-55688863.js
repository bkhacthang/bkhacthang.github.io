import{d as p,n as _,a as f,o,e as l,i as u,w as b,l as g,g as n,x as v,F as h,r as x,W as y,y as $,c as k}from"./index-2bcc7c92.js";import{c as A}from"./index-9f6c8ade.js";import{_ as w}from"./InputCopyable.vue_vue_type_script_setup_true_lang-ca5d6d83.js";import{m as V}from"./macAddress-28d4c5c9.js";import{_ as C}from"./Alert-d7bb646b.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./___vite-browser-external_commonjs-proxy-da4fd438.js";const T={key:0},M=p({__name:"ipv6-ula-generator",setup(F){const t=_("20:37:06:12:34:56"),d=f(()=>{const i=new Date().getTime(),e=A.SHA1(i+t.value).toString().substring(30),a=`fd${e.substring(0,2)}:${e.substring(2,6)}:${e.substring(6)}`;return[{label:"IPv6 ULA:",value:`${a}::/48`},{label:"First routable block:",value:`${a}:0::/64`},{label:"Last routable block:",value:`${a}:ffff::/64`}]}),r=V(t);return(i,e)=>{const a=C,c=$;return o(),l("div",null,[u(a,{title:"Info",type:"info"},{default:b(()=>[g(" This tool uses the first method suggested by IETF using the current timestamp plus the mac address, sha1 hashed, and the lower 40 bits to generate your random ULA. ")]),_:1}),u(c,{value:n(t),"onUpdate:value":e[0]||(e[0]=s=>v(t)?t.value=s:null),placeholder:"Type a MAC address",clearable:"",label:"MAC address:","raw-text":"","my-8":"",validation:n(r)},null,8,["value","validation"]),n(r).isValid?(o(),l("div",T,[(o(!0),l(h,null,x(n(d),({label:s,value:m})=>(o(),k(w,{key:s,value:m,label:s,"label-width":"160px","label-align":"right","label-position":"left",readonly:"","mb-2":""},null,8,["value","label"]))),128))])):y("",!0)])}}});export{M as default};
