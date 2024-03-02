const s=()=>({getAllCategories:e=>$fetch(`/api/categories/?${e}`),getTree:()=>$fetch("/api/categories/list_tree/"),createCategory:e=>$fetch("/api/categories/",{method:"post",body:e}),updateCategory:(e,t)=>$fetch(`/api/categories/${e}/`,{method:"put",body:t}),deleteCategory:e=>$fetch(`/api/categories/${e}/`,{method:"delete"})});export{s as u};
//# sourceMappingURL=useCategories.irO-WxiL.js.map
