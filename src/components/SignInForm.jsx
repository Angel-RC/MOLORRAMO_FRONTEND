

import React, { Component } from "react";



function SignInForm ()  {
    
    return (
						<form className="auth-form signup-form">         
							<div className="form-group email">
								<input id="signin-email" name="email" type="email" className="form-control signin-email" placeholder="Email" required="required"/>
							</div>
							<div className="form-group password">
								<input id="signin-password" name="password" type="password" className="form-control signin-password" placeholder="Password" required="required"/>
								<div className="extra mt-2 position-relative">
									<input type="checkbox"/> Recuerdame
									<div className="forgotten-password">
										<a href="password.html">¿Olvidaste la contraseña?</a>
									</div>
								</div>
							</div>
							<div className="text-center">
								<button type="submit" className="btn btn-primary btn-submit theme-btn mx-auto">Entrar</button>
							</div>
						</form>
);
}


export default SignInForm;
