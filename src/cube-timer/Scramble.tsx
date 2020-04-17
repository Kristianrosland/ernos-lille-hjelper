import React, { useEffect, useState } from 'react';
import css from './cube-timer.less';

interface Props {
    newScramble: string;
}

const Scramble: React.FC<Props> = ({ newScramble }) => {
    const [currentScramble, setCurrentScramble] = useState<string>();
    const [previousScramble, setPreviousScramble] = useState<string>();

    useEffect(() => {
        if (newScramble !== currentScramble) {
            setPreviousScramble(currentScramble);
            setCurrentScramble(newScramble);
        }
    }, [newScramble, currentScramble, setPreviousScramble]);

    return (
        <div className={css.scrambleContainer}>
            <div className={css.scramble}>{currentScramble}</div>
            {currentScramble && <div className={css.previousScramble}>{previousScramble}</div>}
        </div>
    );
};

export default Scramble;
