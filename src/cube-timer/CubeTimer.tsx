import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
// import { generate } from './ScrambleGenerator';
import scrambleGenerator from 'rubiks-cube-scramble';
import seedrandom from 'seedrandom';
import { DataContext } from '../FirebaseProvider';
import LoginLink from '../LoginLink';
import css from './cube-timer.less';
import { now } from './format-time-utils';
import Scramble from './Scramble';
import SessionStats from './SessionStats';
import Timer from './Timer';

const CubeTimer = () => {
    const params = useParams<{ scramble: string }>();
    const [timerRunning, setTimerRunning] = useState(false);
    const { sessionSolves, stored, addNewSolve, removeStoredSolve } = useContext(DataContext);

    const history = useHistory();

    const setNewScramble = useCallback(async () => {
        seedrandom(params.scramble ?? 'test', { global: true });
        history.push('/' + (scrambleGenerator() as string).trim().replace(/ /g, '-'));
    }, [history, params.scramble]);

    useEffect(() => {
        if (params.scramble === undefined) {
            setNewScramble();
        }
    }, [params.scramble, setNewScramble]);

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
                removeSolve={removeStoredSolve}
            />

            {!timerRunning && <SessionStats sessionSolves={sessionSolves} bestSolve={stored.best} />}
        </div>
    );
};

export default CubeTimer;
