import AddToCart from "./AddToCart";
const MatrixDetails = () => {
  return (
    <>
    <div id="matrixSlides" className="carousel slide d-flex flex-column justify-content-center align-items-center" data-bs-ride="carousel">
    <div className="carousel-indicators">
    <button type="button" data-bs-target="#matrixSlides" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#matrixSlides" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#matrixSlides" data-bs-slide-to="2"></button>
    <button type="button" data-bs-target="#matrixSlides" data-bs-slide-to="3"></button>
    <button type="button" data-bs-target="#matrixSlides" data-bs-slide-to="4"></button>
    </div>
    <div className="carousel-inner w-75">
    <div className="carousel-item active">
    <img src="matrix1.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="matrix2.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="matrix3.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="matrix4.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="matrix5.jpg" className="d-block w-100"/>
    </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#matrixSlides" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#matrixSlides" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
    </button>
    </div>
    <div className="d-flex justify-content-center align-items-center flex-column text-white">
    <div className="w-75">
    <h1>Movie Description</h1>
    <p>Neo (Keanu Reeves)believes that Morpheus(Laurence Fishburne),an elusive figure considered to be the most dangerous man alive, can answer his question--What is the matrix? Neo is contacted by Trinity (Carrie - Ann Moss), a beautiful stranger who leads him into an underworld where he meets Morpheus. They fight a brutal battle for their lives against a cadre of viviously intelligent secret agents. It is a teuth that could cost Neo something more precious than his life.               </p>
    </div> 
    <div className="matrix"><AddToCart/></div>
    </div>
    </>
  )
}
export default MatrixDetails;