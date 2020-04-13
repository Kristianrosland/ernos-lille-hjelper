import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import scrambleGenerator from 'rubiks-cube-scramble';
import css from './timer.less';

let interval;

const leadingZero = input => ('0' + input).slice(-2);

const formatTimer = time => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor(time / 1000) % 60;
    const milliseconds = Math.floor((time % 1000) / 10);

    return `${minutes > 0 ? minutes + ':' : ''}${minutes > 0 ? leadingZero(seconds) : seconds}.${leadingZero(
        milliseconds,
    )}`;
};

const Timer = () => {
    const [startTime, setStartTime] = useState();
    const [timer, setTimer] = useState(0);
    const [timerRunning, setTimerRunning] = useState(false);
    const [scramble, setScramble] = useState(scrambleGenerator());
    const [previousScramble, setPreviousScramble] = useState();
    const [holding, setHolding] = useState(false);
    const [solves, setSolves] = useState([]);

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
        if (timer !== 0) {
            setSolves(prev => [timer, ...prev]);
        }

        if (!timerRunning) {
            setStartTime(new Date());
            setPreviousScramble(scramble);
            setScramble(scrambleGenerator());
        }

        setTimerRunning(!timerRunning);
    };

    const buttonClassNames = classNames(css.startButton, { [css.holding]: holding });
    const previousSolves = solves.slice(1);
    return (
        <div className={css.container}>
            {timerRunning ? (
                <span className={classNames(css.timer, css.largeTimer, css.time)}>{formatTimer(timer)}</span>
            ) : (
                <>
                    <div className={css.scrambleContainer}>
                        <div className={css.scramble}>{scramble}</div>
                        {scramble && <div className={css.previousScramble}>{previousScramble}</div>}
                    </div>

                    <div className={css.timerContainer}>
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
