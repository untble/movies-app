import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import UserCard from "../userCard/UserCard";
import {SET_FRIENDS} from "../../store/friendsReducer";
import {getUser} from "../../services/usersService";

const Friends = () => {
    const friends = useSelector(state => state.friends);
    const currentUserID = useSelector(state => state.user.uid);
    const dispatch = useDispatch();

    useEffect(() => {
        getUser(currentUserID).then(user => dispatch({type: SET_FRIENDS, payload: user.friends}))
    }, [currentUserID, dispatch])

    return (
        <div className="friends">
            {
                friends.map(friend => (
                    <UserCard
                        key={friend.id}
                        user={friend}
                        showRemoveBtn
                    />
                ))
            }
        </div>
    );
};

export default Friends;