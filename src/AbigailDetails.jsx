// eslint-disable-next-line no-unused-vars
import React from 'react'
import AddToCart from './AddToCart'
const AbigailDetails = () => {
  return (
    <>
    <div id="abigailSlides" className="carousel slide d-flex flex-column justify-content-center align-items-center" data-bs-ride="carousel">
    <div className="carousel-indicators">
    <button type="button" data-bs-target="#abigailSlides" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#abigailSlides" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#abigailSlides" data-bs-slide-to="2"></button>
    <button type="button" data-bs-target="#abigailSlides" data-bs-slide-to="3"></button>
    <button type="button" data-bs-target="#abigailSlides" data-bs-slide-to="4"></button>
    </div>
    <div className="carousel-inner w-50">
    <div className="carousel-item active">
    <img src="abigail1.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="abigail2.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="abigail3.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="abigail4.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="abigail5.jpg" className="d-block w-100"/>
    </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#abigailSlides" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#abigailSlides" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
    </button>
    </div>
    <div className="d-flex flex-column justify-content-center align-items-center text-white">
     <div className="w-50">
    <h1>Movie Description</h1>
    <p>A group of would be criminals kidnaps the daughter of a powerful underworld figure. Holding her for ransom in an isolated mansion, their plan starts to unravel when they discover their young captive is actually a bloodthirsty vampire. </p>
    </div> 
    <div className="Abigail"><AddToCart/></div> 
    </div>
   
    </>
  )
}

export default AbigailDetails
