import React from "react";
import { Navbar } from "./components";
import Routes from "./routes/Routes";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Navbar />
      </Routes>
    </div>
  );
}

export default App;
