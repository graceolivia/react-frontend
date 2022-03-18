import React from "react";
import { useState, useEffect } from "react";
import fetchJson from "./fetchJson";

function AstronautsTable() {
  const [error, setError] = useState(null);
  const [astronauts, setAstronauts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
      fetchJson()
      .then(
        (data) => {
          setAstronauts(data);
          setIsLoaded(true);
        },
        (error) => {
        setError(error);
        setIsLoaded(true)
        }
      );
  })

//   useEffect(() => {
//     fetch("http://localhost:5000/react")
//       .then((response) => response.json())
//       .then(
//         (data) => {
//           setAstronauts(data);
//           setIsLoaded(true);
//         },
//         (error) => {
//         setError(error);
//         setIsLoaded(true)
//         }
//       );
//   }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
} else if (!isLoaded) {
    return <div>Loading, please wait...</div>;
} else {
    console.log(astronauts.people);
    const DisplayData=astronauts.people.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.craft}</td>
                    <td>{info.name}</td>
                </tr>
            )
        }
    )



  return (
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Craft</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>{ DisplayData }</tbody>
      </table>
    </div>
  );
  }




}

export default AstronautsTable;
