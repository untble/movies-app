import React, {useState} from 'react';
import './Communication.css';
import Header from "../../components/header/Header";
import Friends from "../../components/friends/Friends";
import AllUsers from "../../components/allUsers/AllUsers";

const Communication = () => {
    const [showFriends, setShowFriends] = useState(false);
    const [showUsers, setShowUsers] = useState(false);

    return (
        <div className="communication">
            <Header/>
            <div className="switch-buttons" onClick={(() => setShowUsers(true))}>
                <button onClick={() => setShowFriends(false)}>All Users</button>
                <button onClick={() => setShowFriends(true)}>Your Friends</button>
            </div>
            {
                showUsers && <div className="communication-body">
                    {
                        showFriends ? <Friends/> : <AllUsers/>
                    }
                </div>
            }
        </div>
    );
};

export default Communication;