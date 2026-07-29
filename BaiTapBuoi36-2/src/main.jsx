import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <App />
)
// Cốt lõi vấn đề của html gốc 6 product card là 6 block HTML copy paste y hệt nhau, khi muốn thêm 1 sản phẩm + thêm 30 dòng, muốn sửa layout card sửa 6 chỗ
// React giải quyết bằng gì?
//Dữ liệu thay vì hardcode trong html, React tách ra mảng JS
//Giao diện thay vì copy paste 6 lần thì viết 1 lần template JSX + map()
// Khi thêm sản phẩm thì copy 30 dóng html và sửa text, nhờ React ta chỉ thêm 1 obj vào mảng, UI tự render
//Cần sửa layout card chỉ sửa 1 chỗ duy nhất 
//UI = f(data) - giao diện là hàm của dữ liệu