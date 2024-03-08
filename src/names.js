import React from "react";

const Cxrili     = ({ names }) => {
    return (
      <div>
        <h3>ცხრილი</h3>
        <table>
          <thead>
            <tr>
              <th>N</th>
              <th>სახელი</th>
            </tr>
          </thead>
          <tbody>
            {names.map((name, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Cxrili;