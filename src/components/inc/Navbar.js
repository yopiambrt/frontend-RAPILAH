import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AppContext';
import logo from "../images/rapilah.svg";
import Logo from '../../assets/images/logo/rapilah.png'
import '../styles/style.css';


export default function Navbar() {
    const { user } = useAuth()
    const [sidebar, setSidebar] = React.useState(false)

    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light shadow-sm fixed-top" style={{ backgroundColor: 'white' }}>
            <div className="container">
                <Link to="/" className="navbar-brand"><img src={logo} alt="logo" className="logonav" width="170" height="65" /></Link>
                <button className="navbar-toggler" type="button" onClick={() => setSidebar(true)} aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    {/* data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" */}
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                    <NavLink exact to="/" className="nav-link ms-4" activeClassName="nav-link-active" aria-current="page">Beranda</NavLink>
                    <NavLink exact to="/about" className="nav-link  ms-4" activeClassName="nav-link-active">Tentang Kami</NavLink>
                    <NavLink exact to="/service" className="nav-link ms-4" activeClassName="nav-link-active">Layanan</NavLink>
                    <NavLink exact to="/tutorial" className="nav-link ms-4" activeClassName="nav-link-active">Cara Pakai</NavLink>
                    <div className="nav-item dropdown ms-auto">
                        <NavLink exact to="/bahasa" className="nav-link dropdown-toggle ms-4" activeClassName="nav-link-active" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Bahasa
                        </NavLink>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <NavLink to="/indo" className="dropdown-item">Indonesia</NavLink>
                            <NavLink to="/indo" className="dropdown-item">Inggris</NavLink>
                        </ul>
                    </div>
                    <NavLink exact to="/login" className="nav-link ms-4" activeClassName="nav-link-active">{user ? `Dashboard: ${user?.user?.name}` : 'Login'}</NavLink>
                    </div>
                </div>
            </div>
        </nav>
        <div style={{width: '30%', height: '1500px', opacity: '75%', backgroundColor: 'black',position: 'fixed', top: 0, left: 0, zIndex: 1099, display: `${sidebar ? '': 'none'}`}} onClick={() => setSidebar(false)}>
        </div>
        <div className="bg-white h-100" style={{position: 'fixed', top: 0, right: 0, width: '70%', zIndex: 1099, textDecoration: 'none', display: `${sidebar ? '': 'none'}`}} id="sidebar-wrapper">
                <div className="sidebar-heading bg-light" style={{paddingBottom: '30px'}}><img src={Logo} alt="Rapilah" srcSet=""/></div>
                <div className="list-group list-group-flush">
                    <Link to="/" className="list-group-item list-group-item-action list-group-item-light">Beranda</Link>
                    <Link to="/about" className="list-group-item list-group-item-action list-group-item-light">Tentang Kami</Link>
                    <Link to="/service" className="list-group-item list-group-item-action list-group-item-light">Layanan</Link>
                    <Link to="/tutorial" className="list-group-item list-group-item-action list-group-item-light">Cara Pakai</Link>
                    <div className="list-group-item list-group-item-action list-group-item-light" id="navbarDropdown2" data-bs-toggle="dropdown"  role="button">
                        <div className="nav-item dropdown">
                            <div className="nav-link dropdown-toggle" activeClassName="nav-link-active" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: 'inherit', padding: '0'}}>
                            Bahasa
                            </div>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
                                <NavLink to="/indo" className="dropdown-item">Indonesia</NavLink>
                                <NavLink to="/indo" className="dropdown-item">Inggris</NavLink>
                            </ul>
                        </div>
                    </div>
                    <Link to="/login" className="list-group-item list-group-item-action list-group-item-light">Login</Link>
                </div>
            </div>
        </>
    )
}
