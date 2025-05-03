import AddToCart from "./AddToCart";
const MachinaDetails = () => {
  return (
    <>
    <div id="machinaSlides" className="carousel slide d-flex flex-column justify-content-center align-items-center mt-4" data-bs-ride="carousel">
        <div className="carousel-indicators">
        <button type="button" data-bs-target="#machinaSlides" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#machinaSlides" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#machinaSlides" data-bs-slide-to="2"></button>
        <button type="button" data-bs-target="#machinaSlides" data-bs-slide-to="3"></button>
        <button type="button" data-bs-target="#machinaSlides" data-bs-slide-to="4"></button>
        </div>
        <div className="carousel-inner w-75">
        <div className="carousel-item active">
        <img src="machina1.jpg" className="d-block w-100"/>
        </div>
         <div className="carousel-item">
        <img src="machina2.jpg" className="d-block w-100"/>
        </div>
         <div className="carousel-item">
        <img src="machina3.jpg" className="d-block w-100"/>
        </div>
         <div className="carousel-item">
        <img src="machina4.jpg" className="d-block w-100"/>
        </div>
         <div className="carousel-item">
        <img src="machina5.jpg" className="d-block w-100"/>
        </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#machinaSlides" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#machinaSlides" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
        </button>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="w-75 text-white">
        <h1>Movie Description</h1>
        <p>Caleb Smith (Domhnall Gleeson) a programmer at a hige internet company, wins a contest that enables him to spend a week at the private estate of Nathan.</p> 
         </div>
         <div className="Ex Machina"> <AddToCart/></div>
         </div>
         </>
  )
}

export default MachinaDetails;