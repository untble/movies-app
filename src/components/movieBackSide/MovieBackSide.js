import React from 'react';
import './MovieBackSide.css';
import {FaFilm} from "react-icons/all";

const MovieBackSide = ({name, genres, runtime, premiered, rating, summary}) => {

    const truncate = (str,n) => {
        return str?.length > n ? str.substr(0, n -1) + "..." : str;
    }
    return (
        <div className="backside-movie">
            <h2 className="backside-title">{name}</h2>
            <h3 className="backside-genres">{genres.map((genre,i) => <span key={i}>{genre} </span>)}</h3>
            <p className="backside-info">
                <span className="backside-runtime"><FaFilm className="icon"/> {runtime} min.</span>
                <span className="backside-year">{premiered.split('-')[0]}</span>
                <span className="backside-rating">IMDB {rating.average}</span>
            </p>
            <p className="backside-summary" >
                {truncate(summary, 150)}
            </p>

        </div>
    );
};

export default MovieBackSide;