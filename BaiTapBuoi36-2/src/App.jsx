import xiaomiImg from './assets/xiaomi.webp'
import oppoImg from './assets/oppo.webp'

// === DỮ LIỆU: Khai báo bằng biến const (giống buổi học) ===

const categories = [
  { id: 1, name: 'Dien Thoai Choi Game', img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:96:96/q:90/plain/https://cellphones.com.vn/media/wysiwyg/Web/icon/mobile-gamning.png' },
  { id: 2, name: 'Dien Thoai AI Camera', img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:96:96/q:90/plain/https://cellphones.com.vn/media/wysiwyg/Web/icon/mobile-gamning.png' },
  { id: 3, name: 'Dien Thoai Pin Khung', img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:96:96/q:90/plain/https://cellphones.com.vn/media/wysiwyg/Web/icon/mobile-gamning.png' },
  { id: 4, name: 'Dien Thoai Nho Gon', img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:96:96/q:90/plain/https://cellphones.com.vn/media/wysiwyg/Web/icon/mobile-gamning.png' },
  { id: 5, name: 'Dien Thoai Chup Anh', img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:96:96/q:90/plain/https://cellphones.com.vn/media/wysiwyg/Web/icon/mobile-gamning.png' },
  { id: 6, name: 'Dien Thoai Man Lon', img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:96:96/q:90/plain/https://cellphones.com.vn/media/wysiwyg/Web/icon/mobile-gamning.png' },
  { id: 7, name: 'Dien Thoai Bao Mat', img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:96:96/q:90/plain/https://cellphones.com.vn/media/wysiwyg/Web/icon/mobile-gamning.png' },
  { id: 8, name: 'Dien Thoai Gia Re', img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:96:96/q:90/plain/https://cellphones.com.vn/media/wysiwyg/Web/icon/mobile-gamning.png' },
  { id: 9, name: 'Dien Thoai 5G', img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:96:96/q:90/plain/https://cellphones.com.vn/media/wysiwyg/Web/icon/mobile-gamning.png' },
  { id: 10, name: 'Dien Thoai Gap', img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:96:96/q:90/plain/https://cellphones.com.vn/media/wysiwyg/Web/icon/mobile-gamning.png' },
  { id: 11, name: 'Dien Thoai Cao Cap', img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:96:96/q:90/plain/https://cellphones.com.vn/media/wysiwyg/Web/icon/mobile-gamning.png' },
]

const brands = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Samsung' },
  { id: 3, name: 'Xiaomi' },
  { id: 4, name: 'Oppo' },
]

const products = [
  {
    id: 1,
    name: 'Samsung Galaxy S26 Ultra 12GB 256GB',
    image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:300:300/q:100/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-s26-ultra-1.jpg',
    price: '33.990.000đ',
    originalPrice: '36.990.000đ',
    discount: 'Giảm 8%',
    installment: 'Trả góp 0%',
    memberPromo: 'Smember giảm đến 1.000.000đ',
    studentPromo: 'SStudent giảm đến 12.000.000đ',
    deliveryPromo: 'Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng',
    rating: 6,
  },
  {
    id: 2,
    name: 'iPhone 17 Pro Max 256GB',
    image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:300:300/q:100/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-17-pro-max_3.jpg',
    price: '38.490.000đ',
    originalPrice: '41.990.000đ',
    discount: 'Giảm 8%',
    installment: 'Trả góp 0%',
    memberPromo: 'Smember giảm đến 1.500.000đ',
    studentPromo: 'SStudent giảm đến 15.000.000đ',
    deliveryPromo: 'Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng',
    rating: 5,
  },
  {
    id: 3,
    name: 'Xiaomi 15 Ultra 16GB 512GB',
    image: xiaomiImg,
    price: '27.990.000đ',
    originalPrice: '29.990.000đ',
    discount: 'Giảm 7%',
    installment: 'Trả góp 0%',
    memberPromo: 'Smember giảm đến 800.000đ',
    studentPromo: 'SStudent giảm đến 8.000.000đ',
    deliveryPromo: 'Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng',
    rating: 4,
  },
  {
    id: 4,
    name: 'OPPO Find X8 Ultra 16GB 512GB',
    image: oppoImg,
    price: '29.990.000đ',
    originalPrice: '31.990.000đ',
    discount: 'Giảm 6%',
    installment: 'Trả góp 0%',
    memberPromo: 'Smember giảm đến 900.000đ',
    studentPromo: 'SStudent giảm đến 10.000.000đ',
    deliveryPromo: 'Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng',
    rating: 5,
  },
  {
    id: 5,
    name: 'Samsung Galaxy Z Fold 7 12GB 256GB',
    image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:300:300/q:100/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-s26-ultra-1.jpg',
    price: '45.990.000đ',
    originalPrice: '49.990.000đ',
    discount: 'Giảm 8%',
    installment: 'Trả góp 0%',
    memberPromo: 'Smember giảm đến 2.000.000đ',
    studentPromo: 'SStudent giảm đến 20.000.000đ',
    deliveryPromo: 'Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng',
    rating: 6,
  },
  {
    id: 6,
    name: 'iPhone 17 Air 256GB',
    image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:300:300/q:100/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-17-pro-max_3.jpg',
    price: '24.990.000đ',
    originalPrice: '27.490.000đ',
    discount: 'Giảm 9%',
    installment: 'Trả góp 0%',
    memberPromo: 'Smember giảm đến 700.000đ',
    studentPromo: 'SStudent giảm đến 7.000.000đ',
    deliveryPromo: 'Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng',
    rating: 4,
  },
]

// === COMPONENT CHÍNH (giống pattern App() trong buổi học) ===

function App() {
  return (
    <main>
      <div className="container">
        <input hidden type="radio" id="phone-tab" name="tab-toggle" defaultChecked />
        <input hidden type="radio" id="tab-tab" name="tab-toggle" />

        <div className="tab-bar">
          <label className="tab" htmlFor="phone-tab">Dien Thoai</label>
          <label className="tab" htmlFor="tab-tab">May Tinh Bang</label>
        </div>

        <div className="product-list">
          <div className="categories">
            {categories.map((cat) => (
              <div className="category" key={cat.id}>
                <img className="category-img" src={cat.img} />
                <div className="category-name">{cat.name}</div>
              </div>
            ))}
          </div>

          <div className="brands">
            {brands.map((b) => (
              <div className="brand" key={b.id}>{b.name}</div>
            ))}
          </div>

          <div className="products">
            {products.map((p) => (
              <div className="product" key={p.id}>
                <div className="product-discount">{p.discount}</div>
                <div className="product-installment">{p.installment}</div>

                <div className="product-img">
                  <img width="100%" src={p.image} alt={p.name} />
                </div>

                <h3 className="product-name">{p.name}</h3>

                <div className="product-price-container">
                  <span>{p.price}</span>
                  <span>{p.originalPrice}</span>
                </div>

                <div className="product-promotion">
                  <div className="product-promotion-for-member">{p.memberPromo}</div>
                  <div className="product-promotion-for-student">{p.studentPromo}</div>
                  <div className="product-promotion-for-delivery">{p.deliveryPromo}</div>
                </div>

                <div className="product-meta">
                  <div className="product-meta-rating">
                    <span className="mdi mdi-star">{p.rating}</span>
                  </div>
                  <div className="product-meta-favorite">
                    <span className="mdi mdi-heart">Yêu thích</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
