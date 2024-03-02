const c=()=>({getOrders:r=>$fetch(`/api/orders/?${r}&expand=product`),checkOrder:(r,e)=>$fetch(`/api/orders/${r}/`,{method:"put",body:JSON.stringify(e)}),createOrder:r=>$fetch("/api/orders/",{method:"post",body:JSON.stringify(r)})});export{c as u};
//# sourceMappingURL=useOrders.IqAoDDSj.js.map
