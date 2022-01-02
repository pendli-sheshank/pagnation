import React from "react";
import "./App.css";

const Pagnation = ({ data, pageHandler }) => {
  let pageNumbers = [];
  for (let i = 1; i < Math.ceil(data.length / 10) + 1; i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <center className="page">
        {pageNumbers.map((page) => (
          <div className="page p" onClick={() => pageHandler(page)}>
            {page}
          </div>
        ))}
      </center>
    </div>
  );
};

export default Pagnation;
