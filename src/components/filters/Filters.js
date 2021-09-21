import React, {useState} from 'react';
import './Filters.css';
import {ImArrowUp, ImArrowDown} from "react-icons/all";
import {useDispatch, useSelector} from "react-redux";
import {RENDER_MOVIES} from "../../store/moviesReducer";

const Filters = () => {
    const inputData = useSelector(state => state.inputReducer);
    const movies = useSelector(state => state.renderMoviesReducer[0]);
    const dispatch = useDispatch();

    const [asc,setAsc] = useState(true);

    console.log(movies)
    const sortMovies = (e) => {
        let sorted;
        switch (e.target.value) {
            case 'name': {
                sorted = movies.sort((a,b) => asc ? a.name.localeCompare(b.name) :
                    b.name.localeCompare(a.name));
                dispatch({type: RENDER_MOVIES, payload: sorted});
                break;
            }
            case 'rating': {
                sorted = movies.sort((a,b) => asc ? a.rating.average - b.rating.average :
                    b.rating.average - a.rating.average);
                dispatch({type: RENDER_MOVIES, payload: sorted});
                break;
            }
            case 'year': {
                sorted = movies.sort((a,b) => asc ? +a.premiered.split('-')[0] - b.premiered.split('-')[0] :
                    +b.premiered.split('-')[0] - a.premiered.split('-')[0]);
                dispatch({type: RENDER_MOVIES, payload: sorted});
                break;
            }
            case 'updated': {
                sorted = movies.sort((a,b) => asc ? a.updated - b.updated :
                    b.updated - a.updated);
                dispatch({type: RENDER_MOVIES, payload: sorted});
                break;
            }

        }
    }

    return (
        <div className="filters">
            <div className="count-info">
                <h5 className="count-info-title">Total Amount</h5>
                <div className="count-info-amount">
                    {movies?.filter(movie => movie.name.toLowerCase().includes(inputData.toLowerCase())).length}
                </div>
            </div>
            <div className="sorters-wrapper">
                <h5  className="sorters-title">Sort By</h5>
                <div className="sorters">
                    <div className="sort-direction" onClick={() => setAsc(!asc)}>
                        {asc ? <ImArrowUp /> : <ImArrowDown />}
                    </div>
                    <select name="sorters" id="sorters" onClick={(e) => sortMovies(e)}>
                        <option selected>Types of sort</option>
                        <option value="name">Name</option>
                        <option value="rating">Rating</option>
                        <option value="year">Year</option>
                        <option value="updated">Updated</option>
                    </select>
                </div>

            </div>
        </div>
    );
};

export default Filters;