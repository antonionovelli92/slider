import React, { useState, useEffect } from "react";
import Slide from "./Slide";
import data from "../data";

const Slider = () => {
  const [recensioni, setRecensioni] = useState(data);
  const [active, setActive] = useState(0);

  // Passa alla prossima slide
  const prossimaSlide = () => {
    setActive((prevValue) => (prevValue + 1) % recensioni.length);
  };

  // Passa alla slide precedente
  const precedenteSlide = () => {
    setActive((prevValue) => (prevValue - 1 + recensioni.length) % recensioni.length);
  };

  // Cambia automaticamente la recensione ogni 4 secondi
  useEffect(() => {
    const timer = setTimeout(() => {
      prossimaSlide();
    }, 4000);

    return () => clearTimeout(timer);
  }, [active]);


  return (
    <div className="container slider">
      <Slide {...recensioni[active]} />
      <div className="btn-group slider-btn-group">
        <button className="btn btn-slider prev-slide" onClick={precedenteSlide}>
          prev
        </button>
        <button className="btn btn-slider next-slide" onClick={prossimaSlide}>
          next
        </button>
      </div>
    </div>
  );
};

export default Slider;
