import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import EmailAndPasswordForm from '../components/EmailAndPasswordForm';
import { AuthContext } from '../FirebaseProvider';
import css from './login.less';

const Login = () => {
    const history = useHistory();
    const { user, signIn } = useContext(AuthContext);

    useEffect(() => {
        if (user) {
            history.push('/');
        }
    }, [history, user]);

    return (
        <div className={css.container}>
            <EmailAndPasswordForm
                title="Logg inn"
                buttonTitle="Logg inn"
                onSubmit={signIn}
                colorTheme={{ textColor: css.textColor, bottomBorder: css.bottomBorder }}
            />
        </div>
    );
};

export default Login;
