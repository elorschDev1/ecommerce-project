// eslint-disable-next-line no-unused-vars
import React from 'react'
import AddToCart from './AddToCart'
const TheOtherGuysDetails = () => {
  return (
    <>
    <div id="guysSlides" className="carousel slide d-flex flex-column justify-content-center align-items-center" data-bs-ride="carousel">
    <div className="carousel-indicators">
    <button type="button" data-bs-target="#guysSlides" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#guysSlides" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#guysSlides" data-bs-slide-to="2"></button>
    <button type="button" data-bs-target="#guysSlides" data-bs-slide-to="3"></button>
    <button type="button" data-bs-target="#guysSlides" data-bs-slide-to="4"></button>
    </div>
    <div className="carousel-inner w-50">
    <div className="carousel-item active">
    <img src="theGuys1.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="theGuys2.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="theGuys3.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="theGuys4.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="theOtherGuys.jpg" className="d-block w-100"/>
    </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#guysSlides" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#guysSlides" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
    </button>
    </div>
    <div className="text-white d-flex flex-column justify-content-center align-items-center">
     <div className="w-50">
    <h1>Movie Description</h1>
    <p>Unlike their heroic counterparts on the force,desk-bound NYPD  detectives Gamble (Will Ferrell) and Hoitz (Mark Wahlberg) garner no headlines as they work day to day. Gamble relishes his job as a paper pusher, but Hoitz is itching to get back on the street and make a name for himself. When a seemingly minor case turns out to be a big deal, the two cops finally get a chance to prove to their comrades that they have the right stuff. </p>
    </div>
    <div className="The Other Guys"><AddToCart/></div>
    </div>
    </>
  )
}

export default TheOtherGuysDetails
