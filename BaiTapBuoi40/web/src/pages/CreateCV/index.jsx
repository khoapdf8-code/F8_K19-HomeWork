import { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person'
import TrackChangesIcon from '@mui/icons-material/TrackChanges'
import SchoolIcon from '@mui/icons-material/School'
import WorkIcon from '@mui/icons-material/Work'
import StarIcon from '@mui/icons-material/Star'
import CardMembershipIcon from '@mui/icons-material/CardMembership'
import AddIcon from '@mui/icons-material/Add'
import CloseIcon from '@mui/icons-material/Close'
import DownloadIcon from '@mui/icons-material/Download'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import styles from './index.module.css'

function CreateCV() {
  const [info, setInfo] = useState({
    fullName: '', position: '', email: '', phone: '', address: ''
  })
  const [objective, setObjective] = useState('')
  const [educations, setEducations] = useState([
    { school: '', major: '', period: '', description: '' }
  ])
  const [experiences, setExperiences] = useState([
    { company: '', position: '', period: '', description: '' }
  ])
  const [skills, setSkills] = useState(['ReactJS', 'JavaScript', 'CSS'])
  const [newSkill, setNewSkill] = useState('')
  const [certifications, setCertifications] = useState([
    { name: '', issuer: '', year: '' }
  ])

  const addEducation = () => setEducations([...educations, { school: '', major: '', period: '', description: '' }])
  const addExperience = () => setExperiences([...experiences, { company: '', position: '', period: '', description: '' }])
  const addCert = () => setCertifications([...certifications, { name: '', issuer: '', year: '' }])

  const removeEducation = (i) => setEducations(educations.filter((_, idx) => idx !== i))
  const removeExperience = (i) => setExperiences(experiences.filter((_, idx) => idx !== i))
  const removeCert = (i) => setCertifications(certifications.filter((_, idx) => idx !== i))

  const updateEducation = (i, field, value) => {
    const updated = [...educations]
    updated[i][field] = value
    setEducations(updated)
  }
  const updateExperience = (i, field, value) => {
    const updated = [...experiences]
    updated[i][field] = value
    setExperiences(updated)
  }
  const updateCert = (i, field, value) => {
    const updated = [...certifications]
    updated[i][field] = value
    setCertifications(updated)
  }

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()])
      setNewSkill('')
    }
  }
  const removeSkill = (skill) => setSkills(skills.filter(s => s !== skill))

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') { e.preventDefault(); addSkill() }
  }

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Tạo CV Online</h1>
        <p className={styles.pageSub}>Tạo CV chuyên nghiệp miễn phí — Xem trước trực tiếp bên phải</p>
      </div>

      <div className={styles.layout}>
        {/* Form Side */}
        <div className={styles.formSide}>
          {/* Personal Info */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <PersonIcon style={{ fontSize: 20 }} /> Thông tin cá nhân
            </h2>
            <div className={styles.formGroup}>
              <label className={styles.label}>Họ và tên</label>
              <input className={styles.input} value={info.fullName}
                onChange={e => setInfo({ ...info, fullName: e.target.value })}
                placeholder="Nguyễn Văn A" />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Vị trí ứng tuyển</label>
              <input className={styles.input} value={info.position}
                onChange={e => setInfo({ ...info, position: e.target.value })}
                placeholder="Frontend Developer" />
            </div>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Email</label>
                <input className={styles.input} type="email" value={info.email}
                  onChange={e => setInfo({ ...info, email: e.target.value })}
                  placeholder="email@example.com" />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Số điện thoại</label>
                <input className={styles.input} value={info.phone}
                  onChange={e => setInfo({ ...info, phone: e.target.value })}
                  placeholder="0901 234 567" />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Địa chỉ</label>
              <input className={styles.input} value={info.address}
                onChange={e => setInfo({ ...info, address: e.target.value })}
                placeholder="Quận Cầu Giấy, Hà Nội" />
            </div>
          </div>

          {/* Objective */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <TrackChangesIcon style={{ fontSize: 20 }} /> Mục tiêu nghề nghiệp
            </h2>
            <div className={styles.formGroup}>
              <textarea className={styles.textarea} value={objective}
                onChange={e => setObjective(e.target.value)}
                placeholder="Mô tả ngắn gọn mục tiêu nghề nghiệp của bạn..." rows="4" />
            </div>
          </div>

          {/* Education */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <SchoolIcon style={{ fontSize: 20 }} /> Học vấn
            </h2>
            {educations.map((edu, i) => (
              <div key={i} className={styles.entryCard}>
                {educations.length > 1 && (
                  <button className={styles.removeBtn} onClick={() => removeEducation(i)}>
                    <CloseIcon style={{ fontSize: 16 }} />
                  </button>
                )}
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Trường</label>
                    <input className={styles.input} value={edu.school}
                      onChange={e => updateEducation(i, 'school', e.target.value)}
                      placeholder="Đại học Bách Khoa Hà Nội" />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Chuyên ngành</label>
                    <input className={styles.input} value={edu.major}
                      onChange={e => updateEducation(i, 'major', e.target.value)}
                      placeholder="Công nghệ Thông tin" />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Thời gian</label>
                  <input className={styles.input} value={edu.period}
                    onChange={e => updateEducation(i, 'period', e.target.value)}
                    placeholder="09/2018 - 06/2022" />
                </div>
              </div>
            ))}
            <button className={styles.addBtn} onClick={addEducation}>
              <AddIcon style={{ fontSize: 16 }} /> Thêm học vấn
            </button>
          </div>

          {/* Experience */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <WorkIcon style={{ fontSize: 20 }} /> Kinh nghiệm làm việc
            </h2>
            {experiences.map((exp, i) => (
              <div key={i} className={styles.entryCard}>
                {experiences.length > 1 && (
                  <button className={styles.removeBtn} onClick={() => removeExperience(i)}>
                    <CloseIcon style={{ fontSize: 16 }} />
                  </button>
                )}
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Công ty</label>
                    <input className={styles.input} value={exp.company}
                      onChange={e => updateExperience(i, 'company', e.target.value)}
                      placeholder="Công ty TNHH ABC" />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Vị trí</label>
                    <input className={styles.input} value={exp.position}
                      onChange={e => updateExperience(i, 'position', e.target.value)}
                      placeholder="Frontend Developer" />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Thời gian</label>
                  <input className={styles.input} value={exp.period}
                    onChange={e => updateExperience(i, 'period', e.target.value)}
                    placeholder="01/2022 - Hiện tại" />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Mô tả công việc</label>
                  <textarea className={styles.textarea} value={exp.description}
                    onChange={e => updateExperience(i, 'description', e.target.value)}
                    placeholder="Mô tả các nhiệm vụ, thành tích..." rows="3" />
                </div>
              </div>
            ))}
            <button className={styles.addBtn} onClick={addExperience}>
              <AddIcon style={{ fontSize: 16 }} /> Thêm kinh nghiệm
            </button>
          </div>

          {/* Skills */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <StarIcon style={{ fontSize: 20 }} /> Kỹ năng
            </h2>
            <div className={styles.skillsGrid}>
              {skills.map((skill) => (
                <span key={skill} className={styles.skillTag}>
                  {skill}
                  <button className={styles.skillRemove} onClick={() => removeSkill(skill)}>×</button>
                </span>
              ))}
            </div>
            <div className={styles.skillInput}>
              <input className={styles.input} value={newSkill}
                onChange={e => setNewSkill(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Nhập kỹ năng rồi Enter" />
              <button className={styles.addBtn} onClick={addSkill}>
                <AddIcon style={{ fontSize: 16 }} /> Thêm
              </button>
            </div>
          </div>

          {/* Certifications */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <CardMembershipIcon style={{ fontSize: 20 }} /> Chứng chỉ
            </h2>
            {certifications.map((cert, i) => (
              <div key={i} className={styles.entryCard}>
                {certifications.length > 1 && (
                  <button className={styles.removeBtn} onClick={() => removeCert(i)}>
                    <CloseIcon style={{ fontSize: 16 }} />
                  </button>
                )}
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Tên chứng chỉ</label>
                    <input className={styles.input} value={cert.name}
                      onChange={e => updateCert(i, 'name', e.target.value)}
                      placeholder="AWS Certified" />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Tổ chức cấp</label>
                    <input className={styles.input} value={cert.issuer}
                      onChange={e => updateCert(i, 'issuer', e.target.value)}
                      placeholder="Amazon Web Services" />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Năm</label>
                  <input className={styles.input} value={cert.year}
                    onChange={e => updateCert(i, 'year', e.target.value)}
                    placeholder="2024" />
                </div>
              </div>
            ))}
            <button className={styles.addBtn} onClick={addCert}>
              <AddIcon style={{ fontSize: 16 }} /> Thêm chứng chỉ
            </button>
          </div>
        </div>

        {/* Preview Side */}
        <div className={styles.previewSide}>
          <div className={styles.previewCard}>
            {/* Header */}
            <div className={styles.previewHeader}>
              <div className={styles.previewAvatar}>
                {info.fullName ? info.fullName.charAt(0).toUpperCase() : '?'}
              </div>
              <div className={styles.previewName}>
                {info.fullName || 'Họ và tên'}
              </div>
              <div className={styles.previewRole}>
                {info.position || 'Vị trí ứng tuyển'}
              </div>
            </div>

            <div className={styles.previewBody}>
              {/* Contact */}
              <div className={styles.previewSection}>
                <div className={styles.previewSectionTitle}>Thông tin liên hệ</div>
                <div className={styles.previewContact}>
                  {info.email && (
                    <span><EmailIcon style={{ fontSize: 14, color: '#00b14f' }} /> {info.email}</span>
                  )}
                  {info.phone && (
                    <span><PhoneIcon style={{ fontSize: 14, color: '#00b14f' }} /> {info.phone}</span>
                  )}
                  {info.address && (
                    <span><LocationOnIcon style={{ fontSize: 14, color: '#00b14f' }} /> {info.address}</span>
                  )}
                  {!info.email && !info.phone && !info.address && (
                    <span style={{ color: '#ccc', fontStyle: 'italic' }}>Chưa có thông tin</span>
                  )}
                </div>
              </div>

              {/* Objective */}
              {objective && (
                <div className={styles.previewSection}>
                  <div className={styles.previewSectionTitle}>Mục tiêu nghề nghiệp</div>
                  <p className={styles.previewItemDesc}>{objective}</p>
                </div>
              )}

              {/* Education */}
              {educations.some(e => e.school) && (
                <div className={styles.previewSection}>
                  <div className={styles.previewSectionTitle}>Học vấn</div>
                  {educations.filter(e => e.school).map((edu, i) => (
                    <div key={i} className={styles.previewItem}>
                      <div className={styles.previewItemTitle}>{edu.school}</div>
                      <div className={styles.previewItemSub}>{edu.major} {edu.period && `• ${edu.period}`}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Experience */}
              {experiences.some(e => e.company) && (
                <div className={styles.previewSection}>
                  <div className={styles.previewSectionTitle}>Kinh nghiệm</div>
                  {experiences.filter(e => e.company).map((exp, i) => (
                    <div key={i} className={styles.previewItem}>
                      <div className={styles.previewItemTitle}>{exp.position || exp.company}</div>
                      <div className={styles.previewItemSub}>{exp.company} {exp.period && `• ${exp.period}`}</div>
                      {exp.description && <p className={styles.previewItemDesc}>{exp.description}</p>}
                    </div>
                  ))}
                </div>
              )}

              {/* Skills */}
              {skills.length > 0 && (
                <div className={styles.previewSection}>
                  <div className={styles.previewSectionTitle}>Kỹ năng</div>
                  <div className={styles.previewSkills}>
                    {skills.map(s => (
                      <span key={s} className={styles.previewSkillTag}>{s}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* Certifications */}
              {certifications.some(c => c.name) && (
                <div className={styles.previewSection}>
                  <div className={styles.previewSectionTitle}>Chứng chỉ</div>
                  {certifications.filter(c => c.name).map((cert, i) => (
                    <div key={i} className={styles.previewItem}>
                      <div className={styles.previewItemTitle}>{cert.name}</div>
                      <div className={styles.previewItemSub}>{cert.issuer} {cert.year && `• ${cert.year}`}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Export Actions */}
          <div className={styles.exportActions}>
            <button className={styles.btnExport} onClick={() => window.print()}>
              <DownloadIcon style={{ fontSize: 18 }} />
              Tải CV (PDF)
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateCV
