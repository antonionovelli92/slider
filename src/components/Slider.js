import React, { useState, useEffect } from "react";
import Slide from "./Slide";
import data from "../data";

const Slider = () => {
  const [recensioni, setRecensioni] = useState(data);
  const [active, setActive] = useState(0);

  // ! Passa alla prossima slide
  const prossimaSlide = () => {
    // Aumenta l'indice della slide attiva di 1
    setActive(active + 1);

    // Se stiamo alla fine, torniamo alla prima slide
    if (active === recensioni.length - 1) {
      setActive(0);
    }
  };

  // ! Passa alla slide precedente
  const precedenteSlide = () => {
    // Riduci l'indice della slide attiva di 1
    setActive(active - 1);

    // Se siamo alla prima, passiamo all'ultima slide
    if (active === 0) {
      setActive(recensioni.length - 1);
    }
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
