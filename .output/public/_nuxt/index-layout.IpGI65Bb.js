import{_ as D}from"./nuxt-link.LR1MpOyr.js";import{d as k,aj as I,u as S,c as j,aA as B,o,a as f,b as t,G as A,g as r,h as m,t as n,l as h,J as c,e,M as v,L as b,a0 as M,a1 as N,q as $,s as w,n as s,a2 as T,N as L,v as R,x as q,K as C,aD as G,i as F,B as K,V as y,af as O,aG as U,aF as E,av as J,aw as P}from"./entry.z2TJ7FsL.js";import{_ as Y}from"./keshmed-logo.UAl48SDW.js";import{l as V,s as H,n as Q}from"./index.5qZc6TVt.js";import{_ as W}from"./client-only.DuEgPIHb.js";const X={key:0,class:"d-flex ga-2"},Z={key:1,class:"d-flex ga-2"},tt=s("img",{src:Y,width:"100",height:"45",alt:"site-logo"},null,-1),et={class:"d-flex align-center gap-1"},ot=s("span",null,"+998 (90) 889 37 00",-1),at=k({__name:"AppBar",setup(x){const l=I(),{locale:d}=S(),_=j(()=>V.find(a=>a.lang===d.value)),i=a=>{localStorage.setItem("language",a),d.value=a},{mobile:u}=B();return(a,ft)=>{const z=D;return o(),f(G,{theme:"light",flat:"",color:"background"},{default:t(()=>[e(A,{class:"d-flex align-center justify-space-between"},{default:t(()=>[r(u)?(o(),c("div",X,[r(l).path!=="/"?(o(),f(m,{key:0,height:"28",color:"primary",class:"text-none text-body-2 font-weight-light",variant:"outlined",to:"/",exact:""},{default:t(()=>[h(n(a.$t("links.home")),1)]),_:1})):(o(),f(m,{key:1,height:"28",color:"primary",class:"text-none text-body-2 font-weight-light",variant:"outlined",to:"/products",exact:""},{default:t(()=>[h(n(a.$t("links.products")),1)]),_:1}))])):(o(),c("div",Z,[e(m,{height:"28",color:"primary",class:"text-none text-body-2 font-weight-light",variant:"text",to:"/",exact:""},{default:t(()=>[h(n(a.$t("links.home")),1)]),_:1}),e(m,{height:"28",color:"primary",class:"text-none text-body-2 font-weight-light",variant:"text",to:"/products",exact:""},{default:t(()=>[h(n(a.$t("links.products")),1)]),_:1})])),e(z,{to:"/",class:"text-h6 text-primary text-decoration-none py-1"},{default:t(()=>[tt]),_:1}),s("div",et,[b(e(m,{href:"tel:+998908893700",color:"primary",height:"28","prepend-icon":"mdi-phone",variant:"text",class:"text-none text-body-2 font-weight-light mr-1"},{default:t(()=>[ot]),_:1},512),[[v,!r(u)]]),e(M,{location:"bottom center",transition:"fade-transition"},{activator:t(({props:g})=>[e(m,N({color:"primary",height:"28"},g,{variant:"outlined",class:"text-none text-body-2 font-weight-light"}),{prepend:t(()=>[b(e($,{rounded:"",size:"20"},{default:t(()=>{var p;return[e(w,{src:(p=_.value)==null?void 0:p.img,alt:"sile-languages-choice"},null,8,["src"])]}),_:1},512),[[v,!r(u)]])]),default:t(()=>{var p;return[s("span",null,n((p=_.value)==null?void 0:p.title),1)]}),_:2},1040)]),default:t(()=>[e(T,{density:"compact",nav:""},{default:t(()=>[(o(!0),c(L,null,C(r(V),(g,p)=>(o(),f(R,{link:"",key:p,onClick:gt=>i(g.lang)},{prepend:t(()=>[e($,{rounded:"",size:"30"},{default:t(()=>[e(w,{src:g.img,alt:"sile-languages-choice"},null,8,["src"])]),_:2},1024)]),default:t(()=>[e(q,null,{default:t(()=>[h(n(g.title),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1})])]),_:1})]),_:1})}}}),st={class:"d-flex flex-column justify-start",style:{"max-width":"200px"}},nt={class:"d-flex flex-column mt-2"},lt=["href"],it={key:0},rt={key:1},ct=k({__name:"app-footer-link",props:{title:String,links:[Object]},setup(x){const l=x;return(d,_)=>(o(),c("div",st,[s("span",null,n(l.title),1),s("div",nt,[(o(!0),c(L,null,C(l.links,(i,u)=>(o(),c("a",{key:u,href:i.url,width:"100%",class:"mb-2 text-caption text-white text-decoration-none text-link text-left mt-1"},[e(F,{class:"mr-2",icon:i.icon},null,8,["icon"]),i.lang?(o(),c("span",it,n(d.$t(i.title)),1)):(o(),c("span",rt,n(i.title),1))],8,lt))),128))])]))}}),dt=""+globalThis.__publicAssetsURL("logo-white.png"),_t={class:"mt-2 mb-4"},ut=s("div",{class:"d-flex flex-column h-100 w-100 rounded overflow-hidden"},[s("iframe",{title:"geolocation",width:"100%",height:"240px",id:"gmap_canvas",src:"https://maps.google.com/maps?q=39.084234,66.838668&t=&z=18&ie=UTF8&iwloc=&output=embed",frameborder:"0",scrolling:"no",marginheight:"0",marginwidth:"0"})],-1),pt={class:"text-center mt-2"},mt=s("strong",null,"Kesh Med",-1),ht=k({__name:"app-footer",setup(x){return(l,d)=>{const _=ct;return o(),f(U,{class:"bg-grey-darken-4 d-flex flex-column pb-15 pb-md-5",absolute:""},{default:t(()=>[e(A,{class:"py-0"},{default:t(()=>[s("div",_t,[e(w,{width:"150",src:dt,alt:"Footer logo"})]),e(K,{class:"mb-3"},{default:t(()=>[e(y,{cols:"6",sm:"4",md:"3"},{default:t(()=>[e(_,{title:l.$t("footer.social_links"),links:r(H)},null,8,["title","links"])]),_:1}),e(y,{cols:"6",sm:"4",md:"3"},{default:t(()=>[e(_,{title:l.$t("footer.site_links"),links:r(Q)},null,8,["title","links"])]),_:1}),e(y,{cols:"12",sm:"12",md:"6"},{default:t(()=>[ut]),_:1})]),_:1}),e(O),s("div",pt,[h(n(new Date().getFullYear())+" — ",1),mt])]),_:1})]),_:1})}}}),wt=k({__name:"index-layout",setup(x){const{mobile:l}=B();return(d,_)=>{const i=at,u=W,a=ht;return o(),f(P,null,{default:t(()=>[e(u,null,{default:t(()=>[e(i)]),_:1}),e(J,{class:"min-h-screen"},{default:t(()=>[E(d.$slots,"default")]),_:3}),b(e(m,{href:"tel:+998908893700",target:"_blank",size:"60",rounded:"circle",color:"primary",style:{border:"2px solid #fff",position:"fixed",right:"20px",bottom:"20px","z-index":"444"}},{default:t(()=>[e(F,{size:"30"},{default:t(()=>[h("mdi-phone")]),_:1})]),_:1},512),[[v,r(l)]]),e(a)]),_:3})}}});export{wt as default};
//# sourceMappingURL=index-layout.IpGI65Bb.js.map