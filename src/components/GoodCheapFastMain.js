import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function GoodCheapFastMain() {
  const [good, setGood] = useState(false);
  const [fast, setFast] = useState(false);
  const [cheap, setCheap] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (good && cheap === true) {
      setGood(true);
      setCheap(true);
      setFast(false);
      navigate("/good-cheap");
    } else if (good && fast === true) {
      setGood(true);
      setCheap(false);
      setFast(true);
      navigate("/good-fast");
    } else if (fast && cheap === true) {
      setGood(false);
      setCheap(true);
      setFast(true);
      navigate("/fast-cheap");
    }
    Validation();
    return;
  };

  const Validation = () => {
    if (fast && cheap && good === true) {
      setGood(true);
      setFast(true);
      setCheap(true);
      navigate("/validation");
    }
  };

  return (
    <div className="main">
      <h1>Pick two options!</h1>
      <div className="circles">
        <div className="good" onClick={() => setGood(true)}>
          <button className="text">Good</button>
          {good && <span className="checkmark">&#10003;</span>}
        </div>
        <div className="cheap" onClick={() => setCheap(true)}>
          <button className="text">Cheap</button>
          {cheap && <span className="checkmark">&#10003;</span>}
        </div>
        <div className="fast" onClick={() => setFast(true)}>
          <button className="text">Fast</button>
          {fast && <span className="checkmark">&#10003;</span>}{" "}
        </div>
      </div>
      <div className="generateButton">
        <button
          className="submitButton"
          disabled={(!good && !cheap) || (!good && !fast) || (!fast && !cheap)}
          onClick={handleSubmit}
          type="submit"
        >
          GENERATE DIAGRAM
        </button>
      </div>
    </div>
  );
}

export default GoodCheapFastMain;
