import React from 'react';
import Graph from '../components/graph/Graph';
import Menu from '../components/menu/Menu';
import css from './profile.less';

const Profile = () => {
    return (
        <div className={css.container}>
            <Menu dark={true} />
            <div className={css.graphContainer}>
                <Graph />
            </div>
        </div>
    );
};

export default Profile;
