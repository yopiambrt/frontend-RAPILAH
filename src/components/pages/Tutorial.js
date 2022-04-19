import React, { useState } from 'react';
import Navbar from '../inc/Navbar'
import Footer from '../inc/Footer';
import { useWindowSize } from '../../context/AppContext';
import '../styles/carapakai.css';
import tr1 from "../images/tr1.png";
import tr2 from "../images/tr2.png";
import tr3 from "../images/tr3.png";
import tr4 from "../images/tr4.png";
import tr5 from "../images/tr5.png";
import tr6 from "../images/tr6.png";
import mbtr1 from "../images/1.jpg"
import mbtr2 from "../images/2.jpg"
import mbtr3 from "../images/3.jpg"
import mbtr4 from "../images/4.jpg"
import mbtr5 from "../images/5.jpg"
import mbtr6 from "../images/6.jpg"

export default function Tutorial(){
  const { width } = useWindowSize()
  const [isMobile, setIsMobile] = useState(width <= 440 ? true : false)

  React.useEffect(() => {
    setIsMobile(width <= 440 ? true : false)
  }, [width])

  return(
    <>
    <Navbar/>
    <div className="container-fluid mb-4" style={{marginTop: '120px'}}>
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 3"></button>
    </div>
    {isMobile ? (
      <div className="carousel-inner mt-5">
      <div className="carousel-item active">
        <img src={mbtr1} className="d-block" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={mbtr2} className="d-block" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={mbtr3} className="d-block" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={mbtr4} className="d-block" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={mbtr5} className="d-block" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={mbtr6} className="d-block" alt="..."/>
      </div>
    </div>
    ) : (
    <div className="carousel-inner mt-5">
      <div className="carousel-item active">
        <img src={tr1} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={tr2} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={tr3} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={tr4} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={tr5} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={tr6} className="d-block w-100" alt="..."/>
      </div>
    </div>
    )}
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      </div>
    </div>
    <Footer/>
    </>
  )
}
