import React from "react";
import { Card } from "react-bootstrap";
import Rating from "../Rating/ratting1";
import Modal from '../Modal'
import "./MovieCard.css";
import {Link} from 'react-router-dom'
function MovieCard({ movie,addMovie,AddMovie }) {
  return (
    <div className="card">
      {addMovie ?
       <Link to={`/movieApp/${movie.id}`} >
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.image} style={{ height: "280px" }} />
        <Card.Body>
         <Card.Title className="title">{movie.title}</Card.Title>
          <Card.Text>
            <Rating movieRate={movie.rate}/>
          </Card.Text>
        </Card.Body>
      </Card>   </Link>:
        <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title className="addcard">
            <Modal AddMovie={AddMovie}/>
          </Card.Title>
          <Card.Text>
          </Card.Text>
        </Card.Body>
      </Card>
   
      }
    </div>
  );
}

export default MovieCard;
