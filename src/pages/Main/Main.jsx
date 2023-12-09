import React from "react";
import { useNavigate } from "react-router-dom";

export const Main = () => {
  const navigate = useNavigate();

  const navigateToRituals = () => {
    navigate("/rituals");
  };
  return (
    <>
      <h2>Main Page</h2>
      <button onClick={navigateToRituals}>Click to goto Rituals Page</button>
    </>
  );
};
