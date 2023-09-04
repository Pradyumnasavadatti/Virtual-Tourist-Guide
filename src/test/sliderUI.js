import React, { useContext } from "react";
import Slider from "react-slick";
import LeftArrow from "../assets/leftArrow.svg";
import RightArrow from "../assets/rightArrow.svg";
import Card from "./Card.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./_home.scss";
import Ps from "../PS.jpeg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function MainCard({ title, data, flag = true }) {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => {
    if (flag) return <img src={LeftArrow} alt="prevArrow" {...props} />;
  };

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => {
    if (flag) return <img src={RightArrow} alt="nextArrow" {...props} />;
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };
  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };
  const settings3 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };
  const cardContext = React.createContext();

  return (
    <>
      <div className="card__container show1">
        <h1 style={{ marginLeft: "15vw" }}>{title}</h1>
        {flag ? (
          <Slider {...settings} className="card__container--inner">
            {data.map((item, index) => {
              return (
                <Card name={item.name} pic={item.pic} i={index} obj={item} />
              );
            })}
          </Slider>
        ) : (
          <h3
            style={{
              fontSize: "2vmax",
              color: "#3498db",
              fontWeight: "100",
              opacity: "0.7",
            }}
          >
            Visit Bagalkot, We help you to explore{" "}
            <span style={{ textTransform: "lowercase" }}>{title}</span>
          </h3>
        )}
      </div>
      <div className="card__container show2">
        <h1 style={{ marginLeft: "15vw" }}>{title}</h1>
        {flag ? (
          <Slider {...settings2} className="card__container--inner">
            {data.map((item, index) => {
              return (
                <Card name={item.name} pic={item.pic} i={index} obj={item} />
              );
            })}
          </Slider>
        ) : (
          <h3
            style={{
              fontSize: "2vmax",
              color: "#3498db",
              fontWeight: "100",
              opacity: "0.7",
            }}
          >
            Visit Bagalkot, We help you to explore{" "}
            <span style={{ textTransform: "lowercase" }}>{title}</span>
          </h3>
        )}
      </div>
      <div className="card__container show3">
        <h1 style={{ marginLeft: "15vw" }}>{title}</h1>
        {flag ? (
          <Slider {...settings3} className="card__container--inner">
            {data.map((item, index) => {
              <Card name={item.name} pic={item.pic} i={index} obj={item} />;
            })}
          </Slider>
        ) : (
          <h3
            style={{
              fontSize: "2vmax",
              color: "#3498db",
              fontWeight: "100",
              opacity: "0.7",
            }}
          >
            Visit Bagalkot, We help you to explore{" "}
            <span style={{ textTransform: "lowercase" }}>{title}</span>
          </h3>
        )}
      </div>
    </>
  );
}
