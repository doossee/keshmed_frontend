import{d as M,I as W,r as h,o as y,J as k,K as L,n as f,t as v,g as i,e,b as a,i as m,h as r,L as O,M as U,N as S,O as x,w as X,a as Y,V as b,j as G,k as H,l as V,m as J,B as K,D,f as A,y as Z,z as ee,F as le,G as ae,H as te}from"./entry.wmKHaZS0.js";import{u as ne}from"./useCategories.irO-WxiL.js";const oe={class:"w-100 px-2 py-1 border d-flex align-center rounded justify-space-between mb-1"},se={class:"d-flex ga-2"},ie={class:"pl-4"},de={class:"w-100 px-2 py-1 border d-flex align-center rounded justify-space-between mb-1"},ue={class:"d-flex ga-2"},ce={class:"pl-4"},re={class:"w-100 px-2 py-1 border d-flex align-center rounded justify-space-between mb-1"},me={class:"d-flex ga-2"},fe=M({__name:"tree",props:{items:{},locale:{}},emits:["addItem","editItem","deleteItem"],setup(E,{emit:j}){const R=E,{items:F,locale:w}=W(R),C=h(0),g=h(0);return(c,I)=>(y(!0),k(S,null,L(i(F),(d,n)=>{var $,o;return y(),k("div",null,[f("div",oe,[f("span",null,v(d[`name_${i(w)}`])+" ("+v(($=d.children)==null?void 0:$.length)+")",1),f("div",se,[e(r,{onClick:u=>c.$emit("addItem",[n],d.id),color:"light-blue-accent-4",size:"30",flat:""},{default:a(()=>[e(m,{icon:"mdi-plus"})]),_:2},1032,["onClick"]),e(r,{onClick:u=>c.$emit("editItem",d,[n]),color:"light-blue-accent-4",size:"30",flat:""},{default:a(()=>[e(m,{icon:"mdi-pencil"})]),_:2},1032,["onClick"]),e(r,{onClick:u=>c.$emit("deleteItem",d,[n]),color:"red",size:"30",flat:""},{default:a(()=>[e(m,{icon:"mdi-delete"})]),_:2},1032,["onClick"]),O(e(r,{onClick:u=>C.value=C.value===n?null:n,color:"light-blue-accent-4",size:"30",flat:""},{default:a(()=>[e(m,{icon:C.value===n?"mdi-chevron-up":"mdi-chevron-down"},null,8,["icon"])]),_:2},1032,["onClick"]),[[U,((o=d.children)==null?void 0:o.length)!==0]])])]),C.value===n?(y(!0),k(S,{key:0},L(d.children,(u,s)=>{var z,T;return y(),k("div",ie,[f("div",de,[f("span",null,v(u[`name_${i(w)}`])+" ("+v((z=u==null?void 0:u.children)==null?void 0:z.length)+")",1),f("div",ue,[e(r,{onClick:_=>c.$emit("addItem",[n,s],u.id),color:"light-blue-accent-4",size:"30",flat:""},{default:a(()=>[e(m,{icon:"mdi-plus"})]),_:2},1032,["onClick"]),e(r,{onClick:_=>c.$emit("editItem",u,[n,s]),color:"light-blue-accent-4",size:"30",flat:""},{default:a(()=>[e(m,{icon:"mdi-pencil"})]),_:2},1032,["onClick"]),e(r,{onClick:_=>c.$emit("deleteItem",u,[n,s]),color:"red",size:"30",flat:""},{default:a(()=>[e(m,{icon:"mdi-delete"})]),_:2},1032,["onClick"]),O(e(r,{onClick:_=>g.value=g.value===s?null:s,color:"light-blue-accent-4",size:"30",flat:""},{default:a(()=>[e(m,{icon:g.value===s?"mdi-chevron-up":"mdi-chevron-down"},null,8,["icon"])]),_:2},1032,["onClick"]),[[U,((T=u.children)==null?void 0:T.length)!==0]])])]),g.value===s?(y(!0),k(S,{key:0},L(u.children,(_,N)=>(y(),k("div",ce,[f("div",re,[f("span",null,v(_[`name_${i(w)}`]),1),f("div",me,[e(r,{onClick:B=>c.$emit("editItem",_,[n,s,N]),color:"light-blue-accent-4",size:"30",flat:""},{default:a(()=>[e(m,{icon:"mdi-pencil"})]),_:2},1032,["onClick"]),e(r,{onClick:B=>c.$emit("deleteItem",_,[n,s,N]),color:"red",size:"30",flat:""},{default:a(()=>[e(m,{icon:"mdi-delete"})]),_:2},1032,["onClick"])])])]))),256)):x("",!0)])}),256)):x("",!0)])}),256))}}),pe={class:"font-weight-light"},_e=M({__name:"categories",setup(E){const{getAllCategories:j,getTree:R,createCategory:F,deleteCategory:w,updateCategory:C}=ne(),g=h(!1),c=h(!1),I=h(null),d=h(!1),n=h([]),$=h([]),o=h([]),u=[l=>!!l||"asdf"],s=h({parent:null,name_uz:"",name_ru:"",name_en:"",children:[]}),z={parent:null,name_uz:"",name_ru:"",name_en:""};X(d,l=>l||B());const T=(l,t)=>{s.value.parent=t,o.value=l,d.value=!0},_=(l,t)=>{o.value=t,I.value=l.id,s.value=Object.assign({},l),d.value=!0},N=async(l,t)=>{confirm("Do you delete this item?")&&(t.length===1&&n.value.splice(t[0],1),t.length===2&&n.value[t[0]].children.splice(t[1],1),t.length===3&&n.value[t[0]].children[t[1]].children.splice(t[2],1),await w(l.id))},B=()=>{d.value=!1,te(()=>{s.value=Object.assign({},z),I.value=null,o.value=[]})},P=async()=>{try{if(c.value=!0,I.value!==null){const l=await C(s.value.id,s.value);l.children&&delete l.children,o.value.length===1&&Object.assign(n.value[o.value[0]],l),o.value.length===2&&Object.assign(n.value[o.value[0]].children[o.value[1]],l),o.value.length===3&&Object.assign(n.value[o.value[0]].children[o.value[1]].children[o.value[2]],l)}else{const l=await F(s.value);console.log(l),$.value.push(l),o.value.length===0&&n.value.push({...l,children:[]}),o.value.length===1&&n.value[o.value[0]].children.push({...l,children:[]}),o.value.length===2&&n.value[o.value[0]].children[o.value[1]].children.push({...l,children:[]}),o.value.length===3&&n.value[o.value[0]].children[o.value[1]].children[o.value[2]].children.push({...l,children:[]})}B()}catch(l){console.log(l)}finally{c.value=!1}},q=async()=>{g.value=!0;const l=await R();l&&(n.value=l,g.value=!1)};return(async()=>{const[l,t]=await Promise.all([j(""),q()]);$.value=l.results})(),(l,t)=>{const Q=fe;return y(),Y(ae,{fluid:"",class:"py-0"},{default:a(()=>[e(K,{justify:"space-between",align:"center"},{default:a(()=>[e(b,{cols:"12",class:"pb-0 d-flex justify-end",style:{"margin-top":"1px"}},{default:a(()=>[e(r,{onClick:t[0]||(t[0]=p=>d.value=!0),color:"primary",size:"40",width:"100%"},{default:a(()=>[e(m,{icon:"mdi-plus"})]),_:1})]),_:1}),e(b,{cols:"12"},{default:a(()=>[e(G,{flat:"",border:""},{default:a(()=>[e(H,{class:"px-4 pt-3 font-weight-light"},{default:a(()=>[V(v(l.$t("products.categories")),1)]),_:1}),e(J,null,{default:a(()=>[O(f("span",null,v(l.$t("no_data")),513),[[U,i(n).length===0&&!i(g)]]),O(f("span",null,v(l.$t("loading"))+"...",513),[[U,i(g)]]),e(Q,{onAddItem:T,onEditItem:_,onDeleteItem:N,items:i(n),locale:l.$i18n.locale},null,8,["items","locale"])]),_:1})]),_:1})]),_:1})]),_:1}),e(le,{persistent:"",modelValue:i(d),"onUpdate:modelValue":t[6]||(t[6]=p=>ee(d)?d.value=p:null),"max-width":"500px",transition:"fade-transition"},{default:a(()=>[e(G,{flat:"",border:"",color:"background"},{default:a(()=>[e(H,{class:"px-4 py-3 d-flex justify-space-between align-center"},{default:a(()=>[f("span",pe,v(l.$t(i(I)?"admin.edit_categories":"admin.add_categories")),1),e(r,{flat:"",onClick:t[1]||(t[1]=p=>d.value=!1),size:"32",color:"primary"},{default:a(()=>[e(m,{size:"small",icon:"mdi-close"})]),_:1})]),_:1}),e(J,{class:"px-4 pt-2 pb-3"},{default:a(()=>[e(K,{class:"pa-2"},{default:a(()=>[e(b,{cols:"12",class:"pa-2"},{default:a(()=>[e(D,null,{default:a(()=>[V("Nomi (uz)")]),_:1}),e(A,{modelValue:i(s).name_uz,"onUpdate:modelValue":t[2]||(t[2]=p=>i(s).name_uz=p),rules:u,placeholder:"Nomi (uz)","hide-details":"",density:"compact","bg-color":"surface",color:"primary",variant:"solo",flat:"",class:"border rounded"},null,8,["modelValue"])]),_:1}),e(b,{cols:"12",class:"pa-2"},{default:a(()=>[e(D,null,{default:a(()=>[V("Название (ru)")]),_:1}),e(A,{modelValue:i(s).name_ru,"onUpdate:modelValue":t[3]||(t[3]=p=>i(s).name_ru=p),rules:u,placeholder:"Название (ru)","hide-details":"",density:"compact","bg-color":"surface",color:"primary",variant:"solo",flat:"",class:"border rounded"},null,8,["modelValue"])]),_:1}),e(b,{cols:"12",class:"pa-2"},{default:a(()=>[e(D,null,{default:a(()=>[V("Title (en)")]),_:1}),e(A,{modelValue:i(s).name_en,"onUpdate:modelValue":t[4]||(t[4]=p=>i(s).name_en=p),rules:u,placeholder:"Title (en)","hide-details":"",density:"compact","bg-color":"surface",color:"primary",variant:"solo",flat:"",class:"border rounded"},null,8,["modelValue"])]),_:1}),e(b,{cols:"12",class:"pa-2"},{default:a(()=>[e(D,null,{default:a(()=>[V(v(l.$t("admin.parent_category")),1)]),_:1}),e(Z,{modelValue:i(s).parent,"onUpdate:modelValue":t[5]||(t[5]=p=>i(s).parent=p),items:i($),"item-title":`name_${l.$i18n.locale}`,"item-value":"id",placeholder:l.$t("admin.parent_category"),"hide-details":"",density:"compact","bg-color":"surface",color:"primary",variant:"solo",flat:"",class:"border rounded"},null,8,["modelValue","items","item-title","placeholder"])]),_:1}),e(b,{cols:"12",class:"pa-2"},{default:a(()=>[e(r,{color:"primary",disabled:i(c),loading:i(c),block:"",onClick:P,height:"45"},{default:a(()=>[V(v(l.$t("admin.save")),1)]),_:1},8,["disabled","loading"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}}});export{_e as default};
//# sourceMappingURL=categories.XjKRxFe7.js.map