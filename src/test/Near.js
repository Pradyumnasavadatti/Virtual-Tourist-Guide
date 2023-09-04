import "./All.css";
import React from "react";
import { Link } from "react-router-dom";
import firebase from "../firebase";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
export default function Near() {
  const [flag, setFlag] = useState(false);
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  let nav = useLocation();
  const array = nav.state;
  console.log(array);
  return (
    <>
      <div className="NearHead">
        <h1>Near by services</h1>
      </div>
      <div className="NearMain">
        <div className="NearSub">
          <div className="card__container--inner--card2">
            <div className="card__container--inner--card2--card aboutNow">
              <Link
                to={{ pathname: "/Airport" }}
                style={{
                  textDecoration: "none",
                }}
              >
                <div className="wall"></div>
                <img src={array[0].id} alt="Loading..." className="img" />
                <div className="placeName" style={{ top: "20px" }}>
                  <h1 className="myh1">Airports</h1>
                </div>
              </Link>
            </div>
          </div>
          <div className="card__container--inner--card2">
            <div className="card__container--inner--card2--card aboutNow">
              <Link
                to={{ pathname: "/Bus" }}
                style={{
                  textDecoration: "none",
                }}
              >
                <div className="wall"></div>
                <img src={array[1].id} alt="Loading..." className="img" />
                <div className="placeName" style={{ top: "20px" }}>
                  <h1 className="myh1">Bus stands</h1>
                </div>
              </Link>
            </div>
          </div>
          <div className="card__container--inner--card2">
            <div className="card__container--inner--card2--card aboutNow">
              <Link
                to={{ pathname: "/Hospital" }}
                style={{
                  textDecoration: "none",
                }}
              >
                <div className="wall"></div>
                <img src={array[2].id} alt="Loading..." className="img" />
                <div className="placeName" style={{ top: "20px" }}>
                  <h1 className="myh1">Hospitals</h1>
                </div>
              </Link>
            </div>
          </div>
          <div className="card__container--inner--card2">
            <div className="card__container--inner--card2--card aboutNow">
              <Link
                to={{ pathname: "/Medi" }}
                style={{
                  textDecoration: "none",
                }}
              >
                <div className="wall"></div>
                <img src={array[3].id} alt="Loading..." className="img" />
                <div className="placeName" style={{ top: "20px" }}>
                  <h1 className="myh1">Medical stores</h1>
                </div>
              </Link>
            </div>
          </div>
          <div className="card__container--inner--card2">
            <div className="card__container--inner--card2--card aboutNow">
              <Link
                to={{ pathname: "/Police" }}
                style={{
                  textDecoration: "none",
                }}
              >
                <div className="wall"></div>
                <img src={array[4].id} alt="Loading..." className="img" />
                <div className="placeName" style={{ top: "20px" }}>
                  <h1 className="myh1">Police Stations</h1>
                </div>
              </Link>
            </div>
          </div>
          <div className="card__container--inner--card2">
            <div className="card__container--inner--card2--card aboutNow">
              <Link
                to={{ pathname: "/Post" }}
                style={{
                  textDecoration: "none",
                }}
              >
                <div className="wall"></div>
                <img src={array[5].id} alt="Loading..." className="img" />
                <div className="placeName" style={{ top: "20px" }}>
                  <h1 className="myh1">Post Offices</h1>
                </div>
              </Link>
            </div>
          </div>
          <div className="card__container--inner--card2">
            <div className="card__container--inner--card2--card aboutNow">
              <Link
                to={{ pathname: "/Rail" }}
                style={{
                  textDecoration: "none",
                }}
              >
                <div className="wall"></div>
                <img src={array[6].id} alt="Loading..." className="img" />
                <div className="placeName" style={{ top: "20px" }}>
                  <h1 className="myh1">Railsway stations</h1>
                </div>
              </Link>
            </div>
          </div>
          <div className="card__container--inner--card2">
            <div className="card__container--inner--card2--card aboutNow">
              <Link
                to={{ pathname: "/Takies" }}
                style={{
                  textDecoration: "none",
                }}
              >
                <div className="wall"></div>
                <img src={array[7].id} alt="Loading..." className="img" />
                <div className="placeName" style={{ top: "20px" }}>
                  <h1 className="myh1">Cinema Hall</h1>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
