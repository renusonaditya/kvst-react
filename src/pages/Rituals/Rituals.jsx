import React from "react";
import { useNavigate } from "react-router-dom";

export const Rituals = () => {
  const navigate = useNavigate();

  const navigateToMain = () => {
    navigate("/main");
  };
  return (
    <>
      <h2>Rituals Page</h2>
      <button onClick={navigateToMain}>Click to goto Main Page</button>
    </>
  );
};
