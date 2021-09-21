import React from 'react';
import './HomeHeader.css';
import {useDispatch} from "react-redux";
import {INPUT_MOVIE} from "../../store/inputHandleReducer";
import { useHistory } from "react-router-dom";


const HomeHeader = () => {
    const dispatch = useDispatch();
    const history = useHistory();

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
                <img
                    className="header-avatar"
                    src="https://www.unmc.edu/cihc/_images/faculty/default.jpg"
                    alt="avatar"
                    onClick={() => history.push('/profile')}
                />
            </div>
        </header>
    );
};

export default HomeHeader;