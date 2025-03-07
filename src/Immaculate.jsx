import { useNavigate } from "react-router-dom"
const Immaculate = () => {
  let navigate=useNavigate();
  let handleClick=(e)=>{
    if(e.target.classList.contains("immaculate")){
      navigate("/immaculateDetails");
    }
  }
  return (
    <div className="col card horrorMovie immaculate movies" onClick={handleClick}>
    <img src="/immaculate.jpg" className="card-img-top horrorMovie immaculate"/>
    <div className="card-body immaculate">
                <p className="immaculate">Immaculate</p>
    </div>					
</div>
  )
}

export default Immaculate