import React from "react";
import { useState, useEffect } from "react";
import fetchJson from "./fetchJson";

function AstronautsTable() {
  const [error, setError] = useState(null);
  const [astronauts, setAstronauts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetchJson().then(
      (data) => {
        setAstronauts(data);
        setIsLoaded(true);
      },
      (error) => {
        setError(error);
        setIsLoaded(true);
      }
    );
  }, []);

  useEffect(() => {
    if (isLoaded) {
      const numberOfAstros = astronauts.people.length;
      document.title = numberOfAstros + " Astronauts In Space Now";
    }
  });

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading, please wait...</div>;
  } else {
    const astronautRow = astronauts.people.map((astronaut) => {
      return (
        <tr>
          <td>{astronaut.craft}</td>
          <td>{astronaut.name}</td>
        </tr>
      );
    });

    return (
      <div>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Craft</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>{astronautRow}</tbody>
        </table>
      </div>
    );
  }
}

export default AstronautsTable;
