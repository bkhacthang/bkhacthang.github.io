import{d as R,bv as w,b as s,o as c,e as f,F as g,r as x,g as v,c as b,w as a,i as u,l as p,t as K}from"./index-2bcc7c92.js";import{_ as k}from"./InputGroupLabel-768827c8.js";import{_ as C}from"./InputNumber-09cf4dd8.js";import{_ as F}from"./InputGroup-d8120fda.js";import"./use-locale-fd4fd192.js";import"./use-form-item-85f229f3.js";import"./Button-f97f089a.js";import"./is-browser-fc34c9a6.js";import"./color-to-class-8578b472.js";import"./Remove-118755a6.js";const N=e=>e+273.15,D=e=>e-273.15,B=e=>(e+459.67)*(5/9),y=e=>e*(9/5)-459.67,E=e=>e*(5/9),U=e=>e*(9/5),V=e=>373.15-2/3*e,j=e=>3/2*(373.15-e),L=e=>e*(100/33)+273.15,M=e=>(e-273.15)*(33/100),O=e=>e*(5/4)+273.15,S=e=>(e-273.15)*(4/5),$=e=>(e-7.5)*(40/21)+273.15,q=e=>(e-273.15)*(21/40)+7.5,Y=R({__name:"temperature-converter",setup(e){const n=w({kelvin:{title:"Kelvin",unit:"K",ref:0,toKelvin:s.identity,fromKelvin:s.identity},celsius:{title:"Celsius",unit:"°C",ref:0,toKelvin:N,fromKelvin:D},fahrenheit:{title:"Fahrenheit",unit:"°F",ref:0,toKelvin:B,fromKelvin:y},rankine:{title:"Rankine",unit:"°R",ref:0,toKelvin:E,fromKelvin:U},delisle:{title:"Delisle",unit:"°De",ref:0,toKelvin:V,fromKelvin:j},newton:{title:"Newton",unit:"°N",ref:0,toKelvin:L,fromKelvin:M},reaumur:{title:"Réaumur",unit:"°Ré",ref:0,toKelvin:O,fromKelvin:S},romer:{title:"Rømer",unit:"°Rø",ref:0,toKelvin:$,fromKelvin:q}});function m(i){const{ref:_,toKelvin:o}=n[i],r=o(_)??0;s.chain(n).omit(i).forEach(({fromKelvin:l},t)=>{n[t].ref=Math.floor((l(r)??0)*100)/100}).value()}return m("kelvin"),(i,_)=>{const o=k,r=C,l=F;return c(),f("div",null,[(c(!0),f(g,null,x(Object.entries(v(n)),([t,{title:d,unit:h}])=>(c(),b(l,{key:t,"mb-3":"","w-full":""},{default:a(()=>[u(o,{style:{width:"100px"}},{default:a(()=>[p(K(d),1)]),_:2},1024),u(r,{value:v(n)[t].ref,"onUpdate:value":[T=>v(n)[t].ref=T,()=>m(t)],style:{flex:"1"}},null,8,["value","onUpdate:value"]),u(o,{style:{width:"50px"}},{default:a(()=>[p(K(h),1)]),_:2},1024)]),_:2},1024))),128))])}}});export{Y as default};
