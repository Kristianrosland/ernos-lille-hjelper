import React, { ChangeEvent, useState } from 'react';
import Menu from '../components/menu/Menu';
import AlgorithmCase from './AlgorithmCase';
import css from './algorithms.less';
import cases, { F2LCase } from './cases';
import HowItWorks from './HowItWorks';

const Algorithms = () => {
    const [query, setQuery] = useState('');
    const [currentCases, setCurrentCases] = useState<F2LCase[]>([]);
    const [howItWorks, setHowItWorks] = useState(false);
    const [isQuizzing, setIsQuizzing] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inp = e.target.value.toUpperCase();
        setQuery(inp);

        if (inp.length === 3) {
            const matches = cases.filter(c => c.name.startsWith(inp));

            setQuery('');
            setCurrentCases(matches);
            setIsQuizzing(false);
            setError(matches.length === 0 ? `${inp} er ikke en F2L-case` : null);
        }
    };

    const randomCase = () => {
        const rndCase = cases[Math.floor(Math.random() * cases.length)];
        setCurrentCases([rndCase]);
        setIsQuizzing(true);
    };

    return (
        <div className={css.container}>
            <Menu dark={true} />
            <button className={css.randomCaseButton} onClick={randomCase}>
                Random case quiz
            </button>
            <input value={query} onChange={onChange} className={css.queryInput} placeholder="Søk.." />

            {howItWorks ? (
                <HowItWorks close={() => setHowItWorks(false)} />
            ) : (
                <div className={css.howItWorks} onClick={() => setHowItWorks(true)}>
                    Hvordan søker man?
                </div>
            )}

            {error && <div className={css.notFound}>{error}</div>}

            {currentCases.map(c => (
                <AlgorithmCase key={c.name} f2lCase={c} isQuizzing={isQuizzing} />
            ))}
        </div>
    );
};

export default Algorithms;
