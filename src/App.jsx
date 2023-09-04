import React from "react";
import "./App.scss";
import { AuthProvider } from "./contexts/AuthContext";
import Layer from "./MidLayer";
export default function App() {
  return (
    <>
      <AuthProvider>
        <Layer />
      </AuthProvider>
    </>
  );
}
