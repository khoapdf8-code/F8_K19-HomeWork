import FacebookIcon from '@mui/icons-material/Facebook'
import YouTubeIcon from '@mui/icons-material/YouTube'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import styles from './index.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerGrid}>
          {/* Column 1: About */}
          <div className={styles.footerCol}>
            <div className={styles.footerLogo}>
              <span className={styles.footerLogoTop}>top</span>
              <span className={styles.footerLogoCV}>cv</span>
            </div>
            <p>
              Tiếp lợi thế, nối thành công.
              <br />
              TopCV là nền tảng công nghệ tuyển dụng hàng đầu Việt Nam, 
              kết nối hàng triệu ứng viên với các doanh nghiệp uy tín.
            </p>
          </div>

          {/* Column 2: Về TopCV */}
          <div className={styles.footerCol}>
            <h4>Về TopCV</h4>
            <a href="#">Giới thiệu</a>
            <a href="#">Liên hệ</a>
            <a href="#">Thỏa thuận sử dụng</a>
            <a href="#">Quy định bảo mật</a>
            <a href="#">Cơ chế giải quyết khiếu nại</a>
          </div>

          {/* Column 3: Dành cho ứng viên */}
          <div className={styles.footerCol}>
            <h4>Dành cho ứng viên</h4>
            <a href="#">Việc làm</a>
            <a href="#">Tạo CV</a>
            <a href="#">Cẩm nang nghề nghiệp</a>
            <a href="#">Trắc nghiệm tính cách</a>
            <a href="#">Tính lương Gross - Net</a>
          </div>

          {/* Column 4: Nhà tuyển dụng */}
          <div className={styles.footerCol}>
            <h4>Nhà tuyển dụng</h4>
            <a href="#">Đăng tin tuyển dụng</a>
            <a href="#">Tìm hồ sơ ứng viên</a>
            <a href="#">Sản phẩm dịch vụ</a>
            <a href="#">Liên hệ</a>
          </div>
        </div>

        {/* Bottom */}
        <div className={styles.footerBottom}>
          <span>© 2026 TopCV Vietnam JSC. All rights reserved.</span>
          <div className={styles.socialLinks}>
            <a className={styles.socialLink} href="#" aria-label="Facebook">
              <FacebookIcon style={{ fontSize: 20 }} />
            </a>
            <a className={styles.socialLink} href="#" aria-label="YouTube">
              <YouTubeIcon style={{ fontSize: 20 }} />
            </a>
            <a className={styles.socialLink} href="#" aria-label="LinkedIn">
              <LinkedInIcon style={{ fontSize: 20 }} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
