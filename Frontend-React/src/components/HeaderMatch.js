import React,{useContext} from 'react';
import '../css/HeaderMatch.css';
import { ActiveContext } from '../contexts/ActiveContext';
import { CSVContext } from '../contexts/CSVContext';
import { MatchContext } from '../contexts/MatchContext';

const HeaderMatch = () => {

  const {active,dispatchActive} = useContext(ActiveContext);
  const {CSV,dispatchCSV} = useContext(CSVContext);
  const {match,dispatchMatch} = useContext(MatchContext);

  const componentActive = active.component === 'HeaderMatch'?true:false;

  const handleSelectionChange = (e,field,idx) => {
    console.log(e.target.value+" "+field+" "+idx);
    
    dispatchMatch({type:'SET_MATCH',lhs:e.target.value,rhs:field,rhs_index:idx})
    //console.log(match);
  }

  return (
    <div className={componentActive?'HeaderMatch':'HeaderMatch-disabled'}>
      <h4>STEP 2: Match Headers</h4>
      
      <hr />

      <div className="HeaderMatch-Container">
        <div className="HeaderMatch-Container-2">
        { CSV.data ?
          CSV.data[0].data.map((item,idx) => {
          return(
            <div className="HeaderMatch-Item col-lg-2" key={Math.random()}>
            {match.Name === item || match.Phone === item || match.Email === item ? 
              <p style={{color:'green'}}>(*Matched*)</p> 
            :
             <p style={{color:'red'}}>(Unmatched)</p> 
            }
             
            <p>{item.substring(0,20)}</p>
              
              <br />
              <br />
              <div className="" style={{width:'80%',position:'absolute',bottom:10,left:10,right:10}}>
                <label htmlFor="exampleFormControlSelect1" style={{fontSize:12}}>Set Match</label>
                <select className="form-control" id="exampleFormControlSelect1" onChange={(e) => handleSelectionChange(e,item,idx)} defaultValue={match.Name === item ? 'Name': match.Phone === item ? 'Phone' : match.Email === item ? 'Email' : 'None'}>
                  
                  

                <option>None</option>
                  <option disabled={match.Name.length && match.Name !== item ?'disabled':''}>Name</option>
                  <option disabled={match.Phone.length && match.Phone !== item ?'disabled':''}>Phone</option>
                  <option disabled={match.Email.length && match.Email !== item ?'disabled':''}>Email</option>
                  
                  
                </select>
              </div>
            </div>
          )
          
        }) 
        :
        ''
        }
        
        </div>
        
      </div>
      { match.Name && match.Phone && match.Email ? 
        <button align="right" className="btn btn-success" style={{textAlign:'right',marginTop:10}} onClick={()=> dispatchActive({type:'UPDATE',component:'DBInsert'})}>Proceed</button>
        : ''}
    </div>
  );
}
 //match.Name && match.Phone && match.Email
 //selected={match.Name === item?'selected':''} 
 //selected={match.Phone === item?'selected':''} 
 //selected={match.Email === item?'selected':''} 
export default HeaderMatch;