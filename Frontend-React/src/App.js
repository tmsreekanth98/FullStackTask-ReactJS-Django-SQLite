import React from 'react';
import Header from './components/Header';
import './App.css';
import UploadBody from './components/UploadBody';
import ActiveContextProvider from './contexts/ActiveContext';
import HeaderMatch from './components/HeaderMatch';
import CSVContextProvider from './contexts/CSVContext';
import DBInsert from './components/DBInsert';
import MatchContextProvider from './contexts/MatchContext';

function App() {
  return (
    <div className="App">
      
      <Header />

      <ActiveContextProvider>
      <CSVContextProvider>
      <MatchContextProvider>
      
      <div className="row" style={{margin:'auto',alignItems:'center',justifyContent:'center'}}>
        <div className="col-lg-3">
          <UploadBody />
        </div>

        <div className="">
            <svg className="bi bi-arrow-right-circle-fill" width="3em" height="3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8.354 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L9.793 7.5H5a.5.5 0 0 0 0 1h4.793l-2.147 2.146z"/>
          </svg>
        </div>

        <div className="col-lg-6">
          <HeaderMatch />
        </div>

        <div className="">
          <svg className="bi bi-arrow-right-circle-fill" width="3em" height="3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8.354 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L9.793 7.5H5a.5.5 0 0 0 0 1h4.793l-2.147 2.146z"/>
        </svg>
        </div>

        <div className="col-lg-2">
          <DBInsert />
        </div>
      </div>

      </MatchContextProvider>
      </CSVContextProvider>
      </ActiveContextProvider>
      

    </div>
  );
}

export default App;
