import AddToCart from "./AddToCart"

/* eslint-disable react/no-unescaped-entities */
const TheChangeUpDetails = () => {
  return (
    <>
    <div id="changeUpSlides" className="carousel slide d-flex flex-column justify-content-center align-items-center" data-bs-ride="carousel">
    <div className="carousel-indicators">
    <button type="button" data-bs-target="#changeUpSlides" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#changeUpSlides" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#changeUpSlides" data-bs-slide-to="2"></button>
    <button type="button" data-bs-target="#changeUpSlides" data-bs-slide-to="3"></button>
    <button type="button" data-bs-target="#changeUpSlides" data-bs-slide-to="4"></button>
    </div>
    <div className="carousel-inner w-50">
    <div className="carousel-item active">
    <img src="changeUp1.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="changeUp2.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="changeUp3.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="changeUp4.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="theChangeUp.jpg" className="d-block w-100"/>
    </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#changeUpSlides" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#changeUpSlides" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
    </button>
    </div>
    <div className="d-flex flex-column justify-content-center align-items-center text-white">
     <div className="w-50">
    <h1>Movie Description</h1>
    <p>The film stars Ryan Reynolds and Jason Bateman as Mitch Planko and dave Lockwood, two best friends living in Atlanta who "switch bodies" after urinating...</p>
    </div>
    <div className="changeUp"><AddToCart/></div>
    </div>
    </>
  )
}

export default TheChangeUpDetails
