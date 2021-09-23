import React from 'react';
import {useHistory} from 'react-router-dom';
import './Header.css'
import {FaStar, FaUserFriends} from "react-icons/all";

const Header = () => {
    const history = useHistory();
    return (
        <div>
            <header className="header">
                <div className="header-container">
                    <h1 className="header-logo"
                        onClick={() => history.push('/')}
                    >MOVIELAND</h1>
                    <div className="header-icons">
                        <FaStar className="icon-star" onClick={() => history.push('/favourites')}/>
                        <FaUserFriends className="icon-friends"/>
                        <img
                            className="header-avatar"
                            src="https://www.unmc.edu/cihc/_images/faculty/default.jpg"
                            alt="avatar"
                            onClick={() => history.push('/profile')}
                        />
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;