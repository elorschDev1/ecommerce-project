import { useNavigate } from "react-router-dom";
const GrownUps = () => {
  let navigate=useNavigate();
  let handleClick=(e)=>{
    if(e.target.classList.contains("grownUps")){
      navigate("/grownUpsDetails");
    }
  }
  return (
    <div className="col card comedyMovie grownUps movies" onClick={handleClick}>
    <img src="/grownUps.jpg" className="card-img-top comedyMovie grownUps"/>
    <div className="card-body grownUps">
                <p className="grownUps">Grown Ups</p>
    </div>					
</div>
  )
}

export default GrownUps