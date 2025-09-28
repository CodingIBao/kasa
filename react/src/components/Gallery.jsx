// KASA/react/src/components/Gallery.jsx

import Card from "./Card";

function Gallery({accommodations}) {
  return (
    <section className="gallery">
      {accommodations.map(({id, title, cover}) => (
        <Card
          key={id}
          id={id}
          title={title}
          cover={cover}
        />
      ))}
    </section>
  );
}

export default Gallery