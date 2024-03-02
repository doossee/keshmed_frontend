export const useBrands = () => {
    const getAllBrands = (qs: string) => $fetch(`/api/brands/?${qs}`)

    const createBrand = (data: any) => $fetch(`/api/brands/`, { 
        method: "post",
        body: data,
    })
 
    const updateBrand = (id: any, data: any) => $fetch(`/api/brands/${id}/`, {
        method: "put",
        body: data
    })

    const deleteBrand = (id: any) => $fetch(`/api/brands/${id}/`, { method: 'delete' })

    return {
        getAllBrands,
        createBrand,
        updateBrand,
        deleteBrand
    }
}