import React from 'react';
import ReactTooltip from 'react-tooltip';
import css from './scramble.less';

interface Props {
    frontFace: string;
}

const COLOR_MAP = {
    R: 'red',
    L: 'orange',
    U: 'white',
    D: 'rgb(253, 255, 40)', // yellow
    F: 'rgb(50,230,20)', // green
    B: 'blue',
};

const Sticker: React.FC<{ face: string }> = ({ face }) => {
    const color = Object.entries(COLOR_MAP)
        .filter(([key, _value]) => key === face)
        ?.map(([_key, value]) => value)[0];

    return <div className={css.scrambleSticker} style={{ backgroundColor: color }} />;
};

const ScrambleVisualization: React.FC<Props> = ({ frontFace }) => {
    const stickers = frontFace.split('').map((face, idx) => <Sticker key={idx} face={face} />);
    return (
        <div
            className={css.scrambleCube}
            data-for="start-timer-tooltip"
            data-tip={'Grønn side mot deg, hvit side opp'}
        >
            {stickers}
            <ReactTooltip id="scramble-visualization-tooltip" effect="solid" type="light" />
        </div>
    );
};

export default ScrambleVisualization;
