import React, {useState} from 'react';
import './Authentication.css';
import {useHistory} from 'react-router-dom'

const Authentication = ({inputEmail, emailRef, passwordRef, register, signIn}) => {
    const [email,setEmail] = useState(inputEmail);
    const [signUp, setSignUp] = useState(false);
    const title = signUp ? 'Sign Up' : 'Sign In';

    const history = useHistory();

    return (
        <div className="auth">
            <form>
                <h1>{title}</h1>
                <input
                    type="Email"
                    placeholder="Email"
                    ref={emailRef}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <input
                    type="password"
                    placeholder="Password"
                    ref={passwordRef}
                />
                <button
                    type="submit"
                    onClick={(e) => {
                        signUp ? register(e) : signIn(e);
                        history.push('/')
                    }}>
                    {title}
                </button>

                {!signUp && (
                    <h4>
                        <span className="auth-gray">New to MovieLand? </span>
                        <span
                            className="auth-link"
                            onClick={() => setSignUp(true)}>
                        Sign Up now.
                    </span>
                    </h4>
                )}

            </form>
        </div>
    );
};

export default Authentication;