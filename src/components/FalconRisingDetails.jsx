import AddToCart from "./AddToCart";
const FalconRisingDetails = () => {
  return (
    <>
    <div id="falconSlides" className="carousel slide d-flex justify-content-center align-items-center" data-bs-ride="carousel">
    <div className="carousel-indicators">
    <button type="button" data-bs-target="#falconSlides" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#falconSlides" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#falconSlides" data-bs-slide-to="2"></button>
    <button type="button" data-bs-target="#falconSlides" data-bs-slide-to="3"></button>
    <button type="button" data-bs-target="#falconSlides" data-bs-slide-to="4"></button>
    </div>
    <div className="carousel-inner w-75">
    <div className="carousel-item active">
    <img src="falcon1.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="falcon2.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="falcon3.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="falcon4.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="falcon5.jpg" className="d-block w-100"/>
    </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#falconSlides" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#falconSlides" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
    </button>
    </div>
    <div className="d-flex flex-column justify-content-center align-items-center text-white">
    <div className="w-75">
    <h1>Movie Description</h1>
    <p>A former Marine (Micheal Jai White) travels to Brazil to hunt down the brutal Japanese mobsters who attacked his siter and left her for dead.</p>
    </div>
    <div className="Falcon Rising"> <AddToCart/></div>
    </div>
    </>
    
  )
}

export default FalconRisingDetails;