import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import ApprovalPage from '../pages/approval/ApprovalPage';
import ApprovalReqPage from '../pages/approval/ApprovalReqPage';

export default function ApprovalRoute() {
  return (
    <Routes>
      <Route path="/" element={<ApprovalPage />} />
      <Route path="/request" element={<ApprovalReqPage />} />
    </Routes>
  );
}