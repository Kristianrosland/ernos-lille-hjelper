import classNames from 'classnames';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../firebase/FirebaseProvider';
import css from './menu.less';

const LoginLink = () => {
    const { user, isLoading, signOut } = useContext(AuthContext);
    const history = useHistory();

    const onClick = () => {
        if (isLoading) return;

        if (!user) {
            history.push('/login');
        } else {
            signOut();
        }
    };

    const iconMobilView = user ? 'fa-unlock' : 'fa-lock';
    return isLoading ? null : (
        <button className={classNames(css.loginButton, css.menuPoint)} onClick={onClick}>
            <div className={css.desktopLoginView}>{user ? 'Logg ut' : 'Logg inn'}</div>
            <div className={css.mobileLoginView}>
                <i className={classNames(`fas ${iconMobilView}`)} />
            </div>
        </button>
    );
};

export default LoginLink;
