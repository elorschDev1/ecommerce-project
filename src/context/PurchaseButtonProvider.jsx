// eslint-disable-next-line no-unused-vars
import React,{useState} from 'react';
import PurchaseButtonContext from './PurchaseButtonContext';
import PropTypes from "prop-types";
const PurchaseButtonProvider = ({children}) => {
    let [purchaseInitiated,setPurchaseInitiated]=useState(false);
    let [purchasedMovie,setPurchasedMovie]=useState("");
    let [purchasedMoviePrice,setPurchasedMoviePrice]=useState(0);
  return (<PurchaseButtonContext.Provider value={{purchaseInitiated,setPurchaseInitiated,purchasedMovie,setPurchasedMovie,purchasedMoviePrice,setPurchasedMoviePrice}}>{children}</PurchaseButtonContext.Provider> )
}

export default PurchaseButtonProvider
PurchaseButtonProvider.propTypes={
    children:PropTypes.node.isRequired
};

