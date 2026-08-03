# BaiTapBuoi37 — Tổng quan project

## 📁 Cây thư mục

```
BaiTapBuoi37/
├── index.html                    ← Entry point HTML, mount <div id="root">
├── package.json                  ← Khai báo dependencies (react, react-router, axios)
├── vite.config.js                ← Config Vite dev server
│
└── src/
    ├── main.jsx                  ← ⭐ Điểm vào JS: config Router, render app
    ├── index.css                 ← CSS reset toàn cục (margin, font, bg)
    │
    ├── plugins/
    │   └── axios.js              ← Axios instance, baseURL → fakestoreapi.com
    │
    ├── components/
    │   ├── HeaderBar/
    │   │   ├── index.jsx         ← Component header: logo, nav, cart
    │   │   └── index.module.css  ← CSS Module cho header
    │   │
    │   └── ProductCard/
    │       ├── index.jsx         ← Component card sản phẩm (dùng lại ở 2 trang)
    │       └── index.module.css  ← CSS Module cho card
    │
    └── pages/
        ├── Products/
        │   ├── index.jsx         ← Trang danh sách: fetch all → render grid cards
        │   └── index.module.css  ← CSS Module cho trang danh sách
        │
        └── ProductDetail/
            ├── index.jsx         ← Trang chi tiết: fetch 1 SP + random SP nổi bật
            └── index.module.css  ← CSS Module cho trang chi tiết
```

---

## 🔍 Chức năng từng file

### `main.jsx` — Điểm vào + Router

```jsx
const router = createBrowserRouter([
  { path: "/",             element: <Products /> },
  { path: "/products/:id", element: <ProductDetail /> },
])
```

- Định nghĩa **2 routes**: trang danh sách (`/`) và trang chi tiết (`/products/:id`)
- `:id` là **dynamic param** — URL thay đổi theo từng sản phẩm

---

### `plugins/axios.js` — Axios instance

```jsx
const api = axios.create({ baseURL: 'https://fakestoreapi.com' })
```

- Tạo **1 instance duy nhất**, tất cả API call đều đi qua đây
- Lợi ích: nếu đổi URL API → chỉ sửa 1 chỗ

---

### `components/HeaderBar/index.jsx` — Header dùng chung

- Nhận prop `total` (số SP trong giỏ)
- Dùng `<Link to="/">` để chuyển trang không reload (SPA)
- **Tách riêng component** → dùng lại ở cả 2 trang

---

### `components/ProductCard/index.jsx` — Card sản phẩm

```jsx
const ProductCard = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`}>
      {/* image, title, price, rating */}
    </Link>
  )
}
```

- Nhận prop `product` (object từ API)
- Bọc trong `<Link>` → click chuyển đến trang chi tiết
- **Reusable**: dùng ở trang danh sách + dùng ở phần "Sản phẩm nổi bật"

---

### `pages/Products/index.jsx` — Trang danh sách

```jsx
const [products, setProducts] = useState([])

useEffect(() => {
  api.get('products').then(res => setProducts(res.data))
}, [])
```

- `useState` lưu mảng sản phẩm
- `useEffect(cb, [])` → gọi API **1 lần** khi component mount
- `.map()` render grid `ProductCard`

---

### `pages/ProductDetail/index.jsx` — Trang chi tiết

```jsx
const { id } = useParams()

useEffect(() => {
  Promise.all([
    api.get(`products/${id}`),    // Chi tiết SP
    api.get('products')           // Tất cả SP (để random nổi bật)
  ])
}, [id])
```

- `useParams()` lấy `id` từ URL (`/products/3` → id = "3")
- `Promise.all` gọi **2 API song song** → nhanh hơn gọi tuần tự
- Random 4-8 SP nổi bật: filter bỏ SP đang xem → shuffle → slice
- `[id]` trong deps → khi click SP nổi bật, `id` đổi → re-fetch data mới

---

## 🧠 Bản chất cần nắm

### 1. Tách Component = Tái sử dụng

```
ProductCard  ←  dùng ở Products (danh sách)
             ←  dùng ở ProductDetail (sản phẩm nổi bật)

HeaderBar    ←  dùng ở Products
             ←  dùng ở ProductDetail
```

> **Bản chất**: Viết 1 lần, dùng nhiều nơi. Component nhận **props** để hiển thị dữ liệu khác nhau.
> Giống hàm trong JS: định nghĩa 1 lần, gọi nhiều lần với argument khác nhau.

---

### 2. React Router = SPA (Single Page Application)

```
URL: /              →  render <Products />
URL: /products/5    →  render <ProductDetail />
```

> **Bản chất**: Không reload trang. React Router **đổi component** hiển thị dựa trên URL.
> `<Link>` thay cho `<a href>` — chuyển route mà không request HTML mới từ server.

---

### 3. Dynamic Route + useParams

```
path: "/products/:id"     ← :id là placeholder
useParams() → { id: "5" } ← lấy giá trị thực từ URL
```

> **Bản chất**: 1 route definition phục vụ 20 sản phẩm. Không cần viết 20 routes.
> `:id` là **tham số động** — giống parameter của function.

---

### 4. useEffect + API = Side Effect

```
useEffect(() => {
  api.get(...)  // Side effect: gọi mạng
}, [id])        // Deps: chạy lại khi id thay đổi
```

> **Bản chất**: React render UI = pure function (input → output). Nhưng gọi API là **side effect** (tác dụng phụ, không thuộc render).
> `useEffect` là nơi đặt side effect. Deps array kiểm soát **khi nào** chạy lại.

| Deps | Hành vi |
|------|---------|
| `[]` | Chạy 1 lần khi mount |
| `[id]` | Chạy lại mỗi khi `id` thay đổi |
| không có | Chạy mỗi lần render (tránh!) |

---

### 5. CSS Modules = Scope CSS

```jsx
import styles from './index.module.css'
<div className={styles.card}>  // → class="card_abc123"
```

> **Bản chất**: Mỗi component có CSS riêng, **không đụng** CSS component khác.
> Vite tự thêm hash vào class name → tránh xung đột.

---

### 6. Axios Instance = Cấu hình tập trung

```jsx
const api = axios.create({ baseURL: '...' })
// Mọi nơi: api.get('products') thay vì axios.get('https://full-url/products')
```

> **Bản chất**: Giống việc set biến môi trường. Đổi API server → sửa 1 file duy nhất.

---

## 🔗 Luồng hoạt động

```
User mở /
  → main.jsx match route "/"
  → render <Products />
  → useEffect gọi api.get('products')
  → setState → re-render grid ProductCard

User click 1 card
  → <Link to="/products/3">
  → main.jsx match route "/products/:id"
  → render <ProductDetail />
  → useParams() → id = "3"
  → useEffect gọi Promise.all([detail, allProducts])
  → setState → render chi tiết + random SP nổi bật

User click SP nổi bật (id=7)
  → <Link to="/products/7">
  → id thay đổi: "3" → "7"
  → useEffect deps [id] detect → re-fetch data
  → render chi tiết SP mới + random SP nổi bật mới
```
