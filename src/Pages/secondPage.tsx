import React from 'react';
import './secondPage.css';
import { Link } from 'react-router-dom';
import {TfiHome} from "react-icons/tfi";

function App1(){
    return(

      <div className='main-container'>

        <div className="modules-right-container">
          
          <div className="home-icon">
            <Link to="/" className='home'>
              <TfiHome />
            </Link>
    
          </div>
    
          <div className="types">
            
            <div className="module-types">
  
              
              <Link to="/moduleOne"> <li>Module One</li></Link>
              <hr></hr> 
              <Link to="/moduleTwo"> <li>Module Two</li></Link>
              <hr></hr>
              <Link to="/moduleThree"> <li>Module Three</li></Link>
              <hr></hr>
              <Link to="/moduleFour"> <li>Module Four</li></Link>
              <hr></hr>
              <Link to="/moduleFive"> <li>Module Five</li></Link>
            
            </div>
  
            <button >Select Modules

              {/* unicode for arrow symbol */}
              <span> &rarr;</span>

            </button>     
    
          </div>
          
        
      </div>
    </div>
    );
  }

  
  export default App1;