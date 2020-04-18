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
}

const SessionStats: React.FC<Props> = ({ sessionSolves }) => {
    const bestSolve = findBestSolve(sessionSolves);
    const worstSolve = findWorstSolve(sessionSolves);
    const averageSolve = findAverageSolve(sessionSolves);

    const bestAverageOfFive = sessionSolves.length >= 5 ? findBestAverageSolveOfFive(sessionSolves) : null;

    return (
        <div className={css.sessionStatsContainer}>
            <div className={css.heading}>dine tider denne runden</div>
            <div>beste: {sessionSolves.length > 0 ? formatTimer(bestSolve) : '-'}</div>
            <div>dårligte: {sessionSolves.length > 1 ? formatTimer(worstSolve) : '-'}</div>
            <div>gjennomsnitt: {sessionSolves.length > 1 ? formatTimer(averageSolve) : '-'}</div>
            <div>beste gjennomsnitt av 5: {bestAverageOfFive ? formatTimer(bestAverageOfFive) : '-'}</div>
        </div>
    );
};

export default SessionStats;
