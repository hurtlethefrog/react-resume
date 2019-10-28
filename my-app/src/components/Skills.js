import React from "react";

import "./styles.scss";

export default function Skills(props) {
  const listCreator = arr => {
    return arr.map(item => {
      return <li key={item}>{item}</li>;
    });
  };

  return (
    <section className="skills">
      <ul>{listCreator(props.languages)}</ul>
      <ul>{listCreator(props.frameworks)}</ul>
      <ul>{listCreator(props.libraries)}</ul>
      <ul>{listCreator(props.testingTools)}</ul>
    </section>
  );
}
