import React,{Component} from 'react'; 
import { useForm } from "react-hook-form";

function RouteForm (props) {

  const { register, handleSubmit, errors } = useForm();


  const onSubmit = data => {
    console.log(data)
    props.SetRouteOptions({"RouteOptions": data,"hola": data} )
  };
     
      
     
  return ( 


    <form onSubmit={handleSubmit(onSubmit)} className="signup-form form-inline justify-content-center pt-3">

      <select name="type_vehicle" id="type_vehicle" className="form-control semail rounded mr-sm-3" ref={register({ required: true })}>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="volvo">Volsdaasdasdasdvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>

      <select name="type_route" id="type_route" className="form-control semail rounded mr-sm-3" ref={register({ required: true })}>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>

      <input type="submit" className=" btn btn-gradient rounded transform-0"/>
             
    </form>           
  ); 
} 
  
  export default RouteForm; 