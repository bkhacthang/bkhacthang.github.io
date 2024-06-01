import{o as e,e as s,f as o,a as A,n as w,ab as ie,d as se,ac as ae,ad as re,Q as ce,ae as le,g as t,c as _,w as r,l as m,i as c,x as U,W as R,F as de,r as ue,b as j,z as _e,Y as me,m as pe,X as ve,t as he}from"./index-2bcc7c92.js";const fe={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},ge=o("path",{fill:"currentColor",d:"M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zM8 9h8v10H8zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"},null,-1),ke=[ge];function we(u,i){return e(),s("svg",fe,[...ke])}const ye={name:"mdi-delete-outline",render:we},be={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},xe=o("path",{fill:"currentColor",d:"M5 20h14v-2H5m14-9h-4V3H9v6H5l7 7z"},null,-1),$e=[xe];function Ce(u,i){return e(),s("svg",be,[...$e])}const Re={name:"mdi-download",render:Ce},Me={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Se=o("path",{fill:"currentColor",d:"M19 12c0 3.86-3.14 7-7 7s-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7"},null,-1),Ve=[Se];function Be(u,i){return e(),s("svg",Me,[...Ve])}const He={name:"mdi-record",render:Be},Ie={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},ze=o("path",{fill:"currentColor",d:"M8 5.14v14l11-7z"},null,-1),Ue=[ze];function je(u,i){return e(),s("svg",Ie,[...Ue])}const Ae={name:"mdi-play",render:je},De={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Ne=o("path",{fill:"currentColor",d:"M14 19h4V5h-4M6 19h4V5H6z"},null,-1),Ee=[Ne];function Le(u,i){return e(),s("svg",De,[...Ee])}const Pe={name:"mdi-pause",render:Le},Te={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Ye=o("path",{fill:"currentColor",d:"M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11z"},null,-1),qe=[Ye];function Fe(u,i){return e(),s("svg",Te,[...qe])}const Ge={name:"mdi-video",render:Fe},Oe={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},We=o("path",{fill:"currentColor",d:"M4 4h3l2-2h6l2 2h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m8 3a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5m0 2a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3"},null,-1),Qe=[We];function Xe(u,i){return e(),s("svg",Oe,[...Qe])}const Je={name:"mdi-camera",render:Xe};function Ke({stream:u}){const i=A(()=>MediaRecorder.isTypeSupported("video/webm")),n=w(null),$=w([]),M=ie(),l=w("stopped"),p=()=>{const g=new Blob($.value,{type:"video/webm"}),B=URL.createObjectURL(g);return $.value=[],B};return{isRecordingSupported:i,startRecording:()=>{i.value&&u.value&&l.value==="stopped"&&(n.value=new MediaRecorder(u.value,{mimeType:"video/webm"}),n.value.ondataavailable=g=>{g.data.size>0&&$.value.push(g.data)},n.value.onstop=()=>{M.trigger(p())},n.value.state==="inactive"&&(n.value.start(),l.value="recording"))},stopRecording:()=>{i.value&&n.value&&l.value!=="stopped"&&(n.value.stop(),l.value="stopped")},pauseRecording:()=>{i.value&&n.value&&l.value==="recording"&&(n.value.pause(),l.value="paused")},resumeRecording:()=>{i.value&&n.value&&l.value==="paused"&&(n.value.resume(),l.value="recording")},recordingState:l,onRecordAvailable:M.on}}const Ze={key:1,"mt-4":"",flex:"","justify-center":""},et={flex:"","flex-col":"","gap-2":""},tt={key:0,"mt-3":"",flex:"","justify-center":""},ot={key:1},nt={"my-2":""},it={flex:"","items-center":"","justify-between":"","gap-2":""},st={"mr-2":""},at={key:0,flex:"","justify-center":"","gap-2":""},rt={"mr-2":""},ct={"mr-2":""},lt={"mr-2":""},dt={"mr-2":""},ut={key:1,italic:"","op-60":""},_t={grid:"","grid-cols-2":"","mt-5":"","gap-2":""},mt=["src"],pt=["src"],vt={flex:"","items-center":"","justify-between":""},ht={"font-bold":""},ft={flex:"","gap-2":""},wt=se({__name:"camera-recorder",setup(u){const{videoInputs:i,audioInputs:n,permissionGranted:$,isSupported:M,ensurePermissions:l}=ae({requestPermissions:!0,constraints:{video:!0,audio:!0},onUpdated(){q()}}),p=w(),b=w([]),f=w(i.value[0]?.deviceId),v=w(n.value[0]?.deviceId),V=w(!1),{stream:g,start:B,stop:D,enabled:H}=re({constraints:A(()=>({video:{deviceId:f.value},...v.value?{audio:{deviceId:v.value}}:{}})),autoSwitch:!0}),{isRecordingSupported:N,onRecordAvailable:E,startRecording:L,stopRecording:P,pauseRecording:T,recordingState:S,resumeRecording:Y}=Ke({stream:g});E(a=>{b.value.unshift({type:"video",value:a,createdAt:new Date})});function q(){(j.isNil(f)||!i.value.find(a=>a.deviceId===f.value))&&(f.value=i.value[0]?.deviceId),(j.isNil(n)||!n.value.find(a=>a.deviceId===v.value))&&(v.value=n.value[0]?.deviceId)}function F(){if(!p.value)return;const a=document.createElement("canvas");a.width=p.value.videoWidth,a.height=p.value.videoHeight,a.getContext("2d")?.drawImage(p.value,0,0);const k=a.toDataURL("image/png");b.value.unshift({type:"image",value:k,createdAt:new Date})}ce(()=>{p.value&&g.value&&(p.value.srcObject=g.value)}),le(()=>D());async function G(){try{await l()}catch{V.value=!0}}function O({type:a,value:k,createdAt:x}){const C=document.createElement("a");C.href=k,C.download=`${a}-${x.getTime()}.${a==="image"?"png":"webm"}`,C.click()}return(a,k)=>{const x=_e,C=me,h=pe,I=ve,W=Je,Q=Ge,X=Pe,J=Ae,K=He,Z=Re,ee=ye;return e(),s("div",null,[t(M)?t($)?(e(),_(x,{key:2},{default:r(()=>[o("div",et,[c(I,{value:t(f),"onUpdate:value":k[0]||(k[0]=d=>U(f)?f.value=d:null),"label-position":"left","label-width":"60px",label:"Video:",options:t(i).map(({deviceId:d,label:y})=>({value:d,label:y})),placeholder:"Select camera"},null,8,["value","options"]),t(v)&&t(n).length>0?(e(),_(I,{key:0,value:t(v),"onUpdate:value":k[1]||(k[1]=d=>U(v)?v.value=d:null),label:"Audio:","label-position":"left","label-width":"60px",options:t(n).map(({deviceId:d,label:y})=>({value:d,label:y})),placeholder:"Select microphone"},null,8,["value","options"])):R("",!0)]),t(H)?(e(),s("div",ot,[o("div",nt,[o("video",{ref_key:"video",ref:p,autoplay:"",controls:"",playsinline:"","max-h-full":"","w-full":""},null,512)]),o("div",it,[c(h,{disabled:!t(H),onClick:F},{default:r(()=>[o("span",st,[c(W)]),m(" Take screenshot ")]),_:1},8,["disabled"]),t(N)?(e(),s("div",at,[t(S)==="stopped"?(e(),_(h,{key:0,onClick:t(L)},{default:r(()=>[o("span",rt,[c(Q)]),m(" Start recording ")]),_:1},8,["onClick"])):R("",!0),t(S)==="recording"?(e(),_(h,{key:1,onClick:t(T)},{default:r(()=>[o("span",ct,[c(X)]),m(" Pause ")]),_:1},8,["onClick"])):R("",!0),t(S)==="paused"?(e(),_(h,{key:2,onClick:t(Y)},{default:r(()=>[o("span",lt,[c(J)]),m(" Resume ")]),_:1},8,["onClick"])):R("",!0),t(S)!=="stopped"?(e(),_(h,{key:3,type:"error",onClick:t(P)},{default:r(()=>[o("span",dt,[c(K)]),m(" Stop ")]),_:1},8,["onClick"])):R("",!0)])):(e(),s("div",ut," Video recording is not supported in your browser "))])])):(e(),s("div",tt,[c(h,{type:"primary",onClick:t(B)},{default:r(()=>[m(" Start webcam ")]),_:1},8,["onClick"])]))]),_:1})):(e(),_(x,{key:1,"text-center":""},{default:r(()=>[m(" You need to grant permission to use your camera and microphone "),t(V)?(e(),_(C,{key:0,"mt-4":"","text-left":""},{default:r(()=>[m(" Your browser has blocked permission request or does not support it. You need to grant permission manually in your browser settings (usually the lock icon in the address bar). ")]),_:1})):(e(),s("div",Ze,[c(h,{onClick:G},{default:r(()=>[m(" Grant permission ")]),_:1})]))]),_:1})):(e(),_(x,{key:0},{default:r(()=>[m(" Your browser does not support recording video from camera ")]),_:1})),o("div",_t,[(e(!0),s(de,null,ue(t(b),({type:d,value:y,createdAt:te},z)=>(e(),_(x,{key:z},{default:r(()=>[d==="image"?(e(),s("img",{key:0,src:y,"max-h-full":"","w-full":"",alt:"screenshot"},null,8,mt)):(e(),s("video",{key:1,src:y,controls:"","max-h-full":"","w-full":""},null,8,pt)),o("div",vt,[o("div",ht,he(d==="image"?"Screenshot":"Video"),1),o("div",ft,[c(h,{onClick:oe=>O({type:d,value:y,createdAt:te})},{default:r(()=>[c(Z)]),_:2},1032,["onClick"]),c(h,{onClick:oe=>b.value=t(b).filter((gt,ne)=>ne!==z)},{default:r(()=>[c(ee)]),_:2},1032,["onClick"])])])]),_:2},1024))),128))])])}}});export{wt as default};
