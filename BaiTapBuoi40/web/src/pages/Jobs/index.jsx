import FilterListIcon from '@mui/icons-material/FilterList'
import JobCard from '../../components/JobCard'
import styles from './index.module.css'

const mockJobs = [
  { id: 'job-001', title: 'Senior Frontend Developer (ReactJS / Next.js)', slug: 'senior-frontend-developer-reactjs-nextjs-001', is_hot: true, salary: { type: 'RANGE', min: 25000000, max: 40000000 }, work_location: [{ city_name: 'Hà Nội' }], _company: { name: 'TOPCV VIETNAM', logo: '' } },
  { id: 'job-002', title: 'Trưởng Nhóm Sales Logistics / Freight Forwarding', slug: 'truong-nhom-sales-logistics-freight-forwarding-002', is_hot: false, salary: { type: 'AGREEMENT' }, work_location: [{ city_name: 'TP. Hồ Chí Minh' }], _company: { name: 'GL SOLUTIONS', logo: '' } },
  { id: 'job-003', title: 'Backend Developer (Java/Spring Boot)', slug: 'backend-developer-java-spring-boot-003', is_hot: true, salary: { type: 'RANGE', min: 20000000, max: 35000000 }, work_location: [{ city_name: 'Hà Nội' }], _company: { name: 'FPT CORPORATION', logo: '' } },
  { id: 'job-004', title: 'UI/UX Designer', slug: 'ui-ux-designer-004', is_hot: false, salary: { type: 'RANGE', min: 15000000, max: 25000000 }, work_location: [{ city_name: 'TP. Hồ Chí Minh' }], _company: { name: 'FPT CORPORATION', logo: '' } },
  { id: 'job-005', title: 'Nhân Viên Kinh Doanh Trang Sức', slug: 'nhan-vien-kinh-doanh-trang-suc-005', is_hot: true, salary: { type: 'RANGE', min: 8000000, max: 15000000 }, work_location: [{ city_name: 'TP. Hồ Chí Minh' }], _company: { name: 'PNJ', logo: '' } },
  { id: 'job-006', title: 'Product Manager', slug: 'product-manager-006', is_hot: true, salary: { type: 'RANGE', min: 30000000, max: 50000000 }, work_location: [{ city_name: 'Hà Nội' }], _company: { name: 'TOPCV VIETNAM', logo: '' } },
]

function Jobs() {
  return (
    <div className={styles.page}>
      {/* Sidebar Filter */}
      <aside className={styles.sidebar}>
        <h3 className={styles.filterTitle}>
          <FilterListIcon style={{ fontSize: 20 }} />
          Bộ lọc nâng cao
        </h3>

        <div className={styles.filterGroup}>
          <p className={styles.filterLabel}>Ngành nghề</p>
          {['Công nghệ Thông tin', 'Kinh doanh/Bán hàng', 'Marketing/PR', 'Nhân sự', 'Logistics'].map((item) => (
            <label key={item} className={styles.filterOption}>
              <input type="checkbox" />
              {item}
            </label>
          ))}
        </div>

        <div className={styles.filterGroup}>
          <p className={styles.filterLabel}>Kinh nghiệm</p>
          {['Không yêu cầu', '1-2 năm', '2-3 năm', '3-5 năm', '5+ năm'].map((item) => (
            <label key={item} className={styles.filterOption}>
              <input type="checkbox" />
              {item}
            </label>
          ))}
        </div>

        <div className={styles.filterGroup}>
          <p className={styles.filterLabel}>Mức lương</p>
          {['Dưới 10 triệu', '10 - 20 triệu', '20 - 30 triệu', '30 - 50 triệu', 'Trên 50 triệu', 'Thỏa thuận'].map((item) => (
            <label key={item} className={styles.filterOption}>
              <input type="checkbox" />
              {item}
            </label>
          ))}
        </div>

        <div className={styles.filterGroup}>
          <p className={styles.filterLabel}>Địa điểm</p>
          {['Hà Nội', 'TP. Hồ Chí Minh', 'Đà Nẵng', 'Hải Phòng', 'Cần Thơ'].map((item) => (
            <label key={item} className={styles.filterOption}>
              <input type="checkbox" />
              {item}
            </label>
          ))}
        </div>
      </aside>

      {/* Job List */}
      <div>
        <div className={styles.listHeader}>
          <div>
            <h2 className={styles.listTitle}>Tuyển dụng việc làm mới nhất</h2>
            <span className={styles.listCount}>{mockJobs.length} việc làm</span>
          </div>
          <div className={styles.sortBar}>
            Sắp xếp:
            <button className={`${styles.sortBtn} ${styles.sortBtnActive}`}>Phù hợp</button>
            <button className={styles.sortBtn}>Mới nhất</button>
            <button className={styles.sortBtn}>Lương cao</button>
          </div>
        </div>

        <div className={styles.jobList}>
          {mockJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              companyName={job._company.name}
              companyLogo={job._company.logo}
            />
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
    </div>
  )
}

export default Jobs
