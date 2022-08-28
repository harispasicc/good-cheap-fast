import React from "react";
import { useNavigate } from "react-router-dom";

function GoodCheap() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>Good - Cheap</h1>
      <p className="solution">
        Good & Cheap = Slow. High quality software will be produced; however the
        project tempo will be slow. Other projects will take priority over this
        project and interrupt its schedule frequently.
      </p>
      <article className="Venn">
        <div className="circle one">
          <span></span>
          <span></span>
          <h3>Good</h3>
        </div>
        <div className="circle two">
          <span></span>
          <span></span>
          <h3>Cheap</h3>
        </div>
        <div className="shape onetwo">
          <span></span>
          <span></span>
          <h3></h3>
          <p>LONG DELIVERY TIME</p>
        </div>
      </article>
      <button className="back" onClick={handleBack}>
        GO BACK
      </button>
    </div>
  );
}

export default GoodCheap;
