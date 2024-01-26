import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Proposals from "./pages/Proposals";
import Settings from "./pages/Settings";
import ForgetPassword from "./pages/ForgetPassword";
import CreateSonasProposal from "./pages/CreateSonasProposal";
import CreateSassProposal from "./pages/CreateSassProposal";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/dasboard" element={<Profile/> } /> */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/proposals" element={<Proposals />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/createsassproposal" element={<CreateSassProposal />} />
        <Route path="/createsonasproposal" element={<CreateSonasProposal />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
