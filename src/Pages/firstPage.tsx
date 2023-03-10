import * as React from "react";
import { Routes, Route, Outlet, Link, Navigate } from "react-router-dom";
import './firstPage.css'; 
    

export default function App() {

  // export will make sure the component will be rendered at the time of calling
  
  return (
    <div className="main-container">
      <div className="inner-right-container">
        
        <h1>Fusce sem magna pharetra cursus</h1>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem neque, voluptatem modi maiores accusantium suscipit ipsum repellat amet, ea nobis esse consequuntur veniam explicabo ipsam dolores cum id placeat eum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem neque, voluptatem modi maiores accusantium suscipit ipsum repellat amet, ea nobis esse consequuntur veniam explicabo ipsam dolores cum id placeat eum. </p>
        
        <Link to="/secondPage"><button className="main-page-button" >Enter
        
        <span className="button-right-arrow"> &rarr;</span></button></Link>
      
      </div>
    </div>
  );
}
