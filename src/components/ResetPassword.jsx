import {useState,useContext} from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
const ResetPassword = () => {
let {affectedEmailAddress,setLoggedIn}=useContext(UserContext);
let [newPassword,setNewPassword]=useState("");
let [newPasswordError,setNewPasswordError]=useState("");
let [confirmedPassword,setConfirmedPassword]=useState("");
let [confirmedPasswordError,setConfirmedPasswordError]=useState("");
  let lowercaseLetterPattern=/[a-z]/;
  let uppercaseLetterPattern=/[A-Z]/;
  let digitPattern=/[0-9]/;
  let formIsValid=true;
  let passwordContainsLowercase=newPassword.search(lowercaseLetterPattern)>=0;
  let passwordContainsUppercase=newPassword.search(uppercaseLetterPattern)>=0;
  let passwordContainsDigit=newPassword.search(digitPattern)>=0; 
  let confirmedPasswordContainsLowercase=confirmedPassword.search(lowercaseLetterPattern)>=0;
  let confrimedPasswordContainsUppercase=confirmedPassword.search(uppercaseLetterPattern)>=0;
  let confirmedPasswordContainsDigit=confirmedPassword.search(digitPattern)>=0; 
  let navigate=useNavigate();
let handleSubmit=(e)=>{
    e.preventDefault();
    if(newPassword===""){
    setNewPasswordError("Create a password for your account.");
    formIsValid=false;
   }else if(newPassword.length<6){
    setNewPasswordError("Your password should not be less than 6 characters.");
    formIsValid=false;
   }else if(newPassword.length>12){
    setNewPasswordError("Your password should not be greater than 12 characters.");
    formIsValid=false;
   }else if(!passwordContainsDigit){
    setNewPasswordError("Your password should contain a digit.");
    formIsValid=false;
   }else if(!passwordContainsLowercase){
    setNewPasswordError("Your password should contain a lowercase letter.");
    formIsValid=false;
   }else if(!passwordContainsUppercase){
    setNewPasswordError("Your password should contain an uppercase letter.");
    formIsValid=false;
   }else{
    setNewPasswordError("");
   }
     if(confirmedPassword===""){
    setConfirmedPasswordError("Create a password for your account.");
    formIsValid=false;
   }else if(confirmedPassword.length<6){
    setConfirmedPasswordError("Your password should not be less than 6 characters.");
    formIsValid=false;
   }else if(confirmedPassword.length>12){
    setConfirmedPasswordError("Your password should not be greater than 12 characters.");
    formIsValid=false;
   }else if(!confirmedPasswordContainsDigit){
    setConfirmedPasswordError("Your password should contain a digit.");
    formIsValid=false;
   }else if(!confirmedPasswordContainsLowercase){
    setConfirmedPasswordError("Your password should contain a lowercase letter.");
    formIsValid=false;
   }else if(!confrimedPasswordContainsUppercase){
    setConfirmedPasswordError("Your password should contain an uppercase letter.");
    formIsValid=false;
   }else if(confirmedPassword!==newPassword){
    setConfirmedPasswordError("Passwords do not match.");
    formIsValid=false;
   }
   else{
    setConfirmedPasswordError("");
   }
   if(formIsValid){
    let formData=new FormData();
    formData.append("newPassword",newPassword);
    formData.append("email",affectedEmailAddress);
    console.log(affectedEmailAddress);
    const submitResetDetails=async()=>{
        let response=await fetch("https://inkhorn.co.ke/resetPassword.php",{
            method:"POST",
            body:formData
        });
        let data=await response.json();
        if(data==="Great,your password has been reset successfully."){
        setLoggedIn(true);
        alert(data);
        setTimeout(()=>alert("You are now successfully logged in to your account."),500);
        setTimeout(()=>alert("Redirecting you to the home page."),1000);
        setTimeout(()=>navigate("/"),1000);
        }
    }
    try{
        submitResetDetails();
    }
    catch(error){
        console.log(error);
    }
   }
}
  return (
    <section className="d-flex flex-column justify-content-center align-items-center p-3 m-3">
        <form noValidate onSubmit={handleSubmit}>
              <div className="mb-3 p-3">
            <label htmlFor="newPassword" className="form-label">Enter Your New Password:</label>
            <input type="password" className="form-control" name="newPassword" value={newPassword} onChange={(e)=>{
                setNewPassword(e.target.value);
                if(newPasswordError!=="")setNewPasswordError("");
            }} />
            <p className="fw-bold text-danger">{newPasswordError}</p>
        </div>
        <div className="mb-3 p-3">
            <label htmlFor="confirmedPassword" className="form-label">Confirm Your Password:</label>
            <input type="password" name="confirmedPassword" id="confirmedPassword" className="form-control" value={confirmedPassword} onChange={(e)=>{
                setConfirmedPassword(e.target.value);
                if(confirmedPasswordError!=="")setConfirmedPasswordError("");
            }} />
            <p className="fw-bold text-danger">{confirmedPasswordError}</p>
        </div>
        <div className="mb-3 p-3">
             <button type="submit" className="btn bg-primary text-white fw-bold">Submit</button>
        </div> 
        </form>
    </section>
  )
}
export default ResetPassword