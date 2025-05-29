/* eslint-disable react/no-unescaped-entities */
import AddToCart from "./AddToCart"
const OperationFortuneDetails = () => {
  return (
    <>
   <div id="operationSlides" className="carousel slide d-flex flex-column justify-content-center align-items-center" data-bs-ride="carousel">
    <div className="carousel-indicators">
    <button type="button" data-bs-target="#operationSlides" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#operationSlides" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#operationSlides" data-bs-slide-to="2"></button>
    <button type="button" data-bs-target="#operationSlides" data-bs-slide-to="3"></button>
    <button type="button" data-bs-target="#operationSlides" data-bs-slide-to="4"></button>
    </div>
    <div className="carousel-inner w-75">
    <div className="carousel-item active">
    <img src="operation1.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="operation2.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="operation3.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="operation4.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="operation5.jpg" className="d-block w-100"/>
    </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#operationSlides" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#operationSlides" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
    </button>
    </div>
    <div className="d-flex flex-column justify-content-center align-items-center text-white">
    <div className="w-75">
    <h1>Movie Description</h1>
    <p>Elite spy Orson Fortune must track down and stop the sale of a deadly new weapons technology wielded by billionaire arms broker Greg Simmonds. Reluctantly teamed up with some of  the world's best operatives, Fortune and his team recruit Hollywood's biggest movie star, Danny Francesco, to help them improve on their gloe-trotting mission to save the world.</p>
    </div>
    <div className="Operation Fortune"><AddToCart/></div>
    </div>
    </>
  )
}

export default OperationFortuneDetails