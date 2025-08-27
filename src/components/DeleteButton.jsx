// eslint-disable-next-line no-unused-vars
import React,{useContext} from 'react';
import PurchaseButtonContext from '../context/PurchaseButtonContext';
import PropTypes from 'prop-types';

const DeleteButton = ({movieName,email}) => {
  let {setDeleteInitiated}=useContext(PurchaseButtonContext);
  let handleClick=()=>{
    setDeleteInitiated(true);
    console.log(movieName,email);
    let formData=new FormData();
    formData.append("movieName",movieName);
    formData.append("email",email);
    let sendDeletedMovieData=async()=>{
     let response=await fetch("https://inkhorn.co.ke/deleteMovies.php",{
      method:"POST",
      body:formData
     });
     let data=await response.json();
     console.log(data);
     if(data==="Great, movie successfully deleted."){
      alert("The movie has been successfully deleted, navigate to any page of your choice and come back in a second to view the changes.");
     }
    }
    try{
      sendDeletedMovieData();
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div>
      <button className="bg-danger text-white" onClick={handleClick}>Delete</button>
    </div>
  )
}

export default DeleteButton;
DeleteButton.propTypes={
movieName:PropTypes.string.isRequired,
email:PropTypes.string.isRequired
}
