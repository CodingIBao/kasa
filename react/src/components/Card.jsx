// KASA/react/src/components/Card.jsx

function Card({cover, title}) {
  return (
    <article className="card">
      <img src={cover} alt={title} className="card-img" />
      <h2 className="card-title">{title}</h2>
    </article>
  );
}

export default Card
