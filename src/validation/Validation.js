import React from "react";
import { useNavigate } from "react-router-dom";

function Validation() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="modal">
        <div className="modal-content">
          <button onClick={handleClose} className="close">
            &times;
          </button>
          <h1>You can NOT select all three options!</h1>
        </div>
      </div>
    </div>
  );
}

export default Validation;
