import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import FavouriteMovieCard from "../../components/favouriteMovieCard/FavouriteMovieCard";
import Header from "../../components/header/Header";
import {getUserFavourites, removeFavourite} from "../../services/usersService";

const Favourites = () => {
    const id = useSelector(state => state.user.uid);
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        getUserFavourites(id).then(favourites => setFavourites(favourites));
    }, [id])

    const removeFromFavorites = (movie) => {
        removeFavourite(movie, id).then(() => {
            setFavourites(favourites.filter(userMovie => userMovie.id !== movie.id))
        });
    }

    return (
        <div className="favourites">
            <Header/>
            {
                favourites && favourites.map(movie => (
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