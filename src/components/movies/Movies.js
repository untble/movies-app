import React, {useEffect} from 'react';
import axios from "axios";
import Movie from "../movie/Movie";
import './Movies.css';
import {useDispatch, useSelector} from "react-redux";
import {RENDER_MOVIES} from "../../store/moviesReducer";

const URL = 'https://api.tvmaze.com/shows';

const Movies = () => {
    const inputData = useSelector(state => state.inputData);
    const movies = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(URL)
            .then(response => {
                dispatch({type: RENDER_MOVIES, payload: response.data})
            })
    }, [dispatch])


    return (
        <div className="movies">
            <div className="movies-container">
                {
                    movies?.map(movie => {
                        const {name, id} = movie;
                        return name.toLowerCase().includes(inputData.toLowerCase()) && (<Movie
                                key={id}
                                movie={movie}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Movies;