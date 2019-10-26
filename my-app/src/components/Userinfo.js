import React from "react";

import "./styles.scss";

export default function Userinfo(props) {
  return (
    <section className="userinfo">
      <div>{props.name}</div>
      <button>{props.email}</button>
      <div>{props.phoneNumber}</div>
      <div>{props.location}</div>
      <button>{props.linkedin}</button>
      <button>{props.github}</button>
      <div>{props.bio}</div>
    </section>
  );
}
