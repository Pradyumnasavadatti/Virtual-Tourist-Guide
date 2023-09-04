import React, { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import User from "./Userdet.js";
export default function CondFlow(props) {
  const cu = useAuth();
  let flag = true;
  const history = useNavigate();
  if (cu.currentUser === null) {
    flag = false;
  }
  useEffect(() => {
    if (!flag) {
      history({ pathname: "/" });
    }
  });
  return <User />;
}
