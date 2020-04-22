import classNames from 'classnames';
import React, { useContext } from 'react';
import { AuthContext } from '../firebase/FirebaseProvider';
import LoginLink from './LoginLink';
import css from './menu.less';

const Menu = () => {
    const { user, isLoading } = useContext(AuthContext);

    return isLoading ? null : (
        <div className={css.menu}>
            <>
                <div className={css.userName}>{user?.username ? `Hei, ${user?.username}!` : ''}</div>
                <i className={classNames('fas fa-user', css.userIcon)} />
                <LoginLink />
            </>
        </div>
    );
};

export default Menu;
