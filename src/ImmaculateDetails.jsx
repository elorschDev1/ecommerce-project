// eslint-disable-next-line no-unused-vars
import React from 'react'
import AddToCart from './AddToCart'

const ImmaculateDetails = () => {
  return (
    <>
    <div id="immaculateSlides" className="carousel slide d-flex flex-column justify-content-center align-items-center" data-bs-ride="carousel">
    <div className="carousel-indicators">
    <button type="button" data-bs-target="#immaculateSlides" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#immaculateSlides" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#immaculateSlides" data-bs-slide-to="2"></button>
    <button type="button" data-bs-target="#immaculateSlides" data-bs-slide-to="3"></button>
    <button type="button" data-bs-target="#immaculateSlides" data-bs-slide-to="4"></button>
    </div>
    <div className="carousel-inner w-50">
    <div className="carousel-item active">
    <img src="immaculate1.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="immaculate2.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="immaculate.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="immaculate4.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="immaculate5.jpg" className="d-block w-100"/>
    </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#immaculateSlides" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#immaculateSlides" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
    </button>
    </div>
    <div className="d-flex flex-column justify-content-center align-items-center text-white">
      <div className="w-50">
    <h1>Movie Description</h1>
    <p>An American nun embarks on a new journey when she joins a remote convent in the Italian countryside. However, her warm welcome quickly turns into a nightmare when she discovers her new home harbours a sinister secret and unspeakable horrors.</p>
    </div> 
    <div className="immaculate"> <AddToCart/></div>
    </div>
  
    </>
  )
}

export default ImmaculateDetails
