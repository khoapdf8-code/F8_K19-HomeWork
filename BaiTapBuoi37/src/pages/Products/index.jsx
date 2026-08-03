import { useEffect, useState } from 'react'
import api from '../../plugins/axios'
import HeaderBar from '../../components/HeaderBar/index.jsx'
import ProductCard from '../../components/ProductCard/index.jsx'
import styles from './index.module.css'

function Products() {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    try {
      const { data } = await api.get('products')
      setProducts(data)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <HeaderBar />
      <div className={styles.container}>
      <h1 className={styles.heading}>Tất cả sản phẩm</h1>

      <div className={styles.grid}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
    </>
  )
}

export default Products
