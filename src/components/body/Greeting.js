import React from "react";

function Greeting() {
  let name = "William";
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = " afternoon";
  } else {
    timeOfDay = "night";
  }

  return <h1>Good{`${timeOfDay}, ${name}`}!</h1>;
}

export default Greeting;