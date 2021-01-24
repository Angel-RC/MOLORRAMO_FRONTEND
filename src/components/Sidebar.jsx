//import useState hook to create menu collapse state
import React, { useState } from "react";
import RouteForm from "./ProductSidebarForm"
import { Link, NavLink, withRouter, useLocation } from 'react-router-dom';
//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  SubMenu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart, FaGem, FaHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";



const Sidebar = (props) => {
 
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    
        <ProSidebar collapsed={menuCollapse}>
         
          <SidebarContent>
            <Menu iconShape="square">
              <SubMenu title="Sección" icon={<FaList />}>
                <MenuItem><NavLink to="/encimeras" >   Encimeras</NavLink></MenuItem>
                <MenuItem><NavLink to="/inventario" >  Inventario</NavLink></MenuItem>
                <MenuItem><NavLink to="/fregaderos" >  Fregaderos</NavLink></MenuItem>
                <MenuItem><NavLink to="/suplementos" > Suplementos</NavLink></MenuItem>
                <MenuItem><NavLink to="/factura" >     Mi pedido</NavLink></MenuItem>
              </SubMenu>
            </Menu>
            <Menu iconShape="square">
         
              
            {props.Content}
            
            </Menu>
          </SidebarContent>
          
        </ProSidebar>
      
    
  );
};

export default Sidebar;
