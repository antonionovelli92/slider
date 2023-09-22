import React from "react";

const Slide = ({ autore, recensione, voto }) => {
  return (
    <div className="slide rounded-3 bg-dark">
      <div className="review text-white p-4">
        <h4>{autore}</h4>
        <p>{recensione}</p>
        <span>{voto}</span>
      </div>
    </div>
  );
};

export default Slide;
