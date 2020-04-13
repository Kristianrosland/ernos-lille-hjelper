import React, { useState } from 'react';
import scrambleGenerator from 'rubiks-cube-scramble';
import css from './cube-timer.less';
import Scramble from './Scramble';
import Timer from './Timer';

const CubeTimer = () => {
    const [timerRunning, setTimerRunning] = useState(false);
    const [scramble, setScramble] = useState<string | string[]>(scrambleGenerator());

    return (
        <div className={css.container}>
            <Scramble newScramble={scramble} showScramble={!timerRunning} />

            <Timer
                timerRunning={timerRunning}
                onToggleTimerRunning={setTimerRunning}
                onNewScramble={() => setScramble(scrambleGenerator())}
            />
        </div>
    );
};

export default CubeTimer;
