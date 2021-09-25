import React from 'react';
import './Header.css';
import {useDispatch} from "react-redux";
import {INPUT_MOVIE} from "../../store/inputHandleReducer";
import {useHistory} from "react-router-dom";
import {FaStar, FaUserFriends} from "react-icons/all";

import userIMG from '../../assets/user_image.jpg'


const Header = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const renderMoviesHandle = (e) => {
        dispatch({type: INPUT_MOVIE, payload: e.target.value})
    }

    return (
        <header className="header">
            <div className="header-container">
                <h1
                    className="header-logo"
                    onClick={() => history.push('/')}>
                    MOVIELAND
                </h1>
                {history.location.pathname === '/' && <input
                    type="text"
                    className="header-search"
                    onChange={(e) => renderMoviesHandle(e)}
                    placeholder="Search..."
                />}

                <div className="header-icons">
                    <FaStar className="icon-star" onClick={() => history.push('/favourites')}/>
                    <FaUserFriends className="icon-friends" onClick={() => history.push('/communication')}/>
                    <img
                        className="header-avatar"
                        src={userIMG}
                        alt="avatar"
                        onClick={() => history.push('/profile')}
                    />
                </div>

            </div>
        </header>
    );
};

export default Header;