import { Link } from 'react-router-dom'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import WorkOutlineIcon from '@mui/icons-material/WorkOutlineOutlined'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import VerifiedIcon from '@mui/icons-material/Verified'
import SendIcon from '@mui/icons-material/Send'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutlineOutlined'
import BusinessIcon from '@mui/icons-material/Business'
import PublicIcon from '@mui/icons-material/Public'
import SchoolIcon from '@mui/icons-material/School'
import WcIcon from '@mui/icons-material/Wc'
import styles from './index.module.css'

// Static mock for Phase 1
const mockJob = {
  title: 'Senior Frontend Developer (ReactJS / Next.js)',
  salary: '25 - 40 triệu',
  location: 'Hà Nội',
  experience: '3-5 năm',
  deadline: '30/09/2026',
  tags: ['3 năm kinh nghiệm', 'Đại Học trở lên', 'ReactJS', 'Next.js', 'TypeScript'],
  description_html: '<h3>Mô tả công việc</h3><ul><li>Phát triển các tính năng UI/UX mới cho nền tảng Tuyển dụng TopCV bằng ReactJS, Next.js.</li><li>Tối ưu hóa hiệu năng ứng dụng (PageSpeed, Web Vitals) và nâng cao trải nghiệm người dùng.</li><li>Phối hợp chặt chẽ với đội ngũ Product Manager, UI/UX Designer và Backend Engineer.</li><li>Code review và mentoring cho junior developers trong team.</li></ul>',
  requirements_html: '<h3>Yêu cầu ứng viên</h3><ul><li>Có tối thiểu 3 năm kinh nghiệm làm việc với ReactJS, Next.js, TypeScript.</li><li>Thành thạo Redux/Zustand, TailwindCSS/SCSS, RESTful API, GraphQL.</li><li>Có kinh nghiệm tối ưu SEO Web và Server-Side Rendering (SSR).</li><li>Khả năng làm việc nhóm tốt, chủ động trong công việc.</li></ul>',
  benefits_html: '<h3>Quyền lợi</h3><ul><li>Lương cứng up to 40M + Thưởng hiệu suất dự án theo quý.</li><li>Được đóng BHXH đầy đủ theo luật lao động.</li><li>Khám sức khỏe định kỳ hàng năm, du lịch/teambuilding.</li><li>Lộ trình thăng tiến Technical Lead rõ ràng.</li></ul>',
  company: {
    name: 'CÔNG TY CỔ PHẦN CÔNG NGHỆ TOPCV VIỆT NAM',
    size: '500-1000 nhân viên',
    field: 'Công nghệ Thông tin',
    address: 'Tầng 3, Tòa FS GoldSeason, 47 Nguyễn Tuân, Thanh Xuân',
    logo: ''
  }
}

function JobDetail() {
  return (
    <div className={styles.page}>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <Link to="/">Trang chủ</Link> <span>›</span>
        <Link to="/viec-lam">Việc làm</Link> <span>›</span>
        <span>Việc làm IT</span> <span>›</span>
        <span>{mockJob.title}</span>
      </div>

      <div className={styles.layout}>
        {/* Main Content */}
        <div className={styles.main}>
          {/* Job Header */}
          <div className={styles.card}>
            <h1 className={styles.jobTitle}>
              {mockJob.title}
              <VerifiedIcon className={styles.verifiedBadge} style={{ fontSize: 22 }} />
            </h1>
            <div className={styles.salary}>{mockJob.salary}</div>

            <div className={styles.infoRow}>
              <div className={styles.infoItem}>
                <LocationOnOutlinedIcon className={styles.infoIcon} style={{ fontSize: 20 }} />
                <div><div style={{ fontSize: 12, color: '#999' }}>Địa điểm</div><strong>{mockJob.location}</strong></div>
              </div>
              <div className={styles.infoItem}>
                <WorkOutlineIcon className={styles.infoIcon} style={{ fontSize: 20 }} />
                <div><div style={{ fontSize: 12, color: '#999' }}>Kinh nghiệm</div><strong>{mockJob.experience}</strong></div>
              </div>
              <div className={styles.infoItem}>
                <CalendarTodayIcon className={styles.infoIcon} style={{ fontSize: 20 }} />
                <div><div style={{ fontSize: 12, color: '#999' }}>Hạn ứng tuyển</div><strong>{mockJob.deadline}</strong></div>
              </div>
            </div>

            <div className={styles.actions}>
              <button className={styles.applyBtn}>
                <SendIcon style={{ fontSize: 18 }} />
                Ứng tuyển ngay
              </button>
              <button className={styles.saveBtn}>
                <FavoriteBorderIcon style={{ fontSize: 18 }} />
                Lưu tin
              </button>
            </div>
          </div>

          {/* Overview */}
          <div className={styles.card}>
            <h2 className={styles.sectionTitle}>Tổng quan</h2>
            <div className={styles.tags}>
              {mockJob.tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className={styles.card}>
            <div className={styles.htmlContent} dangerouslySetInnerHTML={{ __html: mockJob.description_html }} />
          </div>

          {/* Requirements */}
          <div className={styles.card}>
            <div className={styles.htmlContent} dangerouslySetInnerHTML={{ __html: mockJob.requirements_html }} />
          </div>

          {/* Benefits */}
          <div className={styles.card}>
            <div className={styles.htmlContent} dangerouslySetInnerHTML={{ __html: mockJob.benefits_html }} />
          </div>
        </div>

        {/* Sidebar */}
        <aside className={styles.sidebar}>
          {/* Company Card */}
          <div className={styles.companyCard}>
            <img
              className={styles.companyLogo}
              src={mockJob.company.logo || 'https://via.placeholder.com/72x72?text=Logo'}
              alt={mockJob.company.name}
              onError={(e) => { e.target.src = 'https://via.placeholder.com/72x72?text=Logo' }}
            />
            <h3 className={styles.companyName}>{mockJob.company.name}</h3>
            <div className={styles.companyInfo}>
              <div className={styles.companyInfoItem}>
                <PeopleOutlineIcon style={{ fontSize: 18, color: '#999' }} />
                <div>
                  <div className={styles.companyInfoLabel}>Quy mô</div>
                  <div className={styles.companyInfoValue}>{mockJob.company.size}</div>
                </div>
              </div>
              <div className={styles.companyInfoItem}>
                <BusinessIcon style={{ fontSize: 18, color: '#999' }} />
                <div>
                  <div className={styles.companyInfoLabel}>Lĩnh vực</div>
                  <div className={styles.companyInfoValue}>{mockJob.company.field}</div>
                </div>
              </div>
              <div className={styles.companyInfoItem}>
                <LocationOnOutlinedIcon style={{ fontSize: 18, color: '#999' }} />
                <div>
                  <div className={styles.companyInfoLabel}>Địa điểm</div>
                  <div className={styles.companyInfoValue}>{mockJob.company.address}</div>
                </div>
              </div>
            </div>
            <Link to="/cong-ty" className={styles.viewCompanyBtn}>
              Xem trang công ty <PublicIcon style={{ fontSize: 16, marginLeft: 4 }} />
            </Link>
          </div>

          {/* General Info */}
          <div className={styles.generalInfo}>
            <h3 className={styles.generalTitle}>Thông tin chung</h3>
            <div className={styles.generalItem}>
              <WorkOutlineIcon style={{ fontSize: 20, color: '#00b14f' }} />
              <div><div className={styles.generalLabel}>Cấp bậc</div><div className={styles.generalValue}>Nhân viên</div></div>
            </div>
            <div className={styles.generalItem}>
              <SchoolIcon style={{ fontSize: 20, color: '#00b14f' }} />
              <div><div className={styles.generalLabel}>Học vấn</div><div className={styles.generalValue}>Đại Học trở lên</div></div>
            </div>
            <div className={styles.generalItem}>
              <PeopleOutlineIcon style={{ fontSize: 20, color: '#00b14f' }} />
              <div><div className={styles.generalLabel}>Số lượng</div><div className={styles.generalValue}>3 người</div></div>
            </div>
            <div className={styles.generalItem}>
              <WcIcon style={{ fontSize: 20, color: '#00b14f' }} />
              <div><div className={styles.generalLabel}>Giới tính</div><div className={styles.generalValue}>Không yêu cầu</div></div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default JobDetail
