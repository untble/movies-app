import React from 'react';
import './MovieBackSide.css';
import {FaFilm, GoPlus} from "react-icons/all";
import {useSelector} from "react-redux";
import {addFavourite} from "../../services/usersService";


const MovieBackSide = ({movie}) => {
    const img = movie.image;
    const {name, genres, runtime, premiered, rating, summary} = movie;

    const id = useSelector(state => state.user.uid);

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    const createMarkup = () => {
        return {__html: truncate(summary, 150)};
    }

    const addToFavourites = () => {
        addFavourite({...movie, image : img}, id).catch(err => console.log(err))
    }


    return (
        <div className="backside-movie">
            <h2 className="backside-title">{name}</h2>
            <h3 className="backside-genres">{genres.map((genre, i) => <span key={i}>{genre} </span>)}</h3>
            <p className="backside-info">
                <span className="backside-runtime"><FaFilm className="icon"/> {runtime} min.</span>
                <span className="backside-year">{premiered.split('-')[0]}</span>
                <span className="backside-rating">IMDB {rating.average}</span>
            </p>
            <p className="backside-summary" dangerouslySetInnerHTML={createMarkup()}/>
            <div className="backside-footer" onClick={() => addToFavourites()}>
                <GoPlus/>
                <span>Add to your favourites</span>
            </div>
        </div>
    );
};

export default MovieBackSide;