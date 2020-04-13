import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import css from './cube-timer.less';

let interval: NodeJS.Timeout | undefined;

const leadingZero = (input: number) => ('0' + input).slice(-2);

const now = (): number => new Date().getTime();

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
}

const Timer: React.FC<TimerProps> = ({ timerRunning, onToggleTimerRunning, onNewScramble }) => {
    const [startTime, setStartTime] = useState<number | undefined>();
    const [timer, setTimer] = useState<number>(0);

    const [holding, setHolding] = useState(false);
    const [solves, setSolves] = useState<number[]>([]);

    useEffect(() => {
        if (timerRunning) {
            interval = setInterval(() => {
                setTimer(now() - (startTime ?? 0));
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

    const toggleTimer = () => {
        if (timer !== 0) {
            setSolves(prev => [timer, ...prev]);
        }

        if (!timerRunning) {
            setStartTime(now());
            onNewScramble();
        }

        onToggleTimerRunning(!timerRunning);
    };

    const buttonClassNames = classNames(css.startButton, { [css.holding]: holding });
    const previousSolves = solves.slice(1);

    return (
        <div className={css.timerContainer}>
            {timerRunning ? (
                <span className={classNames(css.timer, css.largeTimer, css.time)}>{formatTimer(timer)}</span>
            ) : (
                <>
                    <div className={buttonClassNames} onClick={toggleTimer}>
                        <i className={classNames('fas fa-hand-paper', css.leftHand)} />
                    </div>
                    <div className={css.solves}>
                        <span className={classNames(css.timer, css.time)}>{formatTimer(timer)}</span>

                        <div className={classNames(css.previousSolves, css.time)}>
                            {previousSolves.map((previousSolve, index) => (
                                <span key={index}>{formatTimer(previousSolve)}</span>
                            ))}
                        </div>
                    </div>
                    <div className={buttonClassNames} onClick={toggleTimer}>
                        <i className="fas fa-hand-paper" />
                    </div>
                </>
            )}
            <KeyboardEventHandler
                handleKeys={['space']}
                onKeyEvent={() => {
                    setHolding(true);
                    setTimer(0);
                }}
            />
            <KeyboardEventHandler
                handleKeys={['space']}
                handleEventType={'keyup'}
                onKeyEvent={() => {
                    setHolding(false);
                    toggleTimer();
                }}
            />
        </div>
    );
};

export default Timer;
