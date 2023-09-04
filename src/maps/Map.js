import { React, useState } from "react";
import "./Comp2.css";
import { useGeolocated } from "react-geolocated";
// import {
//   GoogleMap,
//   useJsApiLoader,
//   Marker,
//   DirectionsRenderer,
// } from "@react-google-maps/api";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
export default function Map({ center, destination, zoom }) {
  let s;
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: true,
      },
      userDecisionTimeout: 5000,
    });
  if (coords) {
    s = `https://www.google.com/maps/dir/${coords.latitude},${coords.longitude}/${center.lat},${center.lng}`;
  } else {
    s = `https://www.google.com/maps/dir/16.172,75.657/${center.lat},${center.lng}`;
  }
  return (
    <MapContainer id="map" center={center} zoom={zoom} scrollWheelZoom={true}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={center}>
        <Popup>
          <a href={s}>Direction</a>
        </Popup>
      </Marker>
    </MapContainer>
  );

  //Google Map API setup
  // const { isLoaded } = useJsApiLoader({
  //   googleMapsApiKey: "AIzaSyDvWI_oKXVJxDXQnzboeU9DNXLmQF5GpDE",
  // });
  // const [dir, setDir] = useState();
  // async function routes() {
  //   const directionService = new window.google.maps.DirectionsService();
  //   const result = await directionService.route({
  //     origin: center,
  //     destination: destination,
  //     travelMode: window.google.maps.TravelMode.DRIVING,
  //   });
  //   setDir(result);
  // }
  // return isLoaded ? (
  //   <GoogleMap id="map" onLoad={routes} center={center} zoom={zoom}>
  //     <Marker position={center} onClick={routes}></Marker>
  //     {dir && <DirectionsRenderer />}
  //   </GoogleMap>
  // ) : (
  //   <></>
  // );
}
