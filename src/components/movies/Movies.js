import React, {useEffect} from 'react';
import axios from "axios";
import Movie from "../movie/Movie";
import './Movies.css';
import {useDispatch, useSelector} from "react-redux";
import {RENDER_MOVIES} from "../../store/moviesReducer";

const URL = 'https://api.tvmaze.com/shows';

const Movies = () => {
    const inputData = useSelector(state => state.inputReducer);
    const movies = useSelector(state => state.renderMoviesReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(URL)
            .then(response => {
                dispatch({type: RENDER_MOVIES, payload: response.data})
            })
    }, [])


    return (
        <div className="movies">
            <div className="movies-container">
                {
                    movies?.map(movie => {
                        const {name, id, image} = movie;
                        return name.toLowerCase().includes(inputData.toLowerCase()) && (<Movie
                                key={id}
                                name={name}
                                image={image.medium}
                                {...movie}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Movies;