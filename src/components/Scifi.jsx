import Inception from "./Inception";
import ExMachina from "./Ex Machina";
import Arrival from "./Arrival";
import Her from "./Her";
import Matrix from "./Matrix";
import EdgeOfTomorrow from "./EdgeOfTomorrow";
const Scifi = () => {
  return (
    <>
    <div className="row">
    <Inception/>
    <ExMachina/>
    <Arrival/>
    </div>
    <div className="row">
    <Her/>
    <Matrix/>
    <EdgeOfTomorrow/>
    </div>
    </>
  )
}

export default Scifi