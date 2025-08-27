import {useState,useContext} from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
const ForgotPassword = () => {
  let formData=new FormData();
  let {setAffectedEmailAddress}=useContext(UserContext);
  let [emailValue,setEmailValue]=useState("");
  let [securityResponse,setSecurityResponse]=useState("");
  let [emailError,setEmailError]=useState("");
  let [securityResponseError,setSecurityResponseError]=useState("");
  let uppercaseLetterPattern=/[A-Z]/;
  let navigate=useNavigate();
  let handleSubmit=(e)=>{
    e.preventDefault();
     let formIsvalid=true;
    if(emailValue===""){
      setEmailError("Kindly provide your email address.");
      formIsvalid=false;
    }
    else if(emailValue.indexOf("@")<3||emailValue.search(uppercaseLetterPattern)>=0){
      setEmailError("This email address is invalid.");
      formIsvalid=false;
    }
    else setEmailError("");
    if(securityResponse===""){
      setSecurityResponseError("Kindly provide an answer to this question.");
      formIsvalid=false;
    }else setSecurityResponseError("");

    if(formIsvalid){
      formData.append("email",emailValue);
      formData.append("securityResponse",securityResponse);
      const sendFormData=async()=>{
        let response=await fetch("https://inkhorn.co.ke/forgotPassword.php",{
          method:"POST",
          body:formData
        });
        let data=await response.json();
        if(data==="User not found."){
          alert("Hi this user account has not been found, you may sign up if you want to have an account with us.");
          setTimeout(()=>{
            alert("Redirecting you to the home page.");
          },500);
          setTimeout(()=>{
            navigate("/");
          },1000);
        }
        if(data==="Proceed with password reset process."){
          setAffectedEmailAddress(emailValue);
          alert("Kindly be patient, redirecting you in a bit...");
          setTimeout(()=>{
            navigate("/responseConfirmation");
          },1000)
        }
        
      }
      try{
        sendFormData();
      }catch(error){
        console.log(error);
      }
    }
  }
  return (
    <>
    <section className="d-flex flex-column justify-content-center align-items-center p-3 m-3">
      <form  className="d-flex flex-column justify-content-center align-items-center"  noValidate  onSubmit={handleSubmit}>
        <h4 className="text-white text-center">Reset Password:</h4>
        <div className="mb-3 p-2">
          <label htmlFor="email" className="form-label">Enter Your Email</label>
          <input type="text" className="form-control" id="email" name="email"  value={emailValue}  onChange={(e)=>{
            if(emailError!=="")setEmailError("");
            setEmailValue(e.target.value);
          }}/>
          <p className="text-danger fw-bold">{emailError}</p>
        </div>
        <div className="mb-5 p-5 d-flex flex-column justify-content-center align-items-center">
          <label htmlFor="securityQuestion" className="form-label">Where Would You Like To Build Your Dream Home?</label>
          <input type="text" className="form-control" id="securityQuestion" name="securityQuestion"  value={securityResponse} onChange={(e)=>{
            if(securityResponseError!=="")setSecurityResponseError("");
            setSecurityResponse(e.target.value);
          }}/>
          <p className="text-danger fw-bold">{securityResponseError}</p>
            <button type="submit" className="btn btn-primary text-white">Submit</button>
        </div>
      </form>
    </section>
    </>
  )
}
export default ForgotPassword