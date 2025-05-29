import { useNavigate } from "react-router-dom"
const Upgraded = () => {
  let navigate=useNavigate();
  let handleClick=(e)=>{
    if(e.target.classList.contains("upgraded")){
      navigate("/upgradedDetails");
    }
  }
  return (
    <div className="col card comedyMovie upgraded movies" onClick={handleClick}>
    <img src="/upgraded.jpg" className="card-img-top comedyMovie upgraded"/>
    <div className="card-body upgraded">
                <p className="upgraded">Upgraded</p>
    </div>					
</div>
  )
}

export default Upgraded