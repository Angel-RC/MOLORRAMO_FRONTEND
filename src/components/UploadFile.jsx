
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
						<div className="form-group">
							<label className="sr-only" for="semail">Your email</label>
							<input type="file" onChange={this.onFileChange} id="file" name="file" className="form-control-file  rounded mr-sm-2" />
						</div>
						<button onClick={this.onFileUpload} className="btn btn-gradient rounded transform-0">Subir ficheros</button>
					</div>


               
      
      ); 
    } 
  } 
  
  export default UploadFile; 