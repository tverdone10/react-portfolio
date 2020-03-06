import React, { useState } from "react";
import { Grid, Cell } from "react-mdl";
import Profile from "../../img/profile.jpg";
import ProfileTwo from "../../img/bwprofile.jpg";
import Anime, { anime } from "react-anime";

const skills = [
  "React",
  " ",
  "|",
  "React Native",
  "|",
  "Javascript",
  "|",
  "MongoDB",
  "|",
  " HTML/CSS",
  "|",
  "Node.js"
];

const regularSkills =
  "React | React Native | Javascript | MongoDB | HTML/CSS | Node.js | Git";

export default function Landing() {
  const messageArray = [...regularSkills];

  let animeProps = {
    scale: [0.3, 1],
    easing: "easeOutExpo",
    opacity: [0, 1],
    duration: 200,
    delay: anime.stagger(100)
    // loop: true
  };

  return (
    <div style={{ width: "100vw", margin: "0 auto" }}>
      <Grid className="landing-grid">
        <Cell col={12}>
          <img className="profile-img" src={ProfileTwo} />
          <div className="banner-text">
            <Anime opacity={[0, 1]} duration={"2500"} easing="easeInOutQuad">
              <h1>Full Stack Web Developer</h1>
            </Anime>
            <Anime opacity={[0, 1]} duration={"5000"} easing="easeInOutQuad">
              <h2>Sound Engineer</h2>
            </Anime>
            <hr />

            <p className="skills">
              <Anime {...animeProps}>
                {messageArray.map((letter, index) => {
                  if (letter == " ") {
                    return <span class="letter">&nbsp;</span>;
                  } else {
                    return <span class="letter">{letter}</span>;
                  }
                })}
              </Anime>
            </p>

            <div className="social-links">
              <Anime
                translateY={5}
                loop={true}
                direction="alternate"
                easing="easeInOutQuad"
              >
                <a href="https://github.com/tverdone10" target="_blank">
                  <i className="fab fa-github" />
                </a>
              </Anime>
              <Anime
                translateY={-5}
                loop={true}
                direction="alternate"
                easing="easeInOutQuad"
              >
                <a
                  href="https://www.linkedin.com/in/thomas-verdone/"
                  target="_blank"
                >
                  <i class="fab fa-linkedin"></i>
                </a>
              </Anime>
            </div>
          </div>
        </Cell>
      </Grid>
    </div>
  );
}
