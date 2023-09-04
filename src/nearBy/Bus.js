import React from "react";
import "./nearBy.scss";
import Map from "../maps/Map2";
import firebase from "../firebase";
export default function Bus() {
  const array = [];
  function dataFetch() {
    firebase
      .database()
      .ref("bus stops")
      .on("value", (snapshot) => {
        const i = snapshot.val();
        for (let id in i) {
          firebase
            .database()
            .ref(`bus stops/${id}`)
            .on("value", (snapshot) => {
              const i2 = snapshot.val();
              for (let id3 in i2) {
                firebase
                  .database()
                  .ref(`bus stops/${id}/${id3}`)
                  .on("value", (snapshot) => {
                    const i3 = snapshot.val();
                    for (let id2 in i3) {
                      array.push(i3[id2]);
                    }
                  });
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
