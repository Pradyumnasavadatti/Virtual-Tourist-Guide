import React from "react";
import "./Quetions.css";
import firebase from "../firebase";
import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
let c1 = 10,
  c2 = 10,
  c3 = 10,
  c4 = 10,
  c5 = 1;
export default function Quetions() {
  let location = useLocation();
  const nav = useNavigate();
  const range1 = useRef();
  const range2 = useRef();
  const range3 = useRef();
  const range4 = useRef();
  const [f, setF] = useState(true);

  function store() {
    console.log(c1, c2, c3, c4, c5, location.state.userId);
    let d = 1;
    firebase
      .database()
      .ref(`user/${location.state.userId}`)
      .on("value", (sc) => {
        const i = sc.val();
        for (let id in i) {
          if (d == 1) {
            d = 2;
            firebase
              .database()
              .ref(`user/${location.state.userId}/${id}/preferences`)
              .push({
                1: Number(c1),
                2: Number(c2),
                0: Number(c3),
                7: Number(c4),
                hotel: Number(c5),
              });
          }
        }
      });
    nav({ pathname: "/" });
  }
  function fun() {
    c1 = range1.current.value;
    setF(!f);
  }
  function fun2() {
    c2 = range2.current.value;
    setF(!f);
  }
  function fun3() {
    c3 = range3.current.value;
    setF(!f);
  }
  function fun4() {
    c4 = range4.current.value;
    setF(!f);
  }
  function funradio1() {
    c5 = 0;
  }
  function funradio2() {
    c5 = 1;
  }
  return (
    <div className="mainx">
      <div className="mainxCard">
        <div className="emptyx"></div>
        <div className="titleCardx2">
          <div className="titleCardx">
            <div className="titlex">
              <h1>Please answer some of quetions</h1>
            </div>
          </div>
        </div>
        <div className="titleCardx2">
          <div className="titleCardx3">
            <div className="titlex2">
              <h3>Which will help us to make your journey great!</h3>
            </div>
          </div>
        </div>
        <div className="qp">
          <div className="qpmain">
            <p>
              Please select the preference of places you want to visit
              <br />
              (higher the number, higher the priority)
            </p>
            <br />
          </div>
          <form className="formx">
            <div className="inx">
              <table border="0" cellPadding={10}>
                <tr>
                  <td style={{ color: "black" }}>
                    <label>Historical places </label>
                  </td>
                  <td style={{ color: "black" }}>
                    <input
                      type="range"
                      step="1"
                      ref={range1}
                      min="0"
                      max="10"
                      onChange={fun}
                    ></input>
                  </td>
                  <td style={{ color: "black" }}>{c1}</td>
                </tr>
                <tr>
                  <td style={{ color: "black" }}>
                    <label>Natural places </label>
                  </td>
                  <td style={{ color: "black" }}>
                    <input
                      type="range"
                      step="1"
                      ref={range2}
                      min="0"
                      max="10"
                      onChange={fun2}
                    ></input>
                  </td>
                  <td style={{ color: "black" }}>{c2}</td>
                </tr>
                <tr>
                  <td style={{ color: "black" }}>
                    <label>Devotional places </label>
                  </td>
                  <td style={{ color: "black" }}>
                    <input
                      type="range"
                      step="1"
                      ref={range3}
                      min="0"
                      max="10"
                      onChange={fun3}
                    ></input>
                  </td>
                  <td style={{ color: "black" }}>{c3}</td>
                </tr>
                <tr>
                  <td style={{ color: "black" }}>
                    <label>Museums</label>
                  </td>
                  <td style={{ color: "black" }}>
                    <input
                      type="range"
                      step="1"
                      ref={range4}
                      min="0"
                      max="10"
                      onChange={fun4}
                    ></input>
                  </td>
                  <td style={{ color: "black" }}>{c4}</td>
                </tr>
              </table>
            </div>
          </form>
          <form className="formy">
            <div className="inx">
              <table border="0" cellPadding={10}>
                <tr>
                  <td style={{ color: "black" }}>
                    <label>Historical places </label>
                  </td>
                </tr>
                <tr>
                  <td style={{ color: "black" }}>
                    <input
                      type="range"
                      step="1"
                      ref={range1}
                      min="0"
                      max="10"
                      onChange={fun}
                    ></input>
                  </td>
                  <td style={{ color: "black" }}>{c1}</td>
                </tr>
                <tr>
                  <td style={{ color: "black" }}>
                    <label>Natural places </label>
                  </td>
                </tr>
                <tr>
                  <td style={{ color: "black" }}>
                    <input
                      type="range"
                      step="1"
                      ref={range2}
                      min="0"
                      max="10"
                      onChange={fun2}
                    ></input>
                  </td>
                  <td style={{ color: "black" }}>{c2}</td>
                </tr>
                <tr>
                  <td style={{ color: "black" }}>
                    <label>Devotional places </label>
                  </td>
                </tr>
                <tr>
                  <td style={{ color: "black" }}>
                    <input
                      type="range"
                      step="1"
                      ref={range3}
                      min="0"
                      max="10"
                      onChange={fun3}
                    ></input>
                  </td>
                  <td style={{ color: "black" }}>{c3}</td>
                </tr>
                <tr>
                  <td style={{ color: "black" }}>
                    <label>Museums</label>
                  </td>
                </tr>
                <tr>
                  <td style={{ color: "black" }}>
                    <input
                      type="range"
                      step="1"
                      ref={range4}
                      min="0"
                      max="10"
                      onChange={fun4}
                    ></input>
                  </td>
                  <td style={{ color: "black" }}>{c4}</td>
                </tr>
              </table>
            </div>
          </form>
          <div className="emptyMain">
            <div className="empty2"></div>
          </div>
          <div className="qpmain">
            <p>Please select type of hotel you prefer</p>
            <br />
          </div>
          <form
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
            className="foremx"
          >
            <div className="inx">
              <table border="0" cellPadding={5}>
                <tr>
                  <td style={{ color: "black" }}>
                    <input
                      onClick={funradio1}
                      type="radio"
                      name="hotel"
                      value="0"
                    />
                  </td>
                  <td style={{ color: "black" }}>Veg</td>
                </tr>
                <tr>
                  <td style={{ color: "black" }}>
                    <input
                      onClick={funradio2}
                      type="radio"
                      name="hotel"
                      value="1"
                      checked
                    />
                  </td>
                  <td style={{ color: "black" }}>Non-Veg</td>
                </tr>
              </table>
            </div>
          </form>
          <div className="btnxMain">
            <div className="btnxsub">
              <div className="btnx" onClick={store}>
                <h3>Submit</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
