import React from "react";
import { useNavigate } from "react-router-dom";

function FastCheap() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Fast - Cheap</h1>;
      <p className="solution">
        Fast & Cheap = Poor Quality. The project will be done quickly and on a
        show string budget, and you will get waht you pay for. Don't expect all
        of the requirements to be met and expect some bugs and unpredicteblae
        behavior because the development team din't have time or resources to
        throughly design or test the software.
      </p>
      <article className="Venn">
        <div className="circle one">
          <span></span>
          <span></span>
          <h3>Fast</h3>
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
          <p>LOW QUALITY</p>
        </div>
      </article>
      <button className="back" onClick={handleBack}>
        GO BACK
      </button>
    </div>
  );
}

export default FastCheap;
