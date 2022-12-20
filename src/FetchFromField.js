import React from "react";
import "./App.css";

import userData from "./userData.json";
const FetchFromFile = () => {
  return (
    <div className="cont">
      <div>
        <h2>Data Fetch From JSON File</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th className="th1" id="th1">
              ID
            </th>
            <th className="th1" id="th2">
              Name
            </th>
            <th className="th1" id="th2">
              Email
            </th>
          </tr>
        </thead>
        <tbody>
          {userData.map((value) => {
            return (
              <tr>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FetchFromFile;