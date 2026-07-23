


class Product {
  id: string;
  name: string;
  price: number;
  stock: number;

  constructor(id: string, name: string, price: number, stock: number) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.stock = stock;
  }

  increaseStock(quantity: number): void {
    this.stock += quantity;
  }

  decreaseStock(quantity: number): void {
    if (this.stock >= quantity) {
      this.stock -= quantity;
    } else {
      console.log(`Không đủ hàng trong kho cho sản phẩm ${this.name}`);
    }
  }

  toString(): string {
    return `Product [ID: ${this.id}, Name: ${this.name}, Price: ${this.price} VNĐ, Stock: ${this.stock}]`;
  }
}


class ProductService {
  products: Product[] = [];

  addProduct(product: Product): void {
    this.products.push(product);
  }

  updateProduct(id: string, data: any): void {
    const product = this.findById(id);
    if (product) {
      if (data.name !== undefined) product.name = data.name;
      if (data.price !== undefined) product.price = data.price;
      if (data.stock !== undefined) product.stock = data.stock;
    }
  }

  deleteProduct(id: string): void {
    const index = this.products.findIndex(p => p.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  findById(id: string): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  findByName(keyword: string): Product[] {
    return this.products.filter(p => p.name.toLowerCase().includes(keyword.toLowerCase()));
  }

  getAllProducts(): Product[] {
    return this.products;
  }

  printProducts(): void {
    console.log("\n--- DANH SÁCH SẢN PHẨM ---");
    for (const product of this.products) {
      console.log(product.toString());
    }
  }
}


class Customer {
  id: string;
  name: string;
  phone: string;
  address: string;

  constructor(id: string, name: string, phone: string, address: string) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.address = address;
  }

  updatePhone(phone: string): void {
    this.phone = phone;
  }

  updateAddress(address: string): void {
    this.address = address;
  }

  toString(): string {
    return `Customer [ID: ${this.id}, Name: ${this.name}, Phone: ${this.phone}, Address: ${this.address}]`;
  }
}


class CustomerService {
  customers: Customer[] = [];

  addCustomer(customer: Customer): void {
    this.customers.push(customer);
  }

  updateCustomer(id: string, data: any): void {
    const customer = this.findById(id);
    if (customer) {
      if (data.name !== undefined) customer.name = data.name;
      if (data.phone !== undefined) customer.phone = data.phone;
      if (data.address !== undefined) customer.address = data.address;
    }
  }

  deleteCustomer(id: string): void {
    const index = this.customers.findIndex(c => c.id === id);
    if (index !== -1) {
      this.customers.splice(index, 1);
    }
  }

  findById(id: string): Customer | undefined {
    return this.customers.find(c => c.id === id);
  }

  findByPhone(phone: string): Customer | undefined {
    return this.customers.find(c => c.phone === phone);
  }

  getAllCustomers(): Customer[] {
    return this.customers;
  }

  printCustomers(): void {
    console.log("\n--- DANH SÁCH KHÁCH HÀNG ---");
    for (const customer of this.customers) {
      console.log(customer.toString());
    }
  }
}

class OrderItem {
  product: Product;
  quantity: number;
  price: number;

  constructor(product: Product, quantity: number) {
    this.product = product;
    this.quantity = quantity;
    this.price = product.price; // lưu giá lúc mua
  }

  getTotal(): number {
    return this.price * this.quantity;
  }
}


class Order {
  id: string;
  customer: Customer;
  items: OrderItem[] = [];
  createdAt: Date;
  status: string; // new, paid, cancelled

  constructor(id: string, customer: Customer) {
    this.id = id;
    this.customer = customer;
    this.createdAt = new Date();
    this.status = "NEW";
  }

  addItem(item: OrderItem): void {
    // kiểm tra trùng thì cộng dồn số lượng
    const existingItem = this.items.find(i => i.product.id === item.product.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.items.push(item);
    }
  }

  removeItem(productId: string): void {
    const index = this.items.findIndex(i => i.product.id === productId);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  calculateTotal(): number {
    let total = 0;
    for (const item of this.items) {
      total += item.getTotal();
    }
    return total;
  }

  printInvoice(): void {
    console.log("\n=================================");
    console.log(`HÓA ĐƠN ĐẶT HÀNG - MÃ ĐƠN: ${this.id}`);
    console.log(`Trạng thái: ${this.status}`);
    console.log(`Ngày tạo: ${this.createdAt.toLocaleString("vi-VN")}`);
    console.log(`Khách hàng: ${this.customer.name} - SĐT: ${this.customer.phone}`);
    console.log(`Địa chỉ: ${this.customer.address}`);
    console.log("---------------------------------");
    console.log("Chi tiết sản phẩm:");
    for (const item of this.items) {
      console.log(`- ${item.product.name} x ${item.quantity} | Đơn giá: ${item.price} VNĐ | Thành tiền: ${item.getTotal()} VNĐ`);
    }
    console.log("---------------------------------");
    console.log(`TỔNG TIỀN: ${this.calculateTotal()} VNĐ`);
    console.log("=================================\n");
  }
}


class OrderService {
  orders: Order[] = [];
  productService: ProductService;

  constructor(productService: ProductService) {
    this.productService = productService;
  }

  createOrder(customer: Customer): Order {
    const id = "ORD" + (this.orders.length + 1);
    const order = new Order(id, customer);
    this.orders.push(order);
    return order;
  }

  addProduct(orderId: string, productId: string, quantity: number): void {
    const order = this.findOrder(orderId);
    const product = this.productService.findById(productId);

    if (order && product) {
      if (product.stock >= quantity) {
        product.decreaseStock(quantity);
        const item = new OrderItem(product, quantity);
        order.addItem(item);
        console.log(`Đã thêm ${quantity} ${product.name} vào đơn hàng ${orderId}`);
      } else {
        console.log(`Sản phẩm ${product.name} không đủ số lượng trong kho!`);
      }
    } else {
      console.log("Không tìm thấy đơn hàng hoặc sản phẩm!");
    }
  }

  removeProduct(orderId: string, productId: string): void {
    const order = this.findOrder(orderId);
    if (order) {
      const item = order.items.find(i => i.product.id === productId);
      if (item) {
        item.product.increaseStock(item.quantity);
        order.removeItem(productId);
        console.log(`Đã xóa sản phẩm ${item.product.name} khỏi đơn hàng ${orderId}`);
      }
    }
  }

  checkout(orderId: string): void {
    const order = this.findOrder(orderId);
    if (order) {
      if (order.status === "NEW") {
        order.status = "PAID";
        console.log(`Thanh toán thành công đơn hàng ${orderId}!`);
      } else {
        console.log(`Đơn hàng ${orderId} không thể thanh toán!`);
      }
    }
  }

  cancelOrder(orderId: string): void {
    const order = this.findOrder(orderId);
    if (order) {
      if (order.status !== "CANCELLED") {
        // trả lại số lượng vào kho
        for (const item of order.items) {
          item.product.increaseStock(item.quantity);
        }
        order.status = "CANCELLED";
        console.log(`Đã hủy đơn hàng ${orderId}`);
      }
    }
  }

  findOrder(orderId: string): Order | undefined {
    return this.orders.find(o => o.id === orderId);
  }

  getOrders(): Order[] {
    return this.orders;
  }

  printOrders(): void {
    console.log("\n--- DANH SÁCH TẤT CẢ ĐƠN HÀNG ---");
    for (const order of this.orders) {
      order.printInvoice();
    }
  }
}

