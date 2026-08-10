import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MainLayout({ showSearchBar = false }) {
  return (
    <>
      <Header showSearchBar={showSearchBar} />
      <main style={{ minHeight: 'calc(100vh - 200px)' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default MainLayout
