import React, { useEffect, useState } from "react";
import "./PlaceDet.scss";
import { useLocation, useNavigate } from "react-router-dom";
export default function ImageDisplay() {
  const img = useLocation();
  function mouseControl(e) {
    document.getElementById("mouse").style.display = "block";
    document.getElementById("mouse").style.left = e.clientX + "px";
    document.getElementById("mouse").style.top = e.clientY + "px";
    document.getElementById("mouse2").style.display = "block";
    document.getElementById("mouse2").style.left = e.clientX + "px";
    document.getElementById("mouse2").style.top = e.clientY + "px";
    document.getElementById("mouse3").style.display = "block";
    document.getElementById("mouse3").style.left = e.clientX + "px";
    document.getElementById("mouse3").style.top = e.clientY + "px";
  }
  const nav = useNavigate();

  return (
    <div className="imgFullscreen" onMouseMove={mouseControl}>
      <div id="mouse" style={{ zIndex: 100 }}>
        <div
          id="innerMouse"
          style={{ backgroundColor: "rgb(52, 152, 219)" }}
        ></div>
      </div>
      <div id="mouse2" style={{ zIndex: 101 }}>
        <div id="innerMouse2" style={{ backgroundColor: "crimson" }}></div>
      </div>

      <div id="mouse3" style={{ zIndex: 100 }}>
        <div id="innerMouse3"></div>
      </div>
      <img src={img.state} alg="Loading..." className="fullsc" />
      <div className="backImg">
        <div
          className="backImgSub"
          onClick={() => {
            nav(-1);
          }}
        >
          <h2>Back</h2>
        </div>
      </div>
    </div>
  );
}
