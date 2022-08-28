import React from "react";
import { useNavigate } from "react-router-dom";

function GoodFast() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Good - Fast</h1>;
      <p className="solution">
        Good & Fast = Expensive. High quality software will be produced very
        quickly to meet a customer's time constraint. However, this approach
        will require additional staff, extended work hourse, additional testing,
        etc. - all things that will drive up the cost of the project.
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
          <h3>Fast</h3>
        </div>
        <div className="shape onetwo">
          <span></span>
          <span></span>
          <h3></h3>
          <p>HIGH PRICE</p>
        </div>
      </article>
      <button className="back" onClick={handleBack}>
        GO BACK
      </button>
    </div>
  );
}

export default GoodFast;
