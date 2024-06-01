import{d as E,n as P,a as R,o as _,c as C,w as U,i as T,as as g,g as b,x as k,e as y,r as S,F,f as Z,y as j,z}from"./index-2bcc7c92.js";import{_ as B}from"./InputCopyable.vue_vue_type_script_setup_true_lang-ca5d6d83.js";var l=function(){return l=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++){r=arguments[t];for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&(e[u]=r[u])}return e},l.apply(this,arguments)};function D(a){return a.toLowerCase()}var N=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],O=/[^A-Z0-9]+/gi;function c(a,e){e===void 0&&(e={});for(var r=e.splitRegexp,t=r===void 0?N:r,n=e.stripRegexp,u=n===void 0?O:n,s=e.transform,m=s===void 0?D:s,o=e.delimiter,i=o===void 0?" ":o,f=h(h(a,t,"$1\0$2"),u,"\0"),d=0,p=f.length;f.charAt(d)==="\0";)d++;for(;f.charAt(p-1)==="\0";)p--;return f.slice(d,p).split("\0").map(m).join(i)}function h(a,e,r){return e instanceof RegExp?a.replace(e,r):e.reduce(function(t,n){return t.replace(n,r)},a)}function w(a,e){var r=a.charAt(0),t=a.substr(1).toLowerCase();return e>0&&r>="0"&&r<="9"?"_"+r+t:""+r.toUpperCase()+t}function L(a,e){return e===void 0&&(e={}),c(a,l({delimiter:"",transform:w},e))}function $(a,e){return e===0?a.toLowerCase():w(a,e)}function G(a,e){return e===void 0&&(e={}),L(a,l({transform:$},e))}function x(a){return a.charAt(0).toUpperCase()+a.substr(1)}function I(a){return x(a.toLowerCase())}function A(a,e){return e===void 0&&(e={}),c(a,l({delimiter:" ",transform:I},e))}function V(a){return a.toUpperCase()}function X(a,e){return e===void 0&&(e={}),c(a,l({delimiter:"_",transform:V},e))}function v(a,e){return e===void 0&&(e={}),c(a,l({delimiter:"."},e))}function Y(a,e){return e===void 0&&(e={}),A(a,l({delimiter:"-"},e))}function H(a,e){return e===void 0&&(e={}),v(a,l({delimiter:"-"},e))}function M(a,e){return e===void 0&&(e={}),v(a,l({delimiter:"/"},e))}function W(a,e){var r=a.toLowerCase();return e===0?x(r):r}function q(a,e){return e===void 0&&(e={}),c(a,l({delimiter:" ",transform:W},e))}function J(a,e){return e===void 0&&(e={}),v(a,l({delimiter:"_"},e))}const K=Z("div",{"my-16px":"",divider:""},null,-1),ae=E({__name:"case-converter",setup(a){const e={stripRegexp:/[^A-Za-zÀ-ÖØ-öø-ÿ]+/gi},r=P("lorem ipsum dolor sit amet"),t=R(()=>[{label:"Lowercase:",value:r.value.toLocaleLowerCase()},{label:"Uppercase:",value:r.value.toLocaleUpperCase()},{label:"Camelcase:",value:G(r.value,e)},{label:"Capitalcase:",value:A(r.value,e)},{label:"Constantcase:",value:X(r.value,e)},{label:"Dotcase:",value:v(r.value,e)},{label:"Headercase:",value:Y(r.value,e)},{label:"Nocase:",value:c(r.value,e)},{label:"Paramcase:",value:H(r.value,e)},{label:"Pascalcase:",value:L(r.value,e)},{label:"Pathcase:",value:M(r.value,e)},{label:"Sentencecase:",value:q(r.value,e)},{label:"Snakecase:",value:J(r.value,e)},{label:"Mockingcase:",value:r.value.split("").map((u,s)=>s%2===0?u.toUpperCase():u.toLowerCase()).join("")}]),n={labelPosition:"left",labelWidth:"120px",labelAlign:"right"};return(u,s)=>{const m=j,o=z;return _(),C(o,null,{default:U(()=>[T(m,g({value:b(r),"onUpdate:value":s[0]||(s[0]=i=>k(r)?r.value=i:null),label:"Your string:",placeholder:"Your string...","raw-text":""},n),null,16,["value"]),K,(_(!0),y(F,null,S(b(t),i=>(_(),C(B,g({key:i.label,value:i.value,label:i.label,ref_for:!0},n,{"mb-1":""}),null,16,["value","label"]))),128))]),_:1})}}});export{ae as default};
