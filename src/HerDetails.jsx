/* eslint-disable react/no-unescaped-entities */

import AddToCart from "./AddToCart";
const HerDetails = () => {
  return (
    <>
    <div id="herSlides" className="carousel slide d-flex flex-column justify-content-center align-items-center" data-bs-ride="carousel">
        <div className="carousel-indicators">
        <button type="button" data-bs-target="#herSlides" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#herSlides" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#herSlides" data-bs-slide-to="2"></button>
        <button type="button" data-bs-target="#herSlides" data-bs-slide-to="3"></button>
        <button type="button" data-bs-target="#herSlides" data-bs-slide-to="4"></button>
        </div>
        <div className="carousel-inner w-75">
        <div className="carousel-item active">
        <img src="her1.jpg" className="d-block w-100"/>
        </div>
         <div className="carousel-item">
        <img src="her2.jpg" className="d-block w-100"/>
        </div>
         <div className="carousel-item">
        <img src="her3.jpg" className="d-block w-100"/>
        </div>
         <div className="carousel-item">
        <img src="her4.jpg" className="d-block w-100"/>
        </div>
         <div className="carousel-item">
        <img src="her5.jpg" className="d-block w-100"/>
        </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#herSlides" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#herSlides" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
        </button>
        </div>
        <div className="d-flex justify-content-center align-items-center flex-column">
            <div className="w-75">
        <h1 className="text-white">Movie Description</h1>
        <p className="text-white">A sensitive and soulful man earns a living by writing letters for other people. Left heart-broken after his marriage ends, Theodre(Joaquin Phoenix)  becomes fascinated with a new operating system,which reportedly develops into an intuitive and unique entity in its own right. He starts the program and meets Samantha (Scarlett Johansonn), whose voice reveals a playful and sensitive personality. Though "friends" initially, the relationship soon develops into love.</p>
        </div>
        <div className="her"> <AddToCart/></div>
        </div>
        </>
  )
}

export default HerDetails;