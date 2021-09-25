import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import UserCard from "../userCard/UserCard";
import db from "../../firebase";
import {SET_FRIENDS} from "../../store/friendsReducer";

const Friends = () => {
    const friends = useSelector(state => state.friends);
    const currentUserID = useSelector(state => state.userReducer.user.uid);
    const dispatch = useDispatch();

    useEffect(() => {
        const docRef = db.collection('users').doc(currentUserID).get();
        docRef.then(doc => dispatch({type: SET_FRIENDS, payload: doc.data().friends}))
    }, [currentUserID, dispatch])

    return (
        <div className="friends">
            {
                friends.map(friend => (
                    <UserCard
                        key={friend.id}
                        user={friend}
                        showRemoveBtn/>
                ))
            }
        </div>
    );
};

export default Friends;