import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const onHomeButtonClick = () => {
    navigate("/feed");
  };

  return (
    <section className="red-background">
      <div className="not-found">
        <h2>Sorry this page don't exist</h2>
        <button className="btn custom-btn" onClick={onHomeButtonClick}>Go to home</button>
      </div>
    </section>

  );
};

export default NotFound;
