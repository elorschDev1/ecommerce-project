import AddToCart from "./AddToCart"
const DamagedDetails = () => {
  return (
    <>
    <div id="damagedSlides" className="carousel slide d-flex justify-content-center align-items-center" data-bs-ride="carousel">
    <div className="carousel-indicators">
    <button type="button" data-bs-target="#damagedSlides" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#damagedSlides" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#damagedSlides" data-bs-slide-to="2"></button>
    <button type="button" data-bs-target="#damagedSlides" data-bs-slide-to="3"></button>
    <button type="button" data-bs-target="#damagedSlides" data-bs-slide-to="4"></button>
    </div>
    <div className="carousel-inner w-75">
    <div className="carousel-item active">
    <img src="damaged1.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="damaged2.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="damaged3.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="damaged4.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="damaged5.jpg" className="d-block w-100"/>
    </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#damagedSlides" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#damagedSlides" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
    </button>
    </div>
    <div className="d-flex flex-column justify-content-center align-items-center text-white">
    <div className="w-75">
    <h1>Movie Description</h1>
    <p>When a sadistic murderer surfaces in Scotland, terrified local authorities call on a Chicago detective who investigated a killing spree  with the same horrific pattern five years earlier.</p>
    </div> 
    <div className="Damaged">
    <AddToCart/>
    </div>
    </div>
    </>
  )
}

export default DamagedDetails