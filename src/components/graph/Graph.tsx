import sortBy from 'lodash.sortby';
import React, { useContext, useEffect, useState } from 'react';
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory';
import { Solve } from '../../types/solve-types';
import { DataContext } from '../firebase/FirebaseProvider';
import css from './graph.less';

const Graph = () => {
    const { getLastNStoredSolves } = useContext(DataContext);
    const [solves, setSolves] = useState<Solve[]>([]);

    useEffect(() => {
        const fetchSolves = async () => {
            const fetchedSolves = await getLastNStoredSolves(1000);
            if (fetchedSolves) {
                const sorted = sortBy(fetchedSolves, s => s.timestamp);
                setSolves(sorted);
            }
        };
        fetchSolves();
    }, [getLastNStoredSolves]);

    const firstTen = solves.slice(0, 10);
    const avgOfFirst10 = firstTen.map(s => s.time / 1000).reduce((a, b) => a + b, 0) / firstTen.length;

    const globalAvgDevelopmentInclFirst10Average =
        solves.length > 0
            ? solves.reduce((acc, s) => {
                  const prev = acc[acc.length - 1];
                  const newAverage = (prev * acc.length + s.time / 1000) / (acc.length + 1);
                  return [...acc, newAverage];
              }, Array(firstTen.length).fill(avgOfFirst10))
            : [];

    const globalAvgDevelopment = globalAvgDevelopmentInclFirst10Average.slice(firstTen.length);

    const MARGIN = 3;
    const smallest =
        globalAvgDevelopment.length > 0
            ? globalAvgDevelopment.reduce((a, b) => Math.min(a, b), globalAvgDevelopment[0])
            : MARGIN;
    const biggest =
        globalAvgDevelopment.length > 0
            ? globalAvgDevelopment.reduce((a, b) => Math.max(a, b), globalAvgDevelopment[0])
            : 60 - MARGIN;

    return (
        <div className={css.container}>
            {solves !== null ? (
                <VictoryChart
                    theme={VictoryTheme.material}
                    minDomain={{ x: 0, y: smallest - MARGIN }}
                    maxDomain={{ x: Math.max(globalAvgDevelopment.length, MARGIN), y: biggest + MARGIN }}
                >
                    <VictoryLine
                        style={{
                            data: { stroke: '#c43a31' },
                            parent: { border: '1px solid red' },
                        }}
                        data={globalAvgDevelopment.map((t, idx) => {
                            return {
                                x: idx,
                                y: t,
                            };
                        })}
                    />
                </VictoryChart>
            ) : null}
        </div>
    );
};

export default Graph;
