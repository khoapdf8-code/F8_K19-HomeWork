import { Link, useLocation } from 'react-router-dom'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import SearchIcon from '@mui/icons-material/Search'
import MenuIcon from '@mui/icons-material/Menu'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import styles from './index.module.css'

function Header({ showSearchBar = false }) {
  const location = useLocation()

  const navItems = [
    { label: 'Việc làm', path: '/viec-lam', hasDropdown: true },
    { label: 'Tạo CV', path: '/mau-cv', hasDropdown: true },
    { label: 'Công ty', path: '/cong-ty', hasDropdown: false },
  ]

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          {/* Left: Logo + Nav */}
          <div className={styles.leftGroup}>
            <Link to="/" className={styles.logo}>
              <div>
                <span>
                  <span className={styles.logoTop}>top</span>
                  <span className={styles.logoCV}>cv</span>
                </span>
                <span className={styles.logoSub}>Tiếp lợi thế, nối thành công</span>
              </div>
            </Link>

            <nav className={styles.nav}>
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`${styles.navItem} ${location.pathname.startsWith(item.path) ? styles.active : ''}`}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <KeyboardArrowDownIcon className={styles.navIcon} />
                  )}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right: Auth buttons */}
          <div className={styles.rightGroup}>
            <Link to="/sign-up" className={styles.btnRegister}>
              Đăng ký
            </Link>
            <Link to="/login" className={styles.btnLogin}>
              Đăng nhập
            </Link>
            <Link to="/login" className={styles.btnEmployer}>
              Đăng tuyển &amp; tìm hồ sơ
            </Link>
          </div>
        </div>
      </header>

      {/* Search bar */}
      {showSearchBar && (
        <div className={styles.searchBarWrapper}>
          <div className={styles.searchBarInner}>
            <button className={styles.searchCategory}>
              <MenuIcon style={{ fontSize: 18 }} />
              Danh mục Nghề
              <KeyboardArrowDownIcon style={{ fontSize: 18 }} />
            </button>
            <input
              className={styles.searchInput}
              placeholder="Vị trí tuyển dụng, tên công ty"
              type="text"
            />
            <button className={styles.searchLocation}>
              <LocationOnOutlinedIcon style={{ fontSize: 18 }} />
              Địa điểm
              <KeyboardArrowDownIcon style={{ fontSize: 18 }} />
            </button>
            <button className={styles.searchBtn}>
              <SearchIcon style={{ fontSize: 18 }} />
              Tìm kiếm
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
