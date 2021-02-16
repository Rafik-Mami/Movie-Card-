import React,{useState} from "react";
import movie8 from '../assets/movie8.jpg';
import {Modal,Form,Button} from 'react-bootstrap'

function MovieModal({ AddMovie }) {

  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const [show, setShow] = useState(false);
  const CloseModal = () => {
    setShow(false);
  };
  const ShowModal = () => {
    setShow(true);
  };
  return (
    <div>
      <span style={{cursor:'pointer'}}onClick={ShowModal}>[+]</span>
      <Modal show={show} onHide={CloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add new Movie</Modal.Title>
        </Modal.Header>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="write movie title.."
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>rating</Form.Label>
          <Form.Control
            type="number"
            placeholder="write movie rating.."
            onChange={(e) => setRating(e.target.value)}
          />
        </Form.Group>
        <br />

        <Modal.Footer>
          <Button variant="secondary" onClick={CloseModal}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              AddMovie({
                id: Math.random(),
                title,
                image: movie8,
                rate: rating,
              });
              CloseModal();
            }}
          >
            add new movie
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default MovieModal;
