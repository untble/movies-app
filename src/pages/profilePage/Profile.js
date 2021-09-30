import React, {useState} from 'react';
import db, {auth} from "../../firebase";
import './Profile.css';
import Header from "../../components/header/Header";
import {useSelector} from "react-redux";

const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Profile = () => {
    const [edit, setEdit] = useState(false);
    const [email, setEmail] = useState(auth.currentUser.email);
    const id = useSelector(state => state.user.uid);

    const handleEmail = (e) => {
        e.preventDefault();

        setEdit(false);

        if (regex.test(email)) {
            auth.currentUser.updateEmail(email)
                .then(res => console.log(res))
                .catch(e => console.log(e))
        }

        db.collection('users').doc(id).update({
            email
        }).then(() => console.log('Email was updated successfully'))
            .catch(e => console.log(e))

    }

    return (
        <div className="profile">
            <Header/>
            <div className="profile-body">
                <h1>Edit Profile</h1>
                <div className="profile-info">
                    <img
                        src="https://www.unmc.edu/cihc/_images/faculty/default.jpg"
                        alt="avatar"
                    />
                    <div className="profile-details">
                        {!edit ? <h2 onClick={() => setEdit(true)}>{email}</h2> : (
                            <form>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <button type="submit" onClick={handleEmail}>Save</button>
                            </form>

                        )}
                        <div className="profile-plans-wrapper">
                            <h3>Plans</h3>
                            <div className="profile-plans">
                                <div className="profile-plan">
                                    <p>Premium<br/>4k + HDR</p>
                                    <button>Subscribe</button>
                                </div>
                                <div className="profile-plan">
                                    <p>Basic<br/>720p</p>
                                    <button>Subscribe</button>
                                </div>
                                <div className="profile-plan">
                                    <p>Standard<br/>1080p</p>
                                    <button>Subscribe</button>
                                </div>
                            </div>
                            <button
                                className="profile-signOut"
                                onClick={() => auth.signOut()}>
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Profile;