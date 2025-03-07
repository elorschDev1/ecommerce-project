/* eslint-disable no-unused-vars */
import React from 'react'
import AddToCart from './AddToCart';
const LiftDetails = () => {
  return (
    <>
    <div id="liftSlides" className="carousel slide d-flex justify-content-center align-items-center flex-column" data-bs-ride="carousel">
    <div className="carousel-indicators">
    <button type="button" data-bs-target="#liftSlides" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#liftSlides" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#liftSlides" data-bs-slide-to="2"></button>
    <button type="button" data-bs-target="#liftSlides" data-bs-slide-to="3"></button>
    <button type="button" data-bs-target="#liftSlides" data-bs-slide-to="4"></button>
    </div>
    <div className="carousel-inner w-50">
    <div className="carousel-item active">
    <img src="lift1.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="lift2.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="lift3.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="lift4.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="lift5.jpg" className="d-block w-100"/>
    </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#liftSlides" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#liftSlides" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
    </button>
    </div>
    <div className="d-flex flex-column justify-content-center align-items-center text-white">
     <div className="w-50">
    <h1>Movie Description</h1>
    <p>A master thief is wooed by his ex-girlfriend and the FBI to pull off an impossible heist with his international crew on a 777 passenger  flight from London to Zurich.</p>
    </div> 
    <div className="lift"><AddToCart/></div>
    </div>
   
    </>
  )
}

export default LiftDetails
