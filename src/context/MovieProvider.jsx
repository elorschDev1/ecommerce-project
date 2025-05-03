// eslint-disable-next-line no-unused-vars
import React,{useState,useCallback,useEffect} from 'react';
import MovieContext from './MovieContext';
import PropTypes from "prop-types";
const MovieProvider = ({children}) => {
    let [selectedMovies,setSelectedMovies]=useState([]);
    let [addOccured,setAddOccured]=useState(false);
     const addMovie=(movieName)=>{
      setSelectedMovies(movies=>[...movies,movieName]);
      setAddOccured(true);
      console.log(selectedMovies);
      }
     
      
  return (<MovieContext.Provider value={{selectedMovies,setSelectedMovies,addMovie,addOccured,setAddOccured}}>{children}</MovieContext.Provider>)
}
export default MovieProvider
MovieProvider.propTypes={
    children:PropTypes.node.isRequired
};