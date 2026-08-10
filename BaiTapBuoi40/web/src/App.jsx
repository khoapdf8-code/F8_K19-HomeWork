import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import AuthLayout from './layouts/AuthLayout'

// Pages
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Jobs from './pages/Jobs'
import JobDetail from './pages/JobDetail'
import CreateJob from './pages/CreateJob'
import CreateCV from './pages/CreateCV'
import Companies from './pages/Companies'
import AdminCompanies from './pages/AdminCompanies'

function App() {
  return (
    <Routes>
      {/* Public routes with Header + Footer */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/viec-lam" element={<Jobs />} />
        <Route path="/viec-lam/:slug" element={<JobDetail />} />
        <Route path="/cong-ty" element={<Companies />} />
        <Route path="/mau-cv" element={<CreateCV />} />
        <Route path="/employer/tao-tin" element={<CreateJob />} />
        <Route path="/admin/cong-ty" element={<AdminCompanies />} />
      </Route>

      {/* Auth routes without Header/Footer */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
      </Route>
    </Routes>
  )
}

export default App
