import React, { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModel(
  { targetTime, timeRemaning, handleReset },
  ref
) {
  const dialog = useRef();

  const userWinOrLose = timeRemaning <= 0;

  const userTime = (timeRemaning / 1000).toFixed(2);

  const score = Math.round((1 - timeRemaning / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialog} className="result-modal">
      {userWinOrLose ? (
        <h2>You Lost</h2>
      ) : (
        <h2>You Won And your score: {score}</h2>
      )}
      <p>
        The target time was <strong>{targetTime} seconds</strong>
      </p>
      <p>
        You stopped the timer with <strong>{userTime} second left</strong>
      </p>
      <form method="dialog" onSubmit={handleReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
