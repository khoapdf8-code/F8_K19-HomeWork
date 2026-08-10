import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search'
import MenuIcon from '@mui/icons-material/Menu'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import JobCard from '../../components/JobCard'
import styles from './index.module.css'

// Static data for Phase 1 — will be replaced with API calls in Phase 2
const categories = [
  'Kinh doanh/Bán hàng',
  'Marketing/PR/Quảng cáo',
  'Chăm sóc khách hàng (Custome...)',
  'Nhân sự/Hành chính/Pháp chế',
  'Công nghệ Thông tin',
  'Lao động phổ thông',
]

const mockJobs = [
  {
    id: 'job-001', title: 'Senior Frontend Developer (ReactJS / Next.js)',
    slug: 'senior-frontend-developer-reactjs-nextjs-001', is_hot: true,
    salary: { type: 'RANGE', min: 25000000, max: 40000000 },
    work_location: [{ city_name: 'Hà Nội' }],
    _company: { name: 'TOPCV VIETNAM', logo: 'https://cdn-new.topcv.vn/unsafe/200x/https://static.topcv.vn/company_logos/cong-ty-co-phan-cong-nghe-topcv-viet-nam-6442526776f43.jpg' }
  },
  {
    id: 'job-002', title: 'Trưởng Nhóm Sales Logistics / Freight Forwarding',
    slug: 'truong-nhom-sales-logistics-freight-forwarding-002', is_hot: false,
    salary: { type: 'AGREEMENT' },
    work_location: [{ city_name: 'TP. Hồ Chí Minh' }],
    _company: { name: 'GL SOLUTIONS', logo: '' }
  },
  {
    id: 'job-003', title: 'Backend Developer (Java/Spring Boot)',
    slug: 'backend-developer-java-spring-boot-003', is_hot: true,
    salary: { type: 'RANGE', min: 20000000, max: 35000000 },
    work_location: [{ city_name: 'Hà Nội' }],
    _company: { name: 'FPT CORPORATION', logo: '' }
  },
  {
    id: 'job-004', title: 'UI/UX Designer',
    slug: 'ui-ux-designer-004', is_hot: false,
    salary: { type: 'RANGE', min: 15000000, max: 25000000 },
    work_location: [{ city_name: 'TP. Hồ Chí Minh' }],
    _company: { name: 'FPT CORPORATION', logo: '' }
  },
  {
    id: 'job-005', title: 'Nhân Viên Kinh Doanh Trang Sức',
    slug: 'nhan-vien-kinh-doanh-trang-suc-005', is_hot: true,
    salary: { type: 'RANGE', min: 8000000, max: 15000000 },
    work_location: [{ city_name: 'TP. Hồ Chí Minh' }],
    _company: { name: 'PNJ', logo: '' }
  },
  {
    id: 'job-006', title: 'Product Manager',
    slug: 'product-manager-006', is_hot: true,
    salary: { type: 'RANGE', min: 30000000, max: 50000000 },
    work_location: [{ city_name: 'Hà Nội' }],
    _company: { name: 'TOPCV VIETNAM', logo: '' }
  },
]

const mockCompanies = [
  { id: 'comp-001', name: 'CÔNG TY CỔ PHẦN CÔNG NGHỆ TOPCV VIỆT NAM', logo: '' },
  { id: 'comp-003', name: 'CÔNG TY CỔ PHẦN FPT', logo: '' },
  { id: 'comp-004', name: 'CÔNG TY CỔ PHẦN VÀNG BẠC ĐÁ QUÝ PHÚ NHUẬN', logo: '' },
]

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          Tìm việc làm nhanh 24h, việc làm mới nhất trên toàn quốc
        </h1>
        <p className={styles.heroSub}>
          Tiếp cận <strong>60.000+</strong> tin tuyển dụng việc làm mỗi ngày từ hàng nghìn doanh nghiệp uy tín tại Việt Nam
        </p>

        {/* Search Box */}
        <div className={styles.searchBox}>
          <button className={styles.searchCatBtn}>
            <MenuIcon style={{ fontSize: 18 }} />
            Danh mục Nghề
          </button>
          <input
            className={styles.searchMainInput}
            placeholder="Vị trí tuyển dụng, tên công ty"
            type="text"
          />
          <button className={styles.searchLocBtn}>
            <LocationOnOutlinedIcon style={{ fontSize: 18 }} />
            Địa điểm
            <KeyboardArrowDownIcon style={{ fontSize: 18 }} />
          </button>
          <button className={styles.searchSubmitBtn}>
            <SearchIcon style={{ fontSize: 18 }} />
            Tìm kiếm
          </button>
        </div>
      </section>

      {/* Category + Banner */}
      <section className={styles.catBannerSection}>
        <div className={styles.catList}>
          {categories.map((cat, i) => (
            <div key={i} className={styles.catItem}>
              <span>{cat}</span>
              <ChevronRightIcon style={{ fontSize: 18, color: '#999' }} />
            </div>
          ))}
        </div>
        <div className={styles.bannerSlider}>
          <div style={{ textAlign: 'center', padding: 40 }}>
            <div style={{ fontSize: 16, color: '#999', marginBottom: 8 }}>🎯 TUYỂN DỤNG</div>
            <div style={{ fontSize: 28, fontWeight: 700, color: '#2d4a6f', marginBottom: 8 }}>
              ACCOUNT MANAGER
            </div>
            <div style={{ fontSize: 24, fontWeight: 700, color: '#2d4a6f' }}>
              TOÀN QUỐC
            </div>
            <div style={{ marginTop: 16, fontSize: 14, color: '#666' }}>
              Cơ hội nghề nghiệp trải dài khắp các tỉnh thành
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <div className={styles.ctaBanner}>
        <div className={styles.ctaInner}>
          <span className={styles.ctaText}>🛡️ Tìm việc an toàn cùng TopCV</span>
          <button className={styles.ctaBtn}>
            Tìm hiểu thêm
            <ArrowForwardIcon style={{ fontSize: 18 }} />
          </button>
        </div>
      </div>

      {/* Việc làm tốt nhất */}
      <div className={styles.sectionHeader}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <h2 className={styles.sectionTitle}>Việc làm tốt nhất</h2>
          <div className={styles.sectionTabs}>
            <span className={`${styles.sectionTab} ${styles.sectionTabActive}`}>Việc văn phòng</span>
            <span className={styles.sectionTab}>Việc phổ thông</span>
          </div>
        </div>
        <Link to="/viec-lam" className={styles.viewAll}>
          Xem tất cả →
        </Link>
      </div>

      <div className={styles.jobsGrid}>
        {mockJobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            companyName={job._company.name}
            companyLogo={job._company.logo}
          />
        ))}
      </div>

      {/* Top công ty */}
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Top Công ty hàng đầu</h2>
        <Link to="/cong-ty" className={styles.viewAll}>
          Xem tất cả →
        </Link>
      </div>

      <div className={styles.companyGrid}>
        {mockCompanies.map((company) => (
          <Link to={`/cong-ty`} key={company.id} className={styles.companyCard}>
            <div className={styles.companyCover} />
            <div className={styles.companyLogoWrapper}>
              <img
                className={styles.companyLogo}
                src={company.logo || 'https://via.placeholder.com/56x56?text=Logo'}
                alt={company.name}
                onError={(e) => { e.target.src = 'https://via.placeholder.com/56x56?text=Logo' }}
              />
            </div>
            <p className={styles.companyName}>{company.name}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home
