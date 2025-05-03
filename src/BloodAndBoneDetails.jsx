import AddToCart from "./AddToCart";
const BloodAndBoneDetails = () => {
  return (
    <>
    <div id="bloodBoneSlides" className="carousel slide d-flex flex-column justify-content-center align-items-center" data-bs-ride="carousel">
    <div className="carousel-indicators">
    <button type="button" data-bs-target="#bloodBoneSlides" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#bloodBoneSlides" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#Slides" data-bs-slide-to="2"></button>
    <button type="button" data-bs-target="#bloodBoneSlides" data-bs-slide-to="3"></button>
    <button type="button" data-bs-target="#bloodBoneSlides" data-bs-slide-to="4"></button>
    </div>
    <div className="carousel-inner w-75">
    <div className="carousel-item active">
    <img src="blood1.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="blood2.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="blood3.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="blood4.jpg" className="d-block w-100"/>
    </div>
     <div className="carousel-item">
    <img src="blood5.jpg" className="d-block w-100"/>
    </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#bloodBoneSlides" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#bloodBoneSlides" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
    </button>
    </div>
    <div className="d-flex  flex-column justify-content-center align-items-center text-white">
    <div className="w-75">
    <h1>Movie Description</h1>
    <p>Ex-con Isaiah Bone moves to Los Angeles after his release. His goal is to fulfill a promise to a dead friend by taking the local underground fighting world by storm. He defeats every opponent making thousands of dollars in the process.</p>
    </div>
    <div className="Blood And Bone"> <AddToCart/></div>
    </div> 
    </>
  )
}

export default BloodAndBoneDetails