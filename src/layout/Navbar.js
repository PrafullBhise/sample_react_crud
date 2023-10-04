import React from 'react'
import { useEffect } from 'react';
import {Link,useParams} from "react-router-dom";

export default function Navbar() {
  const {params}=useParams();
  useEffect(()=>{
    const match=window.location.pathname;
  const path=  match.split('/');
  },[])
    return (
      <div>
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
         Prafull Application
          </a>
      <button className="navbar-toggler"
  
      type="button"
  
      data-bs-toggle="collapse"
  
      data-bs-target="#navbarSupportedContent"
  
      aria-controls="navbarSupportedContent"
  
      aria-expanded="false"
  
      aria-label="Toggle navigation">
  
        <span className="navbar-toggler-icon"></span>
  
      </button>
  
      <div className="btn-group">
  
      <Link className='btn btn-light mx-2' to="/"> Register</Link>
  
      <Link className='btn btn-dark' to="/signin">Login</Link>
  
      </div>
  
      </div>
  
  </nav>  
  
  </div>
  )
}
