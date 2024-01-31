import React from "react";
import './DataDisplay.css';


export default function DataDisplay({data}){

return (
    <div>
       <h2>Data  Display</h2>

       <ul>
        {data.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
);

};