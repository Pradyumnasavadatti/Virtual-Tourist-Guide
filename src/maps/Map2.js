import { React, useState } from "react";
import "./Comp2.css";
import { useGeolocated } from "react-geolocated";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

// import {
//   GoogleMap,
//   useJsApiLoader,
//   Marker,
//   DirectionsRenderer,
// } from "@react-google-maps/api";
let i = 0;
export default function Map2({ center, zoom }) {
  let j = 0;
  let s = ``;
  let timer;
  const [flag, setFlag] = useState(true);
  if (center.length === 0) {
    timer = setTimeout(() => {
      setFlag(!flag);
    }, 500);
  } else {
    clearTimeout(timer);
  }
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: true,
      },
      userDecisionTimeout: 5000,
    });

  return (
    coords && (
      <MapContainer
        id="map2"
        center={[coords.latitude, coords.longitude]}
        zoom={zoom}
        scrollWheelZoom={true}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {center.map((item, index) => {
          if (coords) {
            s = `https://www.google.com/maps/dir/${coords.latitude},${coords.longitude}/${i},${item}`;
          } else {
            s = `https://www.google.com/maps/dir/0,0/${i},${item}`;
          }
          if (index % 2 === 0) {
            i = item;
          } else {
            return (
              <Marker position={[i, item]}>
                <Popup>
                  <a href={s}>Direction</a>
                </Popup>
              </Marker>
            );
          }
        })}
      </MapContainer>
    )
  );

  // const { isLoaded } = useJsApiLoader({
  //   googleMapsApiKey: "AIzaSyDvWI_oKXVJxDXQnzboeU9DNXLmQF5GpDE",
  // });
  // let j = 0;
  // let timer;
  // const [flag, setFlag] = useState(false);
  // if (center.length === 0) {
  //   timer = setTimeout(() => {
  //     setFlag(!flag);
  //   }, 500);
  // } else {
  //   clearTimeout(timer);
  // }
  // return isLoaded ? (
  //   <GoogleMap
  //     id="map2"
  //     center={{ lat: 16.17240589952714, lng: 75.65712950060761 }}
  //     zoom={zoom}
  //   >
  // {center.map((item, index) => {
  //   if (index % 2 === 0) {
  //     i = item;
  //   } else {
  //     console.log("in");
  //     return <Marker position={{ lat: i, lng: item }}></Marker>;
  //   }
  // })}
  // </GoogleMap>
  // ) : (
  //   <></>
  // );
}
