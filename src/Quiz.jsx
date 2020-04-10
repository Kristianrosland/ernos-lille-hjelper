import React, { useState } from "react";
import { reverse, randomCase } from "./utils";
import KeyboardEventHandler from "react-keyboard-event-handler";

const Quiz = ({ setSearchMode }) => {
  const [currentAlg, setCurrentAlg] = useState(randomCase());
  const [showSolution, setShowSolution] = useState(false);

  const setNewAlg = () => {
    const random = randomCase();

    if (random.alg === currentAlg.alg) {
      setNewAlg();
    } else {
      setCurrentAlg(random);
    }
  };

  return (
    <>
      <KeyboardEventHandler
        handleKeys={["space", "s"]}
        onKeyEvent={(key) => {
          if (key === "space") {
            if (showSolution) {
              setNewAlg();
              setShowSolution(false);
            } else {
              setShowSolution(true);
            }
          } else if (key === "s") {
            setSearchMode();
          }
        }}
      />
      {currentAlg && (
        <>
          <div className="scramble"> {reverse(currentAlg.alg)} </div>
          {showSolution && (
            <img src={currentAlg.src} className={"image"} alt="Solution" />
          )}
        </>
      )}
    </>
  );
};

export default Quiz;
