import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../App';
import EmailAndPasswordForm from '../components/EmailAndPasswordForm';
import css from './register.less';

const Register = () => {
    const history = useHistory();
    const { user, signUp } = useContext(AuthContext);

    useEffect(() => {
        if (user) {
            history.push('/');
        }
    }, [history, user]);

    return (
        <div className={css.container}>
            <EmailAndPasswordForm title="Registrer deg" buttonTitle="Ferdig" onSubmit={signUp} colorTheme={{ textColor: css.textColor, bottomBorder: css.bottomBorder }} includeUsername={true}/>
        </div>
    );
};

export default Register;
