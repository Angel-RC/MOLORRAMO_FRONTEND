
import './App.css';
import NavBar from "./components/NavBar"
import Container from "./components/Container"
import React, {useState, Component } from "react";
import { BrowserRouter, Switch, Route, NavLink, withRouter, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import {AuthContext}  from "./context/Auth";
import ProductPage from "./pages/ProductPage"
import SignInPage from "./pages/SignInPage"
import SignInForm from "./components/SignInForm"

function App()  {


  const [EncimerasCarrito, SetEncimerasCarrito] = useState([])
  const [InventarioCarrito, SetInventarioCarrito] = useState([])
  const [FregaderosCarrito, SetFregaderosCarrito] = useState([])
  const [SuplementosCarrito, SetSuplementosCarrito] = useState([])

  const [UserLogin, SetUserLogin] = useState(true)
  

  return (
    <div className = "App">
      <AuthContext.Provider value = {UserLogin}>

      <BrowserRouter>
      <NavBar />
        <Switch>
          <PrivateRoute path = "/encimeras"   component = {ProductPage} page = "encimeras"   DataCarrito = {EncimerasCarrito}   SetDataCarrito = {SetEncimerasCarrito}/>
          <PrivateRoute path = "/inventario"  component = {ProductPage} page = "inventario"  DataCarrito = {InventarioCarrito}  SetDataCarrito = {SetInventarioCarrito}/>
          <PrivateRoute path = "/fregaderos"  component = {ProductPage} page = "fregaderos"  DataCarrito = {FregaderosCarrito}  SetDataCarrito = {SetFregaderosCarrito}/>
          <PrivateRoute path = "/suplementos" component = {ProductPage} page = "suplementos" DataCarrito = {SuplementosCarrito} SetDataCarrito = {SetSuplementosCarrito}/>
          <Route        path = '/signin'      component = {SignInPage}  UserLogin = {UserLogin} SetUserLogin = {SetUserLogin}/>
          <Redirect to="/encimeras" />
        </Switch>
      </BrowserRouter>
      </AuthContext.Provider>
  
    </div>
  );
}

export default App;
