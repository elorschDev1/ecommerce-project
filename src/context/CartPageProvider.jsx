// eslint-disable-next-line no-unused-vars
import React,{useState} from 'react';
import CartPageContext from './CartPageContext';
import PropTypes from "prop-types";
const CartPageProvider = ({children}) => {
  let [cartPageIsURL,setCartPageIsURL]=useState(false);
  let [cartIconClicked,setCartIconClicked]=useState(false);
  return (<CartPageContext.Provider value={{cartPageIsURL,setCartPageIsURL,cartIconClicked,setCartIconClicked}}>{children}</CartPageContext.Provider> )
}

export default CartPageProvider
CartPageProvider.propTypes={
    children:PropTypes.node.isRequired
};

