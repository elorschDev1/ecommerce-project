import { useNavigate } from "react-router-dom"
const Damsel = () => {
  let navigate=useNavigate();
  let handleClick=(e)=>{
    if(e.target.classList.contains("damsel")){
      navigate("/damselDetails");
    }
  }
  return (
    <div className="col card adventureMovie damsel movies" onClick={handleClick}>
    <img src="/damsel.jpg" className="card-img-top adventureMovie damsel"/>
    <div className="card-body damsel">
                <p className="damsel">Damsel</p>
    </div>					
</div>
  )
}

export default Damsel