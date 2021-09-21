import React from 'react';
import {useHistory} from 'react-router-dom';
import './Header.css'

const Header = () => {
    const history = useHistory();
    return (
        <div>
            <header className="header">
                <div className="header-container">
                    <h1 className="header-logo"
                        onClick={() => history.push('/')}
                    >MOVIELAND</h1>
                    <img
                        className="header-avatar"
                        src="https://www.unmc.edu/cihc/_images/faculty/default.jpg"
                        alt="avatar"
                        onClick={() => history.push('/profile')}
                    />
                </div>
            </header>
        </div>
    );
};

export default Header;