import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "./Pages/firstPage";
import SecondPage from "./Pages/secondPage";
import ModuleOne from "./Pages/Modules/ModuleOne";
import ModuleTwo from "./Pages/Modules/ModuleTwo";
import ModuleThree from "./Pages/Modules/ModuleThree";
import ModuleFour from "./Pages/Modules/ModuleFour";
import ModuleFive from "./Pages/Modules/ModuleFive";
import SearchBar from "./Pages/search/App1";



render(
  <BrowserRouter> 

  {/* // A container which stores the path of the other file //      */}
    
    <Routes>      

      {/* main page */}
      <Route path="/" element={<FirstPage />} />
      <Route path="secondPage" element ={<SecondPage />} />
      <Route path="moduleOne" element ={<ModuleOne />} />
      <Route path="moduleTwo" element ={<ModuleTwo />} />
      <Route path="moduleThree" element={<ModuleThree />} />
      <Route path="moduleFour" element ={<ModuleFour />} />
      <Route path="moduleFive" element ={<ModuleFive />} />
      <Route path="searchBar" element ={<SearchBar />} />
    </Routes>
  </BrowserRouter>,

  // this is the entry point where all compnonents are being exported  
  document.getElementById("root")
);