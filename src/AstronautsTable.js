import React from 'react';
import astronauts from './astronauts.json'

function AstronautsTable(){
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

 
    return(
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th>Craft</th>
                    <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                 
                    
                    {DisplayData}
                    
                </tbody>
            </table>
             
        </div>
    )
 }
 
 export default AstronautsTable;