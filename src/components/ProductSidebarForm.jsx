import React,{useState, useEffect, Component} from 'react'; 
import { useForm, getValues } from "react-hook-form";
import MultiSelect from "react-multi-select-component";
import * as API from "../functions/functions"
import {
  ProSidebar,
  Menu,
  SubMenu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

function ProductSidebarForm (props) {


  const { register, handleSubmit, errors, getValues } = useForm()

  const [Options, setOptions] = useState({
    material : [], 
    color : [], 
    medida : [],
    acabado : [],
    grosor : [], 
    concepto: []
  })
  const [Filtros, setFiltros] = useState({
    material : [], 
    color : [], 
    medida : [],
    acabado : [],
    grosor : [], 
    concepto: [],
    cantidad : []
  });
  


  const handleChange = (event, nombre)=>{

    
    {
      nombre === "cantidad" ? 
      setFiltros({...Filtros, [nombre]: event.target.value})
      : 
      setFiltros({...Filtros, [nombre]: event})
    };


    API.filterData(props.DataInicial, Filtros, props.setDataMostrar, Options, setOptions)


    

  }

  const onSubmit = data => {
    props.SetDataCarrito([...props.DataCarrito, "Data"])
  };


  useEffect(() => {
    API.CreateDataInicial(props.page, props.setDataInicial, setOptions)
    console.log(props.page)
    console.log(props.DataInicial)

    setFiltros({
      material : [], 
      color : [], 
      medida : [],
      acabado : [],
      grosor : [], 
      concepto: [],
      cantidad : []
    });
  }, [props.page]) 
  

  return ( 


    <form onSubmit={handleSubmit(onSubmit)}>  

      { ["encimeras", "inventario", "fregaderos"].includes(props.page) ? 
        <div>
        Material
        <MultiSelect 
          options={Options.material}
          value={Filtros.material}
          onChange={(event) => {handleChange(event, "material")}}
          labelledBy={"Selecciona el material"}
        />      
        </div>
        : null
      }

      { ["encimeras", "inventario", "fregaderos"].includes(props.page) ? 
        <div>
        Color
        <MultiSelect 
          options={Options.color}
          value={Filtros.color}
          onChange={(event) => {handleChange(event, "color")}}
          labelledBy={"Selecciona el color"}
        />
        </div>
        : null
      }

      { ["encimeras", "inventario"].includes(props.page) ? 
        <div>
        Acabado
        <MultiSelect 
          options={Options.acabado}
          value={Filtros.acabado}
          onChange={(event) => {handleChange(event, "acabado")}}
          labelledBy={"Selecciona el acabado"}
        />
        </div>
        : null
      }

      { ["encimeras", "inventario"].includes(props.page) ? 
        <div>
        Grosor
        <MultiSelect 
          options={Options.grosor}
          value={Filtros.grosor}
          onChange={(event) => {handleChange(event, "grosor")}}
          labelledBy={"Selecciona el grosor"}
        />
        </div>
        : null
      }


      { ["inventario", "inventario", "fregaderos"].includes(props.page) ? 
        <div>
        Medida
        <MultiSelect 
          options={Options.medida}
          value={Filtros.medida}
          onChange={(event) => {handleChange(event, "medida")}}
          labelledBy={"Selecciona la medida"}
        />
        </div>
        : null
      }
     
    
      { ["suplementos"].includes(props.page) ? 
        <div>
        Concepto
        <MultiSelect 
          options={Options.concepto}
          value={Filtros.concepto}
          onChange={(event) => {handleChange(event, "concepto")}}
          labelledBy={"Selecciona el concepto"}
        />
        </div>
        : null
      }
      { ["suplementos"].includes(props.page) ? 
        <div>
        Cantidad
        <input name = "cantidad" id = "cantidad" type="number" step="0.01" className = "form-control" onSubmit = {(event) => event.preventDefault()} onChange={(event) => {handleChange(event, "cantidad")}}/>
        </div>
        : null
      }

      <hr/>
      <input type="submit"  name = "submit" className=" btn btn-gradient rounded transform-0" />
     
    </form>           
  ); 
} 
  
  export default ProductSidebarForm; 