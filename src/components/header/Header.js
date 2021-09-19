import React from 'react';
import './Header.css';
import {useDispatch} from "react-redux";
import {INPUT_MOVIE} from "../../store/inputHandleReducer";
import {auth} from "../../firebase";

const Header = () => {
    const dispatch = useDispatch();

    const renderMoviesHandle = (e) => {
        dispatch({type: INPUT_MOVIE, payload: e.target.value})
    }

    return (
        <header className="header">
            <div className="header-container">
                <h1 className="header-logo">MOVIELAND</h1>
                <input
                    type="text"
                    className="header-search"
                    onChange={(e) => renderMoviesHandle(e)}
                    placeholder="Search..."
                />
                <button
                    className="header-logout"
                    onClick={() => auth.signOut()}
                >
                    Log Out
                </button>
            </div>
        </header>
    );
};

export default Header;