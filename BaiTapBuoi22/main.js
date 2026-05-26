const invoiceData = {
    meta: {
    invoiceNo: "WM-20260521-0001",
    saleDate: "2026/05/21",
    currency: "VND",
    paymentMethod: "Cash" // Tiền mặt / Chuyển khoản...
  },


  seller: {
    name: "WinMark 2 ba trung",
    address: "2 Ba trung - HN",
    phone: "012345678",
    representative: "Đại diện WinMark"
  },


  customer: {
    name: "Nguyen Van A",
    age: 20,
    address: "Ha Dong Ha noi"
  },

  items: [
    {
      no: 1,
      name: "Ao Thun",
      size: "XL",
      quantity: 1,
      price: 200000
    },
    {
      no: 2,
      name: "Ao Thun",
      size: "XL",
      quantity: 1,
      price: 200000
    }
  ],

  // 5. Chương trình ưu đãi / Giảm giá (Promotion & Discount)
  promotion: {
    description: "Khuyen mai 50% chi KH than thiet",
    discountPercent: 50
  }

};

//Helper function for formartting
function formatCurrency(amount) {
    return amount.toLocaleString('vi-VN') + ' đ';
}

//Helper function for calculating invoice total
function calculateInvoiceTotals(itemsList, discountPercent) {
    let subtotal = 0;
    
    for (let i = 0; i < itemsList.length; i++) {
        subtotal += itemsList[i].quantity * itemsList[i].price;
    }

    const discountAmount = subtotal * (discountPercent / 100);
    const finalTotal = subtotal - discountAmount;

    return { subtotal, discountAmount, finalTotal };
}

//main function
function renderInvoiceDOM(data) {
    const rootElement = document.getElementById('root');
    if (!rootElement) return;

    // Calculate financial data
    const { subtotal, discountAmount, finalTotal } = calculateInvoiceTotals(data.items, data.promotion.discountPercent);

    // Generate Items HTML rows
    let itemsHtml = '';
    for (let i = 0; i < data.items.length; i++) {
        const item = data.items[i];
        const itemTotal = item.quantity * item.price;
        itemsHtml += `
            <tr>
                <td>${item.no}</td>
                <td>${item.name}</td>
                <td>${item.size}</td>
                <td>${item.quantity}</td>
                <td>${formatCurrency(item.price)}</td>
                <td>${formatCurrency(itemTotal)}</td>
            </tr>
        `;
    }

    // Construct the entire Invoice Layout
    const invoiceHtml = `
        <div class="invoice-container">
            <div class="header">
                <div>
                    <div class="brand-name">
                        <span class="brand-logo">WM</span> ${data.seller.name}
                    </div>
                    <div class="brand-slogan">Cung cấp sản phẩm thời trang cao cấp & thiết kế độc quyền.</div>
                </div>
                <div class="meta-info">
                    <div class="invoice-badge">HÓA ĐƠN BÁN LẺ</div>
                    <div class="meta-text">Mã số: <strong>${data.meta.invoiceNo}</strong></div>
                    <div class="meta-text">Ngày bán: ${data.meta.saleDate}</div>
                </div>
            </div>

            <div class="info-section">
                <div>
                    <div class="info-title">ĐƠN VỊ BÁN HÀNG (SELLER)</div>
                    <div class="info-name">${data.seller.name}</div>
                    <div class="info-detail">📍 ${data.seller.address}</div>
                    <div class="info-detail">📞 ${data.seller.phone}</div>
                </div>
                <div>
                    <div class="info-title">KHÁCH HÀNG (BUYER)</div>
                    <div class="info-name">${data.customer.name}</div>
                    <div class="info-detail">Tuổi: ${data.customer.age}</div>
                    <div class="info-detail">🏠 ${data.customer.address}</div>
                </div>
            </div>

            <table class="invoice-table">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>TÊN SẢN PHẨM</th>
                        <th>SIZE</th>
                        <th>SL</th>
                        <th>ĐƠN GIÁ</th>
                        <th>THÀNH TIỀN</th>
                    </tr>
                </thead>
                <tbody>
                    ${itemsHtml}
                </tbody>
            </table>

            <div class="footer">
                <div class="promotion-box">
                    <div class="promo-title">✓ KHUYẾN MÃI / TRỢ GIÁ</div>
                    <div class="promo-desc">${data.promotion.description}</div>
                </div>
                <div class="summary-box">
                    <div class="summary-row">
                        <span>Cộng tiền hàng:</span>
                        <span>${formatCurrency(subtotal)}</span>
                    </div>
                    <div class="summary-row discount">
                        <span>Khấu trừ giảm giá:</span>
                        <span>-${formatCurrency(discountAmount)}</span>
                    </div>
                    <div class="summary-row total">
                        <span>Tổng thanh toán:</span>
                        <span>${formatCurrency(finalTotal)}</span>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Inject into DOM
    rootElement.innerHTML = invoiceHtml;
}

// Execute render
renderInvoiceDOM(invoiceData);