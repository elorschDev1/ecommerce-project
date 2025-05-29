
import AddToCart from "./AddToCart"
const ArrivalDetails = () => {
  return (
    <>
    <div id="arrivalSlides" className="carousel slide d-flex flex-column justify-content-center align-items-center mt-4 p-3" data-bs-ride="carousel">
        <div className="carousel-indicators ">
        <button type="button" data-bs-target="#arrivalSlides" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#arrivalSlides" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#arrivalSlides" data-bs-slide-to="2"></button>
        <button type="button" data-bs-target="#arrivalSlides" data-bs-slide-to="3"></button>
        <button type="button" data-bs-target="#arrivalSlides" data-bs-slide-to="4"></button>
        </div>
        <div className="carousel-inner w-75">
        <div className="carousel-item active">
        <img src="arrival1.jpg" className="d-block w-100"/>
        </div>
         <div className="carousel-item">
        <img src="arrival2.jpg" className="d-block w-100"/>
        </div>
         <div className="carousel-item">
        <img src="arrival3.jpg" className="d-block w-100"/>
        </div>
         <div className="carousel-item">
        <img src="arrival4.jpg" className="d-block w-100"/>
        </div>
         <div className="carousel-item">
        <img src="arrival5.jpg" className="d-block w-100"/>
        </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#arrivalSlides" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#arrivalSlides" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
        </button>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center text-white">
            <div  className="w-75">
        <h1>Movie Description</h1>
        <p> Louise Banks daughter Hannah, dies at the age of twelve from an incurable illness.
        Twelve extraterrestial spaccrafts hover over various locations around the earth. In the ensuing wide spread panic,affected nations send military and scientific experts to monitor and study them.</p>
                </div>
                <div className="Arrival"> <AddToCart/></div>
                </div>
    </>
  )
}

export default ArrivalDetails