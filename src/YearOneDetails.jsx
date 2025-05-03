
import AddToCart from "./AddToCart";
const YearOneDetails = () => {
  return (
    <>
    <div id="yearOneSlides" className="carousel slide d-flex justify-content-center align-items-center flex-column" data-bs-ride="carousel">
    <div className="carousel-indicators">
    <button type="button" data-bs-target="#yearOneSlides" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#yearOneSlides" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#yearOneSlides" data-bs-slide-to="2"></button>
    <button type="button" data-bs-target="#yearOneSlides" data-bs-slide-to="3"></button>
    <button type="button" data-bs-target="#yearOneSlides" data-bs-slide-to="4"></button>
    </div>
    <div className="carousel-inner w-50">
    <div className="carousel-item active">
    <img src="year1.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="yearOne.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="year3.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="year4.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="year5.jpg" className="d-block w-100"/>
    </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#yearOneSlides" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#yearOneSlides" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
    </button>
    </div>
    <div className="d-flex flex-column justify-content-center align-items-center text-white">
     <div className="w-50">
    <h1>Movie Description</h1>
    <p>After Neanderthal hunter Zed (Jack Black) is exiled for eating the forbidden fruit, he and his sardonic buddy Oh (Micheal Cera) leave their village and begin an epic journey through history. The pals encounter biblical characters suchas cain (David Cross) and Abel, Abraham (Hank Azaria), and others, and wind up in Sodom. Along the way, Zed debunks common beliefs and replaces them with his own delusions of grandeur.</p>
    </div> 
    <div className="Year One"><AddToCart/></div>
    </div>
   
    </>
  )
}

export default YearOneDetails