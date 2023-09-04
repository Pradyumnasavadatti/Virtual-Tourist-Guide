import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import SpeechBtn from "../../voice/Btn.js";
import Nav from "../Nav";
import "./PlaceDet.scss";
export default function Album() {
  const img = useLocation();
  const nav = useNavigate();
  return (
    <div className="albumMain">
      <div className="albumMain2">
        {img.state.map((index, key) => {
          return (
            <Link
              className={"linkImg"}
              to={{ pathname: "/user/Place/Details" }}
              state={index}
            >
              <img src={index} alt="Loading..." className="albumImg" />
            </Link>
          );
        })}
      </div>
      <SpeechBtn current={"album"} dataSet={img.state} />
      {/* <Nav/> */}
    </div>
  );
}
