import React from "react";

const Input = ({ placeholder, label, ...rest }) => {
  return (
    <div>
      <p className="form-label mt-4">{label}</p>
      <input placeholder={placeholder} {...rest} />
    </div>
  );
};

export default Input;