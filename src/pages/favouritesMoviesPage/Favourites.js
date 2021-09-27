import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import FavouriteMovieCard from "../../components/favouriteMovieCard/FavouriteMovieCard";
import Header from "../../components/header/Header";
import {getUser, removeFavourite} from "../../services/usersService";

const Favourites = () => {
    const id = useSelector(state => state.user.uid);
    const [user, setUser] = useState();

    useEffect(() => {
        getUser(id).then(user => setUser(user));
    }, [id])

    const removeFromFavorites = (movie) => {
        removeFavourite(movie, id).then(() => {
            setUser({
                ...user,
                favourites: user.favourites.filter(userMovie => userMovie.id !== movie.id)
            })
        });
    }

    return (
        <div className="favourites">
            <Header/>
            {
                user && user.favourites.map(movie => (
                    <FavouriteMovieCard
                        key={movie.name}
                        movie={movie}
                        removeFromFavorites={removeFromFavorites}/>
                ))
            }
        </div>
    );
};

export default Favourites;