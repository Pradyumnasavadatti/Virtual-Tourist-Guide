import React, { useState, useRef, Component, useEffect } from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./_home.scss";
import $ from "jquery";

// function down() {
//   let d = document.getElementById("f1").style;
//   d.animation = "animat2 1s linear forwards";
let ind = 0,
  timer;
export default function Card({ name, pic, i, obj }) {
  return (
    <>
      <div className="card__container--inner--card2">
        <div className="card__container--inner--card2--card" key={name}>
          <Link
            to={{ pathname: "/user/Places" }}
            state={obj}
            style={{
              textDecoration: "none",
            }}
          >
            <div className="wall"></div>
            <img id={name} src={pic} alt="Loading..." className="img" />
            <div id={i} className="placeName" style={{ top: "20px" }}>
              <h1 className="myh1">{name}</h1>
            </div>
            <div id="numbi">
              <div className="wallid">
                <h1 className="wallh1">{i + 1}</h1>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
