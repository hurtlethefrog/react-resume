import React from "react"

const listCreator = arr => {
    return arr.map(item => {
      return <li key={item}>{item}</li>;
    });
  };

  export default listCreator