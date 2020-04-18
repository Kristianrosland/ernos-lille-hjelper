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

    const goToRegisterLink = (
        <div className={css.goToRegisterLink} onClick={() => history.push('/register')}>
            Har du ikke konto enda? Registrer deg her
        </div>
    );

    return (
        <div className={css.container}>
            <EmailAndPasswordForm
                title="Logg inn"
                buttonTitle="Logg inn"
                onSubmit={signIn}
                colorTheme={{ textColor: css.textColor, bottomBorder: css.bottomBorder }}
                bottomLink={goToRegisterLink}
            />
        </div>
    );
};

export default Login;
