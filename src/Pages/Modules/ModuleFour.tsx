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
              <h1>Module Four</h1>
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
                <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE52gXw?ver=77c6&q=90&m=2&h=768&w=1024&b=%23FFFFFFFF&aim=true" alt="image" />
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
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP6ZIIoClZSYHfMtkFTW30IVK-hsNDqUp-MQ&usqp=CAU" alt="image" />
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
                <img src="https://blog.ipleaders.in/wp-content/uploads/2021/11/Scale-of-justice-lawyer-business-law.png" alt="image" />
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