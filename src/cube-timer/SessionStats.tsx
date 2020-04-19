import React from 'react';
import { Solve } from '../types/solve-types';
import css from './cube-timer.less';
import { formatTimer } from './format-time-utils';

const findBestSolve = (solves: Solve[]): number => Math.min(...solves.map(solve => solve.time));
const findWorstSolve = (solves: Solve[]): number => Math.max(...solves.map(solve => solve.time));
const findAverageSolve = (solves: Solve[]): number => {
    const totalSolveTime = solves.reduce((solveTimeSum, solve) => solveTimeSum + solve.time, 0);
    return totalSolveTime / solves.length;
};

const findBestAverageSolveOfFive = (solves: Solve[]): number => {
    let firstSumOfFive = solves.slice(0, 5).reduce((solveTimeSum, solve) => solveTimeSum + solve.time, 0);
    let bestSumOfFive = firstSumOfFive;

    for (let i = 0; i < solves.length - 5; i++) {
        firstSumOfFive -= solves[i].time;
        firstSumOfFive += solves[i + 5].time;

        bestSumOfFive = Math.min(firstSumOfFive, bestSumOfFive);
    }

    return bestSumOfFive / 5;
};

interface Props {
    sessionSolves: Solve[];
    bestSolve: (Solve & { id: string }) | undefined;
}

const SessionStats: React.FC<Props> = ({ sessionSolves, bestSolve }) => {
    const bestSolveTime = bestSolve ? bestSolve.time : findBestSolve(sessionSolves);
    const worstSolveTime = findWorstSolve(sessionSolves);
    const averageSolveTime = findAverageSolve(sessionSolves);

    const bestAverageOfFiveSolveTime =
        sessionSolves.length >= 5 ? findBestAverageSolveOfFive(sessionSolves) : null;

    return (
        <>
            <div className={css.statsContainerMobile}>
                <div className={css.heading}>dine tider denne runden</div>
                <div>beste: {sessionSolves.length > 0 ? formatTimer(bestSolveTime) : '-'}</div>
                <div>dårligte: {sessionSolves.length > 1 ? formatTimer(worstSolveTime) : '-'}</div>
                <div>gjennomsnitt: {sessionSolves.length > 1 ? formatTimer(averageSolveTime) : '-'}</div>
                <div>
                    beste gjennomsnitt av 5:{' '}
                    {bestAverageOfFiveSolveTime ? formatTimer(bestAverageOfFiveSolveTime) : '-'}
                </div>
            </div>

            <div className={css.statsContainerDesktop}>
                <div className={css.hading}>Dine tider</div>
                <div className={css.statElement}>
                    <div className={css.statLabel}>beste:</div>
                    <div className={css.statValue}>
                        {sessionSolves.length > 0 || bestSolve ? formatTimer(bestSolveTime) : '-'}
                    </div>
                </div>
                <div className={css.statElement}>
                    <div className={css.statLabel}>dårligste:</div>
                    <div className={css.statValue}>
                        {sessionSolves.length > 1 ? formatTimer(worstSolveTime) : '-'}
                    </div>
                </div>
                <div className={css.statElement}>
                    <div className={css.statLabel}>beste gjennomsnitt av 5:</div>
                    <div className={css.statValue}>
                        {bestAverageOfFiveSolveTime ? formatTimer(bestAverageOfFiveSolveTime) : '-'}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SessionStats;
