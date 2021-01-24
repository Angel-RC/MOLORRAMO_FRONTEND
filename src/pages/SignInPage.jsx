
import SignInForm from "../components/SignInForm"
import React, { Component } from "react";



function SignInPage (props)  {
    

     return (
		
		<div className="container curve-container ">
			<div className="curve-top"></div>
			<div className="auth-option over-curve text-center text-lg-right pt-4 mb-5">
				¿No tienes cuenta? <a class="ml-2 more-link" href="signup.html">Createla ahora <strong>&rarr;</strong></a>              
			</div>
			<div className="single-col-max mx-auto over-curve px-5">  
				<div className="site-logo mb-4 text-center"><a className="navbar-brand" href="index.html"><img className="logo-icon mr-2" src="launch-bs4/assets/images/site-logo.svg" alt="logo"/></a></div>   

				<div className="auth-wrapper mx-auto">
					<h2 className="auth-heading text-center mb-4">Entra a tu cuenta</h2>
					<SignInForm  UserLogin = {props.UserLogin} SetUserLogin = {props.SetUserLogin} />
				</div>
     		 </div>
     	</div>

);
}

export default SignInPage;
