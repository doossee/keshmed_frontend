import{d as C,aB as N,av as I,r as V,w as D,o as r,a as u,b as a,e,$ as m,x as f,j as x,y as v,m as g,t as d,J as b,N as w,K as L,h as p,i as $,O as S,aC as A,u as j,c as z,a0 as E,_ as F,aD as M,aE as O,p as y,aF as T,aw as G,aG as J,ax as K}from"./DYO0wL_f.js";import{b as P,l as k}from"./DYC5fsfD.js";import{_ as U}from"./D9evh5xY.js";import{_ as q}from"./ClHQTR7S.js";const H=C({__name:"app-admin-nav",setup(_){const{mobile:l}=N(),{logout:c}=I(),n=V(!0),t=V(!0),h=()=>{confirm("Log out?")&&c()};return D(l,()=>l&&(n.value=!0)),(s,o)=>(r(),u(A,{modelValue:t.value,"onUpdate:modelValue":o[1]||(o[1]=i=>t.value=i),rail:n.value,permanent:"",width:"250","expand-on-hover":p(l)},{append:a(()=>[e(m,{lines:!1,nav:"",variant:"flat"},{default:a(()=>[e(f,{link:"",color:"primary","base-color":"transparent",onClick:h},{prepend:a(()=>[e(x,{icon:"mdi-logout-variant"})]),default:a(()=>[e(v,null,{default:a(()=>[g(d(s.$t("admin.logout")),1)]),_:1})]),_:1})]),_:1})]),default:a(()=>[e(m,{lines:!1,nav:"",variant:"flat"},{default:a(()=>[(r(!0),b(w,null,L(p(P),(i,B)=>(r(),u(f,{link:"",key:B,to:i.url,color:"primary","base-color":"transparent",exact:""},{prepend:a(()=>[e(x,{icon:i.icon},null,8,["icon"])]),default:a(()=>[e(v,null,{default:a(()=>[g(d(s.$t(i.title)),1)]),_:2},1024)]),_:2},1032,["to"]))),128))]),_:1}),p(l)?S("",!0):(r(),u($,{key:0,position:"absolute",elevation:"1",icon:`mdi-chevron-${n.value?"right":"left"}`,size:"x-small",onClick:o[0]||(o[0]=i=>n.value=!n.value),style:{right:"-15px"}},null,8,["icon"]))]),_:1},8,["modelValue","rail","expand-on-hover"]))}}),Q=y("div",{class:"w-100 d-flex justify-start pl-4"},[y("img",{src:U,height:"50",width:"110"})],-1),R=C({__name:"app-admin-bar",setup(_){const{locale:l}=j(),c=z(()=>k.find(t=>t.lang===l.value)),n=t=>{localStorage.setItem("language",t),l.value=t};return(t,h)=>(r(),u(O,{color:"background",flat:"",height:"60"},{append:a(()=>[e(E,{transition:"fade-transition"},{activator:a(({props:s})=>[e($,F({style:{"margin-right":"6px"}},s,{flat:"",size:"40",variant:"flat",color:"primary",elevation:"1"}),{default:a(()=>{var o;return[g(d((o=c.value)==null?void 0:o.lang),1)]}),_:2},1040)]),default:a(()=>[e(m,{elevation:"2",density:"compact"},{default:a(()=>[(r(!0),b(w,null,L(p(k),(s,o)=>(r(),u(f,{link:"",key:o,onClick:i=>n(s.lang)},{default:a(()=>[e(v,{class:"text-caption",textContent:d(s.title)},null,8,["textContent"])]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1})]),default:a(()=>[Q,e(M)]),_:1}))}}),W={};function X(_,l){const c=H,n=R,t=q;return r(),u(G,null,{default:a(()=>[e(t,null,{default:a(()=>[e(c),e(n)]),_:1}),e(K,null,{default:a(()=>[J(_.$slots,"default")]),_:3})]),_:3})}const ta=T(W,[["render",X]]);export{ta as default};
//# sourceMappingURL=BKaeHkoJ.js.map