import { useNavigate } from "react-router-dom"
const TheOtherGuys = () => {
  let navigate=useNavigate();
  let handleClick=(e)=>{
    if(e.target.classList.contains("theOtherGuys")){
      navigate("/guysDetails");
    }
  }
  return (
    <div className="col card comedyMovie theOtherGuys movies" onClick={handleClick}>
    <img src="/theOtherGuys.jpg" className="card-img-top comedyMovie theOtherGuys"/>
    <div className="card-body theOtherGuys">
                <p className="theOtherGuys">The Other Guys</p>
    </div>					
</div>
  )
}
export default TheOtherGuys