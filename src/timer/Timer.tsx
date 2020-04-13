import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import scrambleGenerator from 'rubiks-cube-scramble';
import css from './timer.less';

let interval: NodeJS.Timeout | undefined;

const leadingZero = (input: number) => ('0' + input).slice(-2);

const formatTimer = (time: number) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor(time / 1000) % 60;
    const milliseconds = Math.floor((time % 1000) / 10);

    return `${minutes > 0 ? minutes + ':' : ''}${minutes > 0 ? leadingZero(seconds) : seconds}.${leadingZero(
        milliseconds,
    )}`;
};

const Timer = () => {
    const [startTime, setStartTime] = useState<number | undefined>();
    const [timer, setTimer] = useState<number>(0);
    const [timerRunning, setTimerRunning] = useState(false);
    const [scramble, setScramble] = useState<string | string[]>(scrambleGenerator());
    const [holding, setHolding] = useState(false);
    const [previousSolves, setPreviousSolves] = useState<number[]>([]);

    useEffect(() => {
        if (timerRunning) {
            interval = setInterval(() => {
                setTimer(new Date().getUTCMilliseconds() - (startTime ?? 0));
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
        if (!timerRunning) {
            setStartTime(new Date().getUTCMilliseconds());
        }
        setTimerRunning(!timerRunning);
    };

    const buttonClassNames = classNames(css.startButton, { [css.holding]: holding });

    return (
        <div className={css.container}>
            {timerRunning ? (
                <span className={classNames(css.timer, css.largeTimer)}>{formatTimer(timer)}</span>
            ) : (
                <>
                    <div className={css.scramble}>{scramble}</div>

                    <div className={css.timerContainer}>
                        <div className={buttonClassNames} onClick={toggleTimer}>
                            <i className={classNames('fas fa-hand-paper', css.leftHand)} />
                        </div>
                        <div className={css.times}>
                            <span className={css.timer}>{formatTimer(timer)}</span>
                            {previousSolves.map((previousTime, idx) => (
                                <span className={css.previousSolve} key={idx}>
                                    {previousTime}
                                </span>
                            ))}
                        </div>
                        <div className={buttonClassNames} onClick={toggleTimer}>
                            <i className="fas fa-hand-paper" />
                        </div>
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
                    setScramble(scrambleGenerator());
                    if (timer !== 0) {
                        setPreviousSolves(prev => [timer, ...prev]);
                    }
                }}
            />
        </div>
    );
};

export default Timer;
