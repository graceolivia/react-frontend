import logo from './logo.svg';
import './App.css';
import React from 'react'
import AstronautsTable from './AstronautsTable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Astronauts in Space Now</h1>
        <img src="astronauts.webp" className="App-logo" alt="logo" />
        <AstronautsTable />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
      
    </div>
  );
}

export default App;
