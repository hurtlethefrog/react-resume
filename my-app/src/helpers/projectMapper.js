import React from "react";

const projectMapper = arr => {
  let i = 0;
  return arr.map(item => {
    i++;
    return (
      <div key={item.title + i}>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </div>
    );
  });
};
export default projectMapper;