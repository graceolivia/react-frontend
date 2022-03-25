import "./App.css";
import React from "react";
import AstronautsTable from "./AstronautsTable";
import { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AstronautsTable />
      </header>
    </div>
  );
}

export default App;
