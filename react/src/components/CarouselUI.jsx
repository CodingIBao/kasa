// KASA/react/src/components/CarouselUI.jsx

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function CarouselUI({ pics, index, next, prev }) {
  return (
    <section className="carousel">
      <button onClick={prev}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
        
      <img src={pics[index]} alt={`Slide ${index + 1}`} />

      <button onClick={next}>
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </section>
  );
}

export default CarouselUI;