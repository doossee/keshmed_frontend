export const useOrders = () => {
    const getOrders = (qs: any) => $fetch(`/api/orders/?${qs}&expand=product`)

    const createOrder = (orderData: any) => $fetch(`/api/orders/`, {
        method: "post",
        body: JSON.stringify(orderData)
    })

    const checkOrder = (id: any, data: any) => $fetch(`/api/orders/${id}/`, {
        method: "put",
        body: JSON.stringify(data)
    })

    const deleteOrder = (id: any) => $fetch(`/api/orders/${id}`, {
        method: 'delete'
    })

    return {
        getOrders,
        checkOrder,
        deleteOrder,
        createOrder,
    }
}