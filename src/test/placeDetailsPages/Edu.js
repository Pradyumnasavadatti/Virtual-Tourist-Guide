import React, { useState, useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import { useNavigate } from "react-router";
import Map from "../../maps/Map";
import "./PlaceDet.scss";
import Speech from "../../voice/Btn.js";
import firebase from "../../firebase";
import Slider from "../sliderUI.js";
import $ from "jquery";

export default function PlaceDet() {
  let i = 0,
    j = 0;
  let sr = React.createRef();
  let place = useLocation();
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
    document.getElementById("mouseTitle").style.display = "block";
    document.getElementById("mouseTitle").style.left = e.clientX + "px";
    document.getElementById("mouseTitle").style.top = e.clientY + "px";
  }
  function disable() {
    document.getElementById("mouse").style.display = "none";
    document.getElementById("mouse2").style.display = "none";
    document.getElementById("mouse3").style.display = "none";
    document.getElementById("mouseTitle").style.display = "none";
  }
  function show() {
    document.getElementById("innerMouseTitle").style.display = "flex";
    document.getElementById("innerMouseTitle").style.animation =
      "animatPlace 5s linear forwards";
  }
  function out() {
    document.getElementById("innerMouseTitle").style.display = "none";
  }
  const center = {
    lat: 0,
    lng: 0,
  };
  const array = [];
  function dataFetch() {
    firebase
      .database()
      .ref("Places/Basaveshwar Engineering College")
      .on("value", (snapshot) => {
        const i = snapshot.val();

        for (let id in i) {
          array.push({
            id: i[id],
          });
        }
        //console.log(array[21].id);
      });
  }

  const [flag, setFlag] = useState(false);
  const [flag2, setFlag2] = useState(false);
  let timer;
  useEffect(() => {
    if (array.length === 0) {
      console.log("array2");
      timer = setTimeout(() => {
        setFlag(!flag);
      }, 500);
    } else {
      console.log("array");
      clearTimeout(timer);
      setFlag2(true);
    }
  });
  function scrollControl() {
    sr.current.scrollTo(0, 0);
  }
  return (
    <div className="mainPlaceDiv" ref={sr} onLoad={scrollControl}>
      {dataFetch()}
      <div id="mouse">
        <div id="innerMouse"></div>
      </div>
      <div id="mouse2">
        <div id="innerMouse2"></div>
      </div>
      <div id="mouse3">
        <div id="innerMouse3"></div>
      </div>
      <div id="mouseTitle">
        <div id="innerMouseTitle">
          <h4 style={{ color: "white", marginLeft: "0.5vw" }}>History</h4>
        </div>
      </div>
      <div className="mapDiv">
        <Map
          center={{ lat: array[18].id.lat, lng: array[18].id.long }}
          destination={-1}
          zoom={15}
          className="mapHover"
        />
      </div>
      <div
        className="mainPlace1"
        onMouseMove={mouseControl}
        onMouseLeave={disable}
      >
        <div className="mainPlace2">
          <div className="mainPlace">
            <h1 className="mainHead">Basaveshwar Engineering College</h1>
            <div className="historyMain">
              <div className="historyPara" onMouseMove={show} onMouseOut={out}>
                <p>{array[19].id}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="picsMain">
        <div className="picsMain2">
          <div className="picsDiv">
            <div className="picsDiv2">
              {array[21].id.map((index) => {
                if (i < 3) {
                  i++;
                  return (
                    <Link
                      className={"linkImg"}
                      to={{ pathname: "/user/Place/Details" }}
                      state={index}
                    >
                      <img src={index} className="imgClass" />
                    </Link>
                  );
                }
              })}
            </div>
            <div className="picsDiv3">
              {array[21].id.map((index) => {
                if (j < 2) {
                  j++;
                  return (
                    <Link
                      className={"linkImg"}
                      to={{ pathname: "/user/Place/Details" }}
                      state={index}
                    >
                      <img src={index} className="imgClass" />
                    </Link>
                  );
                }
              })}
            </div>
            <div className="picBtn">
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                to={{ pathname: "/user/Place/Images" }}
                state={array[21].id}
              >
                <div className="picBtn2">
                  <h2>See more images</h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <h1 className={"styleH1"}>FOOTER</h1>
      </div>
      <Speech
        history2={array[19].id}
        current={"BEC"}
        dataSet={array[21].id}
        pos={{ lat: array[18].id.lat, lng: array[18].id.long }}
        dataEdu={array}
      />
    </div>
  );
}
