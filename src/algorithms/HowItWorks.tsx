import React from 'react';
import css from './algorithms.less';

const HowItWorks: React.FC<{ close: () => void }> = () => {
    return <div className={css.howItWorksContainer}>Spør Kristian</div>;
};

export default HowItWorks;
