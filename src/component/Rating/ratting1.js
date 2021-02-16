import React from "react";
import { Rate } from "antd";
import './Rating.css'


function Rating({ movieRate }) {

   
  

  return (
    <span className="ratingContent">
     
      <Rate  disabled value={movieRate} />

    
    </span>
  );
}

export default Rating
