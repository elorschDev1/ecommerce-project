import { useNavigate } from "react-router-dom";
const TheLostOne = () => {
  let navigate=useNavigate();
  let handleClick=(e)=>{
    if(e.target.classList.contains("theLostOne")){
      navigate("/lostOneDetails");
    }
  }
  return (
    <div className="col card adventureMovie theLostOne movies" onClick={handleClick}>
                                    <img src="/theLostOne.jpg" className="card-img-top adventureMovie theLostOne"/>
                                    <div className="card-body theLostOne">
                                                <p className="theLostOne">The Lost One</p>
                                    </div>					
                        </div>
  )
}
export default TheLostOne;