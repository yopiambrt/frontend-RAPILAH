import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo/rapilah.png'
import { useAuth } from '../context/AppContext';
// import '../App.css';
// import '../assets/css/bootstrap.css'
// import '../assets/css/app.css';
// import './layout.css'

export default function Layout(props) {
  const { innerWidth: width } = window;
  const { isLoggedIn, user, logout } = useAuth()
  const children = props.children

  const [sidebar, setSidebar] = useState(width >= 1024)

  const handleLogout = () => {
    logout()
    window.location.href = '/login'
  }

  const backToHome = () => {
    window.location.href = '/'
  }

  useEffect(() => {
    const history = props.history
    if(!isLoggedIn()){
      history.push('/login')
    }
  })

  if (
    ['/dashboard', '/riwayat', '/transaksi', '/petugas', '/profile', '/setting']
    .includes(props.location.pathname)
  ) {
    import('../App.css');
    import('../assets/css/bootstrap.css')
    import('../assets/css/app.css')
    import('./layout.css')

  return (
    <>
      <div id="app">
        <div id="sidebar" className={sidebar ? 'active' : ''}>
          <div className="sidebar-wrapper active">
            <div className="sidebar-header">
              <div className="d-flex justify-content-between">
                <div className="logo">
                  <Link to="#" onClick={backToHome}><img src={Logo} alt="Rapilah" srcSet=""/></Link>
                </div>
                <div className="toggler">
                  <div className="sidebar-hide d-xl-none d-block" onClick={() => setSidebar(!sidebar)}><i className="bi bi-x bi-middle"></i></div>
                </div>
              </div>
            </div>
            <div className="sidebar-menu">
              <ul className="menu">
                <li className={`sidebar-item ${props?.location?.pathname === '/dashboard' ? 'active' : ''}`}>
                  <Link to="/dashboard" className="sidebar-link ">
                    <i className="bi bi-house-fill"></i>
                    <span>Dashboard</span>
                  </Link>
                </li>

                <li className={`sidebar-item ${props?.location?.pathname === '/riwayat' ? 'active' : ''}`}>
                  <Link to="/riwayat" className="sidebar-link">
                    <i className="bi bi-chat-square-text"></i>
                    <span>Riwayat</span>
                  </Link>
                </li>

                {`${user?.user?.role}`.toLowerCase() === 'admin' && (
                  <>
                    <li className={`sidebar-item ${props?.location?.pathname === '/transaksi' ? 'active' : ''}`}>
                      <Link to="/transaksi" className="sidebar-link">
                        <i className="bi bi-cash"></i>
                        <span>Transaksi</span>
                      </Link>
                    </li>

                    <li className={`sidebar-item ${props?.location?.pathname === '/petugas' ? 'active' : ''}`}>
                      <Link to="/petugas" className="sidebar-link">
                        <i className="bi bi-people"></i>
                        <span>Petugas</span>
                      </Link>
                    </li>
                  </>
                )}

                <li className={`sidebar-item ${props?.location?.pathname === '/profile' ? 'active' : ''}`}>
                  <Link to="/profile" className="sidebar-link">
                    <i className="bi bi-person"></i>
                    <span>Profile</span>
                  </Link>
                </li>

                <li className={`sidebar-item ${props?.location?.pathname === '/setting' ? 'active' : ''}`}>
                  <Link to="/setting" className="sidebar-link">
                    <i className="bi bi-gear"></i>
                    <span>Settings</span>
                  </Link>
                </li>

                <li className="sidebar-item">
                  <Link to="#" onClick={handleLogout} className="sidebar-link text-danger">
                    <i className="bi bi-box-arrow-right text-danger"></i>
                    <span>Logout</span>
                  </Link>
                </li>
              </ul>
            </div>
            <button className="sidebar-toggler btn x"><i data-feather="x"></i></button>
          </div>
        </div>
        <div id="main" className="layout-navbar">
          <header className="mx-3">
            <nav className="navbar rounded-b-md bg-white navbar-expand navbar-light">
              <div className="container-fluid">
                <div id="burger" className="burger-btn d-block mt-2" onClick={() => setSidebar(!sidebar)}>
                  <i className="bi bi-justify fs-3"></i>
                </div>

                <div className="ms-3 d-none d-md-block">
                  <h1 className="text-green-500 font-poppins">Dashboard</h1>
                  <div className="text-muted" style={{fontWeight: 'lighter'}}>Hi {user?.user?.name}, selamat datang kembali</div>
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item dropdown me-3">
                      <Link to="#" className="nav-link active dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="bi bi-bell bi-sub fs-4 text-gray-600"></i>
                      </Link>
                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                        <li>
                          <h6 className="dropdown-header">Notifications</h6>
                        </li>
                        <li><Link to="#"className="dropdown-item">No notification available</Link></li>
                      </ul>
                    </li>
                  </ul>
                  <div className="dropdown">
                    <div data-bs-toggle="dropdown" aria-expanded="false">
                      <div className="user-menu d-flex align-items-center">
                        <div className="user-img d-flex align-items-center">
                          <div className="avatar avatar-md">
                            <img src="assets/images/faces/7.jpg" alt="gambar a"/>
                          </div>
                        </div>
                        <div className="user-name text-end ms-3">
                          <h6 className="mb-0 text-gray-600 d-flex align-items-center">{user?.user?.name}<i className="bi bi-chevron-down fs-5 ms-2 mb-1"></i></h6>
                        </div>
                      </div>
                    </div>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton" style={{minWidth: '11rem'}}>
                      <li>
                        <h6 className="dropdown-header">Hello, {user?.user?.name}!</h6>
                      </li>
                      <li>
                        <Link to="/profile" className="dropdown-item"><i className="icon-mid bi bi-person me-2"></i> My Profile</Link>
                      </li>
                      <li>
                        <Link to="/setting" className="dropdown-item"><i className="icon-mid bi bi-gear me-2"></i> Settings</Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item"><i className="icon-mid bi bi-wallet me-2"></i> Wallet</Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link to="#" onClick={handleLogout} className="dropdown-item"><i className="icon-mid bi bi-box-arrow-left me-2"></i> Logout</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </header>
          <div id="main-content">
            {children}

            <footer>
              <div className="footer clearfix mb-0 text-muted">
                <div className="float-start">
                  <p>2021 &copy; Rapilah</p>
                </div>
                <div className="float-end">
                  <Link to="#" style={{marginRight: '10px'}}>Hubungi</Link>
                  <Link to="#">Tentang kami</Link>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  )
  }

  return <></>
}