/* eslint-disable no-unused-vars */
import React,{useState} from 'react';
import { UserContext } from './UserContext';
import PropTypes from "prop-types";

const UserProvider = ({children}) => {
    let [loggedIn,setLoggedIn]=useState(false);
    let [currentUserEmail,setCurrentUserEmail]=useState("")
    let [registeredNumber,setRegisteredNumber]=useState("");
    let [affectedEmailAddress,setAffectedEmailAddress]=useState("");
    
  return (<UserContext.Provider value={{loggedIn,setLoggedIn,currentUserEmail,setCurrentUserEmail,registeredNumber,setRegisteredNumber,affectedEmailAddress,setAffectedEmailAddress}}>{children}</UserContext.Provider>)
}

export default UserProvider
UserProvider.propTypes={
    children:PropTypes.node.isRequired
};

