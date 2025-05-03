/* eslint-disable react/no-unescaped-entities */
import AddToCart from "./AddToCart";

const EdgeOfTomorrowDetails = () => {
  return (
    <>
    <div id="edgeSlides" className="carousel slide d-flex flex-column justify-content-center align-items-center" data-bs-ride="carousel">
    <div className="carousel-indicators">
    <button type="button" data-bs-target="#edgeSlides" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#edgeSlides" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#edgeSlides" data-bs-slide-to="2"></button>
    <button type="button" data-bs-target="#edgeSlides" data-bs-slide-to="3"></button>
    <button type="button" data-bs-target="#edgeSlides" data-bs-slide-to="4"></button>
    </div>
    <div className="carousel-inner w-75">
    <div className="carousel-item active">
    <img src="edgeOfTomorrow.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="edge2.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="edge3.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="edge4.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="edge5.jpg" className="d-block w-100"/>
    </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#edgeSlides" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#edgeSlides" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
    </button>
    </div>
    <div className="d-flex flex-column justify-content-center align-items-center text-white">
    <div className="w-75">
    <h1>Movie Description</h1>
    <p>When earth falls under attack from invincible aliens, no military unit in the world is able to beat them.Maj William Cage (Tom Cruise), an officer who has never seen combat, is assigned to a suicide mission. Killed within moments, cage finds himself thrown into a time loop, in which he relives the same brutal fight--and his death--over and over again. However, Cage's fighting skills improve with each encore,bringing him and a comrade (Emily Blunt)ever closer to defeating the aliens.  </p>
    </div> 
    <div className="Edge of Tomorrow"> <AddToCart/></div>
    </div>
    </>
  )
}

export default EdgeOfTomorrowDetails;