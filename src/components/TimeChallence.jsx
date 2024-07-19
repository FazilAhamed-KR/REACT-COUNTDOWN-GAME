import React, { useRef, useState } from "react";
import ResultModal from "./ResultModel";

const TimeChallenge = ({ title, targetTime }) => {
  const [timeRemaning, setTimeRemaning] = useState(targetTime * 1000);

  const timeIsActive = timeRemaning > 0 && timeRemaning < targetTime * 1000;

  const dialog = useRef();
  const timer = useRef();

  if (timeRemaning <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  const handleReset = () => {
    setTimeRemaning(targetTime * 1000);
  };

  const handleClick = () => {
    timer.current = setInterval(() => {
      setTimeRemaning((prevRemining) => prevRemining - 10);
    }, 10);
  };
  const handleStop = () => {
    dialog.current.open();
    clearInterval(timer.current);
  };
  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        timeRemaning={timeRemaning}
        handleReset={handleReset}
      />

      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timeIsActive ? handleStop : handleClick}>
            {timeIsActive ? "Stop Timing" : "start Timing"}
          </button>
        </p>
        <p>{timeIsActive ? "Time is running....!" : "Time Active"} </p>
      </section>
    </>
  );
};

export default TimeChallenge;
