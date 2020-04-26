import classNames from 'classnames';
import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import css from './algorithms.less';
import { F2LCase } from './cases';

interface Props {
    f2lCase: F2LCase;
}

const AlgorithmCase: React.FC<Props> = ({ f2lCase }) => {
    const [editing, setEditing] = useState(false);
    const [input, setInput] = useState('');

    const myAlgorithms = {
        UU1a: "U R L' R' U D",
    };

    const customAlg = Object.entries(myAlgorithms).find(([key, _value]) => key === f2lCase.name);

    return (
        <div className={css.case}>
            <ReactSVG src={`cases/${f2lCase.name}.svg`} />
            <div className={css.algorithm}>
                <div className={css.algHeader}>Anbefalt algoritme</div>
                <div className={css.algorithmText}>{f2lCase.alg}</div>

                {editing ? (
                    <div>
                        <input
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            className={css.customAlgInput}
                        />
                        <button className={css.saveCustomAlg}>Lagre</button>
                    </div>
                ) : customAlg !== undefined ? (
                    <div className={css.customAlg}>
                        <div className={css.algHeader}>Min algoritme</div>
                        <div className={classNames(css.algorithmText, css.customAlgText)}>{customAlg[1]}</div>
                    </div>
                ) : Math.random() < 0.0001 ? (
                    <button className={css.addCustomAlgorithm} onClick={() => setEditing(true)}>
                        + Legg til egen algoritme
                    </button>
                ) : null}
            </div>
        </div>
    );
};

export default AlgorithmCase;
