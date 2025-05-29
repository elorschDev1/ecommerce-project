import { useNavigate } from "react-router-dom"
const TripleFrontier = () => {
  let navigate=useNavigate();
  let handleClick=(e)=>{
    if(e.target.classList.contains("tripleFrontier")){
      navigate("/frontierDetails");
    }
  }
  return (
    <div className="col card adventureMovie  tripleFrontier movies" onClick={handleClick}>
    <img src="/tripleFrontier.jpg" className="card-img-top adventureMovie tripleFrontier"/>
    <div className="card-body tripleFrontier">
                <p className="tripleFrontier">Triple Frontier</p>
    </div>					
</div>
  )
}

export default TripleFrontier