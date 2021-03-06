import React from 'react';
import { Link } from 'react-router-dom';
import LogicsDetails from './LogicsDetails';
import '../common/Components.css';

const Movie = (props) => {
    return (
        <div>
            <Link to='/movies/details' key={props.index}>
                <div className='linkMovieContainer'>
                    <div className='imgContainer'>
                        <img className='img' src={props.image} alt=''></img>
                    </div>
                    <h4 className='movieSlabTitle'>{props.name}</h4>
                </div>
                <LogicsDetails name={props.name} imageLarge={props.imageLarge} lang={props.lang} genre={props.genre} premiered={props.premiered}></LogicsDetails>
            </Link>
        </div>
    );
};

export default Movie;