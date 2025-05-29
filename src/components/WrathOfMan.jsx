import { useNavigate } from "react-router-dom"
const WrathOfMan = () => {
  let navigate=useNavigate();
  let handleClick=(e)=>{
    if(e.target.classList.contains("wrathOfMan"))navigate("/wrathDetails");
  }
  return (
    <div className="card col actionMovie wrathOfMan movies" onClick={handleClick}>
                                    <img src="/wrathOfMan.jpg" className="card-img-top actionMovie wrathOfMan"/>
                                    <div className="card-body wrathOfMan">
                                                <p className="wrathOfMan">Wrath of Man</p>
                                    </div>					
                        </div>
  )
}
export default WrathOfMan