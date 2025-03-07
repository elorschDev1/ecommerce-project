/* eslint-disable no-unused-vars */
import React,{useState} from 'react';
import { UserContext } from './UserContext';
import PropTypes from "prop-types";

const UserProvider = ({children}) => {
    let [loggedIn,setLoggedIn]=useState(false);
    let [currentUserEmail,setCurrentUserEmail]=useState("")
    
  return (<UserContext.Provider value={{loggedIn,setLoggedIn,currentUserEmail,setCurrentUserEmail}}>{children}</UserContext.Provider>)
}

export default UserProvider
UserProvider.propTypes={
    children:PropTypes.node.isRequired
};

