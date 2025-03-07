import { useNavigate } from "react-router-dom"
const TheWatchers = () => {
  let navigate=useNavigate();
  let handleClick=(e)=>{
    if(e.target.classList.contains("theWatchers")){
      navigate("/watchersDetails");
    }
  }
  return (
    <div className="col card horrorMovie theWatchers movies" onClick={handleClick}>
    <img src="/theWatchers.jpg" className="card-img-top horrorMovie theWatchers"/>
    <div className="card-body theWatchers">
                <p className="theWatchers">The Watchers</p>
    </div>					
</div>
  )
}

export default TheWatchers