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
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="datatable"
        ></a>
      </header>
    </div>
  );
}

export default App;
