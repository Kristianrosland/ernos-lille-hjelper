import React, { useContext } from 'react';

import classNames from 'classnames';
import { DataContext } from '../components/firebase/FirebaseProvider';
import css from './solve-tags.less';

const SolveTags = () => {
    const { activeTags, addActiveTag, removeActiveTag } = useContext(DataContext);

    const toggle = (tag: string) => {
        if (activeTags.includes(tag)) {
            removeActiveTag(tag);
        } else {
            addActiveTag(tag);
        }
    };

    const availableTags = ['3x3', 'CFOP', 'Official'];

    return (
        <div className={css.container}>
            {availableTags.map(tag => {
                const active = activeTags.includes(tag);
                const tagClassNames = classNames(css.tag, { [css.active]: active, [css.inactive]: !active });

                return (
                    <div className={tagClassNames} key={tag} onClick={() => toggle(tag)}>
                        {tag}
                    </div>
                );
            })}
        </div>
    );
};

export default SolveTags;
