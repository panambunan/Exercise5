import React from "react";

const Button = ({ text, onSubmit }) => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-info form-control"
        onClick={onSubmit}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;