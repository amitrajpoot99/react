import {BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import User from "./User/User";
import RegiForm_useRef from "./HookExp/RegiForm_useRef";
import FacrComp_useMemo from "./HookExp/FacrComp_useMemo";

function App() {
  return (
        <BrowserRouter>
          <Navbar/>
          <User/>
          <RegiForm_useRef/>
          <FacrComp_useMemo/>
          
        </BrowserRouter>
  );
}

export default App;
