import React from "react";

import "./styles.scss";
import projectMapper from "../helpers/projectMapper";

export default function Projects(props) {

  return (
    <section className="projects">
      {projectMapper(props.projects)}
    </section>
  );
}
