const s=()=>({getAllBrands:e=>$fetch(`/api/brands/?${e}`),createBrand:e=>$fetch("/api/brands/",{method:"post",body:e}),updateBrand:(e,t)=>$fetch(`/api/brands/${e}/`,{method:"put",body:t}),deleteBrand:e=>$fetch(`/api/brands/${e}/`,{method:"delete"})});export{s as u};
//# sourceMappingURL=D3liThSD.js.map
