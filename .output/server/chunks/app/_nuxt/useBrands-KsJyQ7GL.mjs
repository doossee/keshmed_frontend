const useBrands = () => {
  const getAllBrands = (qs) => $fetch(`/api/brands/?${qs}`);
  const createBrand = (data) => $fetch(`/api/brands/`, {
    method: "post",
    body: data
  });
  const updateBrand = (id, data) => $fetch(`/api/brands/${id}/`, {
    method: "put",
    body: data
  });
  const deleteBrand = (id) => $fetch(`/api/brands/${id}/`, { method: "delete" });
  return {
    getAllBrands,
    createBrand,
    updateBrand,
    deleteBrand
  };
};

export { useBrands as u };
