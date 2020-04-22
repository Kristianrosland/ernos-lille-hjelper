import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import seedrandom from 'seedrandom';
import Menu from '../components/menu/Menu';
import Scramble from '../components/scramble/Scramble';
import { generate } from '../components/scramble/ScrambleGenerator';
import SessionStats from '../components/stats/SessionStats';
import Timer from '../components/timer/Timer';
import { DataContext } from '../firebase/FirebaseProvider';
import css from './cube-timer.less';
import { now } from './format-time-utils';

const CubeTimer = () => {
    const params = useParams<{ scramble: string }>();
    const [timerRunning, setTimerRunning] = useState(false);
    const { sessionSolves, stored, addNewSolve, removeStoredSolve } = useContext(DataContext);

    const history = useHistory();

    const setNewScramble = useCallback(async () => {
        if (params.scramble) {
            seedrandom(params.scramble, { global: true });
        }
        history.push(
            '/scramble/' +
                generate()
                    .trim()
                    .replace(/ /g, '-'),
        );
    }, [history, params.scramble]);

    useEffect(() => {
        if (params.scramble === undefined) {
            setNewScramble();
        }
    }, [params.scramble, setNewScramble]);

    return (
        <div className={css.cubeTimerContainer}>
            <Menu />
            {!timerRunning && (
                <Scramble
                    newScramble={params.scramble ? params.scramble.replace(/-/g, ' ') : ''}
                    onPrevScrambleClick={(oldScramble: string) =>
                        history.push('/scramble/' + oldScramble.replace(/ /g, '-'))
                    }
                />
            )}

            <Timer
                timerRunning={timerRunning}
                onToggleTimerRunning={setTimerRunning}
                onNewScramble={async () => setNewScramble()}
                solves={sessionSolves}
                addSolve={async solveTime =>
                    addNewSolve({ time: solveTime, timestamp: now(), scramble: params.scramble })
                }
                removeSolve={removeStoredSolve}
            />

            {!timerRunning && <SessionStats sessionSolves={sessionSolves} bestSolve={stored.best} />}
        </div>
    );
};

export default CubeTimer;
