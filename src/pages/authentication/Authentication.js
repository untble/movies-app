import React, {Fragment, useState} from 'react';
import './Authentication.css';
import AuthForm from "./authForm/AuthForm";

const Authentication = () => {
    const [showAuthForm, setShowAuthForm] = useState(false);
    const [defaultEmail, setDefaultEmail] = useState('');

    return (
        <div className='auth'>
            <div className='auth-background'>
                <h1 className='auth-logo'>MOVIELAND</h1>
            </div>
            <div className="auth-body">
                {showAuthForm ? <AuthForm defaultEmail={defaultEmail}/>
                    :
                    (
                        <Fragment>
                            <h1>Unlimited Movies, Feel Free To Join Us.</h1>
                            <h2>Watch anywhere. Cancel at any time.</h2>
                            <h3>Ready to watch? Enter your email to create your membership.</h3>

                            <div className="login-input">
                                <form className="login-form">
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        onChange={(e) => setDefaultEmail(e.target.value)}
                                    />
                                    <button
                                        className="login-getStarted"
                                        onClick={() => setShowAuthForm(true)}
                                    >GET STARTED
                                    </button>
                                </form>
                            </div>
                        </Fragment>
                    )}

            </div>
        </div>
    );
};

export default Authentication;