import React from 'react';
// import logo from '../assets/logo-footer.svg'
// import fb from '../assets/fb.svg'
// import ig from '../assets/instagram.svg'
// import logo2 from "../assets/logo2.svg"
import fb from "../images/fb.svg";
import ig from "../images/ig.svg";
import ps from "../images/ps.svg";
import { Link } from 'react-router-dom';
import { useWindowSize } from '../../context/AppContext';

export default function Footer() {
    const { width } = useWindowSize()

    const [isMobile, setIsMobile] = React.useState(width <= 440 ? true : false)

    React.useEffect(() => {
        setIsMobile(width <= 440 ? true : false)
    }, [width])
    
    return(
    <section className="section-footer">
        <footer>
            <div className="container pt-5">
                <div className="row">
                    {isMobile ? (
                        <>
                            <div className="col">
                                <div className="wrapper-col-1 mb-3">
                                    <h6>Home</h6>
                                    <Link to="#">Apa yang kita lakukan</Link>
                                    <Link to="#">Layanan</Link>
                                    <Link to="#">Kenapa Rapilah?</Link>
                                    <Link to="#">Pertanyaan Umum</Link>
                                </div>
                                <div className="wrapper-col-3 mb-3">
                                    <h6>Layanan</h6>
                                    <Link to="#">Pick Up</Link>
                                    <Link to="#">Drop Off</Link>
                                    <Link to="#">Company</Link>
                                    <Link to="#">Cara Download</Link>
                                </div>
                                <div className="wrapper-col-5">
                                    <h6>Login</h6>
                                    <Link to="#">Login Admin</Link>
                                    <Link to="#">Login User</Link >
                                </div> 
                            </div>
                            <div className="col">
                                <div className="wrapper-col-2" style={{marginBottom: '80px'}}>
                                    <h6>Tentang Kami</h6>  
                                    <Link to="#">Tentang Rapilah</Link>
                                    <Link to="#">Reduce,Reuse,Recycle</Link>
                                </div>
                                <div className="wrapper-col-4" style={{marginBottom: '70px'}}>
                                    <h6>Cara Pakai</h6>
                                    <Link to="#">Mulai Download</Link>
                                    <Link to="#">Mulai Aplikasi</Link>
                                </div>
                                <div className="col">
                                    <div className="wrapper-col-6">
                                        <h6>Ikuti Kami</h6>
                                    </div>
                                    <div className="wrapper-icon d-flex">
                                        <Link to="#"><img src={ig} alt=""/></Link>
                                        <Link to="#"><img src={fb} alt=""/></Link>
                                    </div>
                                </div>
                                
                            </div>

                            <div className="row" style={{color: '#fff', fontWeight: 'bold', marginTop: '50px'}}>
                                <div className="col-6">
                                    <h4 style={{marginTop: '10px', fontWeight: 'bolder'}}>Download App</h4>
                                </div>
                                <div className="col-6">
                                    <div className="wrapper-icon2">
                                        <Link to="#"><img src={ps} alt=""/></Link>
                                    </div>
                                </div>
                            </div>
                            
                        </>
                    ) : (
                        <>
                            <div className="col">
                                <div className="wrapper-col-1 mb-3">
                                    <h6>Home</h6>
                                    <Link to="#">Apa yang kita lakukan</Link>
                                    <Link to="#">Layanan</Link>
                                    <Link to="#">Kenapa Rapilah?</Link>
                                    <Link to="#">Pertanyaan Umum</Link>
                                </div>
                            </div>
                            <div className="col">
                                <div className="wrapper-col-2">
                                    <h6>Tentang Kami</h6>  
                                    <Link to="#">Tentang Rapilah</Link>
                                    <Link to="#">Reduce,Reuse,Recycle</Link>
                                </div>
                            </div>
                            <div className="col">
                                <div className="wrapper-col-3">
                                    <h6>Layanan</h6>
                                    <Link to="#">Pick Up</Link>
                                    <Link to="#">Drop Off</Link>
                                    <Link to="#">Company</Link>
                                    <Link to="#">Cara Download</Link>
                                </div>
                            </div>
                            <div className="col">
                                <div className="wrapper-col-4">
                                    <h6>Cara Pakai</h6>
                                    <Link to="#">Mulai Download</Link>
                                    <Link to="#">Mulai Aplikasi</Link>
                                </div>
                            </div>
                            <div className="col">
                                <div className="wrapper-col-5">
                                    <h6>Login</h6>
                                    <Link to="#">Login Admin</Link>
                                    <Link to="#">Login User</Link >
                                </div> 
                            </div>
                            <div className="col">
                                <div className="wrapper-col-6">
                                    <h6>Ikuti Kami</h6>
                                </div>
                                <div className="wrapper-icon d-flex">
                                    <Link to="#"><img src={ig} alt=""/></Link>
                                    <Link to="#"><img src={fb} alt=""/></Link>
                                </div>
                            </div>
                            <div className="col">
                                <div className="wrapper-col-7">
                                    <h6>Download App</h6>
                                </div>
                                <div className="wrapper-icon2">
                                    <Link to="#"><img src={ps} alt=""/></Link>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </footer>
    </section>
    )
}
