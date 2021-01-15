
import React,{ useState} from 'react'; 

import Uploady,{ useItemFinalizeListener, useItemProgressListener } from "@rpldy/uploady";
import UploadButton from  "@rpldy/upload-button";
import { Circle } from "rc-progress";
function UploadFile1 (){ 

  const [file, SetFile] = useState(0)
     
  const SaveFile = () => {
    useItemFinalizeListener((item) => {
        console.log(item.file);  
        SetFile(item.file)
    });

return null
    //...    
};
const UploadProgress = () => { 
  const [progress, setProgess] = useState(0);
  const progressData = useItemProgressListener();
  if (progressData && progressData.completed > progress) { 
    setProgess(() => progressData.completed);
  }
  return progressData && <Circle style={{ height: "100px" }}              
                                 strokeWidth={2}
                                 strokeColor={progress === 100 ? "#00a626" : "#2db7f5"}
                                 percent={progress} />;
};
     
      return ( 
        
<div className="signup-form form-inline justify-content-center pt-3">
<Uploady destination={{url: "http://localhost:8000/upload_file_fleet"}}>
		<UploadButton className="btn btn-gradient rounded transform-0"/>
    <UploadProgress/>
    <SaveFile/>
	</Uploady >
  <hr/>
						<div className="form-group">
							<label className="sr-only" for="semail">Your email</label>
							<input type="file" onChange={(event) => SetFile(event.target.files[0])} id="file" name="file" className="form-control-file  rounded mr-sm-2" />
						</div>
						<button  disabled={!file} onClick = {console.log({file})} className="btn btn-gradient rounded transform-0">Subir ficheros</button>
					</div>
      ); 
    
  } 
  
  export default UploadFile1; 