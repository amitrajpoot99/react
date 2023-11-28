import {BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import User from "./User/User";


function App() {
  return (
        <BrowserRouter>
          <Navbar/>
          <User/>
        
        
        </BrowserRouter>
  );
}

export default App;
