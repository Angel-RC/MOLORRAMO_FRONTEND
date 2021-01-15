import React,{Component} from 'react'; 

class UploadFile extends Component { 
  constructor(props) {
    super(props);
    this.handleFileUpload = this.handleFileUpload.bind(this);
    }
    state = {   
      // Initially, no file is selected 
      selectedFile: null,
      loaded:0
    }; 

     
    handleFileUpload = (state_data, file) => {
      
      console.log(file); 
      this.props.handleFileUpload(state_data, file);
    };
     
    // On file select (from the pop up) 
    onFileChange = event => { 
      // Update the state 
      this.setState({ selectedFile: event.target.files[0]}); 
    }; 
     
    // On file upload (click the upload button) 
    onFileUpload = () => { 
      const data = new FormData()
      
      data.append('file', this.state.selectedFile, this.state.selectedFile.name)
    
      // Request made to the backend api 
      // Send formData object 
      fetch(this.props.endpoint, {
          method: "POST",
          body: data
        }).then(res => res.json())
          .then(data => this.handleFileUpload(this.props.state_data, data)) 
        
    }; 
     
    render() { 
      
     
      return ( 
     

<div className="signup-form form-inline justify-content-center pt-3">

  
<select name="cars" id="cars" className="form-control semail rounded mr-sm-3">
  <option value="volvo">Volsdaasdasdasdvo</option>
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select>

<select name="cars" id="cars" className="form-control semail rounded mr-sm-3">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select>

  

             
<button onClick={this.onFileUpload} className=" btn btn-gradient rounded transform-0">Calcular ruta</button>
</div>


               
      
      ); 
    } 
  } 
  
  export default UploadFile; 