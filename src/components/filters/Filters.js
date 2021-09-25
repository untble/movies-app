import React, {useState} from 'react';
import './Filters.css';
import {ImArrowUp, ImArrowDown} from "react-icons/all";
import {useDispatch, useSelector} from "react-redux";
import {RENDER_MOVIES} from "../../store/moviesReducer";

const Filters = () => {
    const inputData = useSelector(state => state.inputReducer);
    const movies = useSelector(state => state.renderMoviesReducer);
    const dispatch = useDispatch();

    const [asc,setAsc] = useState(true);

    console.log(movies)
    const sortMovies = (e) => {
        const sorted = [...movies];
        switch (e.target.value) {
            case 'name': {
                sorted.sort((a,b) => asc ? a.name.localeCompare(b.name) :
                    b.name.localeCompare(a.name));
                break;
            }
            case 'rating': {
                sorted.sort((a,b) => asc ? a.rating.average - b.rating.average :
                    b.rating.average - a.rating.average);
                break;
            }
            case 'year': {
                sorted.sort((a,b) => asc ? +a.premiered.split('-')[0] - b.premiered.split('-')[0] :
                    +b.premiered.split('-')[0] - a.premiered.split('-')[0]);
                break;
            }
            case 'updated': {
                sorted.sort((a,b) => asc ? a.updated - b.updated :
                    b.updated - a.updated);
                break;
            }
        }
        dispatch({type: RENDER_MOVIES, payload: sorted});
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
                        <option defaultValue='Sorting'>Sorting</option>
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