import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Proposals from "./pages/Proposals";
import Settings from "./pages/Settings";
import ForgetPassword from "./pages/ForgetPassword";
import ProposalPage from './pages/ProposalPage'
import CreateQuetions from "./pages/CreateQuetions";
import ProposalQuestions from "./pages/ProposalQuestions";

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
        <Route path="/createproposal/:proposalName" element={<ProposalPage />} />
        <Route path="/createproposal/:proposalName/:templateId" element={<ProposalQuestions />} />       
        <Route path="/createquestions" element={<CreateQuetions />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
