import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import seedrandom from 'seedrandom';
import { DataContext } from '../components/firebase/FirebaseProvider';
import Menu from '../components/menu/Menu';
import Scramble from '../components/scramble/Scramble';
import { generate, getCubeFrontFace } from '../components/scramble/ScrambleGenerator';
import ScrambleVisualization from '../components/scramble/ScrambleVisualization';
import SessionStats from '../components/stats/SessionStats';
import { now } from '../components/timer/format-time-utils';
import Timer from '../components/timer/Timer';
import css from './cube-timer.less';

const CubeTimer = () => {
    const params = useParams<{ scramble: string }>();
    const [timerRunning, setTimerRunning] = useState(false);

    const { sessionSolves, stored, addNewSolve, removeStoredSolve } = useContext(DataContext);
    const history = useHistory();
    const scrambleFrontFace = useMemo(() => {
        return params.scramble ? getCubeFrontFace(params.scramble) : null;
    }, [params.scramble]);

    const setNewScramble = useCallback(async () => {
        if (params.scramble) {
            seedrandom(params.scramble, { global: true });
        }
        const scramble = generate();
        history.push('/scramble/' + scramble.trim().replace(/ /g, '-'));
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
            {!timerRunning && scrambleFrontFace && <ScrambleVisualization frontFace={scrambleFrontFace} />}
            {!timerRunning && <SessionStats sessionSolves={sessionSolves} bestSolve={stored.best} />}
        </div>
    );
};

export default CubeTimer;
