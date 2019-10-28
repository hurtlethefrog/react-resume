import React from "react";

import "./styles.scss";

export default function Skills(props) {
  return (
    <section className="skills">
      <div>{props.languages}</div>
    </section>
  );
}
