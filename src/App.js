import React from "react";
import { Navbar } from "./components";
import Routing from "./routes/Routing";
import "./App.css";

function App() {
  return (
    <div>
      <Routing>      
        <Navbar />   
      </Routing>
    </div>
  );
}

export default App;
