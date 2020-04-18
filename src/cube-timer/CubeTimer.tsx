import React, { useContext, useState } from 'react';
import scrambleGenerator from 'rubiks-cube-scramble';
import { DataContext } from '../FirebaseProvider';
import css from './cube-timer.less';
import Scramble from './Scramble';
import Timer, { now } from './Timer';

const newScramle = (): string => scrambleGenerator() as string;

const CubeTimer = () => {
    const [timerRunning, setTimerRunning] = useState(false);
    const [scramble, setScramble] = useState<string>(newScramle());
    const { sessionSolves, addNewSolve } = useContext(DataContext);

    return (
        <div className={css.cubeTimerContainer}>
            <Scramble newScramble={scramble} showScramble={!timerRunning} />

            <Timer
                timerRunning={timerRunning}
                onToggleTimerRunning={setTimerRunning}
                onNewScramble={() => setScramble(newScramle)}
                solves={sessionSolves}
                addSolve={solveTime => addNewSolve({ time: solveTime, timestamp: now(), scramble })}
            />
        </div>
    );
};

export default CubeTimer;
