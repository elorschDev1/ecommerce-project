import AddToCart from "./AddToCart";
const TheLostOneDetails = () => {
  return (
    <>
    <div id="lostOneSlides" className="carousel slide d-flex justify-content-center align-items-center flex-column" data-bs-ride="carousel">
    <div className="carousel-indicators">
    <button type="button" data-bs-target="#lostOneSlides" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#lostOneSlides" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#lostOneSlides" data-bs-slide-to="2"></button>
    <button type="button" data-bs-target="#lostOneSlides" data-bs-slide-to="3"></button>
    <button type="button" data-bs-target="#lostOneSlides" data-bs-slide-to="4"></button>
    </div>
    <div className="carousel-inner w-50">
    <div className="carousel-item active">
    <img src="lost1.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="lost2.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="lost3.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="lost4.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="lost5.jpg" className="d-block w-100"/>
    </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#lostOneSlides" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#lostOneSlides" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
    </button>
    </div>
    <div className="d-flex flex-column justify-content-center align-items-center text-white">
     <div className="w-50">
    <h1>Movie Description</h1>
    <p>Since 1865 , treasure hunters have searched, but little of that immense wealth has ever been found. Now, one hundred and sixty years later, two factions of what remains of the Knights of the golden circle want lost treasure-one to spend for their own ends, the other to preserve it.</p>
    </div>
    <div className="lostOne"><AddToCart/></div>
    </div>
   
    </>
  )
}

export default TheLostOneDetails