import AddToCart from "./AddToCart";
const HiddenStrikeDetails = () => {
  return (
    <>
        <div id="hiddenStrikeSlides" className="carousel slide d-flex flex-column justify-content-center align-items-center" data-bs-ride="carousel">
        <div className="carousel-indicators">
        <button type="button" data-bs-target="#hiddenStrikeSlides" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#hiddenStrikeSlides" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#hiddenStrikeSlides" data-bs-slide-to="2"></button>
        <button type="button" data-bs-target="#hiddenStrikeSlides" data-bs-slide-to="3"></button>
        <button type="button" data-bs-target="#hiddenStrikeSlides" data-bs-slide-to="4"></button>
        </div>
        <div className="carousel-inner w-50">
        <div className="carousel-item active">
        <img src="hidden1.jpg" className="d-block w-100"/>
        </div>
         <div className="carousel-item">
        <img src="hidden2.jpg" className="d-block w-100"/>
        </div>
         <div className="carousel-item">
        <img src="hidden3.jpg" className="d-block w-100"/>
        </div>
         <div className="carousel-item">
        <img src="hidden4.jpg" className="d-block w-100"/>
        </div>
         <div className="carousel-item">
        <img src="hidden5.jpg" className="d-block w-100"/>
        </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#hiddenStrikeSlides" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#hiddenStrikeSlides" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
        </button>
        </div>
        <div className="d-flex justify-content-center align-items-center flex-column">
           <div className="w-50 text-white">
        <h1>Movie Description</h1>
        <p>Two former soldiers face non-stop danger as they travel along one of the most dangerous roads in the world.</p>   
        </div>
        <div className="hiddenStrike"> <AddToCart/></div>
        </div>
        </>
  )
}

export default HiddenStrikeDetails;