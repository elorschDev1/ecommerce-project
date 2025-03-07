import Scifi from "./Scifi";
import Action from "./Action";
import Adventure from "./Adventure";
import Comedy from "./Comedy";
import Horror from "./Horror";
const HomePage = () => {
  return (
    <div className="homeElement">
        <Scifi/>
        <Action/>
        <Adventure/>
        <Comedy/>
        <Horror/>
    
    </div>
  )
}

export default HomePage