import React, { useState } from "react";
import { Link } from "react-router-dom";
import {TfiHome} from "react-icons/tfi";
import {AiOutlineSearch} from "react-icons/ai";

export default function Update() {

  // Set tabIndex to 1 by default to show the first tab on load
  const [tabIndex, setTabIndex] = useState(1);
  
 
  return (
      <div className = "inner-module-container">
          <main>
            <div className="top-nav">
              <h1>Module One</h1>
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
                <img src="https://burst.shopifycdn.com/photos/getting-business-finances-in-order.jpg?width=1200&format=pjpg&exif=1&iptc=1" alt="image" />
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
                <img src="https://www.concordnow.com/wp-content/uploads/2020/04/the-case-for-contracts-in-7-reasons-jpg.webp" alt="image" />
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
                <img src="https://cdn.pixabay.com/photo/2017/10/10/21/47/laptop-2838921__340.jpg" alt="image" />
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