import { useState } from 'react'
import { Link } from 'react-router-dom'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import VisibilityIcon from '@mui/icons-material/Visibility'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import styles from '../Login/index.module.css'

function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [role, setRole] = useState('candidate') // 'candidate' | 'employer'

  return (
    <div className={styles.card}>
      {/* Logo */}
      <div className={styles.logo}>
        <span style={{ fontSize: 18, color: '#6f7882', fontWeight: 400 }}>Đăng ký </span>
        <span className={styles.logoTop}>top</span>
        <span className={styles.logoCV}>cv</span>
      </div>
      <p className={styles.subtitle}>Tạo tài khoản miễn phí, tìm kiếm hơn 60.000 việc làm.</p>

      {/* Role Tabs */}
      <div className={styles.roleTabs}>
        <button
          className={`${styles.roleTab} ${role === 'candidate' ? styles.roleTabActive : ''}`}
          onClick={() => setRole('candidate')}
        >
          🧑‍💼 Ứng viên
        </button>
        <button
          className={`${styles.roleTab} ${role === 'employer' ? styles.roleTabActive : ''}`}
          onClick={() => setRole('employer')}
        >
          🏢 Nhà tuyển dụng
        </button>
      </div>

      {/* Form */}
      <form onSubmit={(e) => e.preventDefault()}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Họ và tên</label>
          <input className={styles.input} type="text" placeholder="Nhập họ tên" />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Email</label>
          <input className={styles.input} type="email" placeholder="Nhập email" />
        </div>

        {/* Employer extra fields */}
        {role === 'employer' && (
          <>
            <div className={styles.formGroup}>
              <label className={styles.label}>Mã số thuế (MST)</label>
              <input className={styles.input} type="text" placeholder="Nhập mã số thuế công ty" />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Tên công ty</label>
              <input className={styles.input} type="text" placeholder="Nhập tên công ty" />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Số điện thoại</label>
              <input className={styles.input} type="tel" placeholder="Nhập số điện thoại" />
            </div>
          </>
        )}

        <div className={styles.formGroup}>
          <label className={styles.label}>Mật khẩu</label>
          <div className={styles.inputWrapper}>
            <input
              className={styles.input}
              type={showPassword ? 'text' : 'password'}
              placeholder="Nhập mật khẩu"
            />
            <button
              type="button"
              className={styles.inputIcon}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <VisibilityIcon style={{ fontSize: 20 }} /> : <VisibilityOffIcon style={{ fontSize: 20 }} />}
            </button>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Xác nhận mật khẩu</label>
          <div className={styles.inputWrapper}>
            <input
              className={styles.input}
              type={showConfirm ? 'text' : 'password'}
              placeholder="Nhập lại mật khẩu"
            />
            <button
              type="button"
              className={styles.inputIcon}
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? <VisibilityIcon style={{ fontSize: 20 }} /> : <VisibilityOffIcon style={{ fontSize: 20 }} />}
            </button>
          </div>
        </div>

        {/* Checkbox */}
        <label className={styles.checkbox}>
          <input type="checkbox" />
          <span>
            Tôi đã đọc và đồng ý với <a href="#">Điều khoản dịch vụ</a> và <a href="#">Chính sách quyền riêng tư</a> của TopCV (Bắt buộc)
          </span>
        </label>

        <button type="submit" className={styles.submitBtn}>
          Đăng ký
          <ArrowForwardIcon style={{ fontSize: 18 }} />
        </button>
      </form>

      {/* Divider */}
      <div className={styles.divider} style={{ marginTop: 20, marginBottom: 0 }}>
        <span className={styles.dividerLine} />
        <span className={styles.dividerText}>Hoặc</span>
        <span className={styles.dividerLine} />
      </div>

      <button className={styles.socialBtn} style={{ width: '100%', marginTop: 16 }}>
        Đăng ký bằng tài khoản mạng xã hội →
      </button>

      {/* Footer */}
      <p className={styles.footerLink} style={{ marginTop: 16 }}>
        Bạn đã có tài khoản? <Link to="/login">Đăng nhập</Link>
      </p>
    </div>
  )
}

export default Register
