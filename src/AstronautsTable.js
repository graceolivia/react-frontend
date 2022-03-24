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
  const [nameAlphabeticalOrder, setNameAlphabeticalOrder] = useState(false);
  const [craftSet, setByCraft] = useState(false);

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

  useEffect(() => {
    window.addEventListener("click", sortByNameAlphabeticallyButton);
  });

  //   useEffect(() => {
  //     if (nameAlphabeticalOrder) {
  //       const astronautArray = sortByAstronautName(astronauts);
  //       setAstronauts(astronautArray);
  //       console.log(astronautArray);
  //     } else {
  //       console.log("whee");
  //     }
  //   });

  useEffect(() => {
    if (nameAlphabeticalOrder) {
      const astronautArray = sortByAstronautName(astronauts);
      setAstronauts(astronautArray);
      console.log(astronautArray);
    } else {
      console.log("whee");
    }
  });

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
                {/* <button onClick={() => setByCraft(true)}>sort</button> */}
                <button onClick={() => setByCraft(true)}>sort</button>
              </th>
              <th>
                Name
                <br />
                <button className="sortByNameAlphabeticallyButton">
                  sort By Name
                </button>
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
