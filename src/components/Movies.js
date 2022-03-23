import React, { useState, useEffect } from 'react';
import './common/Components.css';
import Navbar from './common/Navbar';
import Movie from './subComponents/Movie';

const tvMaze = 'http://api.tvmaze.com/search/shows?q=star%20wars';

const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect( async ()=>{
        const response = await fetch(tvMaze);
        const dataJSON = await response.json();
        setMovies(dataJSON);

    }, []);

    return (
        <div>
            <Navbar></Navbar>
            <form className='formSearch'>
                <input className='search' placeholder='Buscar'/>
            </form>
            <div>
                <h6 className='movieTitle'>Películas</h6>
                <hr/>
                <div className='movieContainer'>
                    <div className='movieSlab'>

            </div>
                {movies.map((movie, index)=>{
                    return <Movie key={index} image={movie.show.image.medium} name={movie.show.name}></Movie>
                })}
                </div>
            </div>
        </div>
    );
};

export default Movies;