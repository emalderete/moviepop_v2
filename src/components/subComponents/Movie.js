import React from 'react';
import { Link } from 'react-router-dom';
import '../common/Components.css';

const Movie = (props) => {
    return (
        <div>
            <Link className='linkMovieContainer' to='/movies/details' key={props.index}>
                <div className='imgContainer'>
                    <img className='img' src={props.image} alt=''></img>
                </div>
                <h4 className='movieSlabTitle'>{props.name}</h4>
            </Link>
        </div>
    );
};

export default Movie;