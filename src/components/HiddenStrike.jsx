import { useNavigate } from "react-router-dom";
const HiddenStrike = () => {
  let navigate=useNavigate();
  let handleClick=(e)=>{
    if(e.target.classList.contains("hiddenStrike")){
      navigate("/hiddenStrikeDetails");
    }
  }
  return (
  
    <div className="col card adventureMovie hiddenStrike movies" onClick={handleClick}>
                <img src="/hiddenStrike.jpg" className="card-img-top adventureMovie hiddenStrike"/>
                <div className="card-body hiddenStrike">
                            <p className="hiddenStrike">Hidden Strike</p>
                </div>		
                </div>			
    
  )
}

export default HiddenStrike