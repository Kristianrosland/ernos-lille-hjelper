import React, { useContext, useEffect, useState } from 'react';
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory';
import { Solve } from '../../types/solve-types';
import { DataContext } from '../firebase/FirebaseProvider';
import css from './graph.less';

const Graph = () => {
    const { getLastNStoredSolves } = useContext(DataContext);
    const [hundredLastSolves, setHundredLastSolves] = useState<Solve[]>([]);

    const fetchHundredLastSolves = async () => {
        const solves = await getLastNStoredSolves(1000);
        if (solves) {
            setHundredLastSolves(solves.reverse());
        }
    };

    useEffect(() => {
        fetchHundredLastSolves();
    }, [setHundredLastSolves, getLastNStoredSolves]);

    const test =
        hundredLastSolves.length > 0
            ? hundredLastSolves.reduce(
                  (acc, s) => {
                      const prev = acc[acc.length - 1];
                      const newAverage = (prev * acc.length + s.time / 1000) / (acc.length + 1);
                      return [...acc, newAverage];
                  },
                  [hundredLastSolves[0].time / 1000],
              )
            : [];

    return (
        <div className={css.container}>
            {hundredLastSolves !== null ? (
                <VictoryChart theme={VictoryTheme.material} domain={{ x: [0, test.length], y: [30, 60] }}>
                    <VictoryLine
                        style={{
                            data: { stroke: '#c43a31' },
                            parent: { border: '1px solid red' },
                        }}
                        data={test.map((t, idx) => {
                            console.log('t: ', t, 'idx: ', idx);
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
