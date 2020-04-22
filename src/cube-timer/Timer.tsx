import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import ReactTooltip from 'react-tooltip';
import { Solve } from '../types/solve-types';
import css from './cube-timer.less';
import { formatTimer, now } from './format-time-utils';

let interval: NodeJS.Timeout | undefined;
interface TimerProps {
    timerRunning: boolean;
    onToggleTimerRunning: (running: boolean) => void;
    onNewScramble: () => Promise<void>;
    solves: Solve[];
    addSolve: (solveTime: number) => Promise<void>;
    removeSolve: (solve: Solve) => void;
}

const tooltipText = 'Hold inne space for å starte';
const MINIMUM_HOLD_TIME = 500; // Milliseconds to hold before release
const INITIAL_SOLVE_TIME = '0.00';

const Timer: React.FC<TimerProps> = ({
    timerRunning,
    onToggleTimerRunning,
    onNewScramble,
    addSolve,
    removeSolve,
    solves,
}) => {
    const [startTime, setStartTime] = useState<number | undefined>();
    const [formattedSolveTime, setFormattedSolveTime] = useState<string>(INITIAL_SOLVE_TIME);
    const [solveTime, setSolveTime] = useState<number>(0);
    const [holding, setHolding] = useState(false);
    const [didHoldLongEnough, setDidHoldLongEnough] = useState(false);

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

    useEffect(() => {
        if (didHoldLongEnough) {
            if (!holding) {
                setDidHoldLongEnough(false);
            }
        }
    }, [didHoldLongEnough, holding, setDidHoldLongEnough]);

    const startTimer = () => {
        if (timerRunning) {
            return;
        }

        setStartTime(now());
        onToggleTimerRunning(true);
    };

    const stopTimer = async () => {
        onToggleTimerRunning(false);

        if (solveTime !== 0) {
            setFormattedSolveTime(formatTimer(solveTime));
            addSolve(solveTime);
        }

        onNewScramble();
    };

    const abortSolve = () => {
        onToggleTimerRunning(false);
        setSolveTime(0);
    };

    const holdingClasses = {
        [css.holding]: holding && !didHoldLongEnough,
        [css.readyToStart]: holding && didHoldLongEnough,
    };

    const startHold = () => {
        if (holding) {
            return;
        }

        setDidHoldLongEnough(false);
        setHolding(true);

        setTimeout(() => {
            setDidHoldLongEnough(true);
        }, MINIMUM_HOLD_TIME);

        if (!timerRunning) {
            setSolveTime(0);
        }
    };

    const stopHold = () => {
        setHolding(false);
        if (timerRunning) {
            stopTimer();
        } else {
            if (didHoldLongEnough) {
                startTimer();
                setDidHoldLongEnough(false);
            }
        }
    };

    const previousSolves = formattedSolveTime !== INITIAL_SOLVE_TIME ? solves.slice(1) : solves;
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
                    <div className={css.abortButton} onClick={abortSolve}>
                        Esc
                    </div>
                    <span className={classNames(css.timer, css.time)}>{formatTimer(solveTime)}</span>
                </div>
            ) : (
                <>
                    <div
                        className={classNames(css.startButton, holdingClasses)}
                        data-for="start-timer-tooltip"
                        data-tip={tooltipText}
                    >
                        <i className={classNames('fas fa-hand-paper', css.leftHand)} />
                    </div>
                    <div className={css.solves}>
                        <div className={css.currentSolveTime}>
                            <span
                                className={classNames(css.timer, css.time, holdingClasses)}
                                onMouseUp={stopHold}
                                onMouseDown={startHold}
                                onTouchStart={startHold}
                                onTouchEnd={stopHold}
                            >
                                {formattedSolveTime}
                            </span>
                            <button
                                className={classNames(css.removeSolveButton, {
                                    [css.show]: formattedSolveTime !== INITIAL_SOLVE_TIME && solves.length > 0,
                                })}
                                onClick={() => {
                                    removeSolve(solves[0]);
                                    setStartTime(0);
                                    setFormattedSolveTime(INITIAL_SOLVE_TIME);
                                    setSolveTime(0);
                                }}
                                type="button"
                            >
                                <i className={classNames('fas fa-times', css.removeSolveIcon)} />
                            </button>
                        </div>

                        <div className={css.previousSolvesContainer}>
                            <div className={classNames(css.previousSolves, css.time)}>
                                {previousSolves.map((previousSolve, index) => (
                                    <div key={index} className={css.previousSolve}>
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
                    <div
                        className={classNames(css.startButton, holdingClasses)}
                        data-for="start-timer-tooltip"
                        data-tip={tooltipText}
                    >
                        <i className="fas fa-hand-paper" />
                    </div>
                    <ReactTooltip id="start-timer-tooltip" effect="solid" type="light" />
                </>
            )}
            <KeyboardEventHandler handleKeys={['space']} onKeyEvent={startHold} />
            <KeyboardEventHandler
                handleKeys={['space', 'alphanumeric']}
                handleEventType={'keyup'}
                onKeyEvent={stopHold}
            />
            <KeyboardEventHandler handleKeys={['esc']} handleEventType={'keyup'} onKeyEvent={abortSolve} />
        </div>
    );
};

export default Timer;
