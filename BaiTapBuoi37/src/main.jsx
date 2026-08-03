import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Products from './pages/Products/index.jsx'
import ProductDetail from './pages/ProductDetail/index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Products />,
  },
  {
    path: '/products/:id',
    element: <ProductDetail />,
  },
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
