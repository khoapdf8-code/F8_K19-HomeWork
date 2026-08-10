import { Link } from 'react-router-dom'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import styles from './index.module.css'

function formatSalary(salary) {
  if (!salary) return 'Thỏa thuận'
  if (salary.type === 'AGREEMENT') return 'Thỏa thuận'
  const min = (salary.min / 1000000).toFixed(0)
  const max = (salary.max / 1000000).toFixed(0)
  return `${min} - ${max} triệu`
}

function JobCard({ job, companyName, companyLogo }) {
  return (
    <Link to={`/viec-lam/${job.slug}`} className={styles.card}>
      {job.is_hot && <span className={styles.hotBadge}>HOT</span>}

      <img
        className={styles.logo}
        src={companyLogo || 'https://via.placeholder.com/64x64?text=Logo'}
        alt={companyName}
        onError={(e) => { e.target.src = 'https://via.placeholder.com/64x64?text=Logo' }}
      />

      <div className={styles.info}>
        <h3 className={styles.title}>{job.title}</h3>
        <p className={styles.company}>{companyName}</p>
        <div className={styles.meta}>
          <span className={styles.salary}>{formatSalary(job.salary)}</span>
          <span className={styles.location}>
            <LocationOnOutlinedIcon style={{ fontSize: 14 }} />
            {job.work_location?.[0]?.city_name || 'Toàn quốc'}
          </span>
        </div>
      </div>

      <button
        className={styles.saveBtn}
        onClick={(e) => { e.preventDefault(); e.stopPropagation() }}
        title="Lưu tin"
      >
        <FavoriteBorderIcon style={{ fontSize: 20 }} />
      </button>
    </Link>
  )
}

export default JobCard
