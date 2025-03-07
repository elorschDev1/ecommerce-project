import { useNavigate } from "react-router-dom"
const BloodAndBone = () => {
  let navigate=useNavigate();
  let handleClick=(e)=>{
    if(e.target.classList.contains("bloodAndBone")){
      navigate("/bloodBoneDetails");
    }
  }
  return (
    <div className="col card actionMovie bloodAndBone movies" onClick={handleClick}>
                                    <img src="/bloodAndBone.jpg" className="card-img-top actionMovie bloodAndBone"/>
                                    <div className="card-body bloodAndBone">
                                                <p className="bloodAndBone">Blood And Bone</p>
                                    </div>					
                        </div>
  )
}
export default BloodAndBone;