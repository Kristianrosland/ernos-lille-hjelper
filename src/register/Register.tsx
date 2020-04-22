import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import EmailAndPasswordForm from '../components/email-and-password/EmailAndPasswordForm';
import { AuthContext } from '../components/firebase/FirebaseProvider';
import css from './register.less';

const Register = () => {
    const history = useHistory();
    const { user, signUp } = useContext(AuthContext);

    useEffect(() => {
        if (user) {
            history.push('/');
        }
    }, [history, user]);

    const goToLoginLink = (
        <div className={css.goToLoginLink} onClick={() => history.push('/login')}>
            Har du allerede konto? Gå til innlogging
        </div>
    );

    return (
        <div className={css.container}>
            <EmailAndPasswordForm
                title="Registrer deg"
                buttonTitle="Ferdig"
                onSubmit={signUp}
                colorTheme={{ textColor: css.textColor, bottomBorder: css.bottomBorder }}
                includeUsername={true}
                bottomLink={goToLoginLink}
            />
        </div>
    );
};

export default Register;
