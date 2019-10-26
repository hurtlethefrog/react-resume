import React from "react";

import "./styles.scss";

export default function Userinfo(props) {
  return (
      <section className="username">
        <button>
            {props.name}
        </button>
      </section>
  );
}