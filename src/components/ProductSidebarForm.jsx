import React,{useState, Component} from 'react'; 
import { useForm, getValues } from "react-hook-form";
import MultiSelect from "react-multi-select-component";
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

  const [Filtros, setFiltros] = useState({
    material : [], 
    color : [], 
    medida : [],
    acabado : [],
    grosor : [], 
    concepto: [],
    cantidad : 0
  });
  
  const [Data, setData] = useState([])


 
  const onSubmit = data => {
   
    props.setData([...props.Data, "Data"])
  };
     
  console.log(Data)
  const options = [
    { label: "Grapes 🍇", value: "grapes" },
    { label: "Mango 🥭", value: "mango" },
    { label: "Strawberry 🍓", value: "strawberry", disabled: true },
    { label: "Watermelon 🍉", value: "watermelon" },
    { label: "Pear 🍐", value: "pear" },
    { label: "Apple 🍎", value: "apple" },
    { label: "Tangerine 🍊", value: "tangerine" },
    { label: "Pineapple 🍍", value: "pineapple" },
    { label: "Peach 🍑", value: "peach" },
  ];
  console.log(Filtros)
  return ( 


    <form onSubmit={handleSubmit(onSubmit)}>  

      { ["encimeras", "inventario", "fregaderos"].includes(props.page) ? 
        <div>
        Material
        <MultiSelect 
          options={options}
          value={Filtros.material}
          onChange={(event) => setFiltros({...Filtros, material: event})}
          labelledBy={"Selecciona el material"}
        />      
        </div>
        : null
      }

      { ["encimeras", "inventario", "fregaderos"].includes(props.page) ? 
        <div>
        Color
        <MultiSelect 
          options={options}
          value={Filtros.color}
          onChange={(event) => setFiltros({...Filtros, color: event})}
          labelledBy={"Selecciona el color"}
        />
        </div>
        : null
      }

      { ["encimeras", "inventario"].includes(props.page) ? 
        <div>
        Acabado
        <MultiSelect 
          options={options}
          value={Filtros.acabado}
          onChange={(event) => setFiltros({...Filtros, acabado: event})}
          labelledBy={"Selecciona el acabado"}
        />
        </div>
        : null
      }

      { ["encimeras", "inventario"].includes(props.page) ? 
        <div>
        Grosor
        <MultiSelect 
          options={options}
          value={Filtros.grosor}
          onChange={(event) => setFiltros({...Filtros, grosor: event})}
          labelledBy={"Selecciona el grosor"}
        />
        </div>
        : null
      }


      { ["inventario", "inventario", "fregaderos"].includes(props.page) ? 
        <div>
        Medida
        <MultiSelect 
          options={options}
          value={Filtros.medida}
          onChange={(event) => setFiltros({...Filtros, medida: event})}
          labelledBy={"Selecciona la medida"}
        />
        </div>
        : null
      }
     
    
      { ["suplementos"].includes(props.page) ? 
        <div>
        Concepto
        <MultiSelect 
          options={options}
          value={Filtros.concepto}
          onChange={(event) => setFiltros({...Filtros, concepto: event})}
          labelledBy={"Selecciona el concepto"}
        />
        </div>
        : null
      }
      { ["suplementos"].includes(props.page) ? 
        <div>
        Cantidad
        <input name = "cantidad" id = "cantidad" type="number" step="0.01" className = "form-control" onSubmit = {(event) => event.preventDefault()} onChange={(event) => setFiltros({...Filtros, cantidad: event.target.value})}/>
        </div>
        : null
      }

      <hr/>
      <input type="submit"  name = "submit" className=" btn btn-gradient rounded transform-0" />
     
    </form>           
  ); 
} 
  
  export default ProductSidebarForm; 