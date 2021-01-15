
import './App.css';
import NavBar from "./components/NavBar"
import Container from "./components/Container"
import ExplicacionFleet from "./components/ExplicacionFleet"
import React, {useState, Component } from "react";
import { BrowserRouter, Switch, Route, NavLink, withRouter, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import {AuthContext}  from "./context/Auth";
import FleetPage from "./pages/FleetPage"
import LocationsPage from "./pages/LocationsPage"
import RoutePage from "./pages/RoutePage"
import SignInPage from "./pages/SignInPage"
import SignInForm from "./components/SignInForm"

function App()  {


  const [Fleet, SetFleet]         = useState(undefined)
  const [Locations, SetLocations] = useState(undefined)
  const [Route, SetRoute]         = useState(undefined)

    return (
    <div className = "App">
      <AuthContext.Provider value = {true}>

      <BrowserRouter>
        <Switch>
          <PrivateRoute path = "/fleet"     component = {FleetPage}     file = {Fleet}     SetFile = {SetFleet} />
          <PrivateRoute path = "/locations" component = {LocationsPage} file = {Locations} SetFile = {SetLocations}  />
          <PrivateRoute path = "/route"     component = {RoutePage}     file = {Route}     SetFile = {SetRoute}/>
          <Route        path = '/signin'    component = {SignInPage} />
          <Redirect to="/fleet" />
        </Switch>
      </BrowserRouter>
      </AuthContext.Provider>

      
 </div>

 
 );
}

export default App;
