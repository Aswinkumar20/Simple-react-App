import React, { useState } from "react";
import { Link } from "react-router-dom";
import {TfiHome} from "react-icons/tfi";
import {AiOutlineSearch} from "react-icons/ai";

import "./ModuleStyle.css";

export default function Update() {

  // Set tabIndex to 1 by default to show the first tab on load
  const [tabIndex, setTabIndex] = useState(1);

  return (
      <div className = "inner-module-container">
          <main>
            <div className="top-nav">
              <h1>Module Five</h1>
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
                <img src="data:image/jpeg;base64,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" alt="image" />
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
                <img src="https://w0.peakpx.com/wallpaper/853/117/HD-wallpaper-handshake-business-concepts-conclusion-of-a-deal-business-people-thumbnail.jpg" alt="image" />
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
                <img src="https://c4.wallpaperflare.com/wallpaper/94/499/622/beautiful-wallpaper-preview.jpg" alt="image" />
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