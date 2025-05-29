import { useNavigate } from "react-router-dom";
const ExMachina = () => {
  let navigate=useNavigate();
  const handleClick=(e)=>{
    if(e.target.classList.contains("exMachina"))navigate("/exMachinaDetails");
  }
  return (
    <div className="card col scifiMovie exMachina movies" onClick={handleClick}>
                                 <img src="/exMachina.jpg" alt="" className="card-img-top scifiMovie exMachina" /> 
                                    <div className="card-body scifiMovie exMachina">
                                                <p className="exMachina">Ex Machina</p>
                                    </div>				
                        </div>
  )
}

export default ExMachina;