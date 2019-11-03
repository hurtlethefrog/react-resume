import React from "react";

import "./styles.scss";
import educationMapper from "../helpers/educationMapper";

export default function Userinfo(props) {
  return (
    <section className="userinfo">
      <div>{props.name}</div>
      <div>{props.phoneNumber}</div>
      <div>{props.location}</div>
      <a href={props.linkedin} rel="external">Linkedin</a>
      <a href={props.github} rel="external">GitHub</a>
      <a href={props.email}>{props.email.slice(7)}</a>
      <div>{props.bio}</div>
      <div>{educationMapper(props.education)}</div>
    </section>
  );
}
