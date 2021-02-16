import React from "react";
import { Rate } from "antd";
import './Rating.css'

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

function Rating({ movieRate, setRating, rating }) {

   
  const handleChange = value => {
    setRating(value)
  };

  return (
    <span className="ratingContent">
        <Rate tooltips={desc} onChange={handleChange} value={rating} />
     

    </span>
  );
}

export default Rating
