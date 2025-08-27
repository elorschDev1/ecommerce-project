import { useNavigate } from "react-router-dom";
const Inception = () => {
  let navigate=useNavigate();
  const handleClick=(e)=>{
    if(e.target.classList.contains("inceptionMovie"))navigate("/inceptionDetails");
  }
  return (
    <div className="card col scifiMovie inceptionMovie movies h-100" onClick={handleClick}>
              <img src="/inception.jpg" alt="" className="card-img-top scifiMovie inceptionMovie"/>
                                    <div className="card-body scifiMovie inceptionMovie">
                                                <p className="inceptionMovie">Inception</p>
                                            </div>
                        </div>           
  
  )
}

export default Inception;