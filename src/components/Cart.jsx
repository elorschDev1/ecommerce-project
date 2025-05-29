// eslint-disable-next-line no-unused-vars
import React ,{useContext,useEffect,useState} from 'react';
import { UserContext } from '../context/UserContext.js';
import CartPageContext from '../context/CartPageContext.js';
import PurchaseButtonContext from '../context/PurchaseButtonContext.js';
import { useNavigate } from 'react-router-dom';
import PurchaseButton from './PurchaseButton.jsx';
import DeleteButton from './DeleteButton.jsx';
const Cart = () => {
  let {loggedIn,currentUserEmail}=useContext(UserContext);
  let {cartIconClicked}=useContext(CartPageContext);
  let {purchaseInitiated}=useContext(PurchaseButtonContext);
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
    let sendEmailLogin=async()=>{
      let res=await fetch("https://ecommerce-backend-4ooo.onrender.com/getUserMovies.php",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          //This header will tell the server the format of the request body
        },
        body:JSON.stringify(currentUserEmail)
       //body:JSON.stringify(formData)
      })
      let data=await res.json();
     setMovies([...data]);
    }
    sendEmailLogin();
  }

},[]);
useEffect(()=>{
  if(purchaseInitiated===true){
   console.log("Purchase action taken");
  }
},[purchaseInitiated])
 
  return (
    <div className="p-3 m-3 d-flex flex-column justify-content-center align-items-center">
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
            <td><PurchaseButton/></td>
            <td><DeleteButton/></td>
          </tr>
         ))} 
        </tbody>

      </table>
      </div>
  )
}

export default Cart