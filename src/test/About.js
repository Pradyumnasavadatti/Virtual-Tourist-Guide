import React from "react";
import "./All.css";
export default function About() {
  return (
    <div className="About">
      <div className="AboutHead">
        <h1 className="Abouttxt">About</h1>
      </div>
      <div className="AboutContent1">
        <div className="AboutContent">
          <p>
            This tourist guide can show the map of the desired location,
            calculate the distance between two locations and show basic
            information of tourist spots using smartphones or laptops. It is
            freely available anytime, whenever a tourist needs it. This virtual
            tourist guide project is a web application that uses Google Maps
            API, and the internet. It also provides customized recommendations.
            The system takes the latitude and longitude of the location and
            shows the location on the map. It also calculates the distance from
            the user's current location to the desired location. The web
            application will help to provide modern technology for the tourism
            industry and help to boost tourism.
          </p>
        </div>
      </div>
    </div>
  );
}
