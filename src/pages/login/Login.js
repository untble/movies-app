import React, {useRef, useState} from 'react';
import './Login.css';
import Authentication from "../authentication/Authentication";
import {auth} from "../../firebase";

const Login = () => {
    const [inputEmail, setInputEmail] = useState('');
    const [showAuthComponent, setShowAuthComponent] = useState(false);

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser)
        }).catch(error => {
            alert(error.message)
        })
    }

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser)
        }).catch(error => {
            alert(error.message)
        })
    }


    return (
        <div className='login' style={{backgroundColor: 'cadetblue'}}>
            <div className='login-background'>
                <h1 className='login-logo'>MOVIELAND</h1>

            </div>
            <div className="login-body">
                {showAuthComponent ? (
                    <Authentication inputEmail={inputEmail}
                                    emailRef={emailRef}
                                    passwordRef={passwordRef}
                                    register={(e) => register(e)}
                                    signIn={(e) => signIn(e)}
                    />
                ) : (
                    <>
                        <h1>Unlimited Movies, Feel Free To Join Us.</h1>
                        <h2>Watch anywhere. Cancel at any time.</h2>
                        <h3>Ready to watch? Enter your email to create your membership.</h3>

                        <div className="login-input">
                            <form className="login-form">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    onChange={(e) => setInputEmail(e.target.value)}
                                />
                                <button
                                    className="login-getStarted"
                                    onClick={() => setShowAuthComponent(true)}
                                >GET STARTED
                                </button>
                            </form>
                        </div>
                    </>
                )}

            </div>
        </div>
    );
};

export default Login;