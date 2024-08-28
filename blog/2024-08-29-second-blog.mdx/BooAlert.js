// BooAlert.js
import React from "react";

const BooAlert = () => {
  const handleBoo = () => {
    alert("Boo Martin Luther!");
  };

  return (
    <div
      style={{
        border: "1px solid red",
        padding: "10px",
        backgroundColor: "#f8d7da",
        color: "#721c24",
      }}
    >
      <button onClick={handleBoo}>Boo</button>
    </div>
  );
};

export default BooAlert;
