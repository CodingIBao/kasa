// KASA/react/src/components/Carousel.jsx

import { useState } from "react";
import CarouselUI from "./CarouselUI";

function Carousel({ logement }) {
  const pics = Array.isArray(logement?.pictures) && logement.pictures.length > 0 
  ? logement.pictures 
  : [];

  const [index, setIndex] = useState(0);

  if (pics.length === 0) return null;

  const next = () => {
    if (index < pics.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(pics.length - 1);
    }
  };

  return <CarouselUI pics={pics} index={index} next={next} prev={prev} />;
}

export default Carousel;