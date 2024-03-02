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

    return {
        getOrders,
        checkOrder,
        createOrder,
    }
}