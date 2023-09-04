import React from "react";
import "./style.scss";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Img from "../login.svg";
import SpeechBtn from "../voice/Btn.js";
import Auth from "../contexts/AuthContext";
import { useAuth } from "../contexts/AuthContext";
import firebase from "../firebase";
let flag = 0;
export default function Index() {
  const arr = [];
  const emailRef = useRef();
  const passwordRef = useRef();
  const emailRef2 = useRef();
  const emailRef3 = useRef();
  const emailRef4 = useRef();
  const emailRef5 = useRef();
  const emailRef6 = useRef();
  const passwordRef2 = useRef();
  const passwordRef21 = useRef();
  const passwordRef3 = useRef();
  const passwordConfirmRef = useRef();
  const passwordConfirmRef2 = useRef();
  const { login } = useAuth();
  const { signup } = useAuth();
  const { logout } = useAuth();
  const [error, setError] = useState("");
  const [error2, setError2] = useState("Password must be 6 characters");
  const [loading, setLoading] = useState(false);
  const { resetPassword } = useAuth();
  const [message, setMessage] = useState("Forgot Password");
  const history = useNavigate();
  const cu = useAuth();
  let b = 0,
    timer;
  useEffect(() => {
    calc();
    let unmounted = false;
    if (cu.currentUser !== null) {
      logout();
    }
    return () => {
      unmounted = true;
    };
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);

      firebase
        .database()
        .ref("user")
        .on("value", (sc) => {
          const i = sc.val();
          for (let id in i) {
            firebase
              .database()
              .ref(`user/${id}`)
              .on("value", (sc2) => {
                const j = sc2.val();
                for (let id2 in j) {
                  firebase
                    .database()
                    .ref(`user/${id}/${id2}`)
                    .on("value", (sc3) => {
                      const k = sc3.val();
                      if (k["email"] == emailRef.current.value) {
                        firebase
                          .database()
                          .ref(`user/${id}/${id2}/preferences`)
                          .on("value", (sc4) => {
                            const x = sc4.val();
                            for (let o in x) {
                              firebase
                                .database()
                                .ref(`user/${id}/${id2}/preferences/${o}`)
                                .on("value", (sc5) => {
                                  const y = sc5.val();
                                  history({ pathname: "/user" }, { state: y });
                                });
                            }
                          });
                      }
                    });
                }
              });
          }
        });
      setError("Loading...");
    } catch {
      setError("Invalid Creadentials");
    }

    setLoading(false);
  }
  async function handleSubmit11(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef4.current.value, passwordRef21.current.value);
      // console.log(emailRef4.current.value);
      firebase
        .database()
        .ref("user")
        .on("value", (sc) => {
          const i = sc.val();
          for (let id in i) {
            firebase
              .database()
              .ref(`user/${id}`)
              .on("value", (sc2) => {
                const j = sc2.val();
                for (let id2 in j) {
                  firebase
                    .database()
                    .ref(`user/${id}/${id2}`)
                    .on("value", (sc3) => {
                      const k = sc3.val();
                      // console.log(k["email"], emailRef4.current.value);
                      if (k["email"] == emailRef4.current.value) {
                        firebase
                          .database()
                          .ref(`user/${id}/${id2}/preferences`)
                          .on("value", (sc4) => {
                            const x = sc4.val();
                            for (let o in x) {
                              firebase
                                .database()
                                .ref(`user/${id}/${id2}/preferences/${o}`)
                                .on("value", (sc5) => {
                                  const y = sc5.val();
                                  history({ pathname: "/user" }, { state: y });
                                });
                            }
                          });
                      }
                    });
                }
              });
          }
        });
      setError("Loading...");
    } catch {
      setError("Invalid Creadentials");
    }

    setLoading(false);
  }

  async function handleSubmit2(e) {
    e.preventDefault();
    if (passwordRef2.current.value !== passwordConfirmRef.current.value) {
      return setError2("Passwords do not match");
    }
    let d = 1;

    try {
      setError2("");
      setLoading(true);
      await signup(emailRef2.current.value, passwordRef2.current.value);
      firebase
        .database()
        .ref("userCounter/count")
        .on("value", (snapshot) => {
          const ii2 = snapshot.val();

          if (d == 1) {
            d = 2;
            firebase.database().ref(`user/${ii2}`).push({
              email: emailRef2.current.value,
            });
            firebase
              .database()
              .ref("userCounter")
              .update({ count: ii2 + 1 });
            history({ pathname: "/qp" }, { state: { userId: ii2 } });
            setError2("Login to Continue");
          }
        });
    } catch {
      setError2("Failed to create an account");
    }

    setLoading(false);
  }
  async function handleSubmit21(e) {
    e.preventDefault();

    if (passwordRef3.current.value !== passwordConfirmRef2.current.value) {
      return setError2("Passwords do not match");
    }
    let dp = 1;

    try {
      setError2("");
      setLoading(true);

      await signup(emailRef5.current.value, passwordRef3.current.value);
      // console.log("1");
      firebase
        .database()
        .ref("userCounter/count")
        .on("value", (snapshot) => {
          const ii2 = snapshot.val();
          // console.log(dp);
          if (dp == 1) {
            // console.log("3");
            dp = 2;
            firebase.database().ref(`user/${ii2}`).push({
              email: emailRef5.current.value,
            });
            firebase
              .database()
              .ref("userCounter")
              .update({ count: ii2 + 1 });
            history({ pathname: "/qp" }, { state: { userId: ii2 } });
            setError2("Login to Continue");
          }
        });
      //history.push("/");
    } catch {
      setError2("Failed to create an account");
    }

    setLoading(false);
  }
  function out() {
    var m3 = document.getElementById("main3").style;
    m3.display = "none";
  }
  function out2() {
    var m3 = document.getElementById("main13").style;
    m3.display = "none";
  }
  async function handleSubmit3(e) {
    e.preventDefault();

    try {
      setMessage("");
      setLoading(true);
      await resetPassword(emailRef3.current.value);
      setError("Check your inbox for further instructions");
      out();
    } catch {}

    setLoading(false);
  }
  async function handleSubmit31(e) {
    e.preventDefault();

    try {
      setMessage("");
      setLoading(true);
      await resetPassword(emailRef6.current.value);
      setError("Check your inbox for further instructions");
      out2();
    } catch {}

    setLoading(false);
  }
  function userClick() {
    if (flag == 0) {
      flag = 1;
      var d = document.getElementById("dir").style;
      d.animation = "anim1 2s ease-out forwards";
      var m1 = document.getElementById("main1").style;
      var m2 = document.getElementById("main2").style;
      setTimeout(function () {
        m1.zIndex = -1;
        m2.zIndex = 0;
      }, 800);
    } else {
      flag = 0;
      var d = document.getElementById("dir").style;
      d.animation = "anim2 2s ease-out forwards";
      var m1 = document.getElementById("main1").style;
      var m2 = document.getElementById("main2").style;
      setTimeout(function () {
        m1.zIndex = 0;
        m2.zIndex = -1;
      }, 800);
    }
  }

  function txtclick() {
    var m3 = document.getElementById("main3").style;
    m3.display = "flex";
  }
  function txtclick2() {
    var m3 = document.getElementById("main13").style;
    m3.display = "flex";
  }
  function goTop() {
    var card = document.getElementById("backswap").style;
    card.animation = "goTop 2s ease-out forwards";
    var m1 = document.getElementById("main11").style;
    var m2 = document.getElementById("main12").style;

    setTimeout(function () {
      m1.zIndex = -1;
      m2.zIndex = 0;
    }, 800);
  }
  function goDown() {
    var card = document.getElementById("backswap").style;
    card.animation = "goDown 2s ease-out forwards";
    var m1 = document.getElementById("main11").style;
    var m2 = document.getElementById("main12").style;
    setTimeout(function () {
      m1.zIndex = 0;
      m2.zIndex = -1;
    }, 800);
  }
  function calc() {
    var mob = document.getElementById("mobmain").style;
    mob.setProperty("--height", window.innerHeight + "px");
  }
  return (
    <>
      <div className="window">
        <div className="main">
          <div className="main1" id="main1">
            <div className="headdiv">
              <h1>Login</h1>
            </div>
            <img src={Img}></img>
            <div id="errordiv">
              <p>{error}</p>
            </div>
            <div className="formdiv">
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Email"
                  ref={emailRef}
                  className="in1"
                  required
                ></input>
                <br />
                <input
                  type="password"
                  placeholder="Password"
                  ref={passwordRef}
                  className="in1"
                ></input>
                <br />
                <div className="btndiv">
                  <input
                    type="submit"
                    value="Login"
                    className="btn1"
                    required
                  ></input>
                </div>
                <br />
                <div id="fptxtdiv">
                  <p id="fptxt" onClick={txtclick}>
                    Forgot Password?
                  </p>
                </div>
              </form>
            </div>
          </div>
          <div className="main2" id="main2">
            <div className="headdiv">
              <h1>Sign up</h1>
            </div>
            <img src={Img}></img>
            <div id="errordiv">
              <p>{error2}</p>
            </div>
            <div className="formdiv">
              <form onSubmit={handleSubmit2}>
                <input
                  type="email"
                  placeholder="Email"
                  ref={emailRef2}
                  className="in1"
                  required
                ></input>
                <br />
                <input
                  type="password"
                  placeholder="Password"
                  ref={passwordRef2}
                  className="in1"
                  required
                ></input>
                <br />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="in1"
                  ref={passwordConfirmRef}
                  required
                ></input>
                <br />
                <div className="btndiv">
                  <input type="submit" value="Sign up" className="btn1"></input>
                </div>
              </form>
            </div>
          </div>
          <div id="main3">
            <div id="fp1">
              <div id="fphead">
                <h1>Forgot Password</h1>
              </div>
              <div id="fpcontent">
                <form onSubmit={handleSubmit3} id="fpform1">
                  <input
                    type="email"
                    placeholder="Email"
                    ref={emailRef3}
                    className="in1 email2"
                    required
                  ></input>
                  <br />
                  <div className="btndiv" id="btndiv2">
                    <input
                      type="submit"
                      value="Enter"
                      className="btn1 btn2"
                      style={{ width: "35%" }}
                    ></input>
                    <input
                      type="submit"
                      value="Back"
                      className="btn1 btn2"
                      onClick={out}
                      style={{
                        backgroundColor: "rgba(0,0,255,0.5)",
                        width: "35%",
                      }}
                    ></input>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="directive" id="dir">
          <div className="directive1" onClick={userClick}>
            <h2 style={{ marginLeft: "3vw" }}>Sign up</h2>
          </div>
          <div className="directive2" onClick={userClick}>
            <h2 style={{ marginRight: "4vw" }}>Login</h2>
          </div>
        </div>
      </div>
      <div className="mobmain" id="mobmain" onLoad={calc}>
        <div className="mobile">
          <div id="backswap">
            <div className="mobhead" onClick={goDown}>
              <h1 className="mobh1">Click to Login</h1>
            </div>
            <div id="midlayer"></div>
            <div className="mobhead" onClick={goTop}>
              <h1 className="mobh1">Click to Signup</h1>
            </div>
          </div>

          <div id="maincard">
            <div
              className="main"
              style={{
                width: "100%",
                height: "100%",
                boxShadow: "0 0 0 0 black",
              }}
            >
              <div className="main11" id="main11">
                <div className="main111">
                  <div className="headdiv">
                    <h1 className="mobh12">Login</h1>
                  </div>
                  <div id="errordiv2">
                    <p className="mobnorm">{error}</p>
                  </div>
                  <div className="formdiv">
                    <form
                      onSubmit={handleSubmit11}
                      style={{
                        width: "85%",
                        height: "80%",
                      }}
                    >
                      <input
                        type="email"
                        placeholder="Email"
                        ref={emailRef4}
                        className="in1 mobnorm"
                        style={{ height: "20%" }}
                        required
                      ></input>
                      <br />
                      <input
                        type="password"
                        placeholder="Password"
                        ref={passwordRef21}
                        style={{ height: "20%" }}
                        className="in1 mobnorm"
                      ></input>
                      <br />
                      <div className="btndiv" style={{ height: "25%" }}>
                        <input
                          type="submit"
                          value="Login"
                          className="btn1 mobnorm"
                          style={{ fontWeight: "bolder" }}
                          required
                        ></input>
                      </div>
                      <br />
                      <div id="fptxtdiv">
                        <p
                          id="fptxt"
                          onClick={txtclick2}
                          className="mobnorm"
                          style={{ fontWeight: "bolder" }}
                        >
                          Forgot Password?
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="main12" id="main12">
                <div className="headdiv">
                  <h1 className="mobh12">Sign up</h1>
                </div>
                <div id="errordiv2">
                  <p className="mobnorm">{error2}</p>
                </div>
                <div className="formdiv">
                  <form onSubmit={handleSubmit21} style={{ width: "80%" }}>
                    <input
                      type="email"
                      placeholder="Email"
                      ref={emailRef5}
                      className="in1 mobnorm"
                      required
                    ></input>
                    <br />
                    <input
                      type="password"
                      placeholder="Password"
                      ref={passwordRef3}
                      className="in1 mobnorm"
                      required
                    ></input>
                    <br />
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      className="in1 mobnorm"
                      ref={passwordConfirmRef2}
                      required
                    ></input>
                    <br />
                    <div className="btndiv" style={{ height: "25%" }}>
                      <input
                        type="submit"
                        value="Sign up"
                        style={{ fontWeight: "bolder" }}
                        className="btn1 mobnorm"
                      ></input>
                    </div>
                  </form>
                </div>
              </div>
              <div id="main13" style={{ backdropFilter: "blur(1vmax)" }}>
                <div
                  id="fp1"
                  style={{
                    width: "80%",
                    boxShadow: "0 0 0 0 red",
                    border: "0 solid red",
                  }}
                >
                  <div id="fphead">
                    <h1 className="mobh12">Forgot Password</h1>
                  </div>
                  <div id="fpcontent">
                    <form onSubmit={handleSubmit31} id="fpform2">
                      <input
                        type="email"
                        placeholder="Email"
                        ref={emailRef6}
                        className="in1 email21 mobnorm"
                        style={{ height: "20%" }}
                      ></input>
                      <br />
                      <div className="btndiv21" id="btndiv2">
                        <input
                          type="submit"
                          style={{ width: "40%" }}
                          value="Enter"
                          className="btn1 btn2 mobnorm"
                        ></input>
                        <br />
                        <input
                          type="submit"
                          value="Back"
                          className="btn1 btn2 mobnorm"
                          onClick={out2}
                          style={{
                            backgroundColor: "rgba(0,0,255,0.5)",
                            width: "40%",
                          }}
                        ></input>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
