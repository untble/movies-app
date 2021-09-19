import React from 'react';
import './Header.css';
import {useDispatch} from "react-redux";
import {INPUT_MOVIE} from "../../store/inputHandleReducer";

const Header = () => {
    const dispatch = useDispatch();

    const renderMoviesHandle = (e) => {
        dispatch({type: INPUT_MOVIE, payload: e.target.value})
    }

    return (
        <header className="header">
            <div className="header-container">
                <p className="header-logo">MOVIELAND</p>
                <input
                    type="text"
                    className="header-search"
                    onChange={(e) => renderMoviesHandle(e)}
                    placeholder="Search..."
                />
                <p>Log out</p>
            </div>
        </header>
    );
};

export default Header;