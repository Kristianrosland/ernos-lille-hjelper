import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import { Solve } from '../types/solve-types';
import css from './cube-timer.less';

let interval: NodeJS.Timeout | undefined;

const leadingZero = (input: number) => ('0' + input).slice(-2);

export const now = (): number => new Date().getTime();

const formatTimer = (time: number) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor(time / 1000) % 60;
    const milliseconds = Math.floor((time % 1000) / 10);

    return `${minutes > 0 ? minutes + ':' : ''}${minutes > 0 ? leadingZero(seconds) : seconds}.${leadingZero(
        milliseconds,
    )}`;
};

interface TimerProps {
    timerRunning: boolean;
    onToggleTimerRunning: (running: boolean) => void;
    onNewScramble: () => void;
    solves: Solve[];
    addSolve: (solveTime: number) => void;
}

const Timer: React.FC<TimerProps> = ({ timerRunning, onToggleTimerRunning, onNewScramble, addSolve, solves }) => {
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
    }, [timerRunning]);

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
    const previousSolves = solves.slice(1);

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

    return (
        <div className={css.timerContainer}>
            {timerRunning ? (
                <div
                    className={css.largeTimer}
                    onClick={() => {
                        stopTimer();
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
                        <span
                            className={classNames(css.timer, css.time, { [css.holding]: holding })}
                            onMouseUp={stopHold}
                            onMouseDown={startHold}
                            onTouchStart={startHold}
                            onTouchEnd={stopHold}
                        >
                            {formattedSolveTime}
                        </span>

                        <div className={classNames(css.previousSolves, css.time)}>
                            {previousSolves.map((previousSolve, index) => (
                                <span key={index}>{formatTimer(previousSolve.time)}</span>
                            ))}
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
