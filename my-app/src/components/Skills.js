import React from "react";
import listCreator from "../helpers/listCreator.js"
import "./styles.scss";

export default function Skills(props) {

  return (
    <section className="skills">
      <ul>{listCreator(props.languages)}</ul>
      <ul>{listCreator(props.frameworks)}</ul>
      <ul>{listCreator(props.libraries)}</ul>
      <ul>{listCreator(props.testingTools)}</ul>
    </section>
  );
}
