import React, { useEffect, useMemo } from "react";
import Index1 from "./components/Index1";
import { Routes, Route, useNavigate } from "react-router-dom";
import User from "./test/CondFlow";
import Near from "./test/Near";
import About from "./test/About";
import GuideC from "./test/GuideCom";
import Place from "./test/placeDetailsPages/PlaceDet";
import Edu from "./test/placeDetailsPages/Edu";
import PlaceDetails from "./test/placeDetailsPages/ImageDisplay";
import Album from "./test/placeDetailsPages/Album";
import Bus from "./nearBy/Bus.js";
import Takies from "./nearBy/Takies.js";
import Airport from "./nearBy/Airport.js";
import Medi from "./nearBy/Medi.js";
import Hospital from "./nearBy/Hospital.js";
import Police from "./nearBy/Police.js";
import Rail from "./nearBy/Rail.js";
import Post from "./nearBy/Post.js";
import Que from "./preferences/Quetions.js";
import { useAuth, AuthProvider } from "./contexts/AuthContext";
export default function MidLayer() {
  const cu = useAuth();
  const history = useNavigate();
  const Use = useMemo(() => {
    return <User />;
  });
  useEffect(() => {
    if (cu.currentUser === null) {
      history({ pathname: "/" });
    }
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Index1 />} />
      <Route path="/About" element={<About />} />
      <Route path="/guideCheates" element={<GuideC />} />
      <Route path="/nearInfo" element={<Near />} />
      <Route path="/qp" element={<Que />} />
      <Route path="/user" element={Use} />
      <Route path="/user/Places" element={<Place />} />
      <Route path="/user/Place/Details" element={<PlaceDetails />} />
      <Route path="/user/Place/Images" element={<Album />} />
      <Route path="/Bus" element={<Bus />} />
      <Route path="/Takies" element={<Takies />} />
      <Route path="/Airport" element={<Airport />} />
      <Route path="/Medi" element={<Medi />} />
      <Route path="/Hospital" element={<Hospital />} />
      <Route path="/Police" element={<Police />} />
      <Route path="/Post" element={<Post />} />
      <Route path="/Rail" element={<Rail />} />
      <Route path="/user/Edu" element={<Edu />} />
    </Routes>
  );
}
