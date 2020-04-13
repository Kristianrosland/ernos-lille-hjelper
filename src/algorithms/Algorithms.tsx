import React, { ChangeEvent, useState } from 'react';
import css from './algorithms.less';
import cases, { F2LCase } from './cases';

const Algorithms = () => {
    const [query, setQuery] = useState('');
    const [currentCases, setCurrentCases] = useState<F2LCase[]>([]);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inp = e.target.value.toUpperCase();
        setQuery(inp);

        if (inp.length === 3) {
            const matches = cases.filter(c => c.name.startsWith(inp));
            setCurrentCases(matches);
            setQuery('');
        }
    };

    return (
        <div className={css.container}>
            <input value={query} onChange={onChange} className={css.queryInput} />
            {currentCases.map(c => (
                <img key={c.name} src={c.src} className={css.image} alt="Solution" />
            ))}
        </div>
    );
};

export default Algorithms;
