// eslint-disable-next-line no-unused-vars
import React,{useState} from 'react';
import ButtonContext from './ButtonContext';
import PropTypes from "prop-types";
const ButtonProvider = ({children}) => {
    let [buttonClicked,setButtonClicked]=useState(false);
  return (<ButtonContext.Provider value={{buttonClicked,setButtonClicked}}>{children}</ButtonContext.Provider> )
}

export default ButtonProvider
ButtonProvider.propTypes={
    children:PropTypes.node.isRequired
};

