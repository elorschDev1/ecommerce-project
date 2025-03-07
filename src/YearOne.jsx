import { useNavigate } from "react-router-dom";
const YearOne = () => {
  let navigate=useNavigate();
  let handleClick=(e)=>{
    if(e.target.classList.contains("yearOne")){
      navigate("/yearOneDetails");
    }
  }
  return (
    <div className="col card adventureMovie yearOne movies" id="yearOneFilm" onClick={handleClick}>
                                    <img src="/yearOne.jpg" className="card-img-top adventureMovie yearOne "/>
                                    <div className="card-body yearOne">
                                                <p className="yearOne">Year One</p>
                                    </div>					
                        </div>
  )
}

export default YearOne;