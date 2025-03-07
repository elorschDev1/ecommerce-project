// eslint-disable-next-line no-unused-vars
import React from 'react'
import AddToCart from './AddToCart';
const TheWatchersDetails = () => {
  return (
    <>
    <div id="watchersSlides" className="carousel slide d-flex flex-column jsutify-content-center align-items-center" data-bs-ride="carousel">
    <div className="carousel-indicators">
    <button type="button" data-bs-target="#watchersSlides" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#watchersSlides" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#watchersSlides" data-bs-slide-to="2"></button>
    <button type="button" data-bs-target="#watchersSlides" data-bs-slide-to="3"></button>
    <button type="button" data-bs-target="#watchersSlides" data-bs-slide-to="4"></button>
    </div>
    <div className="carousel-inner w-50">
    <div className="carousel-item active">
    <img src="watchers1.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="watchers2.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="watchers3.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="watchers4.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="watchers5.jpg" className="d-block w-100"/>
    </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#watchersSlides" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#watchersSlides" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
    </button>
    </div>
    <div className="d-flex flex-column justify-content-center align-items-center text-white">
    <div className="w-50">
    <h1>Movie Description</h1>
    <p>A 28-year-old artist gets stranded in an expansive, untouched forest in Western Ireland.Finding shelter, she unknowingly becomes trapped alongside three strangers who are stalked by mysterious creatures every night. </p>
    </div> 
    <div className="theWatchers"><AddToCart/></div>
    </div>
    
    </>
  )
}

export default TheWatchersDetails
