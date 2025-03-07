import { useNavigate } from "react-router-dom";
const EdgeOfTomorrow = () => {
  let navigate=useNavigate();
  const handleClick=(e)=>{
    if(e.target.classList.contains("edgeofTomorrow"))navigate("/edgeDetails");
  }
  return (
    <div className="card col scifiMovie edgeOfTomorrow movies" onClick={handleClick}>
     <img src="/edgeOfTomorrow.jpg" className="card-img-top scifiMovie edgeofTomorrow"></img>
    <div className="card-body scifiMovie edgeofTomorrow">
                <p className="edgeOfTomorrow">Edge of Tomorrow</p>
    </div>					
</div>
  )
}

export default EdgeOfTomorrow