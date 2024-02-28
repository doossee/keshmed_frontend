export const useProducts = () => {
    const getAllProducts = (qs: string) => $fetch(`/api/products/${qs}`)

    const getProductById = (id: any, qs: string) => $fetch(`/api/products/${id}/?${qs}`)

    const createProduct = (body: any) => $fetch('/api/products/', {
        method: "post",
        body
    })

    const deleteProduct = (id: any) => $fetch(`/api/products/${id}/`, {
        method: "delete",
    })

    const updateProduct = (id: any, body: any) => $fetch(`/api/products/${id}/`, {
        method: "put",
        body
    })

    const sendImage = async (id: number, body: FormData) => $fetch(`/api/products/${id}/create_image/`, {
        // headers: { "Content-Type": "multipart-form/data" },
        method: "post",
        body
    })

    return {
        getAllProducts,
        getProductById,
        createProduct,
        updateProduct,
        deleteProduct,
        sendImage
    }
}