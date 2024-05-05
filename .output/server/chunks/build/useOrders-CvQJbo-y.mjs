const useOrders = () => {
  const getOrders = (qs) => $fetch(`/api/orders/?${qs}&expand=product`);
  const createOrder = (orderData) => $fetch(`/api/orders/`, {
    method: "post",
    body: JSON.stringify(orderData)
  });
  const checkOrder = (id, data) => $fetch(`/api/orders/${id}/`, {
    method: "put",
    body: JSON.stringify(data)
  });
  const deleteOrder = (id) => $fetch(`/api/orders/${id}`, {
    method: "delete"
  });
  return {
    getOrders,
    checkOrder,
    deleteOrder,
    createOrder
  };
};

export { useOrders as u };
