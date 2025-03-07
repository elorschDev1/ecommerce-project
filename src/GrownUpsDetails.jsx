// eslint-disable-next-line no-unused-vars
import React from 'react'
import AddToCart from './AddToCart'
const GrownUpsDetails = () => {
  return (
    <>
    <div id="grownUpsSlides" className="carousel slide d-flex flex-column justify-content-center align-items-center"  data-bs-ride="carousel">
    <div className="carousel-indicators">
    <button type="button" data-bs-target="#grownUpsSlides" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#grownUpsSlides" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#grownUpsSlides" data-bs-slide-to="2"></button>
    <button type="button" data-bs-target="#grownUpsSlides" data-bs-slide-to="3"></button>
    <button type="button" data-bs-target="#grownUpsSlides" data-bs-slide-to="4"></button>
    </div>
    <div className="carousel-inner w-50">
    <div className="carousel-item active">
    <img src="grownUps1.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="grownUps2.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="grownUps3.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="grownUps4.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="grownUps5.jpg" className="d-block w-100"/>
    </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#grownUpsSlides" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#grownUpsSlides" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
    </button>
    </div>
    <div className="d-flex flex-column justify-content-center align-items-center text-white">
      <div className="w-50">
    <h1>Movie Description</h1>
    <p>A single man who drinks too much. A father with three daughters who he rarely sees. A guy who is overweight and unemployed. A hen pecked househusband. a successful Hollywood agent married to a fashion designer . What do these five men have in common? They used to play for the  same basketball team at school. Now, their former coach has died, and they were reunited at his funeral. Will the group rediscover old bonds?</p> 
    </div>
    <div className="grownUps"> <AddToCart/></div>
    </div>
   </>
  )
}

export default GrownUpsDetails
