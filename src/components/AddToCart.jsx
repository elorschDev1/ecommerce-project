// eslint-disable-next-line no-unused-vars
import React ,{useContext,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import ButtonContext from '../context/ButtonContext';
import MovieContext from '../context/MovieContext';
const AddToCart = () => {
  let {loggedIn,currentUserEmail}=useContext(UserContext);
  let {buttonClicked,setButtonClicked}=useContext(ButtonContext);
  let {selectedMovies,addMovie}=useContext(MovieContext);
  let {addOccured,setAddOccured}=useContext(MovieContext);
 let navigate=useNavigate();
let moviesCopy=[...selectedMovies];
console.log(moviesCopy);

  const handleClick=(e)=>{
  setButtonClicked(buttonClicked=true);
  if(buttonClicked===true&&loggedIn===false)navigate('/login');
 if(loggedIn===true&&buttonClicked===true){
 addMovie(e.target.parentNode.className);
 }
  }
 const client={
  client_email:currentUserEmail,
  client_movie:moviesCopy[moviesCopy.length-1]
 }
useEffect(()=>{
  if(addOccured){
    sendMovieData();
    setAddOccured(false);
  }
},[addOccured]);
 
  const sendMovieData=async()=>{
    let res=await fetch("https://inkhorn.co.ke/usermovies.php",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        //This header will tell the server the format of the request body
      },
      body:JSON.stringify(client),
    });
  let data=await res.json();
  alert(data.message);
  
  };

  

  return (
    <>
      <button className="addMovie" onClick={handleClick}>Add To Cart</button>
    </>
  )
}

export default AddToCart