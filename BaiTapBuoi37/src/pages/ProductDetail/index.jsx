import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router'
import api from '../../plugins/axios'
import HeaderBar from '../../components/HeaderBar/index.jsx'
import ProductCard from '../../components/ProductCard/index.jsx'
import styles from './index.module.css'

function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [featuredProducts, setFeaturedProducts] = useState([])

  const getData = async () => {
    try {
      const [productRes, allRes] = await Promise.all([
        api.get(`products/${id}`),
        api.get('products')
      ])

      setProduct(productRes.data)

      // Lọc bỏ sản phẩm đang xem, sau đó random 4-8 sản phẩm
      const others = allRes.data.filter((p) => String(p.id) !== String(id))
      const count = Math.floor(Math.random() * 5) + 4 // random 4-8
      const shuffled = others.sort(() => 0.5 - Math.random())
      setFeaturedProducts(shuffled.slice(0, count))
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getData()
  }, [id])

  if (!product) return null

  return (
    <>
      <HeaderBar />
      <div className={styles.container}>
      <Link to="/" className={styles.backLink}>
        ← Quay lại danh sách
      </Link>

      <div className={styles.detail}>
        <div className={styles.imageSection}>
          <img src={product.image} alt={product.title} />
        </div>

        <div className={styles.infoSection}>
          <span className={styles.category}>{product.category}</span>

          <h1 className={styles.title}>{product.title}</h1>

          <div className={styles.ratingRow}>
            <span className={styles.stars}>⭐</span>
            <span className={styles.rateText}>{product.rating.rate}</span>
            <span className={styles.countText}>({product.rating.count} đánh giá)</span>
          </div>

          <div className={styles.price}>${product.price}</div>

          <p className={styles.description}>{product.description}</p>

          <button className={styles.addToCartBtn}>Thêm vào giỏ hàng</button>
        </div>
      </div>

      {/* Sản phẩm nổi bật */}
      <div className={styles.featuredSection}>
        <h2 className={styles.featuredTitle}>Sản phẩm nổi bật</h2>

        <div className={styles.featuredGrid}>
          {featuredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
      </div>
    </>
  )
}

export default ProductDetail
