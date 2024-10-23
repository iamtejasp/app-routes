"use client";
//always add use client
import React from "react";

const error = ({ error, reset }) => {
  return (
    <div>
      <div>{error.message}</div>
      <button onClick={reset}>Reload</button>
    </div>
  );
};

export default error;
