import React from "react";
import { useState, useEffect } from "react";
import fetchJson from "./fetchJson";
import HeaderComponent from "./HeaderComponent";
import AstronautRows from "./AstronautRows";
import TableHead from "./TableHead";

function AstronautsTable(props) {
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
    const astronautRow = astronauts.people.map((a) => {
      return <AstronautRows name={a.name} craft={a.craft} />;
    });

    return (
      <div>
        <HeaderComponent number="10" />
        <table class="table table-striped">
          <TableHead />
          <tbody>{astronautRow}</tbody>
        </table>
      </div>
    );
  }
}

export default AstronautsTable;
