import {useState,useContext} from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import ButtonContext from "../context/ButtonContext";
import CartPageContext from "../context/CartPageContext";
import ContactSuccessToast from './ContactSuccessToast';
import ToastContext from '../context/ToastContext';
const LoginPage = () => {
  // eslint-disable-next-line no-unused-vars
  let {loggedIn,setLoggedIn,currentUserEmail,setCurrentUserEmail}=useContext(UserContext);
  let {buttonClicked}=useContext(ButtonContext);
  let {cartIconClicked}=useContext(CartPageContext);
    let {triggerToast}=useContext(ToastContext);
  const [email,setEmail]=useState("");
  let [emailError,setemailError]=useState("");
  const [password,setPassword]=useState("");
  let [passwordError,setpasswordError]=useState("");
  // eslint-disable-next-line no-unused-vars
  let [formSuccess,setFormSuccess]=useState("");
 let lowercaseLetterPattern=/[a-z]/;
 let uppercaseLetterPattern=/[A-Z]/;
 let digitPattern=/[0-9]/;
 let passwordContainsLowercase=password.search(lowercaseLetterPattern)>=0;
 let passwordContainsUppercase=password.search(uppercaseLetterPattern)>=0;
 let passwordContainsDigit=password.search(digitPattern)>=0; 
let navigate=useNavigate();
 const handleEmailChange=(e)=>{
  setEmail(e.target.value.trim());
  if(emailError!=="")setemailError("");
}
const handlePasswordChange=(e)=>{
  setPassword(e.target.value.trim());
  if(passwordError!=="")setpasswordError("");
}
  const handleSubmit=async (e)=>{
    e.preventDefault();
    setFormSuccess("");
    let formIsValid=true;
    const formData=new FormData();
    if(email===""){
      setemailError("Provide the email address you used to create this account.");
      formIsValid=false;
    }
    else if(email.indexOf("@")<3){
      setemailError("Ensure the email address provided is valid.");
      formIsValid=false;
    }
    else if(email.search(uppercaseLetterPattern)>=0){
      setemailError("Ensure the email address provided is valid.");
      formIsValid=false;
    }
    else setemailError("");
    
    if(password===""){
      setpasswordError("Provide the password you used to create your account.");
      formIsValid=false;
     }else if(password.length<6){
      setpasswordError("Your password should not be less than 6 characters.");
      formIsValid=false;
     }else if(password.length>12){
      setpasswordError("Your password should not be greater than 12 characters.");
      formIsValid=false;
     }else if(!passwordContainsDigit){
      setpasswordError("Your password should contain a digit.");
      formIsValid=false;
     }else if(!passwordContainsLowercase){
      setpasswordError("Your password should contain a lowercase letter.");
      formIsValid=false;
     }else if(!passwordContainsUppercase){
      setpasswordError("Your password should contain an uppercase letter.");
      formIsValid=false;
     }else{
      setpasswordError("");
     }
     if(formIsValid){
      alert("Give us a moment to process your details.");
    
    formData.append("email",email);
     formData.append("password",password);
    try {
           
    const res=await fetch("https://inkhorn.co.ke/logindetails.php",{
      method:"POST",
      body:formData,
    });
   const  data=await res.json();
   console.log(data);
   if(data.message==="Login successful"){
    triggerToast("You have successfully logged in to your account.");
    setLoggedIn(true);
    setCurrentUserEmail(currentUserEmail=email);
    setTimeout(()=>{
      console.log(loggedIn);
    },1500)
    if(buttonClicked===true){
      navigate(-1);
    }else{
      navigate("/");
    }
    
   }
   if(data.message==="Login successful"&&cartIconClicked===true){
    triggerToast(`Redirecting you to the selected products page.`);
    setTimeout(()=>{
      navigate("/cart");
    },1000)
  
   }
   if(data.message==="Passwords do not match."){
    alert("Wrong password for this account,we suggest you reset your password:");
    let resetPassword=confirm("Do you want to reset your password?");
    if(resetPassword)navigate("/forgotPassword");
   }
   if(data.message=="No user has been found with this email address, sign up to create an account.")navigate("/signup")
      
    } catch (error) {
      console.log(error);
    }
  } 
  }
  
  return (
    <section className="d-flex flex-column justify-content-center align-items-center p-3 m-4">
    <form id="loginForm" noValidate role="form" onSubmit={handleSubmit} className="form d-flex justify-content-center align-items-center flex-column">
      <h4 className="text-white text-center">Login Here:</h4>
      <div className="mb-3 p-2">
      <label htmlFor="loginEmail" className="form-label">Enter Your Email Address Here:</label>
      <input type="email" id="loginEmail" name="loginEmail"  className="form-control  p-3 rounded-2 m-1" value={email} onChange={handleEmailChange}/>
      <p className="text-danger">{emailError}</p>
      </div>
     <div className="mb-3 p-2">
     <label htmlFor="loginpassword" className="form-label">Enter Your Password:</label>
    <input type="password" id="loginpassword" name="loginpassword"  className="form-control  p-3 rounded-2 m-1" value={password} onChange={handlePasswordChange}/>
    <p className="text-danger">{passwordError}</p>
     </div>
     <div className="mb-5 p-2 d-flex flex-column justify-content-center align-items-center">
      <Link to="/account">Sign up</Link>
    <Link to="/forgotPassword">Forgot Your Password? Reset It Here</Link>
       <button  type="submit"  className="btn btn-primary">Login</button>
    
     </div>
    
 
   <ContactSuccessToast/>
  </form>
  </section>
  )
}
export default LoginPage