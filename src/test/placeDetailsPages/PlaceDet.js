import React, { useState, useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import { useNavigate } from "react-router";
import Map from "../../maps/Map";
import "./PlaceDet.scss";
import Speech from "../../voice/Btn.js";
import firebase from "../../firebase";
import Slider from "../sliderUI.js";
import Nav from "../Nav";
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
    lat: place.state.lat,
    lng: place.state.long,
  };
  const array = [];
  function dataFetch() {
    firebase
      .database()
      .ref("Places")
      .on("value", (snapshot) => {
        const i = snapshot.val();
        for (let ind in place.state.nearbyplace) {
          for (let id in i) {
            if (Number(i[id].id) == place.state.nearbyplace[ind]) {
              array.push({
                name: id,
                pic: i[id].pics[0],
                lat: i[id].cord[`lat`],
                long: i[id].cord[`long`],
                history: i[id].his,
                idno: i[id].id,
                nearbyhotel: i[id].nearbyh,
                nearbyplace: i[id].nearbyp,
                pics: i[id].pics,
                typeid: i[id].type,
              });
            }
          }
        }
      });
  }

  const [flag, setFlag] = useState(false);
  const [flag2, setFlag2] = useState(false);
  let timer;
  useEffect(() => {
    if (array.length === 0) {
      timer = setTimeout(() => {
        setFlag(!flag);
      }, 500);
    } else {
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
        <Map center={center} destination={-1} zoom={15} className="mapHover" />
      </div>
      <div
        className="mainPlace1"
        onMouseMove={mouseControl}
        onMouseLeave={disable}
      >
        <div className="mainPlace2">
          <div className="mainPlace">
            <h1 className="mainHead">{place.state.name}</h1>
            {place.state.typeh == 0 && (
              <h3 style={{ color: "#3498db" }}>
                {place.state.star} star Veg only hotel
              </h3>
            )}
            {place.state.typeh == 1 && (
              <h3 style={{ color: "#3498db" }}>
                {place.state.star} star Non-veg only hotel
              </h3>
            )}
            {place.state.typeh == 2 && (
              <h3 style={{ color: "#3498db" }}>
                {place.state.star} star Veg and Non-veg hotel
              </h3>
            )}
            <div className="historyMain">
              <div className="historyPara" onMouseMove={show} onMouseOut={out}>
                <p>{place.state.history}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="picsMain">
        <div className="picsMain2">
          <div className="picsDiv">
            <div className="picsDiv2">
              {place.state.pics.map((index) => {
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
              {place.state.pics.map((index) => {
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
                state={place.state.pics}
              >
                <div className="picBtn2">
                  <h2>See more images</h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
        {array.length != 0 && <Slider title={"Near by places"} data={array} />}
      </div>
      <div className="footer">
        <h1 className={"styleH1"}>FOOTER</h1>
      </div>
      <Speech
        history2={place.state.history}
        current={"particulars"}
        dataSet={place.state.pics}
        pos={center}
      />
      {/* <Nav /> */}
    </div>
  );
}
