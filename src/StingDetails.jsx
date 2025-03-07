// eslint-disable-next-line no-unused-vars
import React from 'react'
import AddToCart from './AddToCart'

const StingDetails = () => {
  return (
    <>
    <div id="stingSlides" className="carousel slide d-flex flex-column justify-content-center align-items-center" data-bs-ride="carousel">
    <div className="carousel-indicators">
    <button type="button" data-bs-target="#stingSlides" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#stingSlides" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#stingSlides" data-bs-slide-to="2"></button>
    <button type="button" data-bs-target="#stingSlides" data-bs-slide-to="3"></button>
    <button type="button" data-bs-target="#stingSlides" data-bs-slide-to="4"></button>
    </div>
    <div className="carousel-inner w-50">
    <div className="carousel-item active">
    <img src="sting1.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="sting2.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="sting3.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="sting4.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="sting5.jpg" className="d-block w-100"/>
    </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#stingSlides" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#stingSlides" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
    </button>
    </div>
    <div className="d-flex  justify-content-center align-items-center text-white flex-column">
      <div className="w-50">
    <h1>Movie Description</h1>
    <p>Charlotte is a rebelious 12 year old girl who finds a spider in her rundown apartment building. She keeps it in a jar, but it soon starts to grow at a monstrous rate and develops an insatiable appetite for blood. As her neighbors begin to disappear, Charlotte and her family find themselves in a desparate fight for their lives against a ravenous arachnid with a taste for human flesh. </p>
    </div>
    <div className="sting"> <AddToCart/></div>
    </div>
  
    </>
  )
}

export default StingDetails
