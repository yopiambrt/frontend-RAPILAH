import React from 'react';
import background from "../images/pickup.svg"
import background2 from "../images/dropoff.svg"
import background3 from "../images/company.svg"
import mockup from "../images/mockup4.svg"
import Navbar from '../inc/Navbar'
import Footer from '../inc/Footer';
import { useWindowSize } from '../../context/AppContext';
import '../styles/style.css';

export default function Service() {
  const { width } = useWindowSize()

    const [isMobile, setIsMobile] = React.useState(width <= 440 ? true : false)

    React.useEffect(() => {
        setIsMobile(width <= 440 ? true : false)
    }, [width])
  return(
    <>
      <Navbar/>
      <div className="container-xxl bg-white p-0">
        <section className="container py-5 p-3 px-lg-5">
          <div className="row justify-content-center" style={{marginTop : "6rem"}}>
            <div className="col-md-9">
              <div style={{backgroundImage : `url(${background})`}} className="service-card mb-5">
                <div className="service-title">Pick Up</div>
                <div className="service-desc">
                Pick Up adalah layanan dimana customer mengupload foto sampah pada aplikasi Rapilah, lalu sampah akan diambil oleh kolektor Rapilah terderkat dengan lokasimu. Dapatkan poin yang juga bisa ditukarkan menjadi uang, pulsa, ataupun merchandise dari Rapilah.
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div style={{backgroundImage : `url(${background2})`}} className="service-card mb-5">
                <div className="service-title">Drop Off</div>
                <div className="service-desc">
                Drop Off adalah layanan dimana customer mengantarkan sampahnya langsung ke Recycle Centre terdekat. Customer hanya perlu mengupload foto sampah. Sama seperti fitur Pick Up, hasil dari penjualannya akan di konversi menjadi poin yang bisa ditukarkan.
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div  style={{backgroundImage : `url(${background3})`}} className="service-card mb-5">
                <div className="service-title">Company</div>
                <div className="service-desc">
                Company adalah layanan dimana Recycle Centre bekerja sama dengan pihak perusahaan yang terdaftar. Dengan fitur company, perusahaan/lembaga bisa memilih kapan kolektor akan datang mengambil sampah ke lokasimu setiap minggunya.
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row align-items-center">
              <div className={`col-lg-5 col-md-12 ${isMobile ? '' : 'text-sec'}`}>
              <h2 className="download py-2">Cara Download</h2>
                <p className="down2 mt-2">Pertama buka aplikasi Playstore. 
                Ketik di pencarian “Rapilah”.
                Pilih, lalu download aplikasinya. <br/> <br/> 

                Atau kalian bisa buka website Rapilah.com 
                Lalu klik tombol download yang ada di beranda website.
                Kalian akan dialiihkan ke halaman Playstore.</p>
                  <button className="main-btn mt-2">Selengkapnya<i className="fas fa-angle-right ps-3"></i></button>
              </div>
              <div className="col-lg-7 col-md-12 mb-lg-0 mb-5">
                <div className="card5 border-0">
                  <img src={mockup} className="img-fluid" alt="user"/>
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
