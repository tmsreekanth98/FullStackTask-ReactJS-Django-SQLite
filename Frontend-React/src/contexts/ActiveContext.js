import React, { createContext,useReducer } from 'react';
import {ActiveReducer} from '../reducers/ActiveReducer';
export const ActiveContext = createContext();

const ActiveContextProvider = (props) => {
  //To check which component/step is active and disable the rest of them.
  const initState = {
    component: 'UploadBody'
  }

  const [active,dispatchActive] = useReducer(ActiveReducer,initState);


  return (
    <ActiveContext.Provider value={{active,dispatchActive}}>
      {props.children}
    </ActiveContext.Provider>
  );
}
 
export default ActiveContextProvider;