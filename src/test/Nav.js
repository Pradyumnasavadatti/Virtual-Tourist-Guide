import React, { useRef, useEffect } from "react";
import Up from "./up.png";
import "./Nav.css";
import { useNavigate } from "react-router";
export default function Nav({ data }) {
  const bar = useRef();
  const arrow = useRef();
  const arrowDiv = useRef();
  let i = 0;
  const animate = () => {
    if (i == 0) {
      i = 1;
      bar.current.style.top = `${
        window.innerHeight - bar.current.getBoundingClientRect().height
      }px`;
      arrow.current.style.transform = "rotate(180deg)";
    } else {
      i = 0;
      bar.current.style.top = `${
        window.innerHeight - arrowDiv.current.getBoundingClientRect().height
      }px`;
      arrow.current.style.transform = "rotate(0deg)";
    }
  };
  useEffect(() => {
    bar.current.style.top = `${
      window.innerHeight - arrowDiv.current.getBoundingClientRect().height
    }px`;
  }, []);

  let nav = useNavigate();
  return (
    <>
      <div className="mainNav">
        <div
          className="option"
          onClick={() => {
            nav({ pathname: "/About" });
          }}
        >
          About
        </div>
        <div
          className="option"
          onClick={() => {
            nav({ pathname: "/nearInfo" }, { state: data });
          }}
        >
          Near by services
        </div>
        <div
          className="option"
          onClick={() => {
            nav({ pathname: "/guideCheates" });
          }}
        >
          Guide commands
        </div>
        <div
          className="option"
          onClick={() => {
            nav({ pathname: "/" });
          }}
        >
          Logout
        </div>
      </div>
      <div className="mobNav" ref={bar}>
        <div className="headMobNav" ref={arrowDiv} onClick={animate}>
          <img src={Up} ref={arrow} className="mobNavImg" />
        </div>
        <div className="bodyMobNav">
          <div className="mainNav2">
            <div
              className="option"
              onClick={() => {
                nav({ pathname: "/About" });
              }}
            >
              About
            </div>
            <div
              className="option"
              onClick={() => {
                nav({ pathname: "/nearInfo" }, { state: data });
              }}
            >
              Near by services
            </div>
            <div
              className="option"
              onClick={() => {
                nav({ pathname: "/guideCheates" });
              }}
            >
              Guide commands
            </div>
            <div
              className="option"
              onClick={() => {
                nav({ pathname: "/" });
              }}
            >
              Logout
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
