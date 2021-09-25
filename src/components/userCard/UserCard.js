import React from 'react';
import userIMG from '../../assets/user_image.jpg';
import './UserCard.css';
import firebase from "firebase/compat";
import db from "../../firebase";
import {useDispatch, useSelector} from "react-redux";
import {ADD_FRIEND, REMOVE_FRIEND} from "../../store/friendsReducer";

const UserCard = ({user, showRemoveBtn}) => {
    const currentUser = useSelector(state => state.userReducer.user);
    const friends = useSelector(state => state.friends);
    const dispatch = useDispatch();

    const followUser = () => {
        db.collection('users').doc(currentUser.uid).update({
            friends: firebase.firestore.FieldValue.arrayUnion(user)
        }).catch(err => console.log(err))

        dispatch({type: ADD_FRIEND, payload: user})
    }

    const unfollowUser = () => {
        db.collection('users').doc(currentUser.uid).update({
            friends: firebase.firestore.FieldValue.arrayRemove(user)
        }).catch(err => console.log(err))

        dispatch({type: REMOVE_FRIEND, payload: user})
    }


    return (
        <div className="user-card">
            <div className="user-card-info-wrapper">
                <img src={userIMG} alt="img"/>
                <div className="user-card-info">
                    <h2>{user.username}</h2>
                    {showRemoveBtn ?
                        <button onClick={unfollowUser}>Unfollow</button> :
                        <button onClick={followUser}>Follow</button>
                    }
                </div>
            </div>

            <div className="user-card-favourites">
                {user.favourites.map(favourite => (
                    <img
                        key={favourite.id}
                        src={favourite.image}
                        alt={favourite.name}
                    />
                ))}
            </div>
        </div>
    );
};

export default UserCard;