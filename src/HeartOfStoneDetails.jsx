import AddToCart from "./AddToCart"
const HeartOfStoneDetails = () => {
  return (
    <>
    <div id="heartSlides" className="carousel slide d-flex flex-column justify-content-center align-items-center" data-bs-ride="carousel">
    <div className="carousel-indicators">
    <button type="button" data-bs-target="#heartSlides" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#heartSlides" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#heartSlides" data-bs-slide-to="2"></button>
    <button type="button" data-bs-target="#heartSlides" data-bs-slide-to="3"></button>
    <button type="button" data-bs-target="#heartSlides" data-bs-slide-to="4"></button>
    </div>
    <div className="carousel-inner w-75">
    <div className="carousel-item active">
    <img src="heart1.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="heart2.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="heartOfStone.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="heart4.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="heart5.jpg" className="d-block w-100"/>
    </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#heartSlides" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#heartSlides" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
    </button>
    </div>
    <div className="d-flex flex-column justify-content-center align-items-center text-white">
    <div className="w-75">
    <h1>Movie Description</h1>
    <p>Rachel Stone is an intelligence operative, the only woman that stands between  her powerful global peackeeping organization  and the loss of its most valuable -- and dangerous -- asset.</p>
    </div>
    <div className="Heart of Stone"> <AddToCart/></div>
    </div>
    </>
  )
}

export default HeartOfStoneDetails