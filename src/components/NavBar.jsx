
import React, { Component } from "react";
import { Link, NavLink, withRouter } from 'react-router-dom';

class NavBar extends Component {
    getNavLinkClass = (path) => {
        return this.props.location.pathname === path ? ' active' : '';
    }
    render() {
  return (
<div className="hero-wrapper">
<div className="curve-container">
    <div className="curve-top"></div>
    <div className="curve-bottom"></div>
</div>
<header className="header">	    
    <div className="branding">
        <div className="container">
            <nav className="navbar navbar-expand-lg" >
                <div className="site-logo mr-5"><a className="navbar-brand" href="index.html"><img className="logo-icon mr-2" src="launch-bs4/assets/images/site-logo.svg" alt="logo"/></a></div>    
                
                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                    <span> </span>
                    <span> </span>
                    <span> </span>
                </button>
                
       
                <div className="collapse navbar-collapse pt-3 pt-lg-0" id="navigation">
                    
                    <ul className="navbar-nav">
                        <li className={this.getNavLinkClass("/fleet")}><NavLink to="/fleet" className = "nav-link">Vehiculos</NavLink></li>
                        <li className={this.getNavLinkClass("/locations")}><NavLink to="/locations" className = "nav-link">Destinos</NavLink></li>
                        <li className={this.getNavLinkClass("/route")}><NavLink to="/route" className = "nav-link">Ruta</NavLink></li>
                    </ul>
                    
                    <ul className="navbar-nav ml-auto">
                            <a className="nav-btn btn btn-gradient text-white" href="signup.html">Calcular ruta</a>
                    </ul>
                </div>
            </nav>  
        </div>
    </div>
</header>
</div>
    )}
  };
NavBar = withRouter(NavBar);
export default NavBar;