import React, {useEffect, useState} from 'react';
import {getUsers} from "../../services/usersService";
import UserCard from "../userCard/UserCard";
import './AllUsers.css';
import {useSelector} from "react-redux";


const AllUsers = () => {
    const [users, setUsers] = useState([]);
    const friends = useSelector(state => state.friends);
    const currentUserID = useSelector(state => state.userReducer.user.uid)

    useEffect(() => {
        getUsers().then(users => setUsers(users))
    }, [friends]);

    console.log(users);
    return (
        <div className="users">
            {
                users && users.map(user => {
                    return currentUserID !== user.id && <UserCard key={user.id} user={user}/>
                })
            }
        </div>
    );
};

export default AllUsers;