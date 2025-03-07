// eslint-disable-next-line no-unused-vars
import React from 'react';
import AddToCart from './AddToCart';
const FamilyAffairDetails = () => {
  return (
    <>
    <div id="familyAffairSlides" className="carousel slide d-flex justify-content-center align-items-center" data-bs-ride="carousel">
    <div className="carousel-indicators">
    <button type="button" data-bs-target="#familyAffairSlides" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#familyAffairSlides" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#familyAffairSlides" data-bs-slide-to="2"></button>
    <button type="button" data-bs-target="#familyAffairSlides" data-bs-slide-to="3"></button>
    <button type="button" data-bs-target="#familyAffairSlides" data-bs-slide-to="4"></button>
    </div>
    <div className="carousel-inner w-50">
    <div className="carousel-item active">
    <img src="family1.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="family2.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="family3.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="family4.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="family5.jpg" className="d-block w-100"/>
    </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#familyAffairSlides" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#familyAffairSlides" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
    </button>
    </div>
    <div className="d-flex flex-column justify-content-center align-items-center text-white">
     <div className="w-50">
    <h1>Movie Description</h1>
    <p>A surprising romance kicks off comic consequences for a young woman, her mother and her movie star boss, as they face the complications of love, sex and identity.</p>
    </div> 
    <div className="familyAffair"> <AddToCart/></div>
    </div>
    </>
  )
}

export default FamilyAffairDetails
