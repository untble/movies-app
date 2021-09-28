import React from 'react';
import "./Movie.css"
import MovieBackSide from "../movieBackSide/MovieBackSide";

const Movie = ({movie}) => {
    return (
        <div className="movie">
            <img src={movie.image.medium} alt={movie.name} className="movie-img"/>
            <span className="movie-name">{movie.name}</span>
            <MovieBackSide
                movie={movie}
            />

        </div>
    );
};

export default Movie;