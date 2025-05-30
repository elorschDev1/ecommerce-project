import React,{useContext} from "react";
import PurchaseButtonContext from "../context/PurchaseButtonContext";

const PurchaseButton = () => {
 let {setPurchaseInititiated,purchaseInitiated}=useContext(PurchaseButtonContext);
  let handleClick=()=>{
    setPurchaseInititiated(true);
     console.log("A purchase action has occured.");
     console.log(purchaseInitiated);
  }
  return (
    <>
      <button className="bg-dark text-white" onClick={handleClick}>Purchase</button>
    </>
  )
}

export default PurchaseButton
