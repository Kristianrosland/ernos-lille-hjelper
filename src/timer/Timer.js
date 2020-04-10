import classNames from "classnames";
import React, { useEffect, useState } from "react";
import KeyboardEventHandler from "react-keyboard-event-handler";
import css from "./timer.less";

let interval;

const leadingZero = input => ("0" + input).slice(-2);

const formatTimer = time => {
  const seconds = Math.floor(time / 1000);
  const milliseconds = Math.floor((time % 1000) / 10);

  return `${seconds}.${leadingZero(milliseconds)}`;
};

const Timer = () => {
  const [startTime, setStartTime] = useState();
  const [timer, setTimer] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    if (timerRunning) {
      interval = setInterval(() => {
        setTimer(new Date() - startTime);
      }, 10);
    } else {
      clearInterval(interval);
    }

    if (interval) {
      return () => clearInterval(interval);
    }
  }, [timerRunning, startTime]);

  const toggleTimer = () => {
    if (!timerRunning) {
      setStartTime(new Date());
    }
    setTimerRunning(!timerRunning);
  };

  return (
    <div className={css.container}>
      <div className={css.timerContainer}>
        <div className={css.startButton} onClick={toggleTimer}>
          <i className={classNames("fas fa-hand-paper", css.leftHand)} />
        </div>
        <span className={css.timer}>{formatTimer(timer)}</span>
        <div className={css.startButton} onClick={toggleTimer}>
          <i className="fas fa-hand-paper" />
        </div>
      </div>

      <KeyboardEventHandler
        handleKeys={["space"]}
        onKeyEvent={() => {
          if (!timerRunning) {
            setTimer(0);
          }
        }}
      />
      <KeyboardEventHandler
        handleKeys={["space"]}
        handleEventType={"keyup"}
        onKeyEvent={toggleTimer}
      />
    </div>
  );
};

export default Timer;
