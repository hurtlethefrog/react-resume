import React from "react";

import "./styles.scss";
import educationMapper from "../helpers/educationMapper";

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
      <div>{educationMapper(props.education)}</div>
    </section>
  );
}
