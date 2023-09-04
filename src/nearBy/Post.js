import React from "react";
import "./nearBy.scss";
import Map from "../maps/Map2";
import firebase from "../firebase";
export default function Police() {
  const array = [];

  function dataFetch() {
    firebase
      .database()
      .ref("PostOffices")
      .on("value", (snapshot) => {
        const i = snapshot.val();
        for (let id in i) {
          firebase
            .database()
            .ref(`PostOffices/${id}`)
            .on("value", (snapshot) => {
              const i2 = snapshot.val();
              for (let id2 in i2) {
                array.push(i2[id2]);
              }
            });
        }
      });
  }
  return (
    <>
      {dataFetch()}
      <div className="mapDiv">
        <Map center={array} zoom={14} />
      </div>
    </>
  );
}
