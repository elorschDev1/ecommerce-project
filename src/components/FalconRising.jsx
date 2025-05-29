import { useNavigate } from "react-router-dom";
const FalconRising = () => {
  let navigate=useNavigate();
  let handleClick=(e)=>{
    if(e.target.classList.contains("falconRising")){
      navigate("/falconDetails");
    }
  }
  return (
    <div className="card col actionMovie falconRising movies" onClick={handleClick}>
    <img src="/falconRising.jpg" className="card-img-top actionMovie falconRising"/>
    <div className="card-body falconRising">
                <p className="falconRising">Falcon Rising</p>
    </div>					
</div>
  )
}

export default FalconRising