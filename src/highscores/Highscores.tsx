import classNames from 'classnames';
import sortBy from 'lodash.sortby';
import React, { useContext } from 'react';
import { AuthContext, DataContext } from '../components/firebase/FirebaseProvider';
import { formatTimer } from '../components/timer/format-time-utils';
import css from './highscores.less';

interface Highscore {
    displayName: string | undefined;
    solveTime: number | undefined;
}

const Highscores: React.FC = () => {
    const { stored } = useContext(DataContext);
    const { user } = useContext(AuthContext);

    if (!user) {
        return null;
    }

    const loggedInUsersBestSolve = stored.best;
    const friends = user.friends;

    const friendsWithBestSolves = friends.filter(friend => friend.username && friend.bestSolveTime);

    if (friendsWithBestSolves.length === 0) {
        return null;
    }

    const allUsers = friendsWithBestSolves
        .map(friend => ({ displayName: friend.username, solveTime: friend.bestSolveTime }))
        .concat({ displayName: 'deg', solveTime: loggedInUsersBestSolve?.time });

    const bestSolve = Math.min(...allUsers.map(u => (u.solveTime ? u.solveTime : 100000000)));
    const highscores: Highscore[] = sortBy(allUsers, 'solveTime');

    return (
        <div className={css.container}>
            <div className={css.highscoresContainer}>
                <div className={css.heading}>deg og dine venner</div>

                <ul className={css.highscoreList}>
                    {highscores.map(highscore => (
                        <li key={highscore.displayName}>
                            <div
                                className={classNames(css.scoreContainer, {
                                    [css.loggedInUser]: highscore.displayName === 'deg',
                                })}
                            >
                                <div>{highscore.displayName}</div>
                                <div className={css.score}>
                                    {highscore.solveTime ? formatTimer(highscore.solveTime) : '-'}
                                </div>
                                <div>
                                    {highscore.solveTime && highscore.solveTime === bestSolve ? (
                                        <i className={classNames('fas fa-trophy')} />
                                    ) : null}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Highscores;
