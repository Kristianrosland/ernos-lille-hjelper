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

    return isLoading ? null : (
        <button className={classNames(css.loginButton, css.menuPoint)} onClick={onClick}>
            {user ? 'Logg ut' : 'Logg inn'}
        </button>
    );
};

export default LoginLink;
