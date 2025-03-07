import { useNavigate } from "react-router-dom"
const Abigail = () => {
  let navigate=useNavigate();
  let handleClick=(e)=>{
    if(e.target.classList.contains("abigail")){
      navigate("/abigailDetails");
    }
  }
  return (
    <div className="col card horrorMovie abigail movies" onClick={handleClick}>
    <img src="/abigail.jpg" className="card-img-top horrorMovie abigail"/>
    <div className="card-body abigail">
                <p className="abigail">	Abigail</p>
    </div>					
</div>
  )
}

export default Abigail