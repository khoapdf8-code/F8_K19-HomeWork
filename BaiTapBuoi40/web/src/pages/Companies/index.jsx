import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined'
import BusinessIcon from '@mui/icons-material/Business'
import styles from './index.module.css'

const mockCompanies = [
  {
    id: 'comp-001',
    name: 'CÔNG TY CỔ PHẦN CÔNG NGHỆ TOPCV VIỆT NAM',
    size: '500-1000 nhân viên',
    location: 'Hà Nội',
    field: 'Công nghệ Thông tin',
    tags: ['IT', 'Tuyển dụng', 'SaaS'],
    logo: '',
    jobCount: 12,
  },
  {
    id: 'comp-002',
    name: 'CÔNG TY TNHH GIẢI PHÁP PHẦN MỀM GLOBAL LOGISTICS',
    size: '100-499 nhân viên',
    location: 'TP. Hồ Chí Minh',
    field: 'Logistics',
    tags: ['Logistics', 'Phần mềm'],
    logo: '',
    jobCount: 5,
  },
  {
    id: 'comp-003',
    name: 'CÔNG TY CỔ PHẦN FPT',
    size: '5000+ nhân viên',
    location: 'Hà Nội',
    field: 'Công nghệ Thông tin',
    tags: ['IT', 'Outsourcing', 'Viễn thông'],
    logo: '',
    jobCount: 87,
  },
  {
    id: 'comp-004',
    name: 'CÔNG TY CỔ PHẦN VÀNG BẠC ĐÁ QUÝ PHÚ NHUẬN',
    size: '1000-5000 nhân viên',
    location: 'TP. Hồ Chí Minh',
    field: 'Bán lẻ / Trang sức',
    tags: ['Trang sức', 'Bán lẻ', 'Premium'],
    logo: '',
    jobCount: 24,
  },
  {
    id: 'comp-005',
    name: 'NGÂN HÀNG TMCP NGOẠI THƯƠNG VIỆT NAM (VIETCOMBANK)',
    size: '5000+ nhân viên',
    location: 'Hà Nội',
    field: 'Tài chính / Ngân hàng',
    tags: ['Ngân hàng', 'Tài chính', 'Top 4 Bank'],
    logo: '',
    jobCount: 35,
  },
  {
    id: 'comp-006',
    name: 'CÔNG TY CỔ PHẦN THƯƠNG MẠI ĐIỆN TỬ SENDO',
    size: '500-1000 nhân viên',
    location: 'TP. Hồ Chí Minh',
    field: 'Thương mại điện tử',
    tags: ['E-Commerce', 'Startup', 'Tech'],
    logo: '',
    jobCount: 9,
  },
]

function Companies() {
  return (
    <div className={styles.page}>
      {/* Header */}
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Danh sách Công ty nổi bật</h1>
        <p className={styles.pageSub}>Khám phá hàng nghìn doanh nghiệp hàng đầu đang tuyển dụng tại Việt Nam</p>
      </div>

      {/* Search */}
      <div className={styles.searchRow}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Tìm kiếm theo tên công ty, lĩnh vực..."
        />
        <button className={styles.searchBtn}>
          <SearchIcon style={{ fontSize: 18 }} />
          Tìm kiếm
        </button>
      </div>

      {/* Company Grid */}
      <div className={styles.grid}>
        {mockCompanies.map((company) => (
          <Link to={`/cong-ty/${company.id}`} key={company.id} className={styles.card}>
            <div className={styles.coverBanner}>
              <div className={styles.logoWrap}>
                <img
                  className={styles.logo}
                  src={company.logo || 'https://via.placeholder.com/56x56?text=Logo'}
                  alt={company.name}
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/56x56?text=Logo' }}
                />
              </div>
            </div>

            <div className={styles.cardBody}>
              <h3 className={styles.companyName}>{company.name}</h3>

              <div className={styles.infoRow}>
                <BusinessIcon style={{ fontSize: 15, color: '#999' }} />
                {company.field}
              </div>
              <div className={styles.infoRow}>
                <PeopleOutlinedIcon style={{ fontSize: 15, color: '#999' }} />
                {company.size}
              </div>
              <div className={styles.infoRow}>
                <LocationOnOutlinedIcon style={{ fontSize: 15, color: '#999' }} />
                {company.location}
              </div>

              <div className={styles.tags}>
                <span className={`${styles.tag} ${styles.tagGreen}`}>{company.jobCount} việc làm</span>
                {company.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className={styles.pagination}>
        <button className={styles.pageBtn}>‹</button>
        <button className={`${styles.pageBtn} ${styles.pageBtnActive}`}>1</button>
        <button className={styles.pageBtn}>2</button>
        <button className={styles.pageBtn}>3</button>
        <button className={styles.pageBtn}>›</button>
      </div>
    </div>
  )
}

export default Companies
