import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

export default function Apps(props) {
  return (
    <div className="cardss">
      <div className="card">
        <img className="katieimage" src={props.img} />
        <div className="rating">
          <img className="ratingimg" src="./star.png" />
          <span className="ratingnumber">
            <b>{props.rating}</b>
          </span>
          <span className="five">{props.reviewcount} .</span>
          <span className="five">{props.country}</span>
        </div>
        <p className="lifelession">{props.title}</p>
        <p className="rate">
          <b> From {props.price}/person</b>
        </p>
      </div>
    </div>
  );
}
