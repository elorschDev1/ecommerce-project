// eslint-disable-next-line no-unused-vars
import React,{useState} from 'react';
import PurchaseButtonContext from './PurchaseButtonContext';
import PropTypes from "prop-types";
const PurchaseButtonProvider = ({children}) => {
    let [purchaseInitiated,setPurchaseInitiated]=useState(false);
    let [purchasedMovie,setPurchasedMovie]=useState("");
    let [purchasedMoviePrice,setPurchasedMoviePrice]=useState(0);
    let [deleteInitiated,setDeleteInitiated]=useState(false);
  return (<PurchaseButtonContext.Provider value={{purchaseInitiated,setPurchaseInitiated,purchasedMovie,setPurchasedMovie,purchasedMoviePrice,setPurchasedMoviePrice,deleteInitiated,setDeleteInitiated}}>{children}</PurchaseButtonContext.Provider> )
}

export default PurchaseButtonProvider
PurchaseButtonProvider.propTypes={
    children:PropTypes.node.isRequired
};

