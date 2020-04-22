import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import { Solve } from '../types/solve-types';
import css from './cube-timer.less';
import { formatTimer, now } from './format-time-utils';

let interval: NodeJS.Timeout | undefined;
interface TimerProps {
    timerRunning: boolean;
    onToggleTimerRunning: (running: boolean) => void;
    onNewScramble: () => void;
    solves: Solve[];
    addSolve: (solveTime: number) => void;
    removeSolve: (solve: Solve) => void;
}

const Timer: React.FC<TimerProps> = ({
    timerRunning,
    onToggleTimerRunning,
    onNewScramble,
    addSolve,
    removeSolve,
    solves,
}) => {
    const [startTime, setStartTime] = useState<number | undefined>();
    const [formattedSolveTime, setFormattedSolveTime] = useState<string>('0.00');
    const [solveTime, setSolveTime] = useState<number>(0);
    const [holding, setHolding] = useState(false);

    useEffect(() => {
        if (timerRunning) {
            interval = setInterval(() => {
                setSolveTime(now() - (startTime ?? 0));
            }, 10);
        } else {
            if (interval) {
                clearInterval(interval);
            }
        }

        if (interval) {
            return () => clearInterval(interval!);
        }

        return;
    }, [timerRunning, startTime]);

    const startTimer = () => {
        if (timerRunning) {
            return;
        }

        setStartTime(now());
        onToggleTimerRunning(true);
    };

    const stopTimer = () => {
        onToggleTimerRunning(false);

        if (solveTime !== 0) {
            setFormattedSolveTime(formatTimer(solveTime));
            addSolve(solveTime);
        }

        onNewScramble();
    };

    const buttonClassNames = classNames(css.startButton, { [css.holding]: holding });

    const startHold = () => {
        setHolding(true);
        if (!timerRunning) {
            setSolveTime(0);
        }
    };

    const stopHold = () => {
        setHolding(false);
        if (timerRunning) {
            stopTimer();
        } else {
            startTimer();
        }
    };

    const previousSolves = solves.slice(1);
    return (
        <div className={css.timerContainer}>
            {timerRunning ? (
                <div
                    className={css.largeTimer}
                    onClick={() => {
                        if (now() - (startTime ?? 0) > 1000) {
                            stopTimer();
                        }
                    }}
                >
                    <span className={classNames(css.timer, css.time)}>{formatTimer(solveTime)}</span>
                </div>
            ) : (
                <>
                    <div className={buttonClassNames}>
                        <i className={classNames('fas fa-hand-paper', css.leftHand)} />
                    </div>
                    <div className={css.solves}>
                        <div className={css.currentSolveTime}>
                            <span
                                className={classNames(css.timer, css.time, { [css.holding]: holding })}
                                onMouseUp={stopHold}
                                onMouseDown={startHold}
                                onTouchStart={startHold}
                                onTouchEnd={stopHold}
                            >
                                {formattedSolveTime}
                            </span>
                            <button
                                className={classNames(css.removeSolveButton, {
                                    [css.show]: solveTime !== 0 && solves.length > 0,
                                })}
                                onClick={() => {
                                    removeSolve(solves[0]);
                                    setStartTime(0);
                                    setFormattedSolveTime('0.00');
                                }}
                                type="button"
                            >
                                <i className={classNames('fas fa-times', css.removeSolveIcon)} />
                            </button>
                        </div>

                        <div className={css.previousSolvesContainer}>
                            <div className={classNames(css.previousSolves, css.time)}>
                                {previousSolves.map((previousSolve, index) => (
                                    <div key={index}>
                                        <span>{formatTimer(previousSolve.time)}</span>
                                        <button
                                            className={css.removeSolveButton}
                                            onClick={() => removeSolve(previousSolve)}
                                            type="button"
                                        >
                                            <i className={classNames('fas fa-times', css.removeSolveIcon)} />
                                        </button>
                                    </div>
                                ))}
                                <div className={css.fadeOut} />
                            </div>
                        </div>
                    </div>
                    <div className={buttonClassNames}>
                        <i className="fas fa-hand-paper" />
                    </div>
                </>
            )}
            <KeyboardEventHandler handleKeys={['space']} onKeyEvent={startHold} />
            <KeyboardEventHandler handleKeys={['space']} handleEventType={'keyup'} onKeyEvent={stopHold} />
        </div>
    );
};

export default Timer;
