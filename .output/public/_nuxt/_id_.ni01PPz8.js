import{_ as be}from"./client-only.19Wnq_V5.js";import{_ as Ve}from"./AppProductCard.vue.6WefXfOJ.js";import{a9 as ke,aa as we,d as xe,r as w,ab as Ce,ac as Se,Z as ze,ad as Ue,o as i,a as _,b as e,e as t,V as u,j as x,m as v,l as m,t as r,O as C,ae as N,q as O,s as R,af as De,ag as Te,T as je,J as T,K as F,N as q,k as pe,n as l,W as me,g as j,a0 as Be,ah as Pe,ai as Me,a2 as Ie,B as G,h as E,C as Le,f as Y,S as Ae,y as Ne,F as Oe,G as Re,Y as Fe,v as qe}from"./entry.wmKHaZS0.js";import{u as Ge}from"./useOrders.IqAoDDSj.js";import{u as Ee}from"./useProducts.p1LffWDY.js";import{u as fe}from"./vue.f36acd1f.WHSpSiKh.js";import{c as B}from"./index.vFXdcEz2.js";function Ke(K,P){const{title:M,titleTemplate:b,...I}=K;return fe({title:M,titleTemplate:b,_flatMeta:I},{...P,transform(S){const H=ke({...S._flatMeta});return delete S._flatMeta,{...S,meta:H}}})}const He=()=>({lang:we("lang",()=>"ru")}),Je={class:"text-h5 text-primary font-weight-medium"},Qe={class:"text-right"},We={class:"text-right"},Ye={class:"text-right"},Ze={class:"text-right"},Xe={class:"d-flex align-center gap-1 justify-end"},et={class:"text-right"},tt={class:"text-primary text-right"},at={class:"text-right"},lt={class:"text-right"},ot={class:"text-right"},rt={class:"text-right"},st={style:{"white-space":"pre-line"}},nt={class:"w-100 d-flex pb-5 justify-space-between align-center"},dt={class:"text-primary"},_t=xe({__name:"[id]",async setup(K){var te,ae,le,oe,re,se,ne,de,ue;let P,M;const b=[a=>!!a||"asdf"],{lang:I}=He(),{createOrder:S}=Ge(),{getProductById:H,getAllProducts:ge}=Ee(),J=w(!1),Z=Ce(),L=w(!1),y=w(!1),Q=w(0),o=w(null),X=w([]),ee=w(null),p=Se({checked:!1,first_name:"",last_name:"",message:"",country:232,phone:""}),_e=async()=>{var a;y.value=!0;try{if(!((a=Z.params)!=null&&a.id))return;const n=await H(Z.params.id,"expand=images,category,brand");o.value=n,ve(n.category.id,n.brand.id)}catch(n){alert({uz:"Bunday Qurilma topilmadi!",ru:"Данное оборудование не найдено!",en:"This Equipment not found!"}[I.value]),console.log(n)}finally{y.value=!1}},ve=async(a,n)=>{const h=await ge(`?category=${a}&brand=${n}&page=1&limit=10&expand=images,brand`);X.value=h.results},ye=a=>({title:a.name,"append-avatar":a.flag}),he=async()=>{var n,h;J.value=!0;const{valid:a}=await((n=ee.value)==null?void 0:n.validate());if(a)try{await S({...p,product:(h=o.value)==null?void 0:h.id}),L.value=!1,alert({uz:"Muvaffaqiyatli yuborildi!",ru:"Успешно отправлено!",en:"Succesfully sended!"}[I.value]),Object.assign(p,{checked:!1,first_name:"",last_name:"",message:"",country:232,phone:"",product:null})}catch(W){console.log(W)}finally{J.value=!1}};return[P,M]=ze(()=>_e()),await P,M(),Ke({keywords:`${(te=o.value)==null?void 0:te.title_en}, ${(ae=o.value)==null?void 0:ae.title_ru}, ${(le=o.value)==null?void 0:le.title_uz}`,title:(oe=o.value)==null?void 0:oe.title_ru,ogTitle:()=>{var a;return(a=o.value)==null?void 0:a.title_ru},ogDescription:(re=o.value)==null?void 0:re.description_ru,ogImage:(se=o.value)==null?void 0:se.images[0].image,description:(ne=o.value)==null?void 0:ne.description_ru}),fe({meta:[{id:"og:price:amount",property:"og:price:amount",content:`${(de=o.value)==null?void 0:de.price} USD`},{id:"og:price:currency",property:"og:price:currency",content:"USD"},{id:"product:price:amount",property:"product:price:amount",content:`${(ue=o.value)==null?void 0:ue.price} USD`},{id:"product:price:currency",property:"product:price:currency",content:"USD"}]}),(a,n)=>{const h=Ue("router-link"),W=be,$e=Ve;return i(),_(Re,null,{default:e(()=>[t(G,null,{default:e(()=>[y.value?C("",!0):(i(),_(u,{key:0,cols:"12"},{default:e(()=>[t(x,{border:"",flat:""},{default:e(()=>[t(v,{class:"d-flex gap-1 align-center"},{default:e(()=>{var s,d,c,f,g,V,z,U;return[(c=(d=(s=o.value)==null?void 0:s.category)==null?void 0:d.parent)!=null&&c.parent?(i(),_(h,{key:0,class:"text-decoration-none text-black text-hover-link",to:`/products?category=${o.value.category.parent.parent.id}`},{default:e(()=>[m(r(o.value.category.parent.parent[`name_${a.$i18n.locale}`])+" /",1)]),_:1},8,["to"])):C("",!0),(g=(f=o.value)==null?void 0:f.category)!=null&&g.parent?(i(),_(h,{key:1,class:"text-decoration-none text-black text-hover-link",to:`/products?category=${(V=o.value.category.parent)==null?void 0:V.id}`},{default:e(()=>[m(r(o.value.category.parent[`name_${a.$i18n.locale}`])+" /",1)]),_:1},8,["to"])):C("",!0),(U=(z=o.value)==null?void 0:z.category)!=null&&U.id?(i(),_(h,{key:2,class:"text-decoration-none text-black text-hover-link",to:`/products?category=${o.value.category.id}`},{default:e(()=>[m(r(o.value.category[`name_${a.$i18n.locale}`]),1)]),_:1},8,["to"])):C("",!0)]}),_:1})]),_:1})]),_:1})),t(u,{cols:"12",sm:"6"},{default:e(()=>[t(N,{loading:y.value,type:"image,image,button,button,button,button"},{default:e(()=>[t(x,{flat:"",width:"100%",border:""},{default:e(()=>{var s;return[t(O,{rounded:"",size:"100%"},{default:e(()=>{var d,c,f,g;return[t(R,{alt:(d=o.value)==null?void 0:d.title_ru,height:"400",width:"100%",src:((g=(f=(c=o.value)==null?void 0:c.images)==null?void 0:f[Q.value])==null?void 0:g.image)||"/img/nophoto.jpg"},null,8,["alt","src"])]}),_:1}),t(De),((s=o.value)==null?void 0:s.images.length)!==0?(i(),_(Te,{key:0,class:"pa-0 d-flex justify-center"},{default:e(()=>[t(W,null,{default:e(()=>[t(je,{modelValue:Q.value,"onUpdate:modelValue":n[0]||(n[0]=d=>Q.value=d),class:"pa-2",mandatory:"","selected-class":"bg-primary","show-arrows":""},{default:e(()=>{var d;return[(i(!0),T(q,null,F((d=o.value)==null?void 0:d.images,(c,f)=>(i(),_(Fe,{key:f},{default:e(({isSelected:g,toggle:V})=>[t(O,{size:"50",rounded:"",onClick:V,color:g?"primary":"grey-lighten-3",class:"mx-1 pa-1"},{default:e(()=>[t(R,{alt:"thumb",src:(c==null?void 0:c.thumbnail)||"/img/nophoto.jpg",cover:""},null,8,["src"])]),_:2},1032,["onClick","color"])]),_:2},1024))),128))]}),_:1},8,["modelValue"])]),_:1})]),_:1})):C("",!0)]}),_:1})]),_:1},8,["loading"])]),_:1}),t(u,{cols:"12",sm:"6"},{default:e(()=>[t(N,{loading:y.value,type:"article, avatar, text, paragraph","min-height":"100%",color:"transparent",width:"100%"},{default:e(()=>[t(x,{variant:"text",width:"100%"},{default:e(()=>[t(pe,{class:"px-0 pt-0"},{default:e(()=>{var s;return[m(r((s=o.value)==null?void 0:s[`title_${a.$i18n.locale}`]),1)]}),_:1}),t(v,{class:"pb-0 pt-2 px-0 d-flex justify-space-between align-center"},{default:e(()=>{var s;return[l("div",null,[l("span",Je,r((s=o.value)==null?void 0:s.price)+" $",1)])]}),_:1}),t(v,{class:"px-0 pb-0"},{default:e(()=>[l("span",null,r(a.$t("products.information")),1),t(me,{density:"compact",hover:"",class:"rounded mt-3 border"},{default:e(()=>{var s,d,c,f,g,V,z,U,ie,ce;return[l("tbody",null,[l("tr",null,[l("td",null,r(a.$t("products.category")),1),l("td",Qe,r((s=o.value)==null?void 0:s.category[`name_${a.$i18n.locale}`]),1)]),l("tr",null,[l("td",null,r(a.$t("products.condition")),1),l("td",We,r(a.$t("condition."+((d=o.value)==null?void 0:d.condition))),1)]),l("tr",null,[l("td",null,r(a.$t("products.year")),1),l("td",Ye,r((c=o.value)==null?void 0:c.year),1)]),l("tr",null,[l("td",null,r(a.$t("products.shipping")),1),l("td",Ze,[l("div",Xe,[t(O,{size:"30"},{default:e(()=>{var k,$;return[t(R,{alt:"flag",cover:"",src:($=j(B)[(k=o.value)==null?void 0:k.shipping_from])==null?void 0:$.flag},null,8,["src"])]}),_:1}),l("span",null,r((g=j(B)[(f=o.value)==null?void 0:f.shipping_from])==null?void 0:g.name),1)])])]),l("tr",null,[l("td",null,r(a.$t("products.sales_area")),1),l("td",et,[t(Be,{transition:"fade-transition","open-on-hover":!0},{activator:e(({props:k})=>{var $,A;return[l("span",Pe(Me(k)),r((A=($=o.value)==null?void 0:$.sales_areas)==null?void 0:A.length)+" стран",17)]}),default:e(()=>[t(Ie,{nav:"",density:"compact"},{default:e(()=>{var k;return[(i(!0),T(q,null,F((k=o.value)==null?void 0:k.sales_areas,($,A)=>(i(),_(qe,{key:A},{prepend:e(()=>[t(O,{rounded:""},{default:e(()=>{var D;return[t(R,{alt:"flag",src:(D=j(B)[$])==null?void 0:D.flag},null,8,["src"])]}),_:2},1024)]),title:e(()=>{var D;return[m(r((D=j(B)[$])==null?void 0:D.name),1)]}),_:2},1024))),128))]}),_:1})]),_:1})])]),l("tr",null,[l("td",null,r(a.$t("products.brand")),1),l("td",tt,r((z=(V=o.value)==null?void 0:V.brand)==null?void 0:z.name),1)]),l("tr",null,[l("td",null,r(a.$t("products.model")),1),l("td",at,r((U=o.value)==null?void 0:U.model),1)]),l("tr",null,[l("td",null,r(a.$t("products.warranty")),1),l("td",lt,r((ie=o.value)==null?void 0:ie.warranty),1)]),l("tr",null,[l("td",null,r(a.$t("products.created")),1),l("td",ot,r(new Date((ce=o.value)==null?void 0:ce.created_at).toLocaleDateString()),1)])])]}),_:1})]),_:1}),t(v,{class:"px-0"},{default:e(()=>[l("span",null,r(a.$t("products.contact_us")),1),t(G,{class:"pa-2 mt-0"},{default:e(()=>[t(u,{cols:"6",md:"4",class:"pa-1"},{default:e(()=>[t(E,{href:"https://t.me/Keshmed37",height:"35","prepend-icon":"mdi-send",block:"",color:"#0088cc",variant:"flat",class:"text-none"},{default:e(()=>[m(r(a.$t("products.telegram")),1)]),_:1})]),_:1}),t(u,{cols:"6",md:"4",class:"pa-1"},{default:e(()=>[t(E,{href:"tel:+998908893700",height:"35","prepend-icon":"mdi-phone",block:"",color:"green",variant:"flat",class:"text-none"},{default:e(()=>[m(r(a.$t("products.call")),1)]),_:1})]),_:1}),t(u,{cols:"12",md:"4",class:"pa-1"},{default:e(()=>[t(E,{onClick:n[1]||(n[1]=s=>L.value=!0),height:"35","prepend-icon":"mdi-cart",block:"",color:"primary",variant:"flat",class:"text-none"},{default:e(()=>[m(r(a.$t("products.order")),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["loading"])]),_:1}),t(u,{cols:"12",sm:"6"},{default:e(()=>[t(N,{loading:y.value,type:"sentences,avatar, paragraph","min-height":"100%"},{default:e(()=>[t(x,{flat:"",border:"",width:"100%"},{default:e(()=>[t(v,{class:"text-primary pb-0 text-body-1"},{default:e(()=>[m(r(a.$t("products.characteristics")),1)]),_:1}),t(v,{class:"pt-2 px-0"},{default:e(()=>[t(me,{density:"compact",hover:""},{default:e(()=>{var s;return[l("tbody",null,[(i(!0),T(q,null,F((s=o.value)==null?void 0:s.characteristics,(d,c)=>(i(),T("tr",{key:c},[l("td",null,r(d.title[a.$i18n.locale]),1),l("td",rt,r(d.value[a.$i18n.locale]),1)]))),128))])]}),_:1})]),_:1})]),_:1})]),_:1},8,["loading"])]),_:1}),t(u,{cols:"12",sm:"6"},{default:e(()=>[t(N,{loading:y.value,type:"sentences,avatar, paragraph","min-height":"100%"},{default:e(()=>[t(x,{flat:"",border:"",width:"100%"},{default:e(()=>[t(v,{class:"text-primary pb-0 text-body-1"},{default:e(()=>[m(r(a.$t("products.description")),1)]),_:1}),t(v,{class:"pt-2"},{default:e(()=>{var s;return[l("span",st,r((s=o.value)==null?void 0:s[`description_${a.$i18n.locale}`]),1)]}),_:1})]),_:1})]),_:1},8,["loading"])]),_:1}),y.value?C("",!0):(i(),_(u,{key:1,cols:"12"},{default:e(()=>[l("div",nt,[l("span",dt,r(a.$t("products.similar")),1)]),t(G,null,{default:e(()=>[(i(!0),T(q,null,F(X.value,(s,d)=>(i(),_(u,{cols:"12",sm:"6",md:"4",lg:"3",key:d},{default:e(()=>[t($e,{item:s},null,8,["item"])]),_:2},1024))),128))]),_:1})]),_:1}))]),_:1}),t(Oe,{modelValue:L.value,"onUpdate:modelValue":n[7]||(n[7]=s=>L.value=s),"max-width":"450",width:"100%"},{default:e(()=>[t(x,null,{default:e(()=>[t(pe,{class:"text-primary"},{default:e(()=>[m(r(a.$t("products.send_order")),1)]),_:1}),t(v,{class:"py-3 px-4"},{default:e(()=>[t(Le,{ref_key:"form",ref:ee},{default:e(()=>[t(G,null,{default:e(()=>[t(u,{cols:"12",class:"py-2"},{default:e(()=>[t(Y,{modelValue:p.first_name,"onUpdate:modelValue":n[2]||(n[2]=s=>p.first_name=s),class:"border rounded",flat:"","no-resize":"","hide-details":"",rules:b,density:"comfortable",variant:"solo",placeholder:a.$t("products.first_name")},null,8,["modelValue","placeholder"])]),_:1}),t(u,{cols:"12",class:"py-2"},{default:e(()=>[t(Y,{modelValue:p.last_name,"onUpdate:modelValue":n[3]||(n[3]=s=>p.last_name=s),class:"border rounded",flat:"","no-resize":"","hide-details":"",rules:b,density:"comfortable",variant:"solo",placeholder:a.$t("products.last_name")},null,8,["modelValue","placeholder"])]),_:1}),t(u,{cols:"12",class:"py-2"},{default:e(()=>[t(Y,{modelValue:p.phone,"onUpdate:modelValue":n[4]||(n[4]=s=>p.phone=s),class:"border rounded",flat:"","no-resize":"","hide-details":"",rules:b,density:"comfortable",variant:"solo",placeholder:a.$t("products.phone")},null,8,["modelValue","placeholder"])]),_:1}),t(u,{cols:"12",class:"py-2"},{default:e(()=>[t(Ae,{modelValue:p.message,"onUpdate:modelValue":n[5]||(n[5]=s=>p.message=s),class:"border rounded",flat:"","no-resize":"","hide-details":"",rules:b,density:"comfortable",variant:"solo",placeholder:a.$t("products.message")},null,8,["modelValue","placeholder"])]),_:1}),t(u,{cols:"12",class:"py-2"},{default:e(()=>[t(Ne,{"item-props":ye,rules:b,flat:"",class:"border rounded",density:"compact","bg-color":"surface",modelValue:p.country,"onUpdate:modelValue":n[6]||(n[6]=s=>p.country=s),items:j(B),placeholder:a.$t("products.country"),"item-title":"name","hide-details":"","item-value":"id",variant:"solo",color:"primary"},null,8,["modelValue","items","placeholder"])]),_:1}),t(u,{cols:"12",class:"d-flex justify-end pt-1"},{default:e(()=>[t(E,{loading:J.value,flat:"",onClick:he,color:"primary"},{default:e(()=>[m(r(a.$t("products.send")),1)]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}}});export{_t as default};
//# sourceMappingURL=_id_.ni01PPz8.js.map
