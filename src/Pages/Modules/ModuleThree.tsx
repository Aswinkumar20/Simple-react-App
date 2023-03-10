import React, { useState } from "react";
import { Link } from "react-router-dom";
import {TfiHome} from "react-icons/tfi";
import {AiOutlineSearch} from "react-icons/ai";
// import './src/Pages/secondPage';

export default function Update() {

  // Set tabIndex to 1 by default to show the first tab on load
  const [tabIndex, setTabIndex] = useState(1);
  
 
  return (
      <div className = "inner-module-container">
          <main>
            <div className="top-nav">
              <h1>Module Three</h1>
              <span>
                
                <Link to ="/searchBar" className="home1">
                  <AiOutlineSearch />
                </Link>
                
                <span> 
                  <Link to="/secondPage" className="home">
                    <TfiHome className="homee"/>
                  </Link>
                </span>
              </span>
            </div>
         
            <div className ="layouts-tab">
              <ul className="tab">
                <button onClick={() => setTabIndex(1)}>
                    Tab 1
                </button>
                
                <button onClick={() => setTabIndex(2)}>
                    Tab 2
                </button>

                <button onClick={() => setTabIndex(3)}>
                    Tab 3
                </button>
              </ul>
                
            </div>
        </main>
      
      {
          tabIndex === 1 && (
            <div className="inner-bottom-content">
              <div className="image">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_zv_3oufxJDjJb9mhgo9skvCVFYwQmJ5a38eh0wQsH-7ASb8sazGNBdUAxNobeU-11eI&usqp=CAU" alt="image" />
              </div>
        
              <div className="right-content">
                <h1>Morbi arcu libero</h1>
                <p>llitia expedita deserunt minima magnam culpa esse aperiam soluta minus asperiores, ut neque numquam in. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium magni unde porro quia cum. </p>
              </div>
          </div>
          )
      }
      {
          tabIndex === 2 && (
            <div className="inner-bottom-content">
              <div className="image">
                <img src="https://www.primeum.com/hubfs/D%C3%A9finition-performance-commerciale.jpg   " alt="image" />
              </div>
        
              <div className="right-content">
                <h1>Ut hendrerit esto toth</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium magni unde porro quia cum. Ad mollitia expedita deserunt minima magnam culpa esse aperiam soluta minus asperiores, ut neque numquam in. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium magni unde porro quia cum. </p>
              </div>
          </div>
          )
      }

      {
          tabIndex === 3 && (
            <div className="inner-bottom-content">
              <div className="image">
                <img src="https://www.thebalancemoney.com/thmb/QwUIfnT82yrLj0HQv1H_3Jo_W8A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/two-young-women-having-a-discussion-in-a-business-607477463-4c806dd0eb2b45c39c2ba7af6b558903.jpg" alt="image" />
              </div>
        
              <div className="right-content">
                <h1>Ut hendrerit esto tovegh</h1>
                <p>Losicing elit. Laudantium magni unde porro quia cum. Ad mollitia expedita deserunt minima magnam culpa esse aperiam soluta minus asperiores, ut neque numquam in. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium magni unde porro quia cum. </p>
              </div>
          </div>
          )
      }
      </div>
  );
}