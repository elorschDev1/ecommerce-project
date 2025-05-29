import WrathOfMan from "./WrathOfMan";
import OperationFortune from "./OperationFortune";
import FalconRising from "./FalconRising";
import BloodAndBone from "./BloodAndBone";
import HeartOfStone from "./HeartOfStone";
import Damaged from "./Damaged";

const Action = () => {
  return (
    <>
    <div className="row">
    <WrathOfMan/>
    <OperationFortune/>
    <FalconRising/>
    </div>
    <div className="row">
    <BloodAndBone/>
    <HeartOfStone/>
    <Damaged/>
    </div>
    </>
  )
}

export default Action