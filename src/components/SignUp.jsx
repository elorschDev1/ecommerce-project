import { Link } from "react-router-dom";
import { useState,useContext} from "react";
import {parsePhoneNumberFromString} from "libphonenumber-js";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import { useNavigate } from "react-router-dom";
import ContactSuccessToast from './ContactSuccessToast';
import ToastContext from '../context/ToastContext';
const SignUp = () => {
  let navigate=useNavigate();
 const formData=new FormData();
  let [nameValue,setnameValue]=useState("");
  let [nameError,setnameError]=useState("");
  let [telephoneValue,settelephoneValue]=useState("");
  let [telephoneError,setTelephoneError]=useState("");
  let [emailValue,setemailValue]=useState("");
  let [emailError,setemailError]=useState("");
  let [passwordValue,setpasswordValue]=useState("");
  let [passwordError,setpasswordError]=useState("");
  // eslint-disable-next-line no-unused-vars
  let [formSuccess,setFormSuccess]=useState("");
  let [boxChecked,setBoxChecked]=useState(false)
  let lowercaseLetterPattern=/[a-z]/;
  let uppercaseLetterPattern=/[A-Z]/;
  let digitPattern=/[0-9]/;
  let passwordContainsLowercase=passwordValue.search(lowercaseLetterPattern)>=0;
  let passwordContainsUppercase=passwordValue.search(uppercaseLetterPattern)>=0;
  let passwordContainsDigit=passwordValue.search(digitPattern)>=0; 
   let {triggerToast}=useContext(ToastContext);
 const handleNameChange=(e)=>{
    setnameValue(e.target.value);
    if(nameError!=="")setnameError("");
  }
  const handleEmailChange=(e)=>{
    setemailValue(e.target.value.trim());
    if(emailError!=="")setemailError("");
  }
  const handlePasswordChange=(e)=>{
    setpasswordValue(e.target.value.trim());
    if(passwordError!=="")setpasswordError("");
  }
  const handleCheckBoxChange=(e)=>{
   setBoxChecked(e.target.checked);
  }
  const handleSubmit=async (e)=>{
    e.preventDefault();
    setFormSuccess("");
    let formIsValid=true;
   if(nameValue===""){
    setnameError("You have to fill in your name.");
    formIsValid=false;
   }else if(nameValue.length<3){
    setnameError("Your name should not be less than 3 characters long.");
    formIsValid=false;
   }
   if (telephoneValue===""){
    setTelephoneError("Provide your telephone number here.");
    formIsValid=false;
   }
   else{
    const phoneNumber=parsePhoneNumberFromString("+" + telephoneValue);
    if(!phoneNumber||!phoneNumber.isValid()){
      setTelephoneError("Invalid phone number, ensure its in the correct format.");
      formIsValid=false;
    }
   }
  if(emailValue===""){
    setemailError("Provide your email address for contacting.");
    formIsValid=false;
  }
  else if(emailValue.indexOf("@")<3){
    setemailError("Ensure the email address provided is valid.");
    formIsValid=false;
  }
  else if(emailValue.search(uppercaseLetterPattern)>=0){
    setemailError("Ensure the email address provided is valid.");
    formIsValid=false;
  }
  else{
    setemailError("");
  }
   if(passwordValue===""){
    setpasswordError("Create a password for your account.");
    formIsValid=false;
   }else if(passwordValue.length<6){
    setpasswordError("Your password should not be less than 6 characters.");
    formIsValid=false;
   }else if(passwordValue.length>12){
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
   formData.append("name",nameValue);
   formData.append("email",emailValue);
   formData.append("phone",telephoneValue);
   formData.append("password",passwordValue);
   
   if(boxChecked===true)formData.append("approve-emails",boxChecked);
   try{
     const res=await fetch("https://inkhorn.co.ke/server.php",{
  method:"POST",
  body:formData
 })
 const data=await res.text();
 console.log(data);
 
 if(data==="This email already exists in our systems."){
  alert("Head over to the login section to log into your account.");
  navigate("/login");
 }
 triggerToast(`Hi there ${nameValue} you have successfully created an account here, welcome.`);
 setTimeout(()=>{
  setnameValue("");
  setemailValue("");
  settelephoneValue("");
  setpasswordValue("");
  if(boxChecked===true)setBoxChecked(false);
 },1200);
} catch(err){
  console.log(err);
}
     
   }

  }
  return (
    <section className="d-flex flex-column justify-content-center align-items-center  p-3">
    <form noValidate onSubmit={handleSubmit} className="form d-flex justify-content-center align-items-center flex-column ">
      <h2 className="text-white text-center">Sign Up Here:</h2>
    <div className="mb-1 p-2">
                      <label htmlFor="username" className="form-label">Name:</label>
                                  <input type="text" id="username" name="username" className="form-control p-3 rounded-2" value={nameValue} onChange={handleNameChange} autoComplete="name"/>
                      <p className="text-danger">{nameError}</p> 
                      </div>
                      <div className="mb-1 p-2">
                      <label  htmlFor="userphone" className="form-label" >Telephone Number:</label>
                      <PhoneInput  name='userphone' id="userphone" autoComplete="tel" onlyCountries={["ke","tz","ug","rw","bi","ss","et","so","us","gb","de","ae"]} value={telephoneValue} onChange={(value)=>{settelephoneValue(value)
                        if(telephoneError!=="")setTelephoneError("");
                      }} className="form-control"/>
                      <p className="text-danger">{telephoneError}</p>
                      </div>
                      <div className="mb-1 p-2">
                      <label htmlFor="userEmailAddress" className="form-label">Email Address:</label>
                      <input type="email" id="userEmailAddress" name="userEmailAddress"  autoComplete="email" className="form-control  p-3 rounded-2" value={emailValue} onChange={handleEmailChange}/>
                      <p className="text-danger">{emailError}</p>
                      </div>
                      <div className="mb-1 p-2">
                      <label htmlFor="userpassword" className="form-label">Enter Password:</label>
                     <input type="password" className="form-control  p-3 rounded-2" id="userpassword"  autoComplete="new-password" name="userpassword" value={passwordValue} onChange={handlePasswordChange}/>
                     <p className="text-danger">{passwordError}</p>
                     </div>
                     <div className="mb-1 p-2">
                     <label className="form-check-label">
                <input type="checkbox" name="notification-allowed" checked={boxChecked} onChange={handleCheckBoxChange} className="form-check-input"/>
                          Subscribe To Receive Emails.
                      </label>
                     </div>
                     <div className="mb-2 p-2">
                       <Link to="/login">I have an account, take me to the login page</Link>
                     </div>
                    <div className="mb-2 p-1">
                       <button type="submit" className="btn btn-primary">Sign Up</button>
                    </div>
                     
        <ContactSuccessToast/>
          </form> 
          </section>
          )
}
export default SignUp
