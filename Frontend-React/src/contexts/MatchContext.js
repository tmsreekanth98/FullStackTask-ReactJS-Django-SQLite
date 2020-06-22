import React, { createContext,useReducer } from 'react';
import { MatchReducer } from '../reducers/MatchReducer';

export const MatchContext = createContext();

const MatchContextProvider = (props) => {

  //Stores The Matching Details such as NAME matched with First Name for example.
  const initState = {
    Name: '',
    Phone: '',
    Email: '',
    Name_Index: -1,
    Phone_Index: -1,
    Email_Index: -1,
  }

  const [match,dispatchMatch] = useReducer(MatchReducer,initState);

  return (
    <MatchContext.Provider value={{match,dispatchMatch}}>
      {props.children}
    </MatchContext.Provider>
  );
}
 
export default MatchContextProvider;