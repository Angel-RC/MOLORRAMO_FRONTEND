//import useState hook to create menu collapse state
import React, { useState } from "react";
import RouteForm from "../components/ProductSidebarForm"
import Sidebar from "../components/Sidebar"
import ProductSidebarForm from "../components/ProductSidebarForm"

const ProductPage = (props) => {
  

  return (
    
    
    <Sidebar  Content = {<ProductSidebarForm page = {props.page}/>}  />
    
  );
};

export default ProductPage;
