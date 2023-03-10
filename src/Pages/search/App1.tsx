import React from "react";

import { TfiHome } from "react-icons/tfi";
import { Link } from "react-router-dom";
import "./App1.css";

export default function App(){
  return(

    <div className="parent-container1">
      <span>
        <Link to="/secondPage">
            <TfiHome />
        </Link>
      </span>

      <div className="child-container1">
        <h5>Type here to search </h5>
        <h2>Ut hendrerit</h2>
        <hr></hr>
        <h3>showing 5 results....</h3>


        <div className="inner-content1">
          
          <div className="inner-child-container1">

            <div className="image-container1">
              <img src="src\Images\two.jpg" alt="image" />
            </div>

            <div className="inner-content-container1">
              <h4>Ut hendrerit est tovegh</h4>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, dolorum repellat. Recusandae accusamus placeat molestias impedit aut necessitatibus illo blanditiis et ipsa, reprehenderit saepe delectus voluptates deserunt iusto aspernatur odit?</p>
            </div> 
          </div>


          <div className="inner-child-container1">

            <div className="image-container1">
              <img src="src\Images\woman1.jpg" alt="image" />
            </div>

            <div className="inner-content-container1">
              <h4>Ut hendrerit est tovegh</h4>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, dolorum repellat. Recusandae accusamus placeat molestias impedit aut necessitatibus illo blanditiis et ipsa, reprehenderit saepe delectus voluptates deserunt iusto aspernatur odit?</p>
            </div> 
          </div>


          <div className="inner-child-container1">

            <div className="image-container1">
              <img src="src\Images\four.jpg" alt="image" />
            </div>

            <div className="inner-content-container1">
              <h4>Ut hendrerit est tovegh</h4>      
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, dolorum repellat. Recusandae accusamus placeat molestias impedit aut necessitatibus illo blanditiis et ipsa, reprehenderit saepe delectus voluptates deserunt iusto aspernatur odit?</p>
            </div> 
          </div>
        
        </div>
      </div>
    </div>
    );
}