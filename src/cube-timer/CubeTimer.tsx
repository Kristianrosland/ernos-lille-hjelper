import React, { useContext, useState } from 'react';
import scrambleGenerator from 'rubiks-cube-scramble';
import { DataContext } from '../FirebaseProvider';
import css from './cube-timer.less';
import { now } from './format-time-utils';
import Scramble from './Scramble';
import SessionStats from './SessionStats';
import Timer from './Timer';

const newScramle = (): string => scrambleGenerator() as string;

const CubeTimer = () => {
    const [timerRunning, setTimerRunning] = useState(false);
    const [scramble, setScramble] = useState<string>(newScramle());
    const { sessionSolves, stored, addNewSolve } = useContext(DataContext);

    return (
        <div className={css.cubeTimerContainer}>
            {!timerRunning && <Scramble newScramble={scramble} />}

            <Timer
                timerRunning={timerRunning}
                onToggleTimerRunning={setTimerRunning}
                onNewScramble={() => setScramble(newScramle)}
                solves={sessionSolves}
                addSolve={solveTime => addNewSolve({ time: solveTime, timestamp: now(), scramble })}
            />
            {!timerRunning && <SessionStats sessionSolves={sessionSolves} bestSolve={stored.best} />}
        </div>
    );
};

export default CubeTimer;
