import "./App.css";
import React from "react";
import AstronautsTable from "./AstronautsTable";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Astronauts in Space Now</h1>
        <img src="astronauts.webp" className="Astronaut" alt="logo" />
        <AstronautsTable />
      </header>
    </div>
  );
}

export default App;
