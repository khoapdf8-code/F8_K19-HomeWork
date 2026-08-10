import { useState } from 'react'
import {
  ClassicEditor, Context, ContextWatchdog,
  Essentials, Paragraph, Heading,
  Bold, Italic, Underline, Strikethrough,
  List, ListProperties, TodoList,
  Link, AutoLink, BlockQuote,
  Table, TableToolbar,
  Alignment, Indent, IndentBlock,
  Font, FontSize, FontColor,
  HorizontalLine, RemoveFormat
} from 'ckeditor5'
import { CKEditor, CKEditorContext } from '@ckeditor/ckeditor5-react'
import 'ckeditor5/ckeditor5.css'

import WorkOutlineIcon from '@mui/icons-material/WorkOutlineOutlined'
import DescriptionIcon from '@mui/icons-material/Description'
import VisibilityIcon from '@mui/icons-material/Visibility'
import SendIcon from '@mui/icons-material/Send'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import styles from './index.module.css'

const editorConfig = {
  licenseKey: 'GPL',
  plugins: [
    Essentials, Paragraph, Heading,
    Bold, Italic, Underline, Strikethrough,
    List, ListProperties, TodoList,
    Link, AutoLink, BlockQuote,
    Table, TableToolbar,
    Alignment, Indent, IndentBlock,
    Font, FontSize, FontColor,
    HorizontalLine, RemoveFormat
  ],
  toolbar: [
    'heading', '|',
    'bold', 'italic', 'underline', 'strikethrough', 'removeFormat',
    '|',
    'fontSize', 'fontColor',
    '|',
    'alignment',
    '|',
    'bulletedList', 'numberedList', 'todoList',
    '|',
    'outdent', 'indent',
    '|',
    'link', 'blockQuote', 'insertTable', 'horizontalLine'
  ],
  table: {
    contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells']
  }
}

function CreateJob() {
  const [description, setDescription] = useState('')
  const [requirements, setRequirements] = useState('')
  const [benefits, setBenefits] = useState('')

  return (
    <div className={styles.page}>
      <h1 className={styles.pageTitle}>Đăng tin tuyển dụng</h1>
      <p className={styles.pageSub}>Tạo tin tuyển dụng mới để tìm kiếm ứng viên phù hợp</p>

      {/* Thông tin cơ bản */}
      <div className={styles.card}>
        <h2 className={styles.cardTitle}>
          <InfoOutlinedIcon style={{ fontSize: 20, color: '#00b14f' }} />
          Thông tin cơ bản
        </h2>

        <div className={styles.formGroup}>
          <label className={styles.label}>
            Tiêu đề tuyển dụng <span className={styles.required}>*</span>
          </label>
          <input className={styles.input} type="text" placeholder="VD: Senior Frontend Developer (ReactJS)" />
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>
              Ngành nghề <span className={styles.required}>*</span>
            </label>
            <select className={styles.select}>
              <option value="">Chọn ngành nghề</option>
              <option>Lập trình phần mềm</option>
              <option>Sales Xuất nhập khẩu/Logistics</option>
              <option>Digital Marketing</option>
              <option>Nhân sự & Tuyển dụng</option>
              <option>Tư vấn & Chăm sóc khách hàng</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>
              Chuyên môn <span className={styles.required}>*</span>
            </label>
            <input className={styles.input} type="text" placeholder="VD: Frontend Developer" />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Loại hình công việc</label>
            <select className={styles.select}>
              <option>Toàn thời gian (Full-time)</option>
              <option>Bán thời gian (Part-time)</option>
              <option>Thực tập</option>
              <option>Remote</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Kinh nghiệm</label>
            <select className={styles.select}>
              <option>Không yêu cầu</option>
              <option>Dưới 1 năm</option>
              <option>1-2 năm</option>
              <option>2-3 năm</option>
              <option>3-5 năm</option>
              <option>5+ năm</option>
            </select>
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Học vấn</label>
            <select className={styles.select}>
              <option>Không yêu cầu</option>
              <option>Trung cấp</option>
              <option>Cao đẳng</option>
              <option>Đại học</option>
              <option>Sau đại học</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Giới tính</label>
            <select className={styles.select}>
              <option>Không yêu cầu</option>
              <option>Nam</option>
              <option>Nữ</option>
            </select>
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Số lượng tuyển</label>
            <input className={styles.input} type="number" min="1" defaultValue="1" />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Hạn ứng tuyển</label>
            <input className={styles.input} type="date" />
          </div>
        </div>

        {/* Salary */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Mức lương</label>
          <div className={styles.salaryRow}>
            <input className={styles.input} type="number" placeholder="Từ (VNĐ)" />
            <input className={styles.input} type="number" placeholder="Đến (VNĐ)" />
            <select className={styles.select}>
              <option>VNĐ</option>
              <option>USD</option>
            </select>
          </div>
        </div>

        {/* Location */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Địa điểm làm việc</label>
          <input className={styles.input} type="text" placeholder="VD: Tầng 3, Tòa nhà FPT, 17 Duy Tân, Cầu Giấy, Hà Nội" />
        </div>
      </div>

      {/* Mô tả công việc — CKEditor */}
      <CKEditorContext context={Context} contextWatchdog={ContextWatchdog}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <DescriptionIcon style={{ fontSize: 20, color: '#00b14f' }} />
            Mô tả chi tiết
          </h2>

          {/* Description */}
          <div className={styles.formGroup}>
            <p className={styles.editorLabel}>
              <WorkOutlineIcon style={{ fontSize: 18 }} />
              Mô tả công việc <span className={styles.required}>*</span>
            </p>
            <div className={styles.editorWrapper}>
              <CKEditor
                editor={ClassicEditor}
                data={description}
                onChange={(event, editor) => setDescription(editor.getData())}
                config={editorConfig}
              />
            </div>
          </div>

          {/* Requirements */}
          <div className={styles.formGroup}>
            <p className={styles.editorLabel}>
              <WorkOutlineIcon style={{ fontSize: 18 }} />
              Yêu cầu ứng viên <span className={styles.required}>*</span>
            </p>
            <div className={styles.editorWrapper}>
              <CKEditor
                editor={ClassicEditor}
                data={requirements}
                onChange={(event, editor) => setRequirements(editor.getData())}
                config={editorConfig}
              />
            </div>
          </div>

          {/* Benefits */}
          <div className={styles.formGroup}>
            <p className={styles.editorLabel}>
              <WorkOutlineIcon style={{ fontSize: 18 }} />
              Quyền lợi
            </p>
            <div className={styles.editorWrapper}>
              <CKEditor
                editor={ClassicEditor}
                data={benefits}
                onChange={(event, editor) => setBenefits(editor.getData())}
                config={editorConfig}
              />
            </div>
          </div>
        </div>
      </CKEditorContext>

      {/* Actions */}
      <div className={styles.card}>
        <div className={styles.actions}>
          <button className={styles.btnPreview}>
            <VisibilityIcon style={{ fontSize: 18 }} />
            Xem trước
          </button>
          <button className={styles.btnSubmit}>
            <SendIcon style={{ fontSize: 18 }} />
            Đăng tin tuyển dụng
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreateJob
