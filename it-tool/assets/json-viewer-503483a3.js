import{a3 as _,d as k,n as J,E as m,a as O,p as S,o as N,e as j,f as w,i as a,w as p,g as s,x as c,F as V,y as E,D as z}from"./index-2bcc7c92.js";import{l as y}from"./index-231c3e11.js";import{w as C}from"./defaults-4d6daddf.js";import{T as B}from"./TextareaCopyable-f385b5c1.js";import{_ as P}from"./Switch-c01a2d2f.js";import{_ as U}from"./FormItem-df5b39eb.js";import{_ as A}from"./InputNumber-09cf4dd8.js";import"./Copy-39adbc81.js";import"./Scrollbar-57921565.js";import"./use-form-item-85f229f3.js";import"./use-locale-fd4fd192.js";import"./Button-f97f089a.js";import"./is-browser-fc34c9a6.js";import"./color-to-class-8578b472.js";import"./Remove-118755a6.js";function d(t){return typeof t!="object"||t===null?t:Array.isArray(t)?t.map(d):Object.keys(t).sort((o,e)=>o.localeCompare(e)).reduce((o,e)=>(o[e]=d(t[e]),o),{})}function D({rawJson:t,sortKeys:o=!0,indentSize:e=3}){const n=y.parse(_(t));return JSON.stringify(_(o)?d(n):n,null,_(e))}const F={style:{flex:"0 0 100%"}},I={style:{margin:"0 auto","max-width":"600px"},flex:"","justify-center":"","gap-3":""},K=k({__name:"json-viewer",setup(t){const o=J(),e=m("json-prettify:raw-json",'{"hello": "world", "foo": "bar"}'),n=m("json-prettify:indent-size",3),i=m("json-prettify:sort-keys",!0),g=O(()=>C(()=>D({rawJson:e,indentSize:n,sortKeys:i}),"")),v=S({source:e,rules:[{validator:f=>f===""||y.parse(f),message:"Provided JSON is not valid."}]});return(f,l)=>{const x=P,u=U,h=A,b=E;return N(),j(V,null,[w("div",F,[w("div",I,[a(u,{label:"Sort keys :","label-placement":"left","label-width":"100"},{default:p(()=>[a(x,{value:s(i),"onUpdate:value":l[0]||(l[0]=r=>c(i)?i.value=r:null)},null,8,["value"])]),_:1}),a(u,{label:"Indent size :","label-placement":"left","label-width":"100","show-feedback":!1},{default:p(()=>[a(h,{value:s(n),"onUpdate:value":l[1]||(l[1]=r=>c(n)?n.value=r:null),min:"0",max:"10",style:{width:"100px"}},null,8,["value"])]),_:1})])]),a(u,{label:"Your raw JSON",feedback:s(v).message,"validation-status":s(v).status},{default:p(()=>[a(b,{ref_key:"inputElement",ref:o,value:s(e),"onUpdate:value":l[2]||(l[2]=r=>c(e)?e.value=r:null),placeholder:"Paste your raw JSON here...",rows:"20",multiline:"",autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false",monospace:""},null,8,["value"])]),_:1},8,["feedback","validation-status"]),a(u,{label:"Prettified version of your JSON"},{default:p(()=>[a(B,{value:s(g),language:"json","follow-height-of":s(o)},null,8,["value","follow-height-of"])]),_:1})],64)}}});const oe=z(K,[["__scopeId","data-v-520af694"]]);export{oe as default};
