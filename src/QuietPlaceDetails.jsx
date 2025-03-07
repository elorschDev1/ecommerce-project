// eslint-disable-next-line no-unused-vars
import React from 'react'
import AddToCart from './AddToCart';
const QuietPlaceDetails = () => {
  return (
    <>
    <div id="quietPlaceSlides" className="carousel slide d-flex flex-column justify-content-center align-items-center" data-bs-ride="carousel">
    <div className="carousel-indicators">
    <button type="button" data-bs-target="#quietPlaceSlides" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#quietPlaceSlides" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#quietPlaceSlides" data-bs-slide-to="2"></button>
    <button type="button" data-bs-target="#quietPlaceSlides" data-bs-slide-to="3"></button>
    <button type="button" data-bs-target="#quietPlaceSlides" data-bs-slide-to="4"></button>
    </div>
    <div className="carousel-inner w-50">
    <div className="carousel-item active">
    <img src="quietPlace1.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="quietPlace2.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="quietPlace3.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="quietPlace4.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="quietPlace5.jpg" className="d-block w-100"/>
    </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#quietPlaceSlides" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#quietPlaceSlides" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
    </button>
    </div>
    
    <div className="d-flex flex-column justify-content-center align-items-center text-white">
    <div className="w-50">
    <h1>Movie Description</h1>
    <p>A Quiet Place is a 2018 American post-apocalyptic horror film directed by John Krasinki. The screenplay was written by Scott Beck and Bryan Woods from a story they concieved, with contributions by Krasinski after he joined the project. The plot revolves around a mother (Emily Blunt) and father (Krasinski) who struggle to survive and raise their children (Millicent Simmonds and Noah Jupe) in a post-apocalyptic world inhabited by blind extaterrestial creatures with an acute sense of hearing.</p>
    </div>
    <div className="quietPlace"><AddToCart/></div>
    </div>
    
    </>
  )
}

export default QuietPlaceDetails
