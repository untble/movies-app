import React, {useRef, useState} from 'react';
import './SignIn.css';
import {auth} from "../../firebase";

const SignIn = ({inputEmail}) => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [email,setEmail] = useState(inputEmail)

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
        <div className="signIn">
            <form>
                <h1>Sign In</h1>
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
                <button type="submit" onClick={signIn}>
                    Sign In
                </button>

                <h4>
                    <span className="signIn-gray">New to MovieLand? </span>
                    <span
                        className="signIn-link"
                        onClick={register}>
                        Sign Up now.
                    </span>
                </h4>
            </form>
        </div>
    );
};

export default SignIn;