import "./App.css";
import React from "react";
import AstronautsTable from "./AstronautsTable";
import Header from "./Header";
import { useState, useEffect } from "react";
import fetchJson from "./fetchJson";
import {
  convertJsonToAstronauts,
  sortByAstronautCraft,
  sortByAstronautName,
} from "./astronaut";

function App() {
  const [error, setError] = useState(null);
  const [astronauts, setAstronauts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const setIsOpen = useEffect(() => {
    fetchJson().then(
      (data) => {
        const astronautArray = convertJsonToAstronauts(data);
        setAstronauts(astronautArray);
        setIsLoaded(true);
      },
      (error) => {
        setError(error);
        setIsLoaded(true);
      }
    );
  }, []);

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
