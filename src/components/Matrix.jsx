import { useNavigate } from "react-router-dom"
const Matrix = () => {
  let navigate=useNavigate();
  const handleClick=(e)=>{
if(e.target.classList.contains("theMatrix"))navigate("/matrixDetails");
  }
  return (
    <div className="card col scifiMovie theMatrix movies" onClick={handleClick}>
      <img src="/theMatrix.jpg" className="card-img-top scifiMovie theMatrix"></img>
    <div className="card-body scifiMovie theMatrix">
                <p className="theMatrix">The Matrix</p>
    </div>					
</div>
  )
}

export default Matrix