import React, {useState} from 'react';
import "./Movie.css"
import MovieBackSide from "../movieBackSide/MovieBackSide";

const Movie = ({name, image, ...movie}) => {
    const [isHovered, setIsHovered] = useState(false);
    // const [isClicked, setIsClicked] = useState(false);

    return (
        <div className="movie"
             // onClick={() => setIsClicked(!isClicked)}
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}>
            <img src={image.medium} alt={name} className="movie-img"/>
            <span className="movie-name">{name}</span>
            {isHovered && <MovieBackSide
                id={movie.id}
                name={name}
                genres={movie.genres}
                runtime={movie.runtime}
                premiered={movie.premiered}
                rating={movie.rating}
                summary={movie.summary}
                image={image.medium}
            />
            }
        </div>
    );
};

export default Movie;