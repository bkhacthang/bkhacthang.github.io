import{_ as i}from"./FormatTransformer.vue_vue_type_script_setup_true_lang-4f4352b5.js";import{s as r}from"./public-api-0ac9c3bb.js";import{l as t}from"./index-231c3e11.js";import{i as m}from"./boolean-c7e7c785.js";import{w as n}from"./defaults-4d6daddf.js";import{d as p,o as l,c as u}from"./index-2bcc7c92.js";import"./TextareaCopyable-f385b5c1.js";import"./Copy-39adbc81.js";import"./Scrollbar-57921565.js";const b=p({__name:"json-to-yaml",setup(f){const a=o=>n(()=>r(t.parse(o)),""),e=[{validator:o=>o===""||m(()=>r(t.parse(o))),message:"Provided JSON is not valid."}];return(o,c)=>{const s=i;return l(),u(s,{"input-label":"Your JSON","input-placeholder":"Paste your JSON here...","output-label":"YAML from your JSON","output-language":"yaml","input-validation-rules":e,transformer:a})}}});export{b as default};