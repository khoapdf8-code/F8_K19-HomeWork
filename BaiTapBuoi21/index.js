const products = [
  { id: 1, name: 'MacBook Pro', price: 2000, category: 'Laptop' },
  { id: 2, name: 'iPhone 15', price: 1000, category: 'Phone' },
  { id: 3, name: 'Bàn phím cơ', price: 150, category: 'Accessories' },
  { id: 4, name: 'Màn hình Dell', price: 500, category: 'Monitor' }
];

const orders = [
  { orderId: 'ORD01', productId: 2, quantity: 2, status: 'completed' },
  { orderId: 'ORD02', productId: 1, quantity: 1, status: 'pending' },
  { orderId: 'ORD03', productId: 4, quantity: 3, status: 'completed' },
  { orderId: 'ORD04', productId: 3, quantity: 1, status: 'canceled' },
  { orderId: 'ORD05', productId: 2, quantity: 1, status: 'completed' }
];
function getCompletedOrdersWithProductInfo(ordersList, productsList) {
const completedOrders = ordersList.filter(order => order.status === 'completed'); //user filter for choose completed status orders
const completedOrdersWithProductInfo = completedOrders.map(order => {
    const product = productsList.find(p => p.id === order.productId);      //base on the completed orders list, use the map to collect the quantity and product name
    return {
        orderId: order.orderId,
        productName: product ? product.name : 'Unknown Product',
        totalPrice: product ? product.price * order.quantity : 0   
    };
});
return completedOrdersWithProductInfo;
}
console.log(getCompletedOrdersWithProductInfo(orders, products));