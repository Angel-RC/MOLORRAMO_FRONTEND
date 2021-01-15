
import Container from "../components/Container"
import ExplicacionLocations from "../components/ExplicacionLocations"
import UploadFile from "../components/UploadFile"
import React,{props, useState, Component } from "react";

import Uploady,{ useItemFinalizeListener } from "@rpldy/uploady";
import UploadButton from  "@rpldy/upload-button";
import NavBar from "../components/NavBar"


function LocationsPage(props){
     
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
      <Container title = "Destinos"
      content =  {
        <div>
          <ExplicacionLocations/>

          <Uploady destination={{url: "http://localhost:8000/upload_file_locations"}}>
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


export default LocationsPage;
