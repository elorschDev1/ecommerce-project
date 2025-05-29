import { useNavigate } from "react-router-dom"
const FamilyAffair = () => {
  let navigate=useNavigate();
  let handleClick=(e)=>{
    if(e.target.classList.contains("familyAffair")){
      navigate("/familyAffairDetails");
    }
  }
  return (
    <div className="col card comedyMovie familyAffair movies" onClick={handleClick}>
    <img src="/familyAffair.jpg" className="card-img-top comedyMovie familyAffair"/>
    <div className="card-body familyAffair">
                <p className="familyAffair">A Family Affair</p>
    </div>					
</div>
  )
}

export default FamilyAffair