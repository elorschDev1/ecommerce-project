// eslint-disable-next-line no-unused-vars
import React ,{useContext,useEffect,useState} from 'react';
import { UserContext } from '../context/UserContext.js';
import CartPageContext from '../context/CartPageContext.js';
import { useNavigate } from 'react-router-dom';
import PurchaseButton from './PurchaseButton.jsx';
import DeleteButton from './DeleteButton.jsx';
const Cart = () => {
  let {loggedIn,currentUserEmail,registeredNumber,setRegisteredNumber}=useContext(UserContext);
  let {cartIconClicked}=useContext(CartPageContext);
  let [movies,setMovies]=useState([]);
  let navigate=useNavigate();
  let formData=new FormData();
  useEffect(()=>{
  if(cartIconClicked&&!loggedIn){
    console.log(`Hi there, kindly log in to view the products you had selected.`);
    navigate("/login");
  }
  if(cartIconClicked&&loggedIn){
    formData.append("email",currentUserEmail)
    const sendEmailLogin=async()=>{
      try {
        let res=await fetch("https://inkhorn.co.ke/getUserMovies.php",{
          method:"POST",
          body:formData
        });
        let data=await res.json();
        setMovies([...data]);  
      } catch (error) {
        console.log(error);
      }
    }
    sendEmailLogin();

    const getPhoneNumber=async()=>{
      try {
          let res=await fetch("https://inkhorn.co.ke/clientcontact.php",{
        method:"POST",
          headers:{
          "Content-Type":"application/json",
          //This header will tell the server the format of the request body
        },
        body:JSON.stringify(currentUserEmail)
      })
      let data=await res.text();
      let parsedData=JSON.parse(data);
      let obtainedNumber=parsedData[0].client_phonenumber;
      setRegisteredNumber(obtainedNumber);    
      } catch (error) {
        console.log(error);
      }
    }
    getPhoneNumber()
  }
},[]);



  return (
    <div className="p-3 m-3 d-flex flex-column justify-content-center align-items-center table-responsive">
      <h3 className='text-white text-center'>Your Movie Selection List:</h3>
    
      <table className='table table-success p-1 m-2 w-25'>
        <thead>
          <tr>
            <td>Movie Name</td>
            <td>Movie Image</td>
            <td>Movie Price</td>
            <td>Movie Category</td>
            <td></td>
            <td></td>
          </tr>
        </thead>
        <tbody>
         {movies.map((movie,index)=>(
          <tr key={index}>
            <td>{movie.name}</td>
            <td><img src={movie.image} className='img-fluid'/></td>
            <td>{movie.price}</td>
            <td>{movie.category}</td>
            <td><PurchaseButton movieName={movie.name} moviePrice={movie.price} registeredNumber={registeredNumber}/></td>
            <td><DeleteButton movieName={movie.name} email={currentUserEmail}/></td>
          </tr>
         ))} 
        </tbody>

      </table>
      </div>
  )
}

export default Cart