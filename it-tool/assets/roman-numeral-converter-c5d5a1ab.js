import{d as D,n as C,a as y,p as R,v as g,o as B,e as T,i,w as _,f as d,cF as $,cG as h,g as n,x,t as N,l as I,m as k,z as O,y as S,D as E}from"./index-2bcc7c92.js";import{_ as U}from"./InputNumber-09cf4dd8.js";import{_ as j}from"./FormItem-df5b39eb.js";import"./use-locale-fd4fd192.js";import"./use-form-item-85f229f3.js";import"./Button-f97f089a.js";import"./is-browser-fc34c9a6.js";import"./color-to-class-8578b472.js";import"./Remove-118755a6.js";const p=1,m=3999;function z(e){if(e<p||e>m)return"";const t={M:1e3,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};let a="";for(const o in t)for(;e>=t[o];)a+=o,e-=t[o];return a}const G=/^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;function A(e){return G.test(e)}function P(e){if(!A(e))return null;const t={I:1,V:5,X:10,L:50,C:100,D:500,M:1e3};return[...e].reduce((a,o,r,c)=>t[c[r+1]]>t[o]?a-t[o]:a+t[o],0)}const F={flex:"","items-center":"","justify-between":""},W={class:"result"},q={flex:"","items-center":"","justify-between":""},H={class:"result"},J=D({__name:"roman-numeral-converter",setup(e){const t=C(42),a=y(()=>z(t.value)),{attrs:o}=R({source:t,rules:[{validator:u=>u>=p&&u<=m,message:`We can only convert numbers between ${p.toLocaleString()} and ${m.toLocaleString()}`}]}),r=C("XLII"),c=y(()=>P(r.value)),v=R({source:r,rules:[{validator:u=>A(u),message:"The input you entered is not a valid roman number"}]}),{copy:X}=g({source:a,text:"Roman number copied to the clipboard"}),{copy:M}=g({source:()=>String(c),text:"Arabic number copied to the clipboard"});return(u,s)=>{const V=U,w=j,f=k,b=O,L=S;return B(),T("div",null,[i(b,{title:"Arabic to roman"},{default:_(()=>[d("div",F,[i(w,$(h(n(o))),{default:_(()=>[i(V,{value:n(t),"onUpdate:value":s[0]||(s[0]=l=>x(t)?t.value=l:null),min:1,style:{width:"200px"},"show-button":!1},null,8,["value"])]),_:1},16),d("div",W,N(n(a)),1),i(f,{autofocus:"",disabled:n(o).validationStatus==="error",onClick:s[1]||(s[1]=l=>n(X)())},{default:_(()=>[I(" Copy ")]),_:1},8,["disabled"])])]),_:1}),i(b,{title:"Roman to arabic","mt-5":""},{default:_(()=>[d("div",q,[i(L,{value:n(r),"onUpdate:value":s[2]||(s[2]=l=>x(r)?r.value=l:null),style:{width:"200px"},validation:n(v)},null,8,["value","validation"]),d("div",H,N(n(c)),1),i(f,{disabled:!n(v).isValid,onClick:s[3]||(s[3]=l=>n(M)())},{default:_(()=>[I(" Copy ")]),_:1},8,["disabled"])])]),_:1})])}}});const st=E(J,[["__scopeId","data-v-d205dd82"]]);export{st as default};
