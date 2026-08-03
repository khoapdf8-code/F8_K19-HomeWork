import { Link } from 'react-router'
import styles from './index.module.css'

const HeaderBar = ({ total = 0 }) => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          Shop<span className={styles.logoDot}>.</span>
        </Link>

        <nav className={styles.nav}>
          <Link to="/" className={styles.navLink}>Home</Link>
          <Link to="/" className={styles.navLink}>Products</Link>
          <Link to="/" className={styles.navLink}>Categories</Link>
        </nav>

        <div className={styles.cartBtn}>
          <span className={styles.cartIcon}>🛒</span>
          Cart
          {total > 0 && (
            <span className={styles.cartBadge}>{total}</span>
          )}
        </div>
      </div>
    </header>
  )
}

export default HeaderBar
