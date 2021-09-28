import React, {useState} from 'react';
import './AuthForm.css';


const AuthForm = ({defaultEmail, onSubmit}) => {
    const [email, setEmail] = useState(defaultEmail.toString());
    const [password, setPassword] = useState('');
    const [signUp, setSignUp] = useState(false);
    const title = signUp ? 'Sign Up' : 'Sign In';


    const handleOnSubmit = (e) => {
        e.preventDefault();
        onSubmit(signUp, email, password)
    }

    return (
        <div className="auth-form">
            <form onSubmit={e => handleOnSubmit(e)}>
                <h1>{title}</h1>
                <input
                    type="Email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <button type='submit'>
                    {title}
                </button>

                {!signUp ?
                    <h4>
                        <span className="auth-gray">New to MovieLand? </span>
                        <span
                            className="auth-link"
                            onClick={() => setSignUp(true)}>
                        Sign Up now.
                    </span>
                    </h4>
                    : <h4>
                        <span className="auth-gray">Has an account? </span>
                        <span
                            className="auth-link"
                            onClick={() => setSignUp(false)}>
                        Sign In now.
                    </span>
                    </h4>
                }
            </form>
        </div>
    );
};

export default AuthForm;