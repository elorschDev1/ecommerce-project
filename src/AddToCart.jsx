// eslint-disable-next-line no-unused-vars
import React ,{useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './context/UserContext';
import ButtonContext from './context/ButtonContext';
import MovieContext from './context/MovieContext';
const AddToCart = () => {
  let {loggedIn,currentUserEmail}=useContext(UserContext);
  let {buttonClicked,setButtonClicked}=useContext(ButtonContext);
  let {selectedMovies,addMovie}=useContext(MovieContext);
 let navigate=useNavigate();
  const handleClick=(e)=>{
  setButtonClicked(buttonClicked=true);
  if(buttonClicked===true&&loggedIn===false)navigate('/login');
 if(loggedIn===true&&buttonClicked===true){
 alert ("The user is logged in.");
 addMovie(e.target.parentNode.className);
 sendMovieData();

 }
  }

  const client={
    client_email:currentUserEmail,
    client_movies:selectedMovies
  }
  const sendMovieData=async()=>{
    let res=await fetch("http://localhost/ecommerce/usermovies.php",{
      method:"POST",
      body:JSON.stringify(client),
    });
    let data=await res.json();
    console.log(data);
  };

  return (
    <>
      <button className="addMovie" onClick={handleClick}>Add To Cart</button>
    </>
  )
}

export default AddToCart
