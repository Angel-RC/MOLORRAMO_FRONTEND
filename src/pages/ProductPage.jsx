//import useState hook to create menu collapse state
import React, { useState, useEffect } from "react";
import RouteForm from "../components/ProductSidebarForm"
import Sidebar from "../components/Sidebar"
import ProductSidebarForm from "../components/ProductSidebarForm"
import DataTable, { createTheme } from 'react-data-table-component';
import Container from "../components/Container"
import * as constant from "../constant/index"

 

 
const ProductPage = (props) => {

    
    const [DataInicial, setDataInicial] = useState([])
    const [DataMostrar, setDataMostrar] = useState([])


// Prepare columns depends on prop page 
    const [columns, setColumns] = useState([])
    const [page, setPage] = useState("")

 

  return (
    
    <div>
    <Sidebar  
        Content = {<ProductSidebarForm 
                        page           = {props.page} 
                        DataCarrito    = {props.DataCarrito} 
                        SetDataCarrito = {props.SetDataCarrito}
                        DataMostrar    = {DataMostrar}
                        setDataMostrar = {setDataMostrar}
                        DataInicial    = {DataInicial}
                        setDataInicial = {setDataInicial}
                    />
        }  
    />

    <DataTable
        title = "Arnold Movies"
        columns = {constant.columns.[props.page]}
        data = {DataMostrar}
        dense = {true}
        striped = {true}
        noDataComponent = ""
    />
  </div>  
  );
};

export default ProductPage;
