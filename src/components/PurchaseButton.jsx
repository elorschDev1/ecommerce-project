// eslint-disable-next-line no-unused-vars
import React,{useContext} from "react";
import PurchaseButtonContext from "../context/PurchaseButtonContext";
import PropTypes from 'prop-types';

const PurchaseButton = ({movieName,moviePrice,registeredNumber}) => {
   let {setPurchaseInitiated,setPurchasedMovie,setPurchasedMoviePrice}=useContext(PurchaseButtonContext);
  let handleClick=()=>{
    setPurchaseInitiated(true);
     console.log("A purchase action has occured.");
     setPurchasedMovie(movieName);
     setPurchasedMoviePrice(moviePrice);
     console.log(typeof registeredNumber);
     let formData=new FormData();
     formData.append("movieName",movieName);
     formData.append("moviePrice",moviePrice);
     formData.append("registeredNumber",registeredNumber);
     const sendPurchaseDetails=async()=>{
      try {
        let res=await fetch("http://inkhorn.co.ke/expressStkPush.php",{
          method:"POST",
          body:formData
        });
        let data=await res.json();
        console.log(data);
        
      } catch (error) {
        console.log(error);
      }
     }
     sendPurchaseDetails();
  }
  return (
    <>
      <button className="bg-dark text-white" onClick={handleClick}>Purchase</button>
    </>
  )
}

export default PurchaseButton
PurchaseButton.propTypes={
  movieName:PropTypes.string.isRequired,
  moviePrice:PropTypes.number.isRequired,
  registeredNumber:PropTypes.number.isRequired
}
