import React from "react";
import "./nearBy.scss";
import Map from "../maps/Map2";
import firebase from "../firebase";
export default function Airport() {
  const array = [];

  function dataFetch() {
    firebase
      .database()
      .ref("airports")
      .on("value", (snapshot) => {
        const i = snapshot.val();
        for (let id in i) {
          firebase
            .database()
            .ref(`airports/${id}`)
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
        <Map center={array} zoom={6.7} />
      </div>
    </>
  );
}
