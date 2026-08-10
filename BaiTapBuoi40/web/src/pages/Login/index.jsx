import { useState } from 'react'
import { Link } from 'react-router-dom'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import VisibilityIcon from '@mui/icons-material/Visibility'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import styles from './index.module.css'

function Login() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className={styles.card}>
      {/* Logo */}
      <div className={styles.logo}>
        <span className={styles.logoTop}>top</span>
        <span className={styles.logoCV}>cv</span>
      </div>
      <p className={styles.subtitle}>Chào mừng quay trở lại</p>

      {/* Social Login */}
      <div className={styles.socialBtns}>
        <button className={styles.socialBtn}>
          <GoogleIcon style={{ fontSize: 20, color: '#4285f4' }} />
          Đăng nhập bằng Google
        </button>
        <div className={styles.socialRow}>
          <button className={styles.socialBtn}>
            <FacebookIcon style={{ fontSize: 20, color: '#1877f2' }} />
            Facebook
          </button>
          <button className={styles.socialBtn}>
            <LinkedInIcon style={{ fontSize: 20, color: '#0a66c2' }} />
            Linkedin
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className={styles.divider}>
        <span className={styles.dividerLine} />
        <span className={styles.dividerText}>Hoặc đăng nhập bằng email</span>
        <span className={styles.dividerLine} />
      </div>

      {/* Form */}
      <form onSubmit={(e) => e.preventDefault()}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Email</label>
          <input
            className={styles.input}
            type="email"
            placeholder="Nhập email"
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>
            Password
            <a href="#" className={styles.forgotLink}>Quên mật khẩu</a>
          </label>
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
              {showPassword ? (
                <VisibilityIcon style={{ fontSize: 20 }} />
              ) : (
                <VisibilityOffIcon style={{ fontSize: 20 }} />
              )}
            </button>
          </div>
        </div>

        <button type="submit" className={styles.submitBtn}>
          Đăng nhập
          <ArrowForwardIcon style={{ fontSize: 18 }} />
        </button>
      </form>

      {/* Footer */}
      <p className={styles.footerLink}>
        Bạn chưa có tài khoản? <Link to="/sign-up">Đăng ký ngay</Link>
      </p>

      <div className={styles.helpBox}>
        Bạn gặp khó khăn khi tạo tài khoản? Vui lòng gọi tới số <strong>1900 068 889</strong> | Nhánh 2 (giờ hành chính).
      </div>
    </div>
  )
}

export default Login
