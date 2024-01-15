import React, { useState } from "react";

export function FavoriteColor() {
  const [color, setColor] = useState("red");
  const [buttonText, setButtonText] = useState("Blue");

  const handleClick = () => {
    if (color === "red") {
      setColor("blue");
      setButtonText("Red");
    } else {
      setColor("red");
      setButtonText("Blue");
    }
  };

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button type="button" onClick={handleClick}>
        {buttonText}
      </button>
    </>
  );
}
