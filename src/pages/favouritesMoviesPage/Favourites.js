import React, {useEffect, useState} from 'react';
import Header from "../../components/header/Header";
import db from '../../firebase'
import {useSelector} from "react-redux";
import FavouriteMovieCard from "../../components/favouriteMovieCard/FavouriteMovieCard";
import firebase from "firebase/compat";

const Favourites = () => {
    const user = useSelector(state => state.userReducer.user);
    const [movies, setMovies] = useState();

    useEffect(() => {
        db.collection('users')
            .doc(user.uid).get()
            .then(snapShot => {
                setMovies(snapShot.data());
            })
    }, [user.uid])

    const removeFromFavorites = (movie) => {
        db.collection('users')
            .doc(user.uid)
            .update({
                favourites: firebase.firestore.FieldValue.arrayRemove(movie)
            }).then(() => {
            setMovies({
                ...movies,
                favourites: movies.favourites.filter(m => m.name !== movie.name)
            })
        });
    }

    return (
        <div className="favourites">
            <Header/>
            {
                movies && movies.favourites.map(movie => (
                    <FavouriteMovieCard movie={movie} removeFromFavorites={removeFromFavorites}/>
                ))
            }
        </div>
    );
};

export default Favourites;