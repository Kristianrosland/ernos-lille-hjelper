import React, { useEffect, useState } from 'react';
import css from './cube-timer.less';

interface Props {
    newScramble: string;
    showScramble: boolean;
}

const Scramble: React.FC<Props> = ({ newScramble, showScramble }) => {
    const [currentScramble, setCurrentScramble] = useState<string>();
    const [previousScramble, setPreviousScramble] = useState<string>();

    useEffect(() => {
        if (newScramble !== currentScramble) {
            setPreviousScramble(currentScramble);
            setCurrentScramble(newScramble);
        }
    }, [newScramble, currentScramble, setPreviousScramble]);

    return (
        <>
            {showScramble && (
                <div className={css.scrambleContainer}>
                    <div className={css.scramble}>{currentScramble}</div>
                    {currentScramble && <div className={css.previousScramble}>{previousScramble}</div>}
                </div>
            )}
        </>
    );
};

export default Scramble;
