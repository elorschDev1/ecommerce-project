import TheChangeUp from "./TheChangeUp";
import TheOtherGuys from "./TheOtherGuys";
import GrownUps from "./GrownUps";
import FamilyAffair from "./FamilyAffair";
import Lift from "./Lift";
import Upgraded from "./Upgraded";
const Comedy = () => {
  return (
    <>
    <div className="row">
      <TheChangeUp/>
      <TheOtherGuys/>
      <GrownUps/>
     </div>
    <div className="row">
     <FamilyAffair/>
     <Lift/>
     <Upgraded/>
    </div> 
    </>
  )
}
export default Comedy