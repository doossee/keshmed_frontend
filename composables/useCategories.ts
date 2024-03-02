export const useCategories = () => {
    const getAllCategories = (qs: any) => $fetch(`/api/categories/?${qs}`)

    const createCategory = (body: any) => $fetch(`/api/categories/`, {
        method: "post",
        body
    })

    const getTree = () => $fetch(`/api/categories/list_tree/`)

    const updateCategory = (id: any, body: any) => $fetch(`/api/categories/${id}/`, {
        method: "put",
        body
    })

    const deleteCategory = (id: any) => $fetch(`/api/categories/${id}/`, {  method: 'delete' })

    return {
        getAllCategories,
        getTree,
        createCategory,
        updateCategory,
        deleteCategory
    }
}