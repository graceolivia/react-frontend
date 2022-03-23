import React from "react";
import { useState, useEffect } from "react";
import fetchJson from "./fetchJson";
import {
  convertJsonToAstronauts,
  sortByAstronautCraft,
  sortByAstronautName,
} from "./astronaut";

function AstronautsTable() {
  const [error, setError] = useState(null);
  const [astronauts, setAstronauts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [nameSet, setByName] = useState(false);
  //   const [craftSet, setByCraft] = useState(false);

  useEffect(() => {
    fetchJson().then(
      (data) => {
        const astronautArray = convertJsonToAstronauts(data);
        setAstronauts(astronautArray);
        if (nameSet === true) {
          const sortedAstronauts = sortByAstronautName(astronauts);
          console.log(sortedAstronauts);
          setAstronauts(sortedAstronauts);
        }
        setIsLoaded(true);
      },
      (error) => {
        setError(error);
        setIsLoaded(true);
      }
    );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading, please wait...</div>;
  } else {
    const astronautRow = astronauts.map((astronaut) => {
      return (
        <tr>
          <td>{astronaut.craft}</td>
          <td>{astronaut.name}</td>
        </tr>
      );
    });

    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>
                Craft
                <br />
                {/* <button onClick={() => sortByCraft(true)}>sort</button> */}
              </th>
              <th>
                Name
                <br />
                <button onClick={() => setByName(true)}>sort</button>
              </th>
            </tr>
          </thead>
          <tbody>{astronautRow}</tbody>
        </table>
      </div>
    );
  }
}

export default AstronautsTable;
