import "./App.css";
import React from "react";
import AstronautsTable from "./AstronautsTable";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="astronauts.webp" className="Astronaut" alt="logo" />
        <Header />
        <AstronautsTable />
      </header>
    </div>
  );
}

export default App;
