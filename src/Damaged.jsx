import { useNavigate } from "react-router-dom"
const Damaged = () => {
  let navigate=useNavigate();
  let handleClick=(e)=>{
    if(e.target.classList.contains("damaged")){
      navigate("/damagedDetails");
    }
  }
  return (
    <div className="col card actionMovie damaged movies" onClick={handleClick}>
    <img src="/damaged.jpg" className="card-img-top actionMovie damaged"/>
    <div className="card-body damaged">
                <p className="damaged">Damaged</p>
    </div>					
</div>
  )
}

export default Damaged