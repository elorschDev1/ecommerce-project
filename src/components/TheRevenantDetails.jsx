import AddToCart from "./AddToCart"
const TheRevenantDetails = () => {
  return (
    <>
        <div id="revenantSlides" className="carousel slide d-flex flex-column justify-content-center align-items-center" data-bs-ride="carousel">
        <div className="carousel-indicators">
        <button type="button" data-bs-target="#revenantSlides" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#revenantSlides" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#revenantSlides" data-bs-slide-to="2"></button>
        <button type="button" data-bs-target="#revenantSlides" data-bs-slide-to="3"></button>
        <button type="button" data-bs-target="#revenantSlides" data-bs-slide-to="4"></button>
        </div>
        <div className="carousel-inner w-50">
        <div className="carousel-item active">
        <img src="revenant1.jpg" className="d-block w-100"/>
        </div>
         <div className="carousel-item">
        <img src="revenant2.jpg" className="d-block w-100"/>
        </div>
         <div className="carousel-item">
        <img src="revenant3.jpg" className="d-block w-100"/>
        </div>
         <div className="carousel-item">
        <img src="revenant7.jpg" className="d-block w-100"/>
        </div>
         <div className="carousel-item">
        <img src="revenant5.jpg" className="d-block w-100"/>
        </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#revenantSlides" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#revenantSlides" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
        </button>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
         <div className="w-50 text-white">
        <h1>Movie Description</h1>
        <p>While exploring the wildnerness in 1823, frontiersman HUgh Glass (Leonardo Dicaprio)  sustains life threaatening injuries  from a brutal bear attack. When a member (Tom Hardy) of his hunting team kills his young son (Forrest Goodluck) and leaves him for dead, Glass must utilise his survival skills to find a way back to civilisation. Grief stricken and fueled by vengeace, the legendary fur trapper treks through the snowy terrain to track down the man who betrayed him.</p>
        </div>
        <div className="The Revenant"> <AddToCart/></div>
        </div>
        </>
  )
}

export default TheRevenantDetails