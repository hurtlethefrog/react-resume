import React from "react";

const listCreator = arr => {
  let i = 0
  return arr.map(item => {
    i++
    return <li key={item + i}>{item}</li>;
  });
};

export default listCreator;
