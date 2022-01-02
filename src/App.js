import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Pagnation from "./Pagenation";

function App() {
  const [data, setData] = useState([]);
  const [perPage, setPerPage] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setData(res.data);
      setPerPage(res.data.slice(0, 10));
    });
  }, []);

  const pageHandler = (pageNumbers) => {
    setPerPage(data.slice(pageNumbers * 10 - 10, pageNumbers * 10));
  };

  return (
    <div className="App">
      <h1>Hello</h1>
      {data.length >= 1 ? (
        <table>
          <tr>
            <th>User ID</th>
            <th>Title</th>
            <th>body</th>
          </tr>

          {perPage.map((i) => (
            <tr>
              <td>{i.id}</td>
              <td>{i.title}</td>
              <td>{i.body}</td>
            </tr>
          ))}
        </table>
      ) : (
        <p>Data not loaded</p>
      )}
      <Pagnation data={data} pageHandler={pageHandler} />
    </div>
  );
}

export default App;
