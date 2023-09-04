import React from "react";
import "./nearBy.scss";
import Map from "../maps/Map2";
import firebase from "../firebase";
export default function Takies() {
  const array = [];

  function dataFetch() {
    console.log("Yes in");
    firebase
      .database()
      .ref("talkies/bagalkot")
      .on("value", (snapshot) => {
        const i = snapshot.val();
        for (let id in i) {
          firebase
            .database()
            .ref(`talkies/bagalkot/${id}`)
            .on("value", (snapshot) => {
              const i2 = snapshot.val();
              for (let id2 in i2) {
                array.push(i2[id2]);
              }
            });
        }
      });
    console.log(array);
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
