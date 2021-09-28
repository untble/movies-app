import React from 'react';
import './FavouriteMovieCard.css';
import {FaFilm} from "react-icons/all";

const FavouriteMovieCard = ({movie, removeFromFavorites}) => {

    const createMarkup = () => {
        return {__html: movie.summary};
    }

    return (
        <div className="movie-card-container">
            <div className="movie-card">
                <img src={movie.image.medium} alt={movie.name} className="movie-card-image"/>
                <div className="movie-card-info">
                    <h2 className="movie-card-name">{movie.name}</h2>
                    <p className="movie-card-additional-info">
                        <span className="movie-card-runtime"><FaFilm className="icon"/> {movie.runtime} min.</span>
                        <span className="movie-card-year">{movie.premiered.split('-')[0]}</span>
                        <span className="movie-card-rating">IMDB {movie.rating.average}</span>
                    </p>
                    <p className="movie-card-summary" dangerouslySetInnerHTML={createMarkup()}/>
                    <button className="movie-card-btn-remove" onClick={() => removeFromFavorites(movie)}>
                        Remove from Favourites
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FavouriteMovieCard;