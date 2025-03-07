/* eslint-disable react/no-unescaped-entities */
import AddToCart from "./AddToCart";
const WrathofManDetails=()=>{
    return(
        <>
        <div id="wrathSlides" className="carousel slide  d-flex flex-column justify-content-center align-items-center" data-bs-ride="carousel">
        <div className="carousel-indicators">
        <button type="button" data-bs-target="#wrathSlides" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#wrathSlides" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#wrathSlides" data-bs-slide-to="2"></button>
        <button type="button" data-bs-target="#wrathSlides" data-bs-slide-to="3"></button>
        <button type="button" data-bs-target="#wrathSlides" data-bs-slide-to="4"></button>
        </div>
        <div className="carousel-inner w-75">
        <div className="carousel-item active">
        <img src="wrathOfMan.jpg" className="d-block w-100"/>
        </div>
         <div className="carousel-item">
        <img src="wrath2.jpg" className="d-block w-100"/>
        </div>
         <div className="carousel-item">
        <img src="wrath3.jpg" className="d-block w-100"/>
        </div>
         <div className="carousel-item">
        <img src="wrath4.jpg" className="d-block w-100"/>
        </div>
         <div className="carousel-item">
        <img src="wrath5.jpg" className="d-block w-100"/>
        </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#wrathSlides" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#wrathSlides" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
        </button>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center text-white">
        <div className="w-75">
        <h1>Movie Description</h1>
        <p>Mysterious and wild eyed,a new security guard for a cash and truck surprises his coworkers when he unleashes his skills during a heist.They're left wondering who he is.</p>
        </div>
        <div className="wrath"> <AddToCart/></div>
        </div>
        </>
    )
}
export default WrathofManDetails;