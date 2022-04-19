import React, { Component } from 'react';
import about from "../images/about.png";
import '../styles/style.css';
import Navbar from '../inc/Navbar';
import Footer from '../inc/Footer';

class About extends Component{
    render(){
        return(
          <>
            <Navbar/>
            <div className="container-xxl bg-white p-0">
            <section className="container py-4 p-3">
              <div className="row justify-content-center" style={{marginTop : "6rem"}}>
                <div className="col-md-11">
                  <div className="row">
                    <div className="col-md-7">
                      <h1 className="what">TENTANG RAPILAH</h1> <br/>
                      <p className="text-secondary">
                        <img className="w-100 d-block d-md-none mb-3" src={about} alt="Tentang kami"   style={{borderRadius : "1.5rem"}} />
                        Rapilah didirikan pada tahun 2021. Saat ini, Rapilah merupakan platform olah sampah yang dikelola oleh PT. Media Kreasi Abadi Balikpapan. Platform ini difokuskan kepada warga atau mitra yang tinggal atau bekerja di Balikpapan. <br/> <br/> 
                        PT. Media Kreasi Abadi menjadi perusahaan yang mengembangkan aplikasi pengelola sampah secara online yaitu aplikasi Rapilah. Aplikasi ini difokuskan
                      </p>
                    </div>
                    <div className="col-md-5 d-none d-md-block text-end">
                      <img className="w-100" src={about} alt="Tentang kami" style={{borderRadius : "1.5rem"}}/>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-md-5 d-none d-md-block text-start">
                      <img className="w-100" src="https://images.unsplash.com/photo-1604631698209-c105c7874ea8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=359&q=80" alt="Tentang kami" style={{borderRadius : "1.5rem"}} />
                    </div>
                    <div className="col-md-7">
                      <h1 className="what">VISI & MISI RAPILAH</h1> <br/>
                      <p className="text-secondary">
                        <img
                          className="w-100 d-block d-md-none mb-3"
                          src="https://images.unsplash.com/photo-1604631698209-c105c7874ea8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=359&q=80"
                          alt="Tentang kami"
                           style={{borderRadius : "1.5rem"}}
                        />
                       Visi & Misi kami adalah Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et rutrum mi, ac maximus risus. Sed varius iaculis commodo. Nam eleifend tortor quis neque rhoncus, in vestibulum lacus mollis. Ut dapibus vel dui at luctus. Phasellus facilisis orci nec aliquam consectetur <br/><br/>
                       In hac habitasse platea dictumst. Sed ut lorem elit. Sed vestibulum, ante id scelerisque scelerisque, metus turpis porta enim, pulvinar ornare massa nisi quis est. Nulla ultricies auctor nisl, 
                      </p>
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
}

export default About;