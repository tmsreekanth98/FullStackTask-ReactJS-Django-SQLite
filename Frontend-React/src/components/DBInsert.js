import React,{useContext, useEffect,useState} from 'react';
import '../css/DBInsert.css'
import { ActiveContext } from '../contexts/ActiveContext';
import { MatchContext } from '../contexts/MatchContext';
import { CSVContext } from '../contexts/CSVContext';
import axios from 'axios'

const DBInsert = () => {

  const {active,dispatchActive} = useContext(ActiveContext);
  const componentActive = active.component === 'DBInsert'?true:false;
  const {match} = useContext(MatchContext);
  const {CSV} = useContext(CSVContext);

  var hashMap = new Array();
  const [progress,setProgress] = useState(hashMap);
  
  //This function is used to find whether the set of different asynchronous API calls
  //have completed executing. Uses O(n) space (array) to acomplish this.
  const checkAllOnes = () => {
    console.log(progress);
    if(progress.length === 0){
      return false;
    }

    for(var i=0;i<progress.length;i++){
      if(progress[i] === 0){
        return false;
      }
    }
    
    return true;
  }

  //Send requests on click of button
  const handleInsertClick = () => {
    if(match.Name && match.Phone && match.Email && CSV.data && componentActive){
      console.log("Phase 3");
      
      //For each row, send a request to DJANGO endpoint to add it to DB.
      
      const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
        'Access-Control-Allow-Headers': "Access-Control-Allow-Headers, access-control-allow-origin, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
      };

      
      CSV.data.forEach(row => {
          progress.push(0);
          setProgress(progress);
      })
      console.log(progress);
      
      CSV.data.forEach((row,idx) => {
        //console.log(row.data);
        axios.post('http://localhost:8000/API/',{
          Name: row.data[match.Name_Index],
          Phone: row.data[match.Phone_Index],
          Email: row.data[match.Email_Index]
        },{headers})
        .then(response => {
          console.log(response.status," "+idx);
          progress[idx] = 1;
          setProgress([...progress]);
          //console.log("Progress is:" +progress);
        })
        .catch(error => {
          console.log(error);
          console.log({
            Name: row.data[match.Name_Index],
            Phone: row.data[match.Phone_Index],
            Email: row.data[match.Email_Index]
          });
          progress[idx] = 1;
          setProgress([...progress]);
          
        })
        
      })
      
    }


  }


  return (
    <div className={componentActive?'DBInsert':'DBInsert-disabled'}>
      <h4>STEP 3: Insert to DB</h4>
      <hr />
      <button className="btn btn-primary" onClick={handleInsertClick}>Insert to DB</button>
      <br />
      
      {!checkAllOnes() ? 
        progress.length == 0 ? '' :
        <div>
          Inserting ...
        </div> 
        : 'Completed!'}

      
      
    </div>
  );
}
 
export default DBInsert;