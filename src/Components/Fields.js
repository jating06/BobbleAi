import React from 'react'
import { common } from './common'
import {useRef} from 'react';
export const Fields =  (props)=>{
       let email = useRef();
       let isEmail = false;
       let isPassword = false;
       
       if(props.type=="email"){
           isEmail = true;
       }
       if(props.password=="password"){
        isPassword = true;
         }  
         
    
        return (<div>
            <common.Consumer>
             
                {     
                    value=>{
                       
                        return (
                        <>
                        <input placeholder={props.name} onBlur={()=>{
                          value.fn(email,isEmail,isPassword)}}type={props.type}  className="fields" ref={email} required></input>
                        <br></br>
                         <br></br>
                        </>
                        )
                    }
                }
    
            </common.Consumer>
        </div>);
}



           