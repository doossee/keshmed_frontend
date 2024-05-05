const c=()=>({getOrders:e=>$fetch(`/api/orders/?${e}&expand=product`),checkOrder:(e,r)=>$fetch(`/api/orders/${e}/`,{method:"put",body:JSON.stringify(r)}),deleteOrder:e=>$fetch(`/api/orders/${e}`,{method:"delete"}),createOrder:e=>$fetch("/api/orders/",{method:"post",body:JSON.stringify(e)})});export{c as u};
//# sourceMappingURL=BtilBq3A.js.map
