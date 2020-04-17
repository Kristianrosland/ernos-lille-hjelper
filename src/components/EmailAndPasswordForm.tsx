import classNames from 'classnames';
import React, { useState } from 'react';
import css from './emailAndPasswordForm.less';

interface Props {
    title: string;
    buttonTitle: string;
    colorTheme: {
        textColor: string;
        bottomBorder: string;
    };
    includeUsername?: boolean;
    onSubmit: (email: string, password: string, username?: string) => Promise<null | string>;
}

const EmailAndPasswordForm: React.FC<Props> = ({ title, buttonTitle, onSubmit, colorTheme, includeUsername }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [submitting, setSubmitting] = useState(false);

    const submit = async () => {
        setSubmitting(true);

        const err = await onSubmit(email, password, username);

        if (err !== null) {
            setError(err);
        }
        setSubmitting(false);
    };

    return (
        <form className={css.form} onSubmit={submit}>
            <h1 className={classNames(css.heading, colorTheme.textColor)}>{title}</h1>

            {includeUsername ? (
                <input
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    className={classNames(css.input, colorTheme.textColor, colorTheme.bottomBorder)}
                    type="text"
                    placeholder="Velg brukernavn.."
                />
            ) : null}

            <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                className={classNames(css.input, colorTheme.textColor, colorTheme.bottomBorder)}
                type="email"
                placeholder="Epost.."
            />
            <input
                value={password}
                onChange={e => setPassword(e.target.value)}
                className={classNames(css.input, colorTheme.textColor, colorTheme.bottomBorder)}
                type="password"
                placeholder="Passord.."
            />

            {error && <span className={css.error}>{error}</span>}

            <button
                type="submit"
                className={classNames(css.loginButton, colorTheme.textColor)}
                disabled={email === '' || password === '' || submitting}
            >
                {buttonTitle}
            </button>
        </form>
    );
};

export default EmailAndPasswordForm;
