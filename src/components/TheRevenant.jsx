import { useNavigate } from "react-router-dom"
const TheRevenant = () => {
  let navigate=useNavigate();
  let handleClick=(e)=>{
    if(e.target.classList.contains("theRevenant")){
      navigate("/revenantDetails");
    }
  }
  return (
    <div className="col card adventureMovie theRevenant movies" onClick={handleClick}>
                                    <img src="/theRevenant.jpg" className="card-img-top adventureMovie theRevenant"/>
                                    <div className="card-body theRevenant">
                                                <p className="theRevenant">The Revenant</p>
                                    </div>					
                        </div>
  )
}

export default TheRevenant