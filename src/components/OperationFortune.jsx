import { useNavigate } from "react-router-dom"
const OperationFortune = () => {
  let navigate=useNavigate();
  let handleClick=(e)=>{
    if(e.target.classList.contains("operationFortune"))navigate("/operationDetails");
  }
  return (
    <div className="card col actionMovie operationFortune movies" onClick={handleClick}>
    <img src="/operationFortune.jpg" className="card-img-top actionMovie operationFortune"/>
    <div className="card-body operationFortune">
                <p className="operationFortune">Operation Fortune</p>
    </div>					
</div>
  )
}

export default OperationFortune