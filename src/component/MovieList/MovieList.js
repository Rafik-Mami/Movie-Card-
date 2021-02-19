import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './MovieList.css'
function MovieList({movies,name,rating,AddMovie}) {
    return (
        <div className='movielist'>
           {movies.filter(movie => 
           movie.title.toLowerCase().includes(name.toLowerCase()) && movie.rate >=rating ).
           
           map(movie =>
            <MovieCard movie={movie} addMovie={true}  key={movie.id}/>)}
            <MovieCard addMovie={false} AddMovie={AddMovie}  />
        </div>
    )
}

export default MovieList
