import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Data Scientist",
          "Full stack developer",
          "Chrome extensions developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
      }}
    />
  );
}

export default Type;
