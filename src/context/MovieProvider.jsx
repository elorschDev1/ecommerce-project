// eslint-disable-next-line no-unused-vars
import React,{useState} from 'react';
import MovieContext from './MovieContext';
import PropTypes from "prop-types";
const MovieProvider = ({children}) => {
    let [selectedMovies,setSelectedMovies]=useState([]);
    const addMovie=(movieName)=>{
        setSelectedMovies([...selectedMovies,movieName]);
    }
  return (<MovieContext.Provider value={{selectedMovies,setSelectedMovies,addMovie}}>{children}</MovieContext.Provider>)
}

export default MovieProvider
MovieProvider.propTypes={
    children:PropTypes.node.isRequired
};