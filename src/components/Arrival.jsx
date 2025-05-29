import { useNavigate } from "react-router-dom"

const Arrival = () => {
  let navigate=useNavigate();
  const handleClick=(e)=>{
    if(e.target.classList.contains("arrival"))navigate("/arrivalDetails");
  }
  return (
    <div className="card col scifiMovie arrival movies" onClick={handleClick}>
    <img src="/arrival.jpg" alt="" className="card-img-top scifiMovie arrival" />
    <div className="card-body scifiMovie arrival">
                <p className="arrival">Arrival</p>
    </div>					
</div>
  )
}

export default Arrival