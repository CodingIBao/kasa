// KASA/react/src/components/Card.jsx

import { Link } from "react-router-dom";

function Card({id, cover, title}) {
  return (
    <article className="card">
      <Link to={`/logement/${id}`} className="card__link">
        <img
          src={cover}
          alt={title}
          className="card__img"
        />
        <h2 className="card__title">
          {title}
        </h2>
      </Link>
    </article>
  );
}

export default Card
