import {useState,useContext} from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const SecurityResponseConfirmation = () => {
  let {affectedEmailAddress}=useContext(UserContext);
  let [userResponse,setUserResponse]=useState("");
  let [userResponseError,setUserResponseError]=useState("");
  let navigate=useNavigate();
  let handleSubmit=(e)=>{
    e.preventDefault();
    let formIsValid=true;
    if(userResponse===""){
      setUserResponseError("Provide the answer to this question.");
      formIsValid=false;
    }
   if(formIsValid){
    let formData=new FormData();
    formData.append("email",affectedEmailAddress);
    formData.append("response",userResponse);
    const sendResponse=async()=>{
      let response=await fetch("https://inkhorn.co.ke/responseConfirmation.php",{
        method:"POST",
        body:formData
      });
      let data=await response.json();
      if(data.message==="User has been found"){
        alert("Great, let's proceed to the password reset page.");
        navigate("/resetPassword");
      }
    }
    try{
      sendResponse();
    } catch(error){
      console.log(error);
    }
   }

  }
  return (
    <section className="d-flex flex-column justify-content-center align-items-center p-3 m-3">
    <form  className="d-flex flex-column p-2 m-2" noValidate onSubmit={handleSubmit}>
      <div className="mb-3 p-2">
        <label htmlFor="userResponse" className="form-label">What was the answer to where you wanted your dream home to be built:</label>
        <input type="text" className="form-control" value={userResponse} onChange={(e)=>{
          setUserResponse(e.target.value)
          if(userResponseError!=="")setUserResponseError("");
        }}/>
        <p className="fw-bold text-danger">{userResponseError}</p>
      </div>
      <div className="mb-3 p-2">
        <button type="submit" className="btn bg-primary text-white fw-bold">Submit</button>
      </div>


    </form>






    </section>
  )
}

export default SecurityResponseConfirmation