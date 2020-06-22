import React, { createContext,useReducer } from 'react';
import {CSVReducer} from '../reducers/CSVReducer';

export const CSVContext = createContext();

const CSVContextProvider = (props) => {
  //Stores the CSV data 
  const initState = {
    data : ''
  }

  const [CSV,dispatchCSV] = useReducer(CSVReducer,initState);

  return (
    <CSVContext.Provider value={{CSV,dispatchCSV}}>
      {props.children}
    </CSVContext.Provider>
  );
}
 
export default CSVContextProvider;