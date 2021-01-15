
import Container from "../components/Container"
import ExplicacionFleet from "../components/ExplicacionFleet"
import UploadFile from "../components/UploadFile"
import React,{props, useState, Component } from "react";

import Uploady,{ useItemFinalizeListener } from "@rpldy/uploady";
import UploadButton from  "@rpldy/upload-button";
import NavBar from "../components/NavBar"


function FleetPage(props){
     
  const SaveFile = () => {
    useItemFinalizeListener((item) => {
        console.log(item.uploadResponse.data); 
        props.SetFile(item.uploadResponse.data);
    });
  return null
  };

return (
      <div>
      <NavBar/>
      <Container title = "Vehiculos disponibles"
      content =  {
        <div>
          <ExplicacionFleet/>

          <Uploady destination={{url: "http://localhost:8000/upload_file_fleet"}}>
              <UploadButton className = "btn btn-gradient rounded transform-0"
                            text      = "Subir fichero"/>
              <SaveFile/>
	        </Uploady >
        <hr/>
      </div>
 }
/>
 
</div>

);
}


export default FleetPage;
