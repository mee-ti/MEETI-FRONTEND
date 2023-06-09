import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUpType from "../pages/auth/SignupTypePage";

export default function LoginRoute() {
  return (
    <Routes>
      <Route path="/" element={<SignUpType />} />
    </Routes>
  );
}
