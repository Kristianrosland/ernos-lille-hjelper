import React, { useEffect, useState } from 'react';
import css from './cube-timer.less';

interface Props {
    newScramble: string;
    onPrevScrambleClick: (prevScramble: string) => void;
}

const Scramble: React.FC<Props> = ({ newScramble, onPrevScrambleClick }) => {
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
            {currentScramble && (
                <div
                    className={css.previousScramble}
                    onClick={() => {
                        if (previousScramble) {
                            onPrevScrambleClick(previousScramble!);
                            setPreviousScramble(undefined);
                        }
                    }}
                >
                    {previousScramble}
                </div>
            )}
        </div>
    );
};

export default Scramble;
