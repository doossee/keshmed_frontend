const useProducts = () => {
  const getAllProducts = (qs) => $fetch(`/api/products/${qs}`);
  const getProductById = (id, qs) => $fetch(`/api/products/${id}/?${qs}`);
  const createProduct = (body) => $fetch("/api/products/", {
    method: "post",
    body
  });
  const deleteProduct = (id) => $fetch(`/api/products/${id}/`, {
    method: "delete"
  });
  const updateProduct = (id, body) => $fetch(`/api/products/${id}/`, {
    method: "put",
    body
  });
  const sendImage = async (id, body) => $fetch(`/api/products/${id}/create_image/`, {
    // headers: { "Content-Type": "multipart-form/data" },
    method: "post",
    body
  });
  return {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    sendImage
  };
};

export { useProducts as u };
