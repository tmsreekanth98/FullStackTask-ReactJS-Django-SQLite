import React, { useContext } from 'react';
import '../css/UploadBody.css';
import { ActiveContext } from '../contexts/ActiveContext';
import { CSVReader } from 'react-papaparse'
import { CSVContext } from '../contexts/CSVContext';

const buttonRef = React.createRef();

const UploadBody = () => {

  const {active,dispatchActive} = useContext(ActiveContext);
  const {CSV,dispatchCSV} = useContext(CSVContext);
  const componentActive = active.component === 'UploadBody'?true:false;

  //Below are handler functions for different events in papa parse CSV reader module.
  const handleOpenDialog = (e) => {
    
    if (buttonRef.current) {
      buttonRef.current.open(e)
    }
  }

  const handleRemoveFile = (e) => {
    
    if (buttonRef.current) {
      buttonRef.current.removeFile(e)
    }
  }


  const handleOnFileLoad = (data) => {
    
    dispatchActive({type:'UPDATE',component:'HeaderMatch'});
    dispatchCSV({type:'UPLOAD',data:data});

    console.log('Context Updated!')
  }

  const handleOnError = (err, file, inputElem, reason) => {
    console.log('--------')
    console.log(err)
    alert(err);
    console.log('---------')
  }

  const handleOnRemoveFile = (data) => {
    console.log('--------')
    console.log(data)
    console.log('---------')
  }

  return (
    
     <div className={componentActive?'UploadBody':'UploadBody-disabled'}>
      <h4>STEP 1: Upload CSV</h4>
      <hr />
      <div className="UploadBody-Form form-group">
        <center>
          
          

          <CSVReader ref={buttonRef} onFileLoad={handleOnFileLoad} onError={handleOnError} noClick noDrag config={{}} style={{}} onRemoveFile={handleOnRemoveFile}>
          {({ file }) => (
            <aside>
              <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <div style={{padding:10}}>
                  <button type='button' onClick={handleOpenDialog} className="btn btn-primary">
                    Browse
                  </button>
                </div>

                <div style={{padding:10}}>
                  {file&&file.name?
                    <>
                    <p className="UploadBody-RemoveFile" onClick={handleRemoveFile}>{file && file.name}</p>

                    </>
                    :
                    ''
                  }
                  
                </div>
              </div>
              <br />
              
              
            </aside>
          )}
        </CSVReader>

        </center>
      </div>
      

    </div>
  );
}
 
export default UploadBody;