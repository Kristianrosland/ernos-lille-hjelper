import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import scrambleGenerator from 'rubiks-cube-scramble';
import { DataContext } from '../FirebaseProvider';
import LoginLink from '../LoginLink';
import css from './cube-timer.less';
import { now } from './format-time-utils';
import Scramble from './Scramble';
import SessionStats from './SessionStats';
import Timer from './Timer';

const newScramble = (): string => (scrambleGenerator() as string).trim();

const CubeTimer = () => {
    const params = useParams<{ scramble: string }>();
    const [timerRunning, setTimerRunning] = useState(false);
    const { sessionSolves, stored, addNewSolve } = useContext(DataContext);

    const history = useHistory();

    const setNewScramble = () => {
        history.push('/' + newScramble().replace(/ /g, '-'));
    };

    useEffect(() => {
        if (params.scramble === undefined) {
            setNewScramble();
        }
    }, []);

    return (
        <div className={css.cubeTimerContainer}>
            <LoginLink />
            {!timerRunning && <Scramble newScramble={params.scramble ? params.scramble.replace(/-/g, ' ') : ''} />}

            <Timer
                timerRunning={timerRunning}
                onToggleTimerRunning={setTimerRunning}
                onNewScramble={() => setNewScramble()}
                solves={sessionSolves}
                addSolve={solveTime =>
                    addNewSolve({ time: solveTime, timestamp: now(), scramble: params.scramble })
                }
            />

            {!timerRunning && <SessionStats sessionSolves={sessionSolves} bestSolve={stored.best} />}
        </div>
    );
};

export default CubeTimer;
