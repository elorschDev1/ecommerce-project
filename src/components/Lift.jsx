import { useNavigate } from "react-router-dom"
const Lift = () => {
  let navigate=useNavigate();
  let handleClick=(e)=>{
    if(e.target.classList.contains("lift")){
      navigate("/liftDetails");
    }
  }
  return (
    <div className="col card comedyMovie lift movies" onClick={handleClick}>
    <img src="/lift.jpg" className="card-img-top comedyMovie lift"/>
    <div className="card-body lift">
                <p className="lift">Lift</p>
    </div>					
</div>
  )
}
export default Lift