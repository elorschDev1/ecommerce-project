import { useNavigate } from "react-router-dom";
const Her = () => {
  let navigate=useNavigate();
  const handleClick=(e)=>{
    if(e.target.classList.contains("her"))navigate("/herDetails");
  }
  return (
    <div className="card col scifiMovie her movies" onClick={handleClick}>
                        <img src="/her.jpg" className="card-img-top scifiMovie her"></img>              
                                    <div className="card-body scifiMovie her">
                                                <p className="her">Her</p>
                                    </div>					
                        </div>
  )
}

export default Her;