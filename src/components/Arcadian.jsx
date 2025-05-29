import { useNavigate } from "react-router-dom"
const Arcadian = () => {
  let navigate=useNavigate();
  let handleClick=(e)=>{
    if(e.target.classList.contains("arcadian")){
      navigate("/arcadianDetails");
    }
  }
  return (
    <div className="col card horrorMovie arcadian movies" onClick={handleClick}>
    <img src="/arcadian.jpg" className="card-img-top horrorMovie arcadian"/>
    <div className="card-body arcadian">
                <p className="arcadian">Arcadian</p>
    </div>					
</div>
  )
}

export default Arcadian