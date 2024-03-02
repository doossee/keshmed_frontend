const useCategories = () => {
  const getAllCategories = (qs) => $fetch(`/api/categories/?${qs}`);
  const createCategory = (body) => $fetch(`/api/categories/`, {
    method: "post",
    body
  });
  const getTree = () => $fetch(`/api/categories/list_tree/`);
  const updateCategory = (id, body) => $fetch(`/api/categories/${id}/`, {
    method: "put",
    body
  });
  const deleteCategory = (id) => $fetch(`/api/categories/${id}/`, { method: "delete" });
  return {
    getAllCategories,
    getTree,
    createCategory,
    updateCategory,
    deleteCategory
  };
};

export { useCategories as u };
