import { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import Chip from '@mui/material/Chip'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CancelIcon from '@mui/icons-material/Cancel'
import VisibilityIcon from '@mui/icons-material/Visibility'
import BusinessIcon from '@mui/icons-material/Business'
import PendingIcon from '@mui/icons-material/Pending'
import VerifiedIcon from '@mui/icons-material/Verified'
import SearchIcon from '@mui/icons-material/Search'
import styles from './index.module.css'

const mockCompanies = [
  {
    id: 'comp-001',
    tax_code: '0108888888',
    company_name: 'CÔNG TY CỔ PHẦN CÔNG NGHỆ TOPCV VIỆT NAM',
    international_name: 'TOPCV VIETNAM TECHNOLOGY JSC',
    director: 'Thái Trí Hùng',
    phone_number: '02466805588',
    email: 'contact@topcv.vn',
    status: 'APPROVED',
    company_size: '500-1000 nhân viên',
  },
  {
    id: 'comp-002',
    tax_code: '0316789012',
    company_name: 'CÔNG TY TNHH GIẢI PHÁP PHẦN MỀM GLOBAL LOGISTICS',
    international_name: 'GLOBAL LOGISTICS SOFTWARE SOLUTIONS CO., LTD',
    director: 'Nguyễn Văn An',
    phone_number: '0909123456',
    email: 'hr@globallogistics.io',
    status: 'PENDING',
    company_size: '100-499 nhân viên',
  },
  {
    id: 'comp-003',
    tax_code: '0301234567',
    company_name: 'CÔNG TY CỔ PHẦN FPT',
    international_name: 'FPT CORPORATION',
    director: 'Nguyễn Văn Khoa',
    phone_number: '024 7300 6789',
    email: 'hr@fpt.com.vn',
    status: 'APPROVED',
    company_size: '5000+ nhân viên',
  },
  {
    id: 'comp-004',
    tax_code: '0305678901',
    company_name: 'CÔNG TY CỔ PHẦN VÀNG BẠC ĐÁ QUÝ PHÚ NHUẬN',
    international_name: 'PHU NHUAN JEWELRY JSC',
    director: 'Lê Trí Thông',
    phone_number: '028 3995 1703',
    email: 'hr@pnj.com.vn',
    status: 'APPROVED',
    company_size: '1000-5000 nhân viên',
  },
]

const columns = [
  {
    field: 'tax_code',
    headerName: 'MST',
    width: 120,
    renderCell: (params) => (
      <span style={{ fontFamily: 'monospace', fontWeight: 500 }}>{params.value}</span>
    )
  },
  {
    field: 'company_name',
    headerName: 'Tên công ty',
    flex: 1,
    minWidth: 250,
    renderCell: (params) => (
      <div>
        <div style={{ fontWeight: 600, fontSize: 13, lineHeight: 1.3 }}>{params.value}</div>
        <div style={{ fontSize: 11, color: '#999' }}>{params.row.international_name}</div>
      </div>
    )
  },
  {
    field: 'director',
    headerName: 'Giám đốc',
    width: 150,
  },
  {
    field: 'phone_number',
    headerName: 'SĐT',
    width: 130,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 180,
    renderCell: (params) => (
      <span style={{ color: '#1976d2', fontSize: 13 }}>{params.value}</span>
    )
  },
  {
    field: 'company_size',
    headerName: 'Quy mô',
    width: 150,
  },
  {
    field: 'status',
    headerName: 'Trạng thái',
    width: 130,
    renderCell: (params) => (
      <Chip
        label={params.value === 'APPROVED' ? 'Đã duyệt' : 'Chờ duyệt'}
        size="small"
        sx={{
          fontWeight: 600,
          fontSize: 12,
          backgroundColor: params.value === 'APPROVED' ? '#e8f5e9' : '#fff8e1',
          color: params.value === 'APPROVED' ? '#2e7d32' : '#f57f17',
          borderColor: params.value === 'APPROVED' ? '#a5d6a7' : '#ffe082',
          border: '1px solid',
        }}
      />
    )
  },
  {
    field: 'actions',
    headerName: 'Thao tác',
    width: 140,
    sortable: false,
    renderCell: (params) => (
      <div style={{ display: 'flex', gap: 4 }}>
        <Tooltip title="Xem chi tiết">
          <IconButton size="small" sx={{ color: '#1976d2' }}>
            <VisibilityIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        {params.row.status === 'PENDING' ? (
          <>
            <Tooltip title="Duyệt">
              <IconButton size="small" sx={{ color: '#2e7d32' }}>
                <CheckCircleIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Từ chối">
              <IconButton size="small" sx={{ color: '#d32f2f' }}>
                <CancelIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </>
        ) : (
          <Tooltip title="Đã duyệt">
            <IconButton size="small" disabled>
              <VerifiedIcon fontSize="small" sx={{ color: '#a5d6a7' }} />
            </IconButton>
          </Tooltip>
        )}
      </div>
    )
  },
]

function AdminCompanies() {
  const [search, setSearch] = useState('')

  const filteredCompanies = mockCompanies.filter(c =>
    c.company_name.toLowerCase().includes(search.toLowerCase()) ||
    c.tax_code.includes(search)
  )

  const approved = mockCompanies.filter(c => c.status === 'APPROVED').length
  const pending = mockCompanies.filter(c => c.status === 'PENDING').length

  return (
    <div className={styles.page}>
      {/* Stats */}
      <div className={styles.statsRow}>
        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.statIconBlue}`}>
            <BusinessIcon />
          </div>
          <div>
            <div className={styles.statNumber}>{mockCompanies.length}</div>
            <div className={styles.statLabel}>Tổng công ty</div>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.statIconGreen}`}>
            <VerifiedIcon />
          </div>
          <div>
            <div className={styles.statNumber}>{approved}</div>
            <div className={styles.statLabel}>Đã duyệt</div>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.statIconYellow}`}>
            <PendingIcon />
          </div>
          <div>
            <div className={styles.statNumber}>{pending}</div>
            <div className={styles.statLabel}>Chờ duyệt</div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className={styles.header}>
        <div className={styles.titleGroup}>
          <h1>Quản lý Công ty</h1>
          <p>Duyệt và quản lý danh sách công ty đăng ký trên hệ thống</p>
        </div>
        <div className={styles.searchBar}>
          <SearchIcon style={{ color: '#999' }} />
          <input
            className={styles.searchInput}
            placeholder="Tìm theo tên công ty hoặc MST..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* DataGrid */}
      <div className={styles.gridWrapper}>
        <DataGrid
          rows={filteredCompanies}
          columns={columns}
          initialState={{
            pagination: { paginationModel: { pageSize: 10 } }
          }}
          pageSizeOptions={[5, 10, 25]}
          disableRowSelectionOnClick
          autoHeight
          getRowHeight={() => 64}
          sx={{
            border: 'none',
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: '#f8f9fa',
              borderBottom: '2px solid #e8e8e8',
              fontWeight: 700,
              fontSize: 13,
            },
            '& .MuiDataGrid-cell': {
              fontSize: 13,
              borderBottom: '1px solid #f0f0f0',
              display: 'flex',
              alignItems: 'center',
            },
            '& .MuiDataGrid-row:hover': {
              backgroundColor: '#f0faf4',
            },
            '& .MuiDataGrid-footerContainer': {
              borderTop: '2px solid #e8e8e8',
            }
          }}
        />
      </div>
    </div>
  )
}

export default AdminCompanies
