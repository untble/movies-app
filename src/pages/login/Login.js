import React, {useState} from 'react';
import './Login.css';
import SignIn from "../signIn/SignIn";

const Login = () => {
    const [inputEmail, setInputEmail] = useState('')
    const [signIn, setSignIn] = useState(false);


    return (
        <div className='login' style={{backgroundColor: 'cadetblue'}}>
            <div className='login-background'>
                <h1 className='login-logo'>MOVIELAND</h1>
                <button
                    className='login-button'
                    onClick={() => setSignIn(true)}
                >Sign In
                </button>
            </div>
            <div className="login-body">
                {signIn ? (
                    <SignIn inputEmail={inputEmail}/>
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
                                    onClick={() => setSignIn(true)}
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