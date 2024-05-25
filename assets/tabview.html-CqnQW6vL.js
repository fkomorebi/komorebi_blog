import{r as i,u as X,b as H,w as Q,d as ee,e as l,o as n,c as p,f as u,g as t,h as a,F as J,i as F,j as h,k,t as C,l as N,p as D,m as U,n as te,q}from"./app-D-Y3RpjU.js";import{_ as P}from"./plugin-vue_export-helper-DlAUqK2U.js";const L=r=>(D("data-v-2a25d361"),r=r(),U(),r),oe={key:0,class:"tabbar-main"},ae={class:"tabbar"},ne=L(()=>u("div",{class:"dashed"},null,-1)),le=L(()=>u("div",{class:"dashed"},null,-1)),re={__name:"GuitarTab",props:{file:{type:ArrayBuffer,require:!0}},setup(r){const c=i([.25,.5,.6,.7,.8,.9]),d=i([1.25,1.5,2]),m=i(!1),w=i(!1),B=i(null),s=i(null),f=i(null),g=r,T=i(1);let b=!1,e;const{isFullscreen:_,enter:$,exit:I}=X();function R(){console.log(_.value),_.value?I():$()}function G(o){T.value=e.playbackSpeed=o}function W(){e==null||e.playPause(),e.playerState===0?m.value=!0:m.value=!1}function j(){e==null||e.print()}H(()=>{const o=document.createElement("script");o.src="https://unpkg.com/@coderline/alphatab",o.async=!0,o.onload=async()=>{await z(),b&&(e.load(g.file),b=!1)},document.head.appendChild(o),Q(()=>{g.file&&(e?(e.load(g.file),b=!1):b=!0)})}),ee(()=>{e==null||e.destroy(),e=null});async function z(){const o=new alphaTab.Settings;o.core.engine="svg",o.core.logLevel=4,o.core.useWorkers=!1,o.core.fontDirectory="/komorebi_blog/font/",o.player.enablePlayer=!0,o.player.enableCursor=!0,o.player.enableUserInteraction=!0,o.player.soundFont="/komorebi_blog/soundfont/sonivox.sf2",o.player.scrollOffsetY=-100,e=new alphaTab.AlphaTabApi(s.value,o),e.scoreLoaded.on(()=>{w.value=!0})}return(o,ye)=>{const M=l("el-button"),V=l("el-dropdown-item"),E=l("el-dropdown"),Z=l("VideoPlay"),x=l("el-icon"),O=l("VideoPause"),Y=l("Printer"),K=l("FullScreen");return n(),p("div",{ref_key:"tabWrap",ref:B,class:"tab-wrap"},[u("div",{id:"viewPort",ref_key:"viewPort",ref:f},[u("div",{id:"alphaTab",ref_key:"guitarTab",ref:s},null,512)],512),w.value?(n(),p("div",oe,[u("div",ae,[t(E,{onCommand:G},{dropdown:a(()=>[(n(!0),p(J,null,F(c.value,v=>(n(),h(V,{key:v,command:v},{default:a(()=>[k("x "+C(v),1)]),_:2},1032,["command"]))),128)),ne,t(V,{command:"1"},{default:a(()=>[k("x 1")]),_:1}),le,(n(!0),p(J,null,F(d.value,v=>(n(),h(V,{key:v,command:v},{default:a(()=>[k("x "+C(v),1)]),_:2},1032,["command"]))),128))]),default:a(()=>[t(M,{text:""},{default:a(()=>[k("x"+C(T.value),1)]),_:1})]),_:1}),t(M,{onClick:W,link:""},{default:a(()=>[m.value?(n(),h(x,{key:1},{default:a(()=>[t(O)]),_:1})):(n(),h(x,{key:0},{default:a(()=>[t(Z)]),_:1}))]),_:1}),t(M,{onClick:j,link:""},{default:a(()=>[t(x,null,{default:a(()=>[t(Y)]),_:1})]),_:1}),t(M,{onClick:R,link:""},{default:a(()=>[t(x,null,{default:a(()=>[t(K)]),_:1})]),_:1})])])):N("v-if",!0)],512)}}},se=P(re,[["__scopeId","data-v-2a25d361"],["__file","GuitarTab.vue"]]),ce={class:"item-wrap"},ie=te({__name:"MusicScore",props:{imageUrl:{},title:{}},setup(r){return(c,d)=>{const m=l("el-image");return n(),p("div",ce,[t(m,{src:c.imageUrl,class:"image"},null,8,["src"]),u("div",null,C(c.title),1)])}}}),ue=P(ie,[["__scopeId","data-v-f451aacf"],["__file","MusicScore.vue"]]),y="/komorebi_blog/music_socre",S="/komorebi_blog/logo.svg",de=[{cover:"http://y.qq.com/music/photo_new/T002R300x300M000003GDYMc4W3X5Z_2.jpg?max_age=2592000",title:"Covered in rain - John Mayer",value:`${y}/mayer_john-covered_in_rain.gp5`},{cover:S,title:"Belief - John Mayer",value:`${y}/John_Mayer-Belief.gp5`},{cover:S,title:"Bold as Love - John Mayer",value:`${y}/John_Mayer-Bold_as_Love.gp4`},{cover:S,title:"Gravity - John Mayer",value:`${y}/John_Mayer-Gravity.gp5`},{cover:S,title:"Neon - John Mayer",value:`${y}/John_Mayer-Neon.gp4`},{cover:S,title:"Slow Dancing in a Burning Room - John Mayer",value:`${y}/John_Mayer-Slow_Dancing_in_a_Burning_Room.gp5`}],A=r=>(D("data-v-68814ea6"),r=r(),U(),r),_e={class:"localTabBtn"},pe=A(()=>u("br",null,null,-1)),me=A(()=>u("div",{class:"dashed"},null,-1)),fe={class:"score-list",style:{overflow:"auto"}},ve={__name:"TabView",setup(r){const c=i(null),d=i(!0);function m(){d.value=!0}const w=s=>{if(typeof s=="string"){c.value=s,d.value=!1;return}if(s==null||s.raw==null){console.error("file is null!");return}navigator.mediaDevices.getUserMedia({audio:!0});let f=new FileReader;f.onloadend=function(){c.value=this.result,d.value=!1},f.readAsArrayBuffer(s.raw)},B=s=>{console.log(s),w(s)};return(s,f)=>{const g=l("el-button"),T=l("el-upload"),b=l("el-dialog"),e=l("client-only");return n(),h(e,null,{default:a(()=>[t(g,{type:"primary",onClick:m,class:"tabBtn el-backtop"},{default:a(()=>[k("曲谱 ")]),_:1}),t(b,{modelValue:d.value,"onUpdate:modelValue":f[0]||(f[0]=_=>d.value=_),title:"选择曲谱",center:"",class:"drawer"},{default:a(()=>[u("div",_e,[t(T,{"auto-upload":!1,"on-change":w,accept:".gp3,.gp4,.gp5,.gpx,.gp,.xml,.cap","show-file-list":!1},{default:a(()=>[t(g,{type:"primary"},{default:a(()=>[k("本地打开")]),_:1})]),_:1}),pe,me,u("div",fe,[(n(!0),p(J,null,F(q(de),(_,$)=>(n(),p("div",{class:"score-wrap",key:$},[t(ue,{title:_.title,imageUrl:_.cover,onClick:I=>B(_.value)},null,8,["title","imageUrl","onClick"])]))),128))])])]),_:1},8,["modelValue"]),c.value?(n(),h(se,{key:0,file:c.value},null,8,["file"])):N("v-if",!0)]),_:1})}}},ge=P(ve,[["__scopeId","data-v-68814ea6"],["__file","TabView.vue"]]),be={__name:"tabview.html",setup(r){return(c,d)=>(n(),p("div",null,[t(q(ge))]))}},we=P(be,[["__file","tabview.html.vue"]]),Se=JSON.parse('{"path":"/pages/tabview.html","title":"乐谱查看","lang":"zh-CN","frontmatter":{"title":"乐谱查看","article":false,"pageInfo":false,"breadcrumb":false,"sidebar":false,"comment":false,"dir":false,"head":[["meta",{"property":"og:url","content":"https://fkomorebi.github.io/komorebi_blog/komorebi_blog/pages/tabview.html"}],["meta",{"property":"og:site_name","content":"komorebi的杂物间"}],["meta",{"property":"og:title","content":"乐谱查看"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-16T19:28:08.000Z"}],["meta",{"property":"article:author","content":"Komorebi"}],["meta",{"property":"article:modified_time","content":"2024-05-16T19:28:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"乐谱查看\\"}"]]},"headers":[],"git":{"createdTime":1715887688000,"updatedTime":1715887688000,"contributors":[{"name":"fkomorebi","email":"f.komorebi@qq.com","commits":1}]},"readingTime":{"minutes":0.09,"words":26},"filePathRelative":"pages/tabview.md","localizedDate":"2024年5月17日","excerpt":""}');export{we as comp,Se as data};