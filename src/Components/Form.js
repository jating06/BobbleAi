import React from 'react';
import {useState, useEffect, useRef} from 'react';
import {Fields} from './Fields'
import axios from 'axios'
import { common } from './common';
import {Facebook} from './Facebook'
export const Form = React.memo((props)=>{
  let email="";
  let password="";
  const signup = ()=>{
     ServerCall();
  
} 
function ServerCall(){
   
   axios.post('https://reqres.in/api/register',request).then((response)=>{
      
      alert("Successful")
   }).catch((err)=>{
      alert("Details Not filled or User Already Present")
   })
}
   let request={email,password}
    function fn(email,isEmail,isPassword) {
        if(isEmail){
      
         request={email: "eve.holt@reqres.in",password:"pistol"}
        }
         
        
          
          
       
      
    }
    let obj = {fn};
    return (
         <form  onSubmit={e => e.preventDefault()}>
        <div className = "form">
          <h1>Create your account</h1>
          <Facebook></Facebook>
          <h4>lorem ipsum dolor sit amet , consetetur adipiscing elit</h4>
        
         
          <br></br>
          <h3>SignUp</h3>
          <common.Provider value={obj}>
          <Fields name= "First Name" ></Fields>
          <Fields name= "Second Name"></Fields>
          <Fields name= "Email Address " type="email"></Fields>
          <Fields name= "Password" type = "password"></Fields>
          </common.Provider>
          <span>By clicking SignUp , you agree to our <a href="https://">Terms of Service</a> and our <a href="https://">privacy policy</a></span>
          <button className="SignUp" onClick = {signup} >SignUp</button>
         

        </div>
        </form>
       
    );
});