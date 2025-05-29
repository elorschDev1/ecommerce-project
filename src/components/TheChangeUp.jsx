import { useNavigate } from "react-router-dom"
const TheChangeUp = () => {
  let navigate=useNavigate();
  let handleClick=(e)=>{
    if(e.target.classList.contains("theChangeUp")){
      navigate("/changeUpDetails");
    }
  }
  return (
    <div className="col card comedyMovie theChangeUp movies" onClick={handleClick}>
    <img src="/theChangeUp.jpg" className="card-img-top comedyMovie theChangeUp"/>
    <div className="card-body theChangeUp">
                <p className="theChangeUp">The Change Up</p>
    </div>					
</div>
  )
}
export default TheChangeUp