// // // interface MasterI {
// // //     id: number,
// // //     name: string
// // // }

// // // interface ProductVariantI extends MasterI {
// // //     width: number
// // //     height: number
// // //     productId: number
// // // }

// // // interface ProductI extends MasterI {
// // //     price: number
// // //     variant: ProductVariantI[]
// // // }

// // // const color = [
// // //     { id: 1, name: 'red' },
// // //     { id: 2, name: 'green' },
// // //     { id: 3, name: 'blue' },
// // // ]

// // // const size = [
// // //     { id: 1, name: 's' },
// // //     { id: 2, name: 'm' },
// // //     { id: 3, name: 'l' },
// // // ]

// // // function getProduct(): ProductI[] {
// // //     return [
// // //         {
// // //             id: 1,
// // //             name: 'product 1',
// // //             price: 100,
// // //             variant: [
// // //                 { id: 1, name: 'red', width: 1, height: 1, productId: 1 },
// // //                 { id: 2, name: 'green', width: 2, height: 2, productId: 1 },
// // //                 { id: 3, name: 'blue', width: 3, height: 3, productId: 1 },
// // //             ],
// // //         },
// // //         {
// // //             id: 2,
// // //             name: 'product 2',
// // //             price: 200,
// // //             variant: [
// // //                 { id: 4, name: 'red', width: 1, height: 1, productId: 2 },
// // //                 { id: 5, name: 'green', width: 2, height: 2, productId: 2 },
// // //                 { id: 6, name: 'blue', width: 3, height: 3, productId: 2 },
// // //             ],
// // //         },
// // //     ]
// // // }



// // // class Product {
// // //     constructor(private id: number, private name: string, private price: number, private variant: ProductVariantI[]) { }
// // //     getPrice(): number {
// // //         return this.price
// // //     }
// // //     getName(): string {
// // //         return this.name
// // //     }
// // //     getId(): number {
// // //         return this.id
// // //     }
// // //     getVariant(): ProductVariantI[] {
// // //         return this.variant
// // //     }
// // // }


// // // // ==========================================
// // // // 1. TÍNH TRỪU TƯỢNG (ABSTRACTION)
// // // // Sử dụng 'abstract class' để làm khuôn mẫu, không thể tạo instance trực tiếp từ lớp này.
// // // // ==========================================
// // // abstract class Payment {
// // //   // Tính đóng gói: 'amount' chỉ lớp này và lớp con (protected) mới truy cập được
// // //   protected amount: number; 
// // //   public readonly transactionId: string; // Chỉ đọc, không thể sửa sau khi gán

// // //   constructor(amount: number) {
// // //     this.amount = amount;
// // //     this.transactionId = "TXN_" + Math.random().toString(36).substr(2, 9).toUpperCase();
// // //   }

// // //   // Phương thức trừu tượng: Lớp con bắt buộc phải tự triển khai chi tiết
// // //   abstract processPayment(): void;

// // //   // Phương thức thông thường dùng chung cho mọi lớp con
// // //   public printReceipt(): void {
// // //     console.log(`[Mã GD: ${this.transactionId}] Đã nhận thanh toán số tiền: $${this.amount}`);
// // //   }
// // // }

// // // // ==========================================
// // // // 2. TÍNH KẾ THỪA (INHERITANCE)
// // // // Lớp con 'CreditCardPayment' kế thừa từ lớp cha 'Payment' bằng từ khóa 'extends'
// // // // ==========================================
// // // class CreditCardPayment extends Payment {
// // //   // Tính đóng gói: Số thẻ là thông tin nhạy cảm nên để 'private'
// // //   private cardNumber: string; 

// // //   constructor(amount: number, cardNumber: string) {
// // //     super(amount); // super() gọi constructor của lớp cha 'Payment'
// // //     this.cardNumber = cardNumber;
// // //   }

// // //   // Hàm private trợ giúp bên trong class
// // //   private getMaskedCardNumber(): string {
// // //     return `****-****-****-${this.cardNumber.slice(-4)}`;
// // //   }

// // //   // ==========================================
// // //   // 3. TÍNH ĐA HÌNH (POLYMORPHISM)
// // //   // Ghi đè (override) phương thức 'processPayment' của lớp cha
// // //   // ==========================================
// // //   public processPayment(): void {
// // //     console.log(`Đang xử lý thanh toán bằng thẻ ${this.getMaskedCardNumber()}...`);
// // //     console.log(`Thanh toán thành công $${this.amount} qua thẻ tín dụng.`);
// // //   }
// // // }

// // // // Lớp con khác kế thừa từ Payment
// // // class PaypalPayment extends Payment {
// // //   private email: string;

// // //   constructor(amount: number, email: string) {
// // //     super(amount);
// // //     this.email = email;
// // //   }

// // //   // Triển khai đa hình cho Paypal
// // //   public processPayment(): void {
// // //     console.log(`Đang xác thực tài khoản Paypal: ${this.email}...`);
// // //     console.log(`Thanh toán thành công $${this.amount} qua Paypal.`);
// // //   }
// // // }

// // // // ==========================================
// // // // CHẠY CHƯƠNG TRÌNH
// // // // ==========================================

// // // // Tạo danh sách các cổng thanh toán (Kiểu dữ liệu là lớp cha Payment)
// // // const cartPayments: Payment[] = [
// // //   new CreditCardPayment(150, "1234567890123456"),
// // //   new PaypalPayment(80, "khoa@example.com")
// // // ];

// // // // Duyệt qua từng cổng thanh toán và thực thi
// // // cartPayments.forEach((payment) => {
// // //   // Tính đa hình thể hiện ở đây: cùng một hàm 'processPayment()' 
// // //   // nhưng mỗi đối tượng sẽ tự gọi logic xử lý tương ứng của riêng nó.
// // //   payment.processPayment(); 
// // //   payment.printReceipt();
// // //   console.log("-----------------------------------------");
// // // });

// // // ============================================================================
// // // ĐỀ BÀI: MÔ PHỎNG HÀNH VI MUA HÀNG (CUSTOMER, PRODUCT, ORDER)
// // // ============================================================================

// // // 1. LỚP CUSTOMER (KHÁCH HÀNG)
// // class Customer {
// //   constructor(
// //     private readonly id: number,
// //     private name: string,
// //     private address: string
// //   ) {}

// //   // --- GETTER METHODS ---
// //   public getId(): number {
// //     return this.id;
// //   }

// //   public getName(): string {
// //     return this.name;
// //   }

// //   public getAddress(): string {
// //     return this.address;
// //   }
// // }

// // // 2. LỚP PRODUCT (SẢN PHẨM)
// // class Product {
// //   constructor(
// //     private readonly id: number,
// //     private name: string,
// //     private price: number
// //   ) {}

// //   // --- GETTER METHODS ---
// //   public getId(): number {
// //     return this.id;
// //   }

// //   public getName(): string {
// //     return this.name;
// //   }

// //   public getPrice(): number {
// //     return this.price;
// //   }
// // }

// // // 3. LỚP ORDER (ĐƠN HÀNG)
// // class Order {
// //   private static activeOrders: Order[] = [];

// //   constructor(
// //     public readonly id: string,
// //     private customer: Customer,
// //     private products: Product[],
// //     public status: "Pending" | "Created" | "Cancelled" = "Pending"
// //   ) {}

// //   // Hàm tính tổng tiền bằng cách gọi getPrice() của từng Product
// //   public getTotalPrice(): number {
// //     return this.products.reduce((sum, product) => sum + product.getPrice(), 0);
// //   }

// //   // Đặt hàng (sử dụng getName() và getAddress() của Customer)
// //   public createOrder(): void {
// //     this.status = "Created";
// //     Order.activeOrders.push(this);
    
// //     console.log(`⚡ [BE] BẮT ĐẦU XỬ LÝ ĐẶT HÀNG...`);
// //     console.log(`✅ [BE] Đã tạo đơn hàng thành công!`);
// //     console.log(`   - Mã đơn hàng: ${this.id}`);
// //     console.log(`   - Khách hàng: ${this.customer.getName()} (Địa chỉ: ${this.customer.getAddress()})`);
// //     console.log(`   - Chi tiết sản phẩm:`);
// //     this.products.forEach((p, index) => {
// //       console.log(`     ${index + 1}. ${p.getName()} - Giá: $${p.getPrice()}`);
// //     });
// //     console.log(`   - Tổng số tiền cần thanh toán: $${this.getTotalPrice()}`);
// //     console.log(`-----------------------------------------`);
// //   }

// //   // Hủy đơn
// //   public removeOrder(): void {
// //     this.status = "Cancelled";
// //     Order.activeOrders = Order.activeOrders.filter(order => order.id !== this.id);
    
// //     console.log(`🔥 [BE] XỬ LÝ HỦY ĐƠN HÀNG...`);
// //     console.log(`❌ [BE] Đã hủy và loại bỏ đơn hàng mã: ${this.id} của khách hàng: ${this.customer.getName()}`);
// //     console.log(`-----------------------------------------`);
// //   }

// //   // Xem tất cả các đơn hàng
// //   public static showSystemReport(): void {
// //     console.log(`📊 [BE REPORT] HỆ THỐNG ĐƠN HÀNG HIỆN TẠI:`);
// //     if (this.activeOrders.length === 0) {
// //       console.log(`   (Không có đơn hàng nào đang hoạt động trên hệ thống)`);
// //     } else {
// //       this.activeOrders.forEach(order => {
// //         console.log(`   * Đơn ${order.id} | Khách: ${order.customer.getName()} | Tổng: $${order.getTotalPrice()}`);
// //       });
// //     }
// //     console.log(`-----------------------------------------`);
// //   }
// // }

// // // ==========================================
// // // MÔ PHỎNG LUỒNG MUA HÀNG (TEST FLOW)
// // // ==========================================

// // console.log("\n=========================================");
// // console.log("🎬 MÔ PHỎNG CLICK ĐẶT HÀNG TỪ USER INTERFACE");
// // console.log("=========================================\n");

// // // Bước 1: Khởi tạo thông tin khách hàng và sản phẩm
// // const customer1 = new Customer(101, "Đăng Khoa", "123 Đường 3/2, Quận 10, TP.HCM");
// // const customer2 = new Customer(102, "Bảo Trâm", "456 Lê Lợi, Quận 1, TP.HCM");

// // const product1 = new Product(1, "Điện thoại iPhone 15 Pro Max", 1200);
// // const product2 = new Product(2, "Tai nghe AirPods Pro 2", 250);
// // const product3 = new Product(3, "Sạc nhanh Anker 65W", 50);

// // // Bước 2: User 'Đăng Khoa' click đặt hàng
// // const order1 = new Order("ORD-9981", customer1, [product1, product2]);
// // order1.createOrder();

// // // Bước 3: User 'Bảo Trâm' click đặt hàng
// // const order2 = new Order("ORD-2026", customer2, [product3]);
// // order2.createOrder();

// // // Bước 4: Xem báo cáo hệ thống
// // Order.showSystemReport();

// // // Bước 5: Hủy đơn hàng "ORD-9981"
// // order1.removeOrder();

// // // Bước 6: Xem lại báo cáo hệ thống sau khi hủy
// // Order.showSystemReport();




// //Open Closed in SOLID
// const payViolatingOCP = (type: any)=>{
//   if (type ==="credit"){
//     console.log("pay by credit")
//   }
//   else if (type === "paypal"){
//     console.log("pay by paypal")
//   }
//   else if (type === "momo"){
//     console.log("momo payment")

//   }
// }
// //Every time that need to add a new payment method, we must to change the code of this function by add else if --> can 
// //make the old logic break
// //Open
// const cashPayment = () => console.log('thanh toan bang tien mat');
// const bankPayment = () => console.log('chuyen khoan');
// const momoPayment = ()=>{
//   console.log('momo payment')
// }
// //Open
// const paymentRegistry = {
//   cash: cashPayment,
//   bank: bankPayment,
//   momo: momoPayment
// }
// //Close
// const pay = (type: string) => {
//   if (paymentRegistry[type]){
//     paymentRegistry[type]()
//     return;
//   }
//   throw new Error("Payment method not found")
// }

// pay("cash")
// pay("bank")
// pay("momo")


// //Stratergy Pattern
// // 1. Định nghĩa Strategy Interface
// interface PaymentStrategy {
//   pay(amount: number): void;
// }

// // 2. Tạo các Concrete Strategies (Chiến lược cụ thể)
// class CreditCardStrategy implements PaymentStrategy {
//   constructor(private cardNumber: string, private cvv: string) {}

//   pay(amount: number): void {
//     console.log(`Đang thanh toán $${amount} bằng Credit Card (Số thẻ: ****-${this.cardNumber.slice(-4)})`);
//   }
// }

// class MomoStrategy implements PaymentStrategy {
//   constructor(private phoneNumber: string) {}

//   pay(amount: number): void {
//     console.log(`Đang thanh toán $${amount} qua ví MoMo (SĐT: ${this.phoneNumber})`);
//   }
// }

// // 3. Tạo Context (Nơi chứa và thực thi chiến lược)
// class Order {
//   private amount: number;
//   private paymentStrategy?: PaymentStrategy; // Giữ tham chiếu đến chiến lược

//   constructor(amount: number) {
//     this.amount = amount;
//   }

//   // Cho phép thay đổi chiến lược thanh toán linh hoạt vào runtime
//   public setPaymentStrategy(strategy: PaymentStrategy): void {
//     this.paymentStrategy = strategy;
//   }

//   public processOrder(): void {
//     if (!this.paymentStrategy) {
//       console.log("Vui lòng chọn phương thức thanh toán trước!");
//       return;
//     }
//     // Ủy quyền việc thanh toán cho chiến lược đã chọn
//     this.paymentStrategy.pay(this.amount);
//   }
// }

// // === Sử dụng thực tế ===
// const myOrder = new Order(150); // Đơn hàng trị giá $150

// // Người dùng chọn thanh toán bằng Credit Card
// myOrder.setPaymentStrategy(new CreditCardStrategy("1234567890123456", "123"));
// myOrder.processOrder(); 
// // Output: Đang thanh toán $150 bằng Credit Card (Số thẻ: ****-3456)

// // Người dùng đổi ý, chọn MoMo
// myOrder.setPaymentStrategy(new MomoStrategy("0987654321"));
// myOrder.processOrder();
// // Output: Đang thanh toán $150 qua ví MoMo (SĐT: 0987654321)


// // ==========================================
// // Observer Pattern (Publisher - Subscriber)
// // ==========================================

// // 1. Định nghĩa Interface cho Người nhận tin (Observer / Subscriber)
// interface Subscriber {
//   update(productName: string): void;  //hàm nhận thông báo của người đăng ký
//   getName(): string;
// }

// // 2. Lớp Customer (Khách hàng) đóng vai trò là Observer (Subscriber)
// class CustomerObserver implements Subscriber {
//   constructor(private name: string) {}

//   getName(): string {
//     return this.name;
//   }

//   // Nhận thông báo khi có sản phẩm mới
//   update(productName: string): void {
//     console.log(`✉️ [Thông báo gửi tới ${this.name}]: Cửa hàng vừa có sản phẩm mới: "${productName}"!`);
//   }
// }

// // 3. Lớp Store (Cửa hàng) đóng vai trò là Subject (Publisher)
// class StorePublisher {
//   private subscribers: Subscriber[] = [];
//   private products: string[] = [];

//   // Đăng ký nhận tin (Subscribe)
//   public subscribe(customer: Subscriber): void {
//     this.subscribers.push(customer);
//     console.log(`✅ Khách hàng ${customer.getName()} đã đăng ký nhận tin sản phẩm mới.`);
//   }

//   // Hủy đăng ký nhận tin (Unsubscribe)
//   public unsubscribe(customer: Subscriber): void {
//     this.subscribers = this.subscribers.filter(sub => sub !== customer);
//     console.log(`❌ Khách hàng ${customer.getName()} đã hủy đăng ký nhận tin.`);
//   }

//   // Khi cửa hàng nhập sản phẩm mới, tự động gửi thông báo cho tất cả những ai đã đăng ký
//   public addNewProduct(productName: string): void {
//     this.products.push(productName);
//     console.log(`\n🎉 Cửa hàng nhập về sản phẩm mới: "${productName}"! Đang gửi thông báo...`);
//     this.subscribers.forEach(sub => {
//       sub.update(productName);
//     });
//   }
// }

// // === Sử dụng thực tế ===
// console.log("\n=========================================");
// console.log("🎬 MÔ PHỎNG OBSERVER PATTERN");
// console.log("=========================================\n");

// const appleStore = new StorePublisher();

// const customerA = new CustomerObserver("Đăng Khoa (Người cần nhận tin - YAY!)");
// const customerB = new CustomerObserver("Bảo Trâm");
// // Uyển Nhi (Không đăng ký vì sợ spam - sẽ không bị làm phiền như bức hình WTF?!)
// const customerC = new CustomerObserver("Uyển Nhi (Người không đăng ký)"); 

// // Khách hàng A và B đăng ký nhận tin
// appleStore.subscribe(customerA);
// appleStore.subscribe(customerB);

// // Cửa hàng nhập iPhone mới -> chỉ A và B nhận được tin
// appleStore.addNewProduct("iPhone 16 Pro Max");

// // Khách hàng B thấy phiền nên hủy đăng ký nhận tin
// appleStore.unsubscribe(customerB);

// // Cửa hàng nhập tiếp MacBook mới -> chỉ còn A nhận được tin
// appleStore.addNewProduct("MacBook Pro M4");


// // ============================================================================
// // CẢI TIẾN: ĐĂNG KÝ NHẬN TIN THEO TỪNG SẢN PHẨM CỤ THỂ (Topic-based Observer)
// // ============================================================================

// // 1. Lớp Store cải tiến sử dụng Map để chia nhóm người đăng ký theo từng tên sản phẩm
// class TopicStorePublisher {
//   // Key: Tên sản phẩm, Value: Danh sách những người đăng ký sản phẩm đó
//   private subscribers: Map<string, Subscriber[]> = new Map();

//   // Đăng ký nhận tin cho 1 sản phẩm cụ thể
//   public subscribe(productName: string, customer: Subscriber): void {
//     if (!this.subscribers.has(productName)) {
//       this.subscribers.set(productName, []);
//     }
//     this.subscribers.get(productName)!.push(customer);
//     console.log(`✅ Khách hàng ${customer.getName()} đăng ký nhận tin khi "${productName}" có hàng.`);
//   }

//   // Hủy đăng ký cho 1 sản phẩm cụ thể
//   public unsubscribe(productName: string, customer: Subscriber): void {
//     if (this.subscribers.has(productName)) {
//       const list = this.subscribers.get(productName)!;
//       this.subscribers.set(productName, list.filter(sub => sub !== customer));
//       console.log(`❌ Khách hàng ${customer.getName()} hủy đăng ký nhận tin của "${productName}".`);
//     }
//   }

//   // Khi một sản phẩm cụ thể có hàng, chỉ thông báo cho những ai quan tâm sản phẩm đó
//   public notifyProductArrival(productName: string): void {
//     console.log(`\n🔔 [Hệ thống] Phát hiện sản phẩm "${productName}" đã có hàng!`);
//     const list = this.subscribers.get(productName);
    
//     if (list && list.length > 0) {
//       list.forEach(sub => {
//         sub.update(productName);
//       });
//     } else {
//       console.log(`   (Không có khách hàng nào đăng ký quan tâm sản phẩm "${productName}")`);
//     }
//   }
// }

// // === Sử dụng thực tế ===
// console.log("\n=========================================");
// console.log("🎬 MÔ PHỎNG TOPIC-BASED OBSERVER PATTERN");
// console.log("=========================================\n");

// const dynamicStore = new TopicStorePublisher();

// const customerX = new CustomerObserver("Đăng Khoa");
// const customerY = new CustomerObserver("Bảo Trâm");

// // Đăng Khoa chỉ quan tâm iPhone 16
// dynamicStore.subscribe("iPhone 16", customerX);

// // Bảo Trâm quan tâm cả iPhone 16 và iPad Pro
// dynamicStore.subscribe("iPhone 16", customerY);
// dynamicStore.subscribe("iPad Pro", customerY);

// // Cửa hàng nhập về iPhone 16 -> Cả Khoa và Trâm đều nhận tin
// dynamicStore.notifyProductArrival("iPhone 16");

// // Cửa hàng nhập về iPad Pro -> Chỉ Trâm nhận tin (Khoa không bị làm phiền)
// dynamicStore.notifyProductArrival("iPad Pro");

// // Cửa hàng nhập về MacBook Pro M4 -> Không ai nhận tin vì không ai đăng ký sản phẩm này
// dynamicStore.notifyProductArrival("MacBook Pro M4");

