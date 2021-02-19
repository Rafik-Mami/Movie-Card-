import React,{useState,useEffect} from 'react'
import Data from './MovieData'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
function Details({match}) {
    const [movie,setMovie] = useState({})
    console.log(match.params.id)
    useEffect(() => {
        setMovie(Data.find(mov=>mov.id === +match.params.id))
       
    }, [match.params.id])
    return (
        <div className='detail'>
           <h2 className='title-detail'>{movie.title}</h2> 
           <p> {movie.description}</p>
           <Link to={`${match.url}`}>{movie.url}</Link>
           <Link to='/movieApp'>    <Button variant="primary">Back to Movie List</Button>
</Link> 
        </div>
    )
}

export default Details
