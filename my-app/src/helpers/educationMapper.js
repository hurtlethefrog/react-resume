import React from "react";

const educationMapper = arr => {
  let i = 0;
  return arr.map(item => {
    i++;
    return (
      <div key={item.where + i}>
        <h2>{item.where}</h2>
        <p>{item.when}</p>
        <p>{item.what}</p>
      </div>
    );
  });
};
export default educationMapper;