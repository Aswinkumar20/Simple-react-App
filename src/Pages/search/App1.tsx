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
              <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/3UDPzbKE0AU7eRkzcNkvXv/b30e89389088b34bde095411441f6cde/GettyImages-1363698631__1_.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000&h=" alt="image" />
            </div>

            <div className="inner-content-container1">
              <h4>Ut hendrerit est tovegh</h4>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, dolorum repellat. Recusandae accusamus placeat molestias impedit aut necessitatibus illo blanditiis et ipsa, reprehenderit saepe delectus voluptates deserunt iusto aspernatur odit?</p>
            </div> 
          </div>


          <div className="inner-child-container1">

            <div className="image-container1">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfJhiNc27ijzvHwe8JqcQYWLSXFBVb7gqV84DM_b2kQ-Bz3pznic6iqWx7e9I0hqqX_xs&usqp=CAU" alt="image" />
            </div>

            <div className="inner-content-container1">
              <h4>Ut hendrerit est tovegh</h4>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, dolorum repellat. Recusandae accusamus placeat molestias impedit aut necessitatibus illo blanditiis et ipsa, reprehenderit saepe delectus voluptates deserunt iusto aspernatur odit?</p>
            </div> 
          </div>


          <div className="inner-child-container1">

            <div className="image-container1">
              <img src="https://assets.entrepreneur.com/content/3x2/2000/20171002173141-GettyImages-489029936.jpeg" alt="image" />
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