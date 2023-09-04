import { React, Component, useState, useEffect } from "react";
import { useLocation } from "react-router";
import Slider from "./sliderUI";
import firebase from "../firebase";
import Map from "../maps/Map";
import { useSpeechSynthesis } from "react-speech-kit";
import SpeechBtn from "../voice/Btn.js";
import { useGeolocated } from "react-geolocated";
import { getDistance } from "geolib";
import "./_home.scss";
import Nav from "./Nav.js";
import Ps from "../PS.jpeg";
import { setAnalyticsCollectionEnabled } from "firebase/analytics";
import { toHaveAccessibleDescription } from "@testing-library/jest-dom/dist/matchers";
import { nodeName } from "jquery";
import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
let i = 0;
let isNearHotel = false,
  isNearPlace = false;
export default function Userdet() {
  let prefs = useLocation();
  // console.log(prefs.state);
  const [load, setLoad] = useState(true);
  const { speak, voices } = useSpeechSynthesis();
  const voice = voices[2];
  const array = [];
  const array2 = [];
  const array3 = [];
  const array4 = [];
  const array6 = [];
  const array7 = [];
  let dis, presum;
  // const center = {
  //   lat: 0,
  //   lng: 0,
  // };
  const dest = {
    latitude: 15.92557,
    longitude: 75.67196,
  };

  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: true,
      },
      userDecisionTimeout: 5000,
    });
  let dev, hist, nat, mus, tep, tep2, tep3, tep4, tep5;
  function fourth(a, b, c, d, e, f, g) {
    if (
      (e == 0 && f == 1 && g == 2) ||
      (e == 0 && f == 2 && g == 1) ||
      (e == 1 && f == 0 && g == 2) ||
      (e == 2 && f == 0 && g == 1) ||
      (e == 1 && f == 2 && g == 0) ||
      (e == 2 && f == 1 && g == 0)
    ) {
      tep = d;
      tep2 = 7;
      tep3 = -1;
      tep4 = -1;
      tep5 = -1;
    } else if (
      (e == 0 && f == 1 && g == 7) ||
      (e == 0 && f == 7 && g == 1) ||
      (e == 1 && f == 0 && g == 7) ||
      (e == 7 && f == 0 && g == 1) ||
      (e == 1 && f == 7 && g == 0) ||
      (e == 7 && f == 1 && g == 0)
    ) {
      tep = c;
      tep2 = 2;
      tep3 = -1;
      tep4 = -1;
      tep5 = -1;
    } else if (
      (e == 0 && f == 2 && g == 7) ||
      (e == 0 && f == 7 && g == 2) ||
      (e == 2 && f == 0 && g == 7) ||
      (e == 7 && f == 0 && g == 2) ||
      (e == 2 && f == 7 && g == 0) ||
      (e == 7 && f == 2 && g == 0)
    ) {
      tep = b;
      tep2 = 1;
      tep3 = -1;
      tep4 = -1;
      tep5 = -1;
    } else if (
      (e == 1 && f == 2 && g == 7) ||
      (e == 1 && f == 7 && g == 2) ||
      (e == 2 && f == 1 && g == 7) ||
      (e == 7 && f == 1 && g == 2) ||
      (e == 2 && f == 7 && g == 1) ||
      (e == 7 && f == 2 && g == 1)
    ) {
      tep = a;
      tep2 = 0;
      tep3 = -1;
      tep4 = -1;
      tep5 = -1;
    }
    firebase
      .database()
      .ref("Places")
      .on("value", (sc) => {
        const i = sc.val();
        for (let id in i) {
          if (
            (i[id].type == tep2 ||
              i[id].type == tep3 ||
              i[id].type == tep4 ||
              i[id].type == tep5) &&
            tep >= 0
          ) {
            tep--;
            array3.push({
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
      });
  }
  function third(a, b, c, d, e, f) {
    if ((e == 0 && f == 1) || (e == 1 && f == 0)) {
      if (c >= d) {
        tep = c;
        tep2 = 2;
        tep3 = -1;
        tep4 = -1;
        tep5 = -1;
      } else {
        tep = d;
        tep2 = 7;
        tep3 = -1;
        tep4 = -1;
        tep5 = -1;
      }
    } else if ((e == 0 && f == 2) || (e == 2 && f == 0)) {
      if (b >= d) {
        tep = b;
        tep2 = 1;
        tep3 = -1;
        tep4 = -1;
        tep5 = -1;
      } else {
        tep = d;
        tep2 = 7;
        tep3 = -1;
        tep4 = -1;
        tep5 = -1;
      }
    } else if ((e == 0 && f == 7) || (e == 7 && f == 0)) {
      if (b >= c) {
        tep = b;
        tep2 = 1;
        tep3 = -1;
        tep4 = -1;
        tep5 = -1;
      } else {
        tep = c;
        tep2 = 2;
        tep3 = -1;
        tep4 = -1;
        tep5 = -1;
      }
    } else if ((e == 1 && f == 2) || (e == 2 && f == 1)) {
      if (a >= d) {
        tep = a;
        tep2 = 0;
        tep3 = -1;
        tep4 = -1;
        tep5 = -1;
      } else {
        tep = d;
        tep2 = 7;
        tep3 = -1;
        tep4 = -1;
        tep5 = -1;
      }
    } else if ((e == 1 && f == 7) || (e == 7 && f == 1)) {
      if (a > c) {
        tep = a;
        tep2 = 0;
        tep3 = -1;
        tep4 = -1;
        tep5 = -1;
      } else {
        tep = c;
        tep2 = 2;
        tep3 = -1;
        tep4 = -1;
        tep5 = -1;
      }
    } else if ((e == 2 && f == 7) || (e == 7 && f == 2)) {
      if (a > b) {
        tep = a;
        tep2 = 0;
        tep3 = -1;
        tep4 = -1;
        tep5 = -1;
      } else {
        tep = b;
        tep2 = 1;
        tep3 = -1;
        tep4 = -1;
        tep5 = -1;
      }
    }
    firebase
      .database()
      .ref("Places")
      .on("value", (sc) => {
        const i = sc.val();
        for (let id in i) {
          if (
            (i[id].type == tep2 ||
              i[id].type == tep3 ||
              i[id].type == tep4 ||
              i[id].type == tep5) &&
            tep >= 0
          ) {
            tep--;
            array3.push({
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
      });
    fourth(a, b, c, d, e, f, tep2);
  }
  function second(a, b, c, d, e) {
    if (e == 0) {
      if (b >= c && b >= d) {
        tep = b;
        tep2 = 1;
        tep3 = -1;
        tep4 = -1;
        tep5 = 5;
      } else if (c >= b && c >= d) {
        tep = c;
        tep2 = 2;
        tep3 = -1;
        tep4 = 5;
        tep5 = -1;
      } else {
        tep = d;
        tep2 = 7;
        tep3 = -1;
        tep4 = -1;
        tep5 = -1;
      }
    } else if (e == 1) {
      if (a >= c && a >= d) {
        tep = b;
        tep2 = 0;
        tep3 = -1;
        tep4 = -1;
        tep5 = 4;
      } else if (c >= a && c >= d) {
        tep = c;
        tep2 = 2;
        tep3 = 4;
        tep4 = -1;
        tep5 = -1;
      } else {
        tep = d;
        tep2 = 7;
        tep3 = -1;
        tep4 = -1;
        tep5 = -1;
      }
    } else if (e == 2) {
      if (a >= b && a >= d) {
        tep = a;
        tep2 = 0;
        tep3 = 3;
        tep4 = -1;
        tep5 = -1;
      } else if (b >= a && b >= d) {
        tep = b;
        tep2 = 1;
        tep3 = 3;
        tep4 = -1;
        tep5 = -1;
      } else {
        tep = d;
        tep2 = 7;
        tep3 = -1;
        tep4 = -1;
        tep5 = -1;
      }
    } else {
      tep = d;
      tep2 = 7;
      tep3 = -1;
      tep4 = -1;
      tep5 = -1;
    }
    firebase
      .database()
      .ref("Places")
      .on("value", (sc) => {
        const i = sc.val();
        for (let id in i) {
          if (
            (i[id].type == tep2 ||
              i[id].type == tep3 ||
              i[id].type == tep4 ||
              i[id].type == tep5) &&
            tep >= 0
          ) {
            tep--;
            array3.push({
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
      });
    third(a, b, c, d, e, tep2);
  }
  function first(a, b, c, d) {
    if (a >= b && a >= c && a >= d) {
      tep = a;
      tep2 = 0;
      tep3 = 3;
      tep4 = 6;
      tep5 = 4;
    } else if (b >= a && b >= c && b >= d) {
      tep = b;
      tep2 = 1;
      tep3 = 3;
      tep4 = 6;
      tep5 = 5;
    } else if (c >= a && c >= b && c >= d) {
      tep = c;
      tep2 = 2;
      tep3 = 4;
      tep4 = 5;
      tep5 = 6;
    } else {
      tep = d;
      tep2 = 7;
      tep3 = -1;
      tep4 = -1;
      tep5 = -1;
    }
    firebase
      .database()
      .ref("Places")
      .on("value", (sc) => {
        const i = sc.val();
        for (let id in i) {
          if (
            (i[id].type == tep2 ||
              i[id].type == tep3 ||
              i[id].type == tep4 ||
              i[id].type == tep5) &&
            tep >= 0
          ) {
            tep--;
            array3.push({
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
      });
    second(a, b, c, d, tep2);
  }

  function dataFetch() {
    presum =
      Number(prefs.state[0]) +
      Number(prefs.state[1]) +
      Number(prefs.state[2]) +
      Number(prefs.state[7]);

    dev = (16 * Number(prefs.state[0])) / presum;
    hist = (16 * Number(prefs.state[1])) / presum;
    nat = (16 * Number(prefs.state[2])) / presum;
    mus = (16 * Number(prefs.state[7])) / presum;
    first(dev, hist, nat, mus);
    // second(dev, hist, nat, mus);
    // third(dev, hist, nat, mus);
    // fourth(dev, hist, nat, mus);
    // console.log(
    //   Math.floor(dev),
    //   Math.floor(hist),
    //   Math.floor(nat),
    //   Math.floor(mus)
    // );
    firebase
      .database()
      .ref("image")
      .on("value", (sc) => {
        const i = sc.val();
        for (let id in i) {
          array7.push({ id: i[id] });
        }
      });

    firebase
      .database()
      .ref("Hotels")
      .on("value", (snapshot) => {
        const i = snapshot.val();
        for (let id in i) {
          dis = getDistance(
            { latitude: coords.latitude, longitude: coords.longitude },
            { latitude: i[id].cord[`lat`], longitude: i[id].cord[`long`] }
          );
          if (
            dis < 20000 &&
            prefs.state["hotel"] == 0 &&
            (i[id].typeh == 0 || i[id].typeh == 2)
          ) {
            array2.push({
              name: id,
              pic: i[id].pics[0],
              lat: i[id].cord[`lat`],
              long: i[id].cord[`long`],
              idno: i[id].id,
              pics: i[id].pics,
              typeh: i[id].typeh,
              star: i[id].star,
              rstar: i[id].star,
              distance: dis,
            });
          }
        }
      });
    firebase
      .database()
      .ref("Hotels")
      .on("value", (snapshot) => {
        const i = snapshot.val();
        for (let id in i) {
          dis = getDistance(
            { latitude: coords.latitude, longitude: coords.longitude },
            { latitude: i[id].cord[`lat`], longitude: i[id].cord[`long`] }
          );
          if (
            dis < 20000 &&
            prefs.state["hotel"] == 1 &&
            (i[id].typeh == 1 || i[id].typeh == 2)
          ) {
            array2.push({
              name: id,
              pic: i[id].pics[0],
              lat: i[id].cord[`lat`],
              long: i[id].cord[`long`],
              idno: i[id].id,
              pics: i[id].pics,
              star: i[id].star,
              rstar: i[id].star,
              typeh: i[id].typeh,
              distance: dis,
            });
          }
        }
      });
    firebase
      .database()
      .ref("Hotels")
      .on("value", (snapshot) => {
        const i = snapshot.val();
        for (let id in i) {
          dis = getDistance(
            { latitude: coords.latitude, longitude: coords.longitude },
            { latitude: i[id].cord[`lat`], longitude: i[id].cord[`long`] }
          );
          if (dis < 20000) {
            isNearHotel = true;
            array4.push({
              name: id,
              pic: i[id].pics[0],
              lat: i[id].cord[`lat`],
              long: i[id].cord[`long`],
              idno: i[id].id,
              pics: i[id].pics,
              star: i[id].star,
              rstar: i[id].star,
              typeh: i[id].typeh,
              distance: dis,
            });
          }
        }
      });
    firebase
      .database()
      .ref("Places")
      .on("value", (snapshot) => {
        const i = snapshot.val();
        for (let id in i) {
          dis = getDistance(
            { latitude: coords.latitude, longitude: coords.longitude },
            { latitude: i[id].cord[`lat`], longitude: i[id].cord[`long`] }
          );
          if (i[id].id < 50 && dis < 20000) {
            isNearPlace = true;
            // console.log("Place : " + id + " " + "Distance : " + dis);
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
              distance: dis,
            });
          }
        }
      });
    array.sort((a, b) => a.distance - b.distance);
    array2.sort((a, b) => a.rstar - b.rstar);
    array4.sort((a, b) => a.distance - b.distance);
  }
  const [flag, setFlag] = useState(false);
  const [flag2, setFlag2] = useState(false);
  let timer;
  useEffect(() => {
    if (array7.length === 0) {
      timer = setTimeout(() => {
        setFlag(!flag);
      }, 500);
    } else {
      clearTimeout(timer);
      setFlag2(true);
      tellme();
      setLoad(false);
    }
  });
  function tellme() {
    if (i == 0) {
      speak({
        text: "The journey of a thousand miles begins with a single step. and you are one step ahead. Welcome!, I'm your Virtual Guide. Click on SAY button. And try to say GIVE ME OVERVIEW. to get an idea about our website",
      });

      i++;
    }
  }
  return isGeolocationAvailable ? (
    isGeolocationEnabled ? (
      coords ? (
        <>
          {load && (
            <div className="loadData">
              <h1>Loading...</h1>
            </div>
          )}
          <div style={{ height: "60%", width: "100%" }}>
            <Map
              center={{ lat: coords.latitude, lng: coords.longitude }}
              zoom={7}
            />
          </div>
          {dataFetch()}
          {flag2 && (
            <Slider title={"Near by places"} data={array} flag={isNearPlace} />
          )}
          {flag2 && <Slider title={"Recommended places"} data={array3} />}
          {flag2 && (
            <Slider title={"Near by Hotels"} data={array4} flag={isNearHotel} />
          )}
          {array2.legth != 0 && flag2 && (
            <Slider title={"Recommended Hotels"} data={array2} />
          )}
          <SpeechBtn
            current={"userDet"}
            dataSet={array}
            hotel={array4}
            RP={array3}
            RH={array2}
            pos={{ lat: coords.latitude, lng: coords.longitude }}
          />
          <Nav data={array7} />
          <div className="footerx">
            <div>
              <table border="0" cellPadding={5}>
                <tr>
                  <td colSpan="2">Developed by BEC Bagalkot students</td>
                </tr>
                <tr>
                  <td colSpan="2">Guided by Dr. V B Pagi</td>
                </tr>
                <tr>
                  <td colSpan="2">Student developers</td>
                </tr>
                <tr>
                  <td>
                    <a
                      style={{ textDecoration: "none", color: "white" }}
                      href="https://github.com/Pradyumnasavadatti"
                    >
                      Pradyumna Savadatti
                    </a>
                  </td>
                  <td>
                    <a
                      style={{ textDecoration: "none", color: "white" }}
                      href="https://instagram.com/abhishek_sb_?igshid=YmMyMTA2M2Y="
                    >
                      Abhishek Batakurki
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      style={{ textDecoration: "none", color: "white" }}
                      href="https://github.com/VivekHalakatti"
                    >
                      Vivek Halakatti
                    </a>
                  </td>
                  <td>
                    <a
                      style={{ textDecoration: "none", color: "white" }}
                      href="https://instagram.com/ghorpade_nikhil_?igshid=YmMyMTA2M2Y="
                    >
                      Nikhil Ghorpade
                    </a>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </>
      ) : (
        <h1>Please give location permission</h1>
      )
    ) : (
      <h1>Please turn on location</h1>
    )
  ) : (
    <h1>Coordinates not available</h1>
  );
}
