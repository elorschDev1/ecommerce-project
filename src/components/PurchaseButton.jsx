import React,{useContext} from "react";
import PurchaseButtonContext from "../context/PurchaseButtonContext";

const PurchaseButton = () => {
  let {setPurchaseInititiated}=useContext(PurchaseButtonContext);
  return (
    <>
      <button className="bg-dark text-white" onClick={()=>setPurchaseInititiated(true)}>Purchase</button>
    </>
  )
}

export default PurchaseButton
