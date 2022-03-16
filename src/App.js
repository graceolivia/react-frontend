import logo from './logo.svg';
import './App.css';
import React from 'react'
import AstronautsTable from './AstronautsTable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React on Grace's app
        </a>
      </header>
      <AstronautsTable />
    </div>
  );
}

export default App;
