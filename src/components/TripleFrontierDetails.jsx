import AddToCart from "./AddToCart";
const TripleFrontierDetails = () => {
  return (
    <>
    <div id="frontierSlides" className="carousel slide d-flex justify-content-center align-items-center flex-column" data-bs-ride="carousel">
    <div className="carousel-indicators">
    <button type="button" data-bs-target="#frontierSlides" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#frontierSlides" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#frontierSlides" data-bs-slide-to="2"></button>
    <button type="button" data-bs-target="#frontierSlides" data-bs-slide-to="3"></button>
    <button type="button" data-bs-target="#frontierSlides" data-bs-slide-to="4"></button>
    </div>
    <div className="carousel-inner w-50">
    <div className="carousel-item active">
    <img src="frontier1.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="frontier2.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="frontier3.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="frontier4.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="frontier5.jpg" className="d-block w-100"/>
    </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#frontierSlides" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#frontierSlides" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
    </button>
    </div>
    <div className="d-flex justify-content-center align-items-center flex-column">
     <div className="w-50 text-white">
    <h1>Movie Description</h1>
    <p>Former Special Forces Operatives reunite to plan a heist in a sparsely populated multi border zone of South America. For the first time in their prestigious careers, these unsung heroes undertake their dangerous mission for themselves instead of their country. But when an unexpected  turn and threaten to spiral out of control, their skills, their loyalties, and their morals are pushed to a breaking point in an epic battle for survival.</p>
    </div> 
    <div className="Triple Frontier"> <AddToCart/></div>
    </div>
    </>
  )
}
export default TripleFrontierDetails