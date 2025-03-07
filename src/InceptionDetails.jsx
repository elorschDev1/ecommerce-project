import AddToCart from "./AddToCart";
const InceptionDetails = () => {
  return (
    <>
    <div id="inceptionSlides" className="carousel slide d-flex flex-column justify-content-center align-items-center" data-bs-ride="carousel">
        <div className="carousel-indicators">
        <button type="button" data-bs-target="#inceptionSlides" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#inceptionSlides" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#inceptionSlides" data-bs-slide-to="2"></button>
        <button type="button" data-bs-target="#inceptionSlides" data-bs-slide-to="3"></button>
        <button type="button" data-bs-target="#inceptionSlides" data-bs-slide-to="4"></button>
        </div>
        <div className="carousel-inner w-75">
        <div className="carousel-item active">
        <img src="inception1.jpg" className="d-block w-100"/>
        </div>
         <div className="carousel-item">
        <img src="inception2.jpg" className="d-block w-100"/>
        </div>
         <div className="carousel-item">
        <img src="inception3.jpg" className="d-block w-100"/>
        </div>
         <div className="carousel-item">
        <img src="inception4.jpg" className="d-block w-100"/>
        </div>
         <div className="carousel-item">
        <img src="inception5.jpg" className="d-block w-100"/>
        </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#inceptionSlides" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#inceptionSlides" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
        </button>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center text-white">
          <div className="w-75">
          <h1>Movie Description</h1>
          <p >Domm Cobb (Leonardo DiCaprio) is a thief with a rare ability to enter people&apos;s dreams and steal their secrets from their subconcious. His skill has made him a hot corporate espionage but has also cost him everything he loves. Cobb gets a chance at redemption when he is offered a seemingly impossible task: Plant an idea in someone&apos;s mind. If he succeeds,it will be the perfect crime, but a dangerous enemy anticipates Cobb&apos;s every move.</p>
          </div>
          <div className="inception"> <AddToCart/></div>
        </div> 
      
        </>
  )
}

export default InceptionDetails