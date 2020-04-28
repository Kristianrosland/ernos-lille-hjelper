import sortBy from 'lodash.sortby';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory';
import { Solve } from '../../types/solve-types';
import { DataContext } from '../firebase/FirebaseProvider';
import css from './graph.less';

const Graph = () => {
    const { getLastNStoredSolves } = useContext(DataContext);
    const [solves, setSolves] = useState<Solve[]>([]);

    const fetchSolves = useCallback(async () => {
        const fetchedSolves = await getLastNStoredSolves(1000);
        if (fetchedSolves) {
            setSolves(sortBy(fetchedSolves.reverse(), s => -s.timestamp));
        }
    }, [getLastNStoredSolves]);

    useEffect(() => {
        fetchSolves();
    }, [fetchSolves]);

    let p = new Date().getTime();
    solves.forEach(s => {
        if (s.timestamp >= p) {
            console.log('FUCK', s.timestamp, p);
        }

        p = s.timestamp;
    });

    const globalAvgDevelopment =
        solves.length > 0
            ? solves.reduce(
                  (acc, s) => {
                      const prev = acc[acc.length - 1];
                      const newAverage = (prev * acc.length + s.time / 1000) / (acc.length + 1);
                      return [...acc, newAverage];
                  },
                  [solves[0].time / 1000],
              )
            : [];

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
