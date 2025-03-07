
import AddToCart from "./AddToCart";
const DamselDetails = () => {
  return (
           <>
        <div id="damselSlides" className="carousel slide d-flex justify-content-center align-items-center flex-column" data-bs-ride="carousel">
        <div className="carousel-indicators">
        <button type="button" data-bs-target="#damselSlides" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#damselSlides" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#damselSlides" data-bs-slide-to="2"></button>
        <button type="button" data-bs-target="#damselSlides" data-bs-slide-to="3"></button>
        <button type="button" data-bs-target="#damselSlides" data-bs-slide-to="4"></button>
        </div>
        <div className="carousel-inner w-50">
        <div className="carousel-item active">
        <img src="damsel1.jpg" className="d-block w-100"/>
        </div>
         <div className="carousel-item">
        <img src="damsel2.jpg" className="d-block w-100"/>
        </div>
         <div className="carousel-item">
        <img src="damsel3.jpg" className="d-block w-100"/>
        </div> 
         <div className="carousel-item">
        <img src="damsel4.jpg" className="d-block w-100"/>
        </div>
         <div className="carousel-item">
        <img src="damsel5.jpg" className="d-block w-100"/>
        </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#damselSlides" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#damselSlides" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
        </button>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
         <div className="text-white w-50">
        <h1>Movie Description</h1>
        <p>A young woman agrees to marry a prince-only to discover it was all a trap. She is thrown into a cave with a fire breathing dragon and must rely on hr wits and will to survive.</p>
        </div> 
        <div className="damsel"> <AddToCart/></div>  
        </div>
       
        </>
  )
}

export default DamselDetails;