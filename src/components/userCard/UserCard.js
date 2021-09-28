import React from 'react';
import userIMG from '../../assets/user_image.jpg';
import './UserCard.css';
import {useDispatch, useSelector} from "react-redux";
import {ADD_FRIEND, REMOVE_FRIEND} from "../../store/friendsReducer";
import {followUser, unfollowUser} from "../../services/usersService";

const UserCard = ({user, showRemoveBtn}) => {
    const currentUserID = useSelector(state => state.user.uid);
    const dispatch = useDispatch();

    const handleFollowUser = () => {
        followUser(user, currentUserID).catch(err => console.log(err))
        dispatch({type: ADD_FRIEND, payload: user})
    }

    const handleUnfollowUser = () => {
        unfollowUser(user, currentUserID).catch(err => console.log(err))
        dispatch({type: REMOVE_FRIEND, payload: user})
    }

    return (
        <div className="user-card">
            <div className="user-card-info-wrapper">
                <img src={userIMG} alt="img"/>
                <div className="user-card-info">
                    <h2>{user.username}</h2>
                    {showRemoveBtn ?
                        <button onClick={handleUnfollowUser}>Unfollow</button> :
                        <button onClick={handleFollowUser}>Follow</button>
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