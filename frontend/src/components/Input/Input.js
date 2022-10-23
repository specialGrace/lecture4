import React from "react";

const Input = ({ inputProperties }) => {
  return (
    <input
      {...inputProperties}
      style={{ padding: "10px 15px", margin: "10px" }}
    />
  );
};

export default Input;
