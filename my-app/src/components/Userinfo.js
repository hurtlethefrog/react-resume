import React from "react";

import "./styles.scss";
import educationMapper from "../helpers/educationMapper";

export default function Userinfo(props) {
  return (
    <section className="userinfo">
      <div>{props.name}</div>
      <div>{props.phoneNumber}</div>
      <div>{props.location}</div>
      <div className="contact-info">
        <a href={props.linkedin} rel="external">
          <img
            alt="linkedin"
            src="https://res.cloudinary.com/dkwqyaedt/image/upload/v1572804093/linkedin_hujhmb.svg"
          ></img>
        </a>
        <a href={props.github} rel="external">
          <img
            alt="github"
            src="https://res.cloudinary.com/dkwqyaedt/image/upload/v1572804466/github-logo-icon-of-glyph-style-available-in-svg-png-eps-ai-github-icon-png-256_256_xcmkos.png"
          ></img>
        </a>
        <a href={props.email}>
          <img
            alt="email"
            src="https://res.cloudinary.com/dkwqyaedt/image/upload/v1572804730/email-icon-png-email-icon-2048_vvs9lt.png"
          ></img>
        </a>
      </div>
      <div className="bio">{props.bio}</div>
      <div>{educationMapper(props.education)}</div>
    </section>
  );
}
