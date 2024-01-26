import React from "react";
import Dashboard from "../Proposers/Dashboard";
import useAuthToken from "../../../hooks/useAuth";

function Proposer() {
  const { getItem } = useAuthToken();
  const { token, getUserDetail } = getItem();
  return <Dashboard getUserDetail={getUserDetail} />;
}

export default Proposer;
