// components/About.js
import React from "react";

const image = "https://i.imgur.com/mV8PQxj.gif"; // Use a hosted image instead

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I Made This</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
