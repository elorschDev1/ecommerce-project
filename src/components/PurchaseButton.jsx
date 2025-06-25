// eslint-disable-next-line no-unused-vars
import React,{useContext} from "react";
import PurchaseButtonContext from "../context/PurchaseButtonContext";
import PropTypes from 'prop-types';

const PurchaseButton = ({movieName,moviePrice}) => {
   let {setPurchaseInitiated,setPurchasedMovie,setPurchasedMoviePrice}=useContext(PurchaseButtonContext);
  let handleClick=()=>{
    setPurchaseInitiated(true);
     console.log("A purchase action has occured.");
     setPurchasedMovie(movieName);
     setPurchasedMoviePrice(moviePrice);
     console.log(typeof moviePrice)
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
  moviePrice:PropTypes.string.isRequired
}
