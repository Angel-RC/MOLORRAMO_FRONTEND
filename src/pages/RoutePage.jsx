
import Container from "../components/Container"
import ExplicacionFleet from "../components/ExplicacionFleet"
import React, { Component } from "react";
import MapView from '../components/MapView';
import NavBar from '../components/NavBar';
import data from '../assets/data';
import OptionsRoute from "../components/OptionsRoute"



function RoutePage () {
    
  
    return (
          
    <div>
      <NavBar/>
<Container
      title = "Ruta"
      content =  {
        <div>
   <OptionsRoute/>
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
