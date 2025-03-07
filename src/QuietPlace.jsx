import { useNavigate } from "react-router-dom"
const QuietPlace = () => {
  let navigate=useNavigate();
  let handleClick=(e)=>{
    if(e.target.classList.contains("quietPlace")){
      navigate("/quietPlaceDetails");
    }
  }
  return (
    <div className="col card horrorMovie quietPlace movies" onClick={handleClick}>
    <img src="/quietPlace.jpg" className="card-img-top horrorMovie quietPlace"/>
    <div className="card-body quietPlace">
                <p className="quietPlace">A Quiet Place:Day One</p>
    </div>					
</div>
  )
}

export default QuietPlace