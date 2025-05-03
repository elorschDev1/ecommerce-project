// eslint-disable-next-line no-unused-vars
import React from 'react'
import AddToCart from './AddToCart'
const UpgradedDetails = () => {
  return (
    <>
    <div id="upgradedSlides" className="carousel slide d-flex justify-content-center align-items-center" data-bs-ride="carousel">
    <div className="carousel-indicators">
    <button type="button" data-bs-target="#upgradedSlides" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#upgradedSlides" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#upgradedSlides" data-bs-slide-to="2"></button>
    <button type="button" data-bs-target="#upgradedSlides" data-bs-slide-to="3"></button>
    <button type="button" data-bs-target="#upgradedSlides" data-bs-slide-to="4"></button>
    </div>
    <div className="carousel-inner w-50">
    <div className="carousel-item active">
    <img src="upgraded10.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="upgraded2.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="upgraded3.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="upgraded4.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="upgraded5.jpg" className="d-block w-100"/>
    </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#upgradedSlides" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#upgradedSlides" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
    </button>
    </div>
    <div className="d-flex justify-content-center align-items-center text-white flex-column">
     <div className="w-50">
    <h1>Movie Description</h1>
    <p>An aspiring art intern is invited on a last minute work trip to London, where she meets a handsome stranger.</p>
    </div> 
    <div className="Upgraded"> <AddToCart/></div>
    </div>
    </>
  )
}

export default UpgradedDetails
