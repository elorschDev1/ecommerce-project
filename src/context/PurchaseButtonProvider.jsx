// eslint-disable-next-line no-unused-vars
import React,{useState} from 'react';
import PurchaseButtonContext from './ButtonContext';
import PropTypes from "prop-types";
const PurchaseButtonProvider = ({children}) => {
    let [purchaseInitiated,setPurchaseInitiated]=useState(false);
  return (<PurchaseButtonContext.Provider value={{purchaseInitiated,setPurchaseInitiated}}>{children}</PurchaseButtonContext.Provider> )
}

export default PurchaseButtonProvider
PurchaseButtonProvider.propTypes={
    children:PropTypes.node.isRequired
};

