import React, {useState} from 'react';
import './AuthForm.css';
import {useHistory} from 'react-router-dom'
import {auth} from "../../../firebase";

//AuthenticationForm
const AuthForm = ({defaultEmail}) => {
    const [email, setEmail] = useState(defaultEmail.toString());
    const [password, setPassword] = useState('');
    const [signUp, setSignUp] = useState(false);
    const title = signUp ? 'Sign Up' : 'Sign In';
    const history = useHistory();

    const register = () => {
        auth.createUserWithEmailAndPassword(
            email, password
        ).then((authUser) => {
            console.log(authUser)
        }).catch(error => {
            alert(error.message)
        })
    }

    const signIn = () => {
        auth.signInWithEmailAndPassword(
            email, password
        ).then((authUser) => {
            console.log(authUser)
        }).catch(error => {
            alert(error.message)
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        signUp ? register() : signIn();
        history.push('/');
    }

    return (
        <div className="auth-form">
            <form>
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
                <button onClick={(e) => onSubmit(e)}>
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