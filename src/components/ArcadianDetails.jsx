// eslint-disable-next-line no-unused-vars
import React from 'react'
import AddToCart from './AddToCart';
const ArcadianDetails = () => {
  return (
    <>
    <div id="arcadianSlides" className="carousel slide d-flex flex-column justify-content-center align-items-center" data-bs-ride="carousel">
    <div className="carousel-indicators">
    <button type="button" data-bs-target="#arcadianSlides" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#arcadianSlides" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#arcadianSlides" data-bs-slide-to="2"></button>
    <button type="button" data-bs-target="#arcadianSlides" data-bs-slide-to="3"></button>
    <button type="button" data-bs-target="#arcadianSlides" data-bs-slide-to="4"></button>
    </div>
    <div className="carousel-inner w-50">
    <div className="carousel-item active">
    <img src="arcadian1.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="arcadian2.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="arcadian3.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="arcadian4.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="arcadian5.jpg" className="d-block w-100"/>
    </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#arcadianSlides" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#arcadianSlides" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
    </button>
    </div>
    <div className="d-flex  justify-content-center align-items-center text-white flex-column">
      <div className="w-50">
    <h1>Movie Description</h1>
    <p>In the near future on a decimated earth, Paul and his twin sons face a terror at night when  ferocious creatures awaken. When Paul is nearly killed , the boys come up with a plan for survival, using everything their father taught them to keep him alive.</p>
    </div> 
    <div className="Arcadian"> <AddToCart/></div>
    </div>
  
    </>
  )
}

export default ArcadianDetails
