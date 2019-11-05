import React from "react";

import "./styles.scss";

export default function Userinfo(props) {
  return (
    <React.Fragment>
      <img
        className="face"
        alt="face"
        src="https://res.cloudinary.com/dkwqyaedt/image/upload/v1572873621/20190912-_ANA5189_tanfm4.jpg"
      ></img>
      <section className="userinfo">
        <div className="">{props.name}</div>
        <div className="title">Full-Stack Web Developer</div>
        <div className="">{props.phoneNumber}</div>
        <div className="">{props.location}</div>
        <div className="contact-info ">
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
        <div className="bio ">{props.bio}</div>
      </section>
    </React.Fragment>
  );
}
