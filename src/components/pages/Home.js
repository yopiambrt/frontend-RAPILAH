import React from 'react'
import logo1 from "../images/logobaruu.svg"
import text from "../images/text1.svg"
import background from "../images/hero1.svg"
import background2 from "../images/bg-hero2.svg"
import card1 from "../images/card1.svg"
import card2 from "../images/card2.svg"
import card3 from "../images/card3.svg"
import service1 from "../images/service1.svg"
import service3 from "../images/service3.svg"
import service2 from "../images/service2.svg"
import service4 from "../images/service4.svg"
import icon1 from "../images/icon1.svg"
import icon2 from "../images/icon2.svg"
import icon3 from "../images/icon3.svg"
import icon4 from "../images/icon4.svg"
import Navbar from '../inc/Navbar'
import Footer from '../inc/Footer'
import { useWindowSize } from '../../context/AppContext';

export default function Home(){
    const { width } = useWindowSize()
    const [isMobile, setIsMobile] = React.useState(width <= 440 ? true : false)

    React.useEffect(() => {
        setIsMobile(width <= 440 ? true : false)
    }, [width])

    return(
        <>
            <Navbar/>
                <div className="container-xxl bg-white p-0">
                    <section id="hero1">
                        <div className="container-fluid">
                            <div className="row bg-hero1" style={{backgroundImage : `url(${!isMobile && background})`, marginTop : "2rem"}}>
                                <div className="main-konten text-center top">
                                    <img src={logo1} alt="logo-hero1" width='400' height="200"  style={{marginTop : "4rem", marginLeft: "3rem"}} /> <br/>
                                    <img src={text} alt="text" className="text"  width="180" height="140"  style={{marginTop : "-1rem", marginLeft: "2rem"}} />
                                    <p className="mt-3">Ubah sampahmu menjadi cuan dengan aplikasi Rapilah.id</p>
                                    <button type="button" className="main-btn">Download Sekarang <i className="fas fa-download ps-3"></i></button>
                                </div>
                                
                            </div>
                        </div>
                    </section>
                    <section id="hero2" className="bg">
                        <div className="container-fluid overflow-hidden mt-5 hero2"  style={{backgroundImage : `url(${background2})`, height : "40rem", width : "auto"}}>
                            <div className="row justify-content-center" style={{marginBottom : "5rem"}}>
                        
                                <div className="col-md-4">
                                    <div className="box">
                                        <h1 className="textabout">Tentang Kami</h1>
                                        <p className="text1">Rapilah adalah aplikasi pihak ketiga yang menyambungkan antara mitra dan juga masyarakat untuk memudahkan mereka mengelola sampahnya.</p>
                                    </div>
                                </div>
                        
                                <div className="col-md-4">
                                    <div className="box ms">
                                        <h1 className="text-end">Dimana?</h1>
                                        <p className="text2 text-end">Untuk saat ini aplikasi Rapilah hanya mencakup kawasan kota Kalimantan, tepatnya di Balikpapan</p>
                                    </div>
                                </div>
                            </div>
                            <div className="button text-center mb-5"><button type="button" className="white-btn mt-5">Selengkapnya<i className="fas fa-angle-right ps-3"></i></button></div>
                        </div>
                    </section>
                    <section id="hero3">
                        <div className="container hero3">
                            <h1 className="text-center what">Apa yang Kita Lakukan?</h1>
                            <div className="row justify-content-center mt-4">
                                <div className="col-md-3 mt-2 d-flex align-items-stretch">
                                    <div className="card">
                                        <img src={card1} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Mendaur Ulang Sampah</h5>
                                            <p className="card-text">Kami membuat aplikasi pihak ketiga untuk menyambungkan antara mitra dan juga masyarakat untuk memudahkan mereka mengelola sampahnya.</p>
                                        </div>
                                    </div>
                                </div>
                            
                                <div className="col-md-3 mt-2 ms-md-4 d-flex align-items-stretch">
                                    <div className="card">
                                        <img src={card2} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Mengelola Sampah</h5>
                                            <p className="card-text">Kami membantu mengelola sampah masyarakat untuk diolah</p>
                                        </div>
                                    </div>
                                </div>
                            
                                <div className="col-md-3 mt-2 ms-md-4 d-flex align-items-stretch">
                                    <div className="card">
                                        <img src={card3} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Melestarikan Lingkungan</h5>
                                            <p className="card-text">Dengan adanya Rapilah.id membantu masyarakat melestarikan lingkungan dan juga terbebas dari sampah.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="hero4">
                        <div className="container mt-5">
                            <h1 className="text-center what">Layanan</h1>
                            <div className="row justify-content-center">
                        
                                <div className="col-md-5">
                                    <div className="card overflow-hidden text-white service mt-4">
                                        <img src={service1} className="card-img" alt="..." />
                                        <div className="card-img-overlay">
                                            <h1 className="text-white text-service">Pick up</h1>
                                        </div>
                                    </div>
                                
                                    <div className="card overflow-hidden text-white mt-4">
                                        <img src={service3} className="card-img" alt="..." />
                                        <div className="card-img-overlay">
                                            <h1 className="text-white text-service">Company</h1>
                                        </div>
                                    </div>
                                </div>
                            
                                <div className="col-md-5">
                                    <div className="card overflow-hidden text-white mt-4">
                                        <img src={service2} className="card-img" alt="..." />
                                        <div className="card-img-overlay">
                                            <h1 className="text-white text-service">Drop Off</h1>
                                        </div>
                                    </div>
                                
                                    <div className="card overflow-hidden text-white mt-4">
                                        <img src={service4} className="card-img" alt="..." />
                                        <div className="card-img-overlay">
                                            <h1 className="text-white text-service">Rp point</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="hero5">
                        <div className="container mt-5">
                            <h1 className="text-center what">Kenapa Rapilah?</h1>
                            <div className="row justify-content-center">
                                <div className="col-md-11">
                                    <div className="row justify-content-center px-3">
                                        <div className="px-4 py-2 p-xl-4 col-md-6 col-xl-3 d-flex align-items-stretch mt-2">
                                            <div className="card-why row p-3">
                                                <div className="col-12 d-flex align-items-center">
                                                    <img src={icon1} className="icon" alt="Card" />
                                                    <h3 className="ms-3">Praktis</h3>
                                                </div>
                                                <div className="col-12 mt-3">Pengelolaan data dilakukan secara digital & dapat meningkatkan paperless activity.</div>
                                            </div>
                                        </div>
            
                                    
                                        <div className="px-4 py-2 p-xl-4 col-md-6 col-xl-3 d-flex align-items-stretch mt-2">
                                            <div className="card-why row p-3">
                                                <div className="col-12 d-flex align-items-center">
                                                    <img src={icon2} className="icon" alt="Card" />
                                                    <h3 className="ms-3">Fitur</h3>
                                                </div>
                                                <div className="col-12 mt-3">Fitur di aplikasi Rapilah yang lengkap dan juga simple memudahkan user untuk memakai aplikasinya.</div>
                                            </div>
                                        </div>
            
                                        <div className="px-4 py-2 p-xl-4 col-md-6 col-xl-3 d-flex align-items-stretch mt-2">
                                            <div className="card-why row p-3">
                                                <div className="col-12 d-flex align-items-center">
                                                    <img src={icon3} className="icon" alt="Card" />
                                                    <h3 className="ms-3">Aman</h3>
                                                </div>
                                                <div className="col-12 mt-3">Untuk keamanan data Anda, Rapilah.id menggunakan SSL/TLS untuk transaksi data dan enkripsi untuk penyimpanan data</div>
                                            </div>
                                        </div>
            
                            
                                        <div className="px-4 py-2 p-xl-4 col-md-6 col-xl-3 d-flex align-items-stretch mt-2">
                                            <div className="card-why row p-3">
                                                <div className="col-12 d-flex align-items-center">
                                                    <img src={icon4} className="icon" alt="Card" />
                                                    <h3 className="ms-3">Mobile App</h3>
                                                </div>
                                                <div className="col-12 mt-3">Dengan menggunakan smartphone berbasis Android, Rapilah dapat melakukan transaksi dengan mudah dan nyaman</div>
                                            </div>
                                        </div>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="container-fluid mt-5">
                            <h1 className="text-center mb-5 what">Pertanyaan Umum</h1>
                            <div className="row justify-content-center">
                                <div className="col-md-10">
                                    <div className="row">
                                
                                        <div className="col-md-4 mb-4 mb-lg-5 px-md-4">
                                            <a className="h5 text-decoration-none mb-3 mb-lg-4" data-bs-toggle="collapse" href="#pertanyaan1"  style={{color : "#091133"}}>Kenapa harus pilih aplikasi Rapilah?
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0b9444" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </a>
                                            <div id="pertanyaan1" className="collapse mt-2">Rapilah memudahkan pengguna mengelola sampah secara online, juga membantu menghubungkan pengguna dengan petugas kebersihan.</div>
                                        </div>
                                
                                        <div className="col-md-4 mb-4 mb-lg-5 px-md-4">
                                            <a className="h5 text-decoration-none mb-3 mb-lg-4" data-bs-toggle="collapse" href="#pertanyaan2" style={{color : "#091133"}}>Apakah keamanan aplikasi Rapilah terpercaya?
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0b9444" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </a>
                                            <div id="pertanyaan2" className="collapse mt-2">Keamanan dan privasi anda dijamin aman di aplikasi Rapilah.</div>
                                        </div>
                                
                                        <div className="col-md-4 mb-4 mb-lg-5 px-md-4">
                                            <a className="h5 text-decoration-none  mb-3 mb-lg-4" data-bs-toggle="collapse" href="#pertanyaan3" style={{color : "#091133"}}>Bagaimana sistem penjemputan sampah di aplikasi Rapilah?
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0b9444" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </a>
                                            <div id="pertanyaan3" className="collapse mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, tempora.</div>
                                        </div>
                                
                                        <div className="col-md-4 mb-4 mb-lg-5 px-md-4">
                                            <a className="h5 text-decoration-none mb-3 mb-lg-4" data-bs-toggle="collapse" href="#pertanyaan4" style={{color : "#091133"}}>Jenis sampah apa saja yang bisa dijual?
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0b9444" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </a>
                                            <div id="pertanyaan4" className="collapse mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, tempora.</div>
                                        </div>
                                    
                                        <div className="col-md-4 mb-4 mb-lg-5 px-md-4">
                                            <a className="h5 text-decoration-none mb-3 mb-lg-4" data-bs-toggle="collapse" href="#pertanyaan5" style={{color : "#091133"}}>Bagaimana cara menukarkan sampah kita menjadi uang melalui aplikasi Rapilah?
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0b9444" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </a>
                                            <div id="pertanyaan5" className="collapse mt-2">Pengguna hanya perlu melakukan request pickup sampah atau menyetorkannya langsung dengan mendatangi drop point terdekat, lalu setelah sampah dikonfirmasi oleh petugas dan datanya sesuai pengguna akan mendapatkan uang cash atau point yang dapat ditukarkan</div>
                                        </div>
                                
                                        <div className="col-md-4 mb-4 mb-lg-5 px-md-4">
                                            <a className="h5 text-decoration-none mb-3 mb-lg-4" data-bs-toggle="collapse" href="#pertanyaan6" style={{color : "#091133"}}>Berapa lama waktu proses penukaran point?
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0b9444" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </a>
                                            <div id="pertanyaan6" className="collapse mt-2">Pengguna dapat menunggu 2x24 jam agar point mereka dapat di cairkan menjadi beberapa produk pilihan seperti pulsa, marchandise govie ataupun saldo OVO, Gopay, shopeepay.</div>
                                        </div>
                                
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            <Footer/>
        </>
    )
}
