// KASA/react/src/components/Card.jsx

function Card({cover, title}) {
  return (
    <article className="card">
      <img
        src={cover}
        alt={title}
        className="card__img" />
      <h2 className="card__title">{title}</h2>
    </article>
  );
}

export default Card
