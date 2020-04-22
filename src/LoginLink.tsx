import classNames from 'classnames';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import css from './app.less';
import { AuthContext } from './firebase/FirebaseProvider';

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
        <div className={css.loginButton} onClick={onClick}>
            <i className={classNames('fas fa-user', css.userIcon)} />
            {user ? user.username : 'Logg inn'}
        </div>
    );
};

export default LoginLink;
