import { useNavigate } from "react-router-dom"
const Sting = () => {
  let navigate=useNavigate();
  let handleClick=(e)=>{
if(e.target.classList.contains("sting"))navigate("/stingDetails");
  }
  return (
    <div className="col card horrorMovie sting movies" onClick={handleClick}>
    <img src="/sting.jpg" className="card-img-top horrorMovie sting"/>
    <div className="card-body sting">
                <p className="sting">Sting</p>
    </div>					
</div>
  )
}

export default Sting