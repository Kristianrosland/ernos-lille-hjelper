import classNames from 'classnames';
import React from 'react';
import { Solve } from '../../types/solve-types';
import { Friend } from '../firebase/types';
import { formatTimer } from '../timer/format-time-utils';
import css from './friends-stats.less';

interface Props {
    friends: Friend[];
    loggedInUsersBestSolve: Solve | undefined;
}

const FriendsStats: React.FC<Props> = ({ friends, loggedInUsersBestSolve }) => {
    if (friends.length === 0 && friends.filter(friend => !friend.best).length === 0) {
        return null;
    }

    const friendsWithBestSolves: Friend[] = friends.filter(friend => friend.best);
    const friendsBestSolve = Math.min(...friendsWithBestSolves.map(friend => friend.best!.time));
    const friendHasBestTime = loggedInUsersBestSolve
        ? loggedInUsersBestSolve.time > friendsBestSolve
        : friendsBestSolve;

    return (
        <div className={css.friendsStatsContainer}>
            <div className={css.heading}>Dine venners beste tider</div>

            <ul className={css.friendStatList}>
                {friends.map(friend => (
                    <li key={friend.username}>
                        <div className={css.friendStat}>
                            {friend.username}: {friend.best ? formatTimer(friend.best.time) : '-'}
                        </div>
                        <div>
                            {friendHasBestTime && friend.best && friend.best.time === friendsBestSolve ? (
                                <i className={classNames('fas fa-trophy')} />
                            ) : null}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FriendsStats;
