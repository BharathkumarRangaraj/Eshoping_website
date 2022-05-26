import React from "react";
import ReactDOM from "react-dom";
import Apps from "./Apps.js";
import Nav from "./Navv.js";
import Hero from "./Hero.js";
import "./App.css";

ReactDOM.render(
  <div>
    <Nav />
    <Hero />
    <div className="cardss">
      <Apps
        img="katie-zaferes.jpg"
        rating="5"
        reviewcount="(6)"
        country="USA"
        title="Life lessions with Katie"
        price="$136"
      />
      <Apps
        img="weddingphotography.jpg"
        rating="4.5"
        reviewcount="(6)"
        country="USA"
        title="Learn wedding photography"
        price="$150"
      />
      <Apps
        img="biking.jpg"
        rating="4.4"
        reviewcount="(6)"
        country="USA"
        title="Group mountain cycling"
        price="$50"
      />
    </div>
  </div>,

  document.getElementById("root")
);
