import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';



export  class Facebook extends Component {
    state={
        isLoggedIn:false,
        userId:'',
        name:'',
        email:'',
        password:'',
    }
    responseFacebook=(response)=>{
      console.log(response)
    }
    componentClick=()=>{
        console.log('clicked')
    }
    render() {
        let fbContent ;
        if(this.state.isLoggedIn){
            
                  fbContent = null;
        }
        else{
            fbContent = (<FacebookLogin
                appId="2422613448034013"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.ComponentClicked}
                callback={this.responseFacebook}
                cssClass="my-facebook-button-class"
                icon="fa-facebook"
              />)
        }
        return (
            <div>
                {fbContent} 
            </div>
        )
    }
}
