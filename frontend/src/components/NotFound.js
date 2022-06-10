import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const onHomeButtonClick = () => {
    navigate("/feed");
  };

  return (
    <div>
    <p>Sorry this page don't exist</p>
    <button onClick={onHomeButtonClick}>Go to home</button>
  </div>
  );
};

export default NotFound;
