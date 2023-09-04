import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useSpeechSynthesis } from "react-speech-kit";
import "./Btn.scss";
import { useGeolocated } from "react-geolocated";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
let fl = true;
export default function Btn({
  history2,
  current,
  dataSet,
  pos,
  hotel,
  dataEdu,
  RP,
  RH,
}) {
  const history = useNavigate();
  const { speak, cancel, voices } = useSpeechSynthesis();
  const [data, setData] = useState("");
  const [understand, setUnderstand] = useState(false);
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: true,
      },
      userDecisionTimeout: 5000,
    });
  const voice = voices[8];
  const commands = [
    {
      command: [
        "*",
        "hello *",
        "nearby *",
        "goto *",
        "select *",
        "select image number *",
        "show *",
        "give me *",
        "tell me *",
        "guide go on *",
        "guide get *",
      ],
      callback: (redirectPage) => setData(redirectPage),
    },
  ];
  const { transcript } = useSpeechRecognition({ commands });
  const [permit, setPermit] = useState(false);
  const [guide, setGuide] = useState(fl);
  function givePermission() {
    if (permit === false) {
      if (guide) {
        cancel();
      }
      SpeechRecognition.startListening();
      setUnderstand(false);
    } else {
      if (guide) {
        cancel();
      }
      SpeechRecognition.stopListening();
    }
    setPermit(!permit);
  }
  function Cssdo() {
    document.getElementById("speechBtn").style.animation =
      "anisay2 1s linear forwards";
  }
  function Cssdo2() {
    document.getElementById("speechBtn").style.animation =
      "anisay 1s linear forwards";
  }
  let temp;
  if (data !== "") {
    if (data == "airport" || data == "airports") {
      if (guide) {
        speak({
          text: "These are the near by Airports",
        });
      }
      history({ pathname: "/Airport" });
    } else if (data == "services" || data == "service") {
      if (guide) {
        speak({
          text: "These are the near by Services",
        });
      }
      history({ pathname: "/nearInfo" });
    } else if (data == "medical store" || data == "medical stores") {
      if (guide) {
        speak({
          text: "These are the near by Medical stores",
        });
      }
      history({ pathname: "/Medi" });
    } else if (data == "bus stand" || data == "bus stop") {
      if (guide) {
        speak({
          text: "These are the near by Bus stops",
        });
      }
      history({ pathname: "/Bus" });
    } else if (data == "talkies" || data == "cinema hall" || data == "takies") {
      if (guide) {
        speak({
          text: "These are the near by Cinema halls",
        });
      }
      history({ pathname: "/Takies" });
    } else if (data == "hospital" || data == "hospitals") {
      if (guide) {
        speak({
          text: "These are the near by Hospitals",
        });
      }
      history({ pathname: "/Hospital" });
    } else if (data == "police station" || data == "police stations") {
      if (guide) {
        speak({
          text: "These are the near by police station",
        });
      }
      history({ pathname: "/Police" });
    } else if (data == "guide" || data == "guide") {
      if (guide) {
        speak({
          text: "Hay, tell me how can I help you.",
        });
      }
      setPermit(false);
    } else if (current == "particulars") {
      if (data == "one" || data == "1") {
        temp = dataSet[0];
        if (guide) {
          speak({
            text: "Here is the image number one",
          });
        }
        history({ pathname: "/user/Place/Details" }, { state: temp });
      } else if (data == "two" || data == "2") {
        temp = dataSet[1];
        if (guide) {
          speak({
            text: "Here is the image number one",
          });
        }
        history({ pathname: "/user/Place/Details" }, { state: temp });
      } else if (data == "three" || data == "3") {
        temp = dataSet[2];
        if (guide) {
          speak({
            text: "Here is the image number one",
          });
        }
        history({ pathname: "/user/Place/Details" }, { state: temp });
      } else if (data == "images") {
        temp = dataSet;
        if (guide) {
          speak({
            text: "Here are the some of images of the place.",
          });
        }
        history({ pathname: "/user/Place/Images" }, { state: temp });
      } else if (data == "direction" || data == "directions") {
        if (guide) {
          speak({
            text: "Here is the direction to the place",
          });
        }
        window.location.replace(
          `https://www.google.com/maps/dir/${coords.latitude},${coords.longitude}/${pos.lat},${pos.lng}`
        );
      } else if (data == "details" || data == "Details") {
        if (guide) {
          speak({
            text:
              "Okay i will . To stop me click on say button again. " + history2,
          });
        }
      } else if (
        data == "mute" ||
        data == "go on mute" ||
        data == "guide mute" ||
        data == "go on mute" ||
        data == "how to mute guide" ||
        data == "how to mute you" ||
        data == "how to mute"
      ) {
        if (guide) {
          speak({
            text: "Ok. i will go on sleep. Awake me by saying. GUIDE-GET-UNMUTE.",
          });
        }
        fl = false;
        setGuide(false);
      } else if (
        data == "unmute" ||
        data == "guide unmute" ||
        data == "guide get unmuted" ||
        data == "guide get unmute" ||
        data == "guide please get unmute" ||
        data == "how to unmute guide" ||
        data == "how to unmute you" ||
        data == "how to unmute"
      ) {
        speak({
          text: "Hello. I'm back on duty.",
        });
        fl = true;
        setGuide(true);
      } else {
        if (guide) {
          speak({
            text: "Sory. It is not my cup of tea.",
          });
        }
        setUnderstand(true);
      }
    } else if (current == "userDet") {
      if (
        data == "place number one" ||
        data == "place one" ||
        data == "place number 1" ||
        data == "place 1"
      ) {
        temp = dataSet[0];
        if (guide) {
          speak({
            text: "Here is the place number one. If you want I can tell you history of the place.",
          });
        }
        history({ pathname: "/user/Places" }, { state: temp });
      } else if (
        data == "place number two" ||
        data == "place two" ||
        data == "place number 2" ||
        data == "place 2"
      ) {
        temp = dataSet[1];
        if (guide) {
          speak({
            text: "Here is the place number two. If you want I can tell you history of the place.",
          });
        }
        history({ pathname: "/user/Places" }, { state: temp });
      } else if (
        data == "place number three" ||
        data == "place three" ||
        data == "place number 3" ||
        data == "place 3"
      ) {
        temp = dataSet[2];
        if (guide) {
          speak({
            text: "Here is the place number three. If you want I can tell you history of the place.",
          });
        }
        history({ pathname: "/user/Places" }, { state: temp });
      } else if (
        data == "place number four" ||
        data == "place four" ||
        data == "place number 4" ||
        data == "place 4"
      ) {
        temp = dataSet[3];
        if (guide) {
          speak({
            text: "Here is the place number four. If you want I can tell you history of the place.",
          });
        }
        history({ pathname: "/user/Places" }, { state: temp });
      } else if (
        data == "place number five" ||
        data == "place five" ||
        data == "place number 5" ||
        data == "place 5"
      ) {
        temp = dataSet[4];
        if (guide) {
          speak({
            text: "Here is the place number five. If you want I can tell you history of the place.",
          });
        }
        history({ pathname: "/user/Places" }, { state: temp });
      } else if (
        data == "place number six" ||
        data == "place six" ||
        data == "place number 6" ||
        data == "place 6"
      ) {
        temp = dataSet[5];
        if (guide) {
          speak({
            text: "Here is the place number six. If you want I can tell you history of the place.",
          });
        }
        history({ pathname: "/user/Places" }, { state: temp });
      } else if (
        data == "recommended place number one" ||
        data == "recommended  place one" ||
        data == "recommended place number 1" ||
        data == "recommended  place 1"
      ) {
        temp = RP[0];
        if (guide) {
          speak({
            text: "Here is the place number one. If you want I can tell you history of the place.",
          });
        }
        history({ pathname: "/user/Places" }, { state: temp });
      } else if (
        data == "recommended place number two" ||
        data == "recommended place two" ||
        data == "recommended place number 2" ||
        data == "recommended place 2"
      ) {
        temp = RP[1];
        if (guide) {
          speak({
            text: "Here is the place number two. If you want I can tell you history of the place.",
          });
        }
        history({ pathname: "/user/Places" }, { state: temp });
      } else if (
        data == "recommended place number three" ||
        data == "recommended place three" ||
        data == "recommended place number 3" ||
        data == "recommended place 3"
      ) {
        temp = RP[2];
        if (guide) {
          speak({
            text: "Here is the place number three. If you want I can tell you history of the place.",
          });
        }
        history({ pathname: "/user/Places" }, { state: temp });
      } else if (
        data == "recommended place number four" ||
        data == "recommended place four" ||
        data == "recommended place number 4" ||
        data == "recommended place 4"
      ) {
        temp = RP[3];
        if (guide) {
          speak({
            text: "Here is the place number four. If you want I can tell you history of the place.",
          });
        }
        history({ pathname: "/user/Places" }, { state: temp });
      } else if (
        data == "recommended place number five" ||
        data == "recommended place five" ||
        data == "recommended place number 5" ||
        data == "recommended place 5"
      ) {
        temp = RP[4];
        if (guide) {
          speak({
            text: "Here is the place number five. If you want I can tell you history of the place.",
          });
        }
        history({ pathname: "/user/Places" }, { state: temp });
      } else if (
        data == "recommended place number six" ||
        data == "recommended place six" ||
        data == "recommended place number 6" ||
        data == "recommended place 6"
      ) {
        temp = RP[5];
        if (guide) {
          speak({
            text: "Here is the place number six. If you want I can tell you history of the place.",
          });
        }
        history({ pathname: "/user/Places" }, { state: temp });
      } else if (
        data == "Hotel number one" ||
        data == "Hotel one" ||
        data == "Hotel number 1" ||
        data == "Hotel 1"
      ) {
        temp = hotel[0];
        if (guide) {
          speak({
            text: "Here is the hotel number one.",
          });
        }
        history({ pathname: "/user/Places" }, { state: temp });
      } else if (
        data == "Hotel number two" ||
        data == "Hotel two" ||
        data == "Hotel number 2" ||
        data == "Hotel 2"
      ) {
        temp = hotel[1];
        if (guide) {
          speak({
            text: "Here is the hotel number two.",
          });
        }
        history({ pathname: "/user/Places" }, { state: temp });
      } else if (
        data == "Hotel number three" ||
        data == "Hotel three" ||
        data == "Hotel number 3" ||
        data == "Hotel 3"
      ) {
        temp = hotel[2];
        if (guide) {
          speak({
            text: "Here is the hotel number three.",
          });
        }
        history({ pathname: "/user/Places" }, { state: temp });
      } else if (
        data == "Hotel number four" ||
        data == "Hotel four" ||
        data == "Hotel number 4" ||
        data == "Hotel 4"
      ) {
        temp = hotel[3];
        if (guide) {
          speak({
            text: "Here is the hotel number four.",
          });
        }
        history({ pathname: "/user/Places" }, { state: temp });
      } else if (
        data == "recommended Hotel number one" ||
        data == "recommended Hotel one" ||
        data == "recommended Hotel number 1" ||
        data == "recommended Hotel 1"
      ) {
        temp = RH[0];
        if (guide) {
          speak({
            text: "Here is the hotel number one.",
          });
        }
        history({ pathname: "/user/Places" }, { state: temp });
      } else if (
        data == "recommended Hotel number two" ||
        data == "recommended Hotel two" ||
        data == "recommended Hotel number 2" ||
        data == "recommended Hotel 2"
      ) {
        temp = RH[1];
        if (guide) {
          speak({
            text: "Here is the hotel number two.",
          });
        }
        history({ pathname: "/user/Places" }, { state: temp });
      } else if (
        data == "recommended Hotel number three" ||
        data == "recommended Hotel three" ||
        data == "recommended Hotel number 3" ||
        data == "recommended Hotel 3"
      ) {
        temp = RH[2];
        if (guide) {
          speak({
            text: "Here is the hotel number three.",
          });
        }
        history({ pathname: "/user/Places" }, { state: temp });
      } else if (
        data == "recommended Hotel number four" ||
        data == "recommended Hotel four" ||
        data == "recommended Hotel number 4" ||
        data == "recommended Hotel 4"
      ) {
        temp = RH[3];
        if (guide) {
          speak({
            text: "Here is the hotel number one.",
          });
        }
        history({ pathname: "/user/Places" }, { state: temp });
      } else if (data == "direction" || data == "directions") {
        if (guide) {
          speak({
            text: "Here is the direction to the place",
          });
        }
        window.location.replace(
          `https://www.google.com/maps/dir/${coords.latitude},${coords.longitude}/${pos.lat},${pos.lng}`
        );
      } else if (data == "overview") {
        if (guide) {
          speak({
            text: "Thanks for calling me. To stop me,click on say button again. In this website you will get the information about places, accomodation details. You will got to see near by places numbered. You can directly click on them else click on say button and try to say like SELECT-PLACE-NUMBER-ONE. If you want to find near by places. try to say like NEAR-BY-CINEMA-HALL. To get direction of any selected place. say like SHOW-DIRECTION. If you want me to read history of place. say TELL-ME-HISTORY. To Call me . say HELLO-GUIDE. I will be always there to make your journey great. ",
          });
        }
      } else if (
        data == "mute" ||
        data == "go on mute" ||
        data == "guide mute" ||
        data == "go on mute" ||
        data == "how to mute guide" ||
        data == "how to mute you" ||
        data == "how to mute"
      ) {
        if (guide) {
          speak({
            text: "Ok. i will go on sleep. Awake me by saying. GUIDE-GET-UNMUTE.",
          });
        }
        fl = false;
        setGuide(false);
      } else if (
        data == "unmute" ||
        data == "guide unmute" ||
        data == "guide get unmuted" ||
        data == "guide get unmute" ||
        data == "guide please get unmute" ||
        data == "how to unmute guide" ||
        data == "how to unmute you" ||
        data == "how to unmute" ||
        data == "Unmute" ||
        data == "guide get Unmuted" ||
        data == "guide Unmute" ||
        data == "guide get Unmute" ||
        data == "guide please get Unmute" ||
        data == "how to Unmute guide" ||
        data == "how to Unmute you" ||
        data == "how to Unmute"
      ) {
        speak({
          text: "Hello. I'm back on duty.",
        });
        setGuide(true);
      } else {
        if (guide) {
          speak({
            text: "Sory. It is not my cup of tea.",
          });
        }
        fl = true;
        setUnderstand(true);
      }
    } else if (current == "BEC") {
      if (data == "one" || data == "1") {
        temp = dataSet[0];
        if (guide) {
          speak({
            text: "Here is the image number one",
          });
        }
        history({ pathname: "/user/Place/Details" }, { state: temp });
      } else if (data == "two" || data == "2") {
        temp = dataSet[1];
        if (guide) {
          speak({
            text: "Here is the image number two",
          });
        }
        history({ pathname: "/user/Place/Details" }, { state: temp });
      } else if (data == "three" || data == "3") {
        temp = dataSet[2];
        if (guide) {
          speak({
            text: "Here is the image number three",
          });
        }
        history({ pathname: "/user/Place/Details" }, { state: temp });
      } else if (data == "images") {
        temp = dataSet;
        if (guide) {
          speak({
            text: "Here are the some of images of the place.",
          });
        }
        history({ pathname: "/user/Place/Images" }, { state: temp });
      } else if (data == "direction" || data == "directions") {
        if (guide) {
          speak({
            text: "Here is the direction to the place",
          });
        }
        window.location.replace(
          `https://www.google.com/maps/dir/${coords.latitude},${coords.longitude}/${pos.lat},${pos.lng}`
        );
      } else if (data == "history" || data == "History") {
        if (guide) {
          speak({
            text:
              "Okay i will . To stop me click on say button again. " + history2,
          });
        }
      } else if (
        data == "direction to ML department" ||
        data == "direction to Ai department" ||
        data == "direction to aiml department" ||
        data == "direction to Ai ml department" ||
        data == "ML department"
      ) {
        if (guide) {
          speak({
            text: "Here is the direction to the AI-ML department",
          });
        }
        window.location.replace(
          `https://www.google.com/maps/dir/${coords.latitude},${coords.longitude}/${dataEdu[0].id.lat},${dataEdu[0].id.long}`
        );
      } else if (
        data == "mute" ||
        data == "go on mute" ||
        data == "guide mute" ||
        data == "go on mute" ||
        data == "how to mute guide" ||
        data == "how to mute you" ||
        data == "how to mute"
      ) {
        if (guide) {
          speak({
            text: "Ok. i will go on sleep. Awake me by saying. GUIDE-GET-UNMUTE.",
          });
        }
        fl = false;
        setGuide(false);
      } else if (
        data == "unmute" ||
        data == "guide unmute" ||
        data == "guide get unmuted" ||
        data == "guide get unmute" ||
        data == "guide please get unmute" ||
        data == "how to unmute guide" ||
        data == "how to unmute you" ||
        data == "how to unmute"
      ) {
        speak({
          text: "Hello. I'm back on duty.",
        });
        fl = true;
        setGuide(true);
      } else {
        if (guide) {
          speak({
            text: "Sory. It is not my cup of tea.",
          });
        }
        setUnderstand(true);
      }
    } else if (current == "album") {
      if (data == "one" || data == "1") {
        temp = dataSet[0];
        if (guide) {
          speak({
            text: "Here is the image number one",
          });
        }
        history({ pathname: "/user/Place/Details" }, { state: temp });
      } else if (data == "two" || data == "2") {
        temp = dataSet[1];
        if (guide) {
          speak({
            text: "Here is the image number two",
          });
        }
        history({ pathname: "/user/Place/Details" }, { state: temp });
      } else if (data == "three" || data == "3") {
        temp = dataSet[2];
        if (guide) {
          speak({
            text: "Here is the image number three",
          });
        }
        history({ pathname: "/user/Place/Details" }, { state: temp });
      } else if (data == "four" || data == "4") {
        temp = dataSet[3];
        if (guide) {
          speak({
            text: "Here is the image number four",
          });
        }
        history({ pathname: "/user/Place/Details" }, { state: temp });
      } else if (data == "five" || data == "5") {
        temp = dataSet[4];
        if (guide) {
          speak({
            text: "Here is the image number five",
          });
        }
        history({ pathname: "/user/Place/Details" }, { state: temp });
      } else if (data == "six" || data == "6") {
        temp = dataSet[5];
        if (guide) {
          speak({
            text: "Here is the image number six",
          });
        }
        history({ pathname: "/user/Place/Details" }, { state: temp });
      } else if (data == "seven" || data == "7") {
        temp = dataSet[6];
        if (guide) {
          speak({
            text: "Here is the image number seven",
          });
        }
        history({ pathname: "/user/Place/Details" }, { state: temp });
      } else if (data == "eight" || data == "8") {
        temp = dataSet[7];
        if (guide) {
          speak({
            text: "Here is the image number eight",
          });
        }
        history({ pathname: "/user/Place/Details" }, { state: temp });
      } else if (data == "nine" || data == "9") {
        temp = dataSet[8];
        if (guide) {
          speak({
            text: "Here is the image number nine",
          });
        }
        history({ pathname: "/user/Place/Details" }, { state: temp });
      } else if (data == "ten" || data == "10") {
        temp = dataSet[9];
        if (guide) {
          speak({
            text: "Here is the image number ten",
          });
        }
        history({ pathname: "/user/Place/Details" }, { state: temp });
      } else if (data == "eleven" || data == "11") {
        temp = dataSet[10];
        if (guide) {
          speak({
            text: "Here is the image number eleven",
          });
        }
        history({ pathname: "/user/Place/Details" }, { state: temp });
      } else {
        if (guide) {
          speak({
            text: "Sory. It is not my cup of tea.",
          });
        }
        setUnderstand(true);
      }
    } else if (
      data == "mute" ||
      data == "go on mute" ||
      data == "guide mute" ||
      data == "go on mute" ||
      data == "how to mute guide" ||
      data == "how to mute you" ||
      data == "how to mute"
    ) {
      if (guide) {
        speak({
          text: "Ok. i will go on sleep. Awake me by saying. GUIDE-GET-UNMUTE.",
        });
      }
      fl = false;
      setGuide(false);
    } else if (
      data == "unmute" ||
      data == "guide unmute" ||
      data == "guide get unmuted" ||
      data == "guide get unmute" ||
      data == "guide please get unmute" ||
      data == "how to unmute guide" ||
      data == "how to unmute you" ||
      data == "how to unmute"
    ) {
      speak({
        text: "Hello. I'm back on duty.",
      });
      fl = true;
      setGuide(true);
    } else {
      if (guide) {
        speak({
          text: "Sory. It is not my cup of tea.",
        });
      }
      setUnderstand(true);
    }
    setData("");
  }
  return (
    <>
      {permit && (
        <div className="speechBox">
          <div className="speechBoxMain">
            <div className="sBMain">
              <p style={{ color: "white" }}>{transcript}</p>
            </div>
            <div className="sBMain3">
              <div className="sBMain4">
                <div className="sBMain2">
                  <p>
                    Try to say : near by <i>place</i>
                  </p>
                </div>
              </div>

              {understand && (
                <div className="sBMain5">
                  <p>Sorry, not getting!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <div
        className="speechBtn"
        id="speechBtn"
        onMouseLeave={Cssdo}
        onMouseEnter={Cssdo2}
        onClick={givePermission}
      >
        <h2>Say</h2>
      </div>
    </>
  );
}
