
import Container from "../components/Container"
import ExplicacionFleet from "../components/ExplicacionFleet"
import React, { Component } from "react";
import MapView from '../components/MapView';
import NavBar from '../components/NavBar';
import data from '../assets/data';
import RouteForm from "../components/RouteForm"



function RoutePage (props) {
    
  
  return (
    <div>
      <NavBar/>
      <Container
        title = "Ruta"
        content =  {
          <div>
            <RouteForm  
              RouteOptions = {props.RouteOptions} 
              SetRouteOptions = {props.SetRouteOptions}
            />
            <hr/>
            <MapView data={data}/>
            <hr/>
          </div>
        }
      />
    </div>
  );
}


export default RoutePage;
