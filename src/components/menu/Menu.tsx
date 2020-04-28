import classNames from 'classnames';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../firebase/FirebaseProvider';
import cubeIcon from './cube-logo.svg';
import LoginLink from './LoginLink';
import css from './menu.less';

const Menu: React.FC<{ dark?: boolean }> = ({ dark = false }) => {
    const { user, isLoading } = useContext(AuthContext);
    const history = useHistory();

    return isLoading ? null : (
        <div className={classNames(css.menuContainer, { [css.dark]: dark })}>
            <div className={css.logoContainer} onClick={() => history.push('/')}>
                <img className={css.cubeLogo} src={cubeIcon} alt="Logo" />
            </div>
            <div className={css.menu}>
                <div className={css.menuElements}>
                    {!window.location.href.includes('scramble') && (
                        <div className={css.menuPoint} onClick={() => history.push('/')}>
                            Timer
                        </div>
                    )}
                    {!window.location.href.includes('highscores') && user && user.friends.length > 0 && (
                        <div className={css.menuPoint} onClick={() => history.push('/highscores')}>
                            Hvem leder?
                        </div>
                    )}
                    {!window.location.href.includes('algorithms') && (
                        <div className={css.menuPoint} onClick={() => history.push('/algorithms')}>
                            F2L-søk
                        </div>
                    )}
                </div>

                <div className={css.userName}>{user?.username ? `Hei, ${user?.username}!` : ''}</div>
                <i className={classNames('fas fa-user', css.userIcon)} />

                <LoginLink />
            </div>
        </div>
    );
};

export default Menu;
