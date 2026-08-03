import { Link } from 'react-router'
import styles from './index.module.css'

const ProductCard = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`} className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={product.image} alt={product.title} />
      </div>

      <div className={styles.info}>
        <div className={styles.category}>{product.category}</div>

        <h3 className={styles.title}>{product.title}</h3>

        <div className={styles.bottom}>
          <span className={styles.price}>${product.price}</span>

          <span className={styles.rating}>
            <span className={styles.ratingStar}>⭐</span> {product.rating.rate} ({product.rating.count})
          </span>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
