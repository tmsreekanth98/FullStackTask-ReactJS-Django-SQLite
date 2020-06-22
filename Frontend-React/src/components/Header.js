import React, { Component } from 'react';
import '../css/Header.css';


//Static Header Component.
const Header = () => {
  return (
    <div className="Header">
      
      <div className="row">
        <div className="Header-Logo col-lg-1">
          <svg className="bi bi-table" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
          <path fillRule="evenodd" d="M15 4H1V3h14v1z"/>
          <path fillRule="evenodd" d="M5 15.5v-14h1v14H5zm5 0v-14h1v14h-1z"/>
          <path fillRule="evenodd" d="M15 8H1V7h14v1zm0 4H1v-1h14v1z"/>
          <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2H0V2z"/>
        </svg>
        </div>
        <div className="Header-Menu-Options col-lg-7">
          <div className="Header-Menu-Options-Item">
            Option 1
          </div>
          <div className="Header-Menu-Options-Item">
            Option 2
          </div>
          <div className="Header-Menu-Options-Item">
            Option 3
          </div>
          <div className="Header-Menu-Options-Item">
            Option 4
          </div>
        </div>

        <div className="Header-User-Options col-lg-4">
          <svg className="bi bi-person-circle" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
          <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          <path fillRule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
        </svg>
        </div>
      </div>
      

    </div>
  );
}
 
export default Header;