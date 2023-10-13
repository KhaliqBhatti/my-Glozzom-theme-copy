
import React from "react";


export default function Navbar() {

  return (
    <>
 
    <nav className="navbar navbar-expand-lg container-fluid navbar-light overflow-hidden p-1 bg-dark">
      <div className=" container   d-flex justify-content-between ">
        <div className="" style={{ width: "55%" }}>
          <h1 className="navbar-brand  text-white">Glozzom</h1>
        </div>
        
          
         
            <ul className="navbar-nav border-secondary border-1 border-start d-flex justify-content-between flex-row pt-1" style={{width:'40%'}}>
              <li className="nav-item">
                <p className="nav-link text-white">Home</p>
              </li>
              <li className="nav-item">
                <p className="nav-link text-secondary hover-text-white">About</p>
              </li>
              <li className="nav-item">
                <p className="nav-link text-secondary hover-text-white">Services</p>
              </li>
              <li className="nav-item">
                <p className="nav-link text-secondary hover-text-white">Contact</p>
              </li>
            </ul>
          </div>
    </nav>
    </>
  );

}