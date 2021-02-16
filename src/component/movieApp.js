import React,{useState} from 'react'
import NameFilter from './NameFilter/NameFilter'
import MovieList from '../component/MovieList/MovieList'
import Movies from './MovieData'
import Rating from './Rating/Rating'
function MovieApp() {
    const [name, setName] = useState("")
    const [movies, setMovies] = useState(Movies)
   const [rating, setRating] = useState(1)
   const AddMovie=(newMovie)=>{
       setMovies([...movies,newMovie])
   }
    return (
        <div>
            <div className='filter'>
                <NameFilter setName={setName}/>
            <Rating className='rater' setRating={setRating} rating={rating} />
            </div>
            
            <MovieList movies={movies} name={name} rating={rating} AddMovie={AddMovie}/>
        </div>
    )
}

export default MovieApp
