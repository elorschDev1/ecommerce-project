import { useNavigate } from "react-router-dom"
const HeartOfStone = () => {
  let navigate=useNavigate();
  let handleClick=(e)=>{
    if(e.target.classList.contains("heartOfStone")){
      navigate("/heartDetails");
    }
  }
  return (
    <div className="col card actionMovie heartOfStone movies" onClick={handleClick}>
    <img src="/heartOfStone.jpg" className="card-img-top actionMovie heartOfStone"/>
    <div className="card-body heartOfStone">
                <p className="heartOfStone">Heart of Stone</p>
    </div>					
</div>
  )
}

export default HeartOfStone